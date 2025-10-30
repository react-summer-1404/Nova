import { Pagination } from "@heroui/react";

export default function CustomPagination({ pageNumber, setPageNumber,totalCount,RowsOfPage }) {
  
  const totalPagination = Math.ceil(totalCount/RowsOfPage)

  return (
    <Pagination
      showControls
      radius="full"
      initialPage={pageNumber}
      onChange={setPageNumber}
      total={totalPagination}
      
    />
  );
}
