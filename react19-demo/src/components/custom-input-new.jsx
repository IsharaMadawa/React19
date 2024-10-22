import { useRef, useImperativeHandle } from "react";

const CustomInputNew = ({ ref, ...props }) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = "";
    },
  }));

  return <input ref={inputRef} {...props} />;
};

export default CustomInputNew;