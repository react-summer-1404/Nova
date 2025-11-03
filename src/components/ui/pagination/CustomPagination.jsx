import { Pagination } from "@heroui/react";

export default function CustomPagination({ pageNumber, setPageNumber,totalCount,RowsOfPage }) {
  
  const totalPagination = Math.max(1, Math.ceil(totalCount / RowsOfPage || 1));


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
