import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const element = document.getElementById(hash.slice(1));
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash, pathname]);

  return null;
}