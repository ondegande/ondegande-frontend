import { useEffect, useRef } from "react";

export default function useClipboard() {
  const clipboardBtnRef = useRef(null);

  useEffect(() => {
    const ClipboardJS = require("clipboard");
    const clipboard = new ClipboardJS(clipboardBtnRef.current);

    clipboard.on("success", (e) => {
      alert("코스가 클립보드에 복사되었습니다.");
      e.clearSelection();
    });
    clipboard.on("error", () => alert("장소를 추가해주세요."));
    return () => clipboard.destroy();
  }, []);

  return { clipboardBtnRef };
}
