import React, { useState } from "react";
import "./Card.css";

interface CardInfo {
  title: string;
  imgSrc: string;
  text: string;
}

export function Card({ title, imgSrc, text }: CardInfo): JSX.Element {
  const [background, selectColor] = useState<string>();

  const toggleColorHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const selectedColor = event.target.value;
    selectColor(selectedColor);
  };

  return (
    <div className="tttyt" style={{ background }}>
      <h1>{title}</h1>
      <img src={imgSrc} alt={`${title} img`} />
      <p>{text}</p>
      <select onChange={toggleColorHandler}>
        <option value="white">white</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="yellow">yellow</option>
      </select>
    </div>
  );
}
