import { Pagination } from "@heroui/react";

export default function CustomPagination({ pageNumber, setPageNumber, total }) {
  return (
    <Pagination
      showControls
      radius="full"
      initialPage={pageNumber}
      onChange={setPageNumber}
      total={total}
    />
  );
}
