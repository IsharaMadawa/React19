import { useRef } from "react";
import CustomInputNew from "./custom-input-new";

function ContainerNew() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleClear = () => {
    inputRef.current.clear();
  };

  return (
    <div>
      <CustomInputNew ref={inputRef} placeholder="Enter text here" />
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default ContainerNew;
