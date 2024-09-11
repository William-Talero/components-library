import React from "react";
import "@/styles.scss";
interface BreadcrumbItem {
    label: string;
    href?: string;
}
interface BreadcrumbProps {
    items: BreadcrumbItem[];
}
declare const Breadcrumb: React.FC<BreadcrumbProps>;
export { Breadcrumb };
