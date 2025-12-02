import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { Link, useLocation } from "react-router-dom";
import { convertSlugToTitle } from "../../../core/services/slugService";

export default function BreadcrumbCustom() {
  const location = useLocation();
  const pathName = location.pathname.split("/").filter((x) => x);
  // console.log(location)

  return (
    <Breadcrumbs>
      <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
      {pathName.map((value, index) => {
        const lastItem = index === pathName.length - 1;
        const to = `/${pathName.slice(0, index + 1).join("/")}`;
        const title = convertSlugToTitle(value);

        return (
          <BreadcrumbItem key={to}>
            {lastItem ? <span>{title}</span> : <Link to={to}>{title}</Link>}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
}
