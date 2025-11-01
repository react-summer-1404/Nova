import React from "react";
import { Link } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";
const BreadcrumbsComponent = ({ BreadcrumbsItems }) => {
  return (
    <div className="flex items-center gap-2">
      {BreadcrumbsItems.map((bItem, index) => {
        const isLast = index === BreadcrumbsItems.length - 1;
        return (
          <React.Fragment key={index}>
            <Link
              to={bItem.to}
              style={
                isLast
                  ? { color: "var(--color-dark-purple)" }
                  : { color: "var(--color-text-gray)" }
              }
            >
              {bItem.label}
            </Link>
          </React.Fragment>
        );
      })}
      
      <span>
        <GoChevronLeft />
      </span>

      <Link to={"/"} style={{ color: "var(--color-text-gray)" }}>
        صفحه اصلی
      </Link>
    </div>
  );
};

export default BreadcrumbsComponent;
