import { useEffect, useRef } from "react";
import AppLayout from "../AppLayout";

const Focus = () => {
  const inputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  return (
    <AppLayout title="Focus - useRef">
      <input ref={inputElement} type="text" />
    </AppLayout>
  );
};

export default Focus;
