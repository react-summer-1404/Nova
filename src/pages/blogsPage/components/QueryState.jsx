import { Spinner } from "@heroui/react";

export default function QueryState({
  isError,
  isLoading,
  errorText,
  loadingText,
}) {
  if (isLoading) {
    return (
      <div className="flex gap-4">
        <Spinner size="lg" />
        <span>{loadingText}</span>
      </div>
    );
  }

  if (isError) {
    return <span>{errorText}</span>;
  }

  return null;
}
