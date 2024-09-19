import React from "react";
import "@/styles.scss";
import Icon from "../Icon/Icons";
import { BreadcrumbItem, BreadcrumbProps } from "./IBreadcrumb";

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="tvr-comp-breadcrumb-container">
      <ol className="tvr-comp-breadcrumb-list">
        {items.map((item, index) => (
          <li key={index} className="tvr-comp-breadcrumb-item">
            {index > 0 && (
              <div className="tvr-comp-breadcrumb-icon">
                <Icon $name="rightArrow" $w="100%" />
              </div>
            )}
            {index === items.length - 1 ? (
              <span className="tvr-comp-breadcrumb-current">{item.label}</span>
            ) : (
              <a href={item.href || "#"} className="tvr-comp-breadcrumb-link">
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
