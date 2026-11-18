import { useCallback, useRef, useState } from "react";
import { pdf } from "@react-pdf/renderer";

export default function useCVDownload(documentNode, fileName) {
  const [isGenerating, setIsGenerating] = useState(false);
  const isGeneratingRef = useRef(false);

  const download = useCallback(async () => {
    // Prevent two buttons or rapid clicks from initializing Yoga concurrently.
    if (isGeneratingRef.current) return;
    isGeneratingRef.current = true;
    setIsGenerating(true);

    let objectUrl;
    try {
      const blob = await pdf(documentNode).toBlob();
      objectUrl = URL.createObjectURL(blob);
      const link = window.document.createElement("a");
      link.href = objectUrl;
      link.download = fileName;
      link.style.display = "none";
      window.document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("La génération du CV a échoué.", error);
    } finally {
      if (objectUrl) window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1500);
      isGeneratingRef.current = false;
      setIsGenerating(false);
    }
  }, [documentNode, fileName]);

  return { download, isGenerating };
}
