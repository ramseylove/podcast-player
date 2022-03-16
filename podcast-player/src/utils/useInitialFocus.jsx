import { useEffect } from "react";
const useInitialFocus = (ref, title) => {
  useEffect(() => {
    ref.current.focus();
    document.title = title;
  }, [ref, title]);
};
export default useInitialFocus;
