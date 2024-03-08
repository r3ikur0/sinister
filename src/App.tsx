// ImageAccordion.jsx
import { useState } from "react";
import "./styles.css";

export const ImageAccordion = ({ items }: {items: any}) => {
  const [active, setActive] = useState(0);
  const handleToggle = (index: any) => setActive(index);
  return (
    <section className="image-accordion">
      {items.map((item: any, index: any) => {
        const isActive = active === index ? "active" : "";
        return (
          <article
            key={item.image}
            className={"image-accordion-item ${isActive}"}
            onClick={() => handleToggle(index)}
          >
            <img src={item.image} />
            <div className="=content">
              <span className="material-symbol-outlined">photo_camera </span>
              <div>
                <h2>{item.header}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};
