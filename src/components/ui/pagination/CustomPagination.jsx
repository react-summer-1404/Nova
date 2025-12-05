import { Pagination } from "@heroui/react";
import { useEffect } from "react";

export default function CustomPagination({
  pageNumber,
  setPageNumber,
  totalCount,
  RowsOfPage,
}) {
  const totalPagination = Math.max(1, Math.ceil(totalCount / RowsOfPage) || 1);

  return (
    <Pagination
      className="mt-16"
      showControls
      radius="full"
      initialPage={pageNumber}
      onChange={(numberOfThePage) => {   
        setPageNumber(numberOfThePage);
      }}
      total={totalPagination}
    />
  );
}
