import React from "react";
import "@/styles.scss";
import Icon from "../Icon/Icons";
import { BreadcrumbItem, BreadcrumbProps } from "./IBreadcrumb";

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-container">
      <ol className="breadcrumb-list">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {index > 0 && (
              <div className="breadcrumb-icon">
                <Icon $name="rightArrow" $w="100%" />
              </div>
            )}
            {index === items.length - 1 ? (
              <span className="breadcrumb-current">{item.label}</span>
            ) : (
              <a href={item.href || "#"} className="breadcrumb-link">
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export { Breadcrumb };
