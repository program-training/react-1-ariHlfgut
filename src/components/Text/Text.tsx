import { useState } from "react";
import "./Text.css";

export function Text(): JSX.Element {
  const [isTextVisible, setIsTextVisible] = useState<boolean>(false);
  const toggleTextHandler = (): void => {
    setIsTextVisible(!isTextVisible);
  };
  return (
    <div>
      <button onClick={toggleTextHandler}>Toggle Text</button>
      {isTextVisible ? <div> 'Text' </div> : null}
    </div>
  );
}
