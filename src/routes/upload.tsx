import { createFileRoute } from "@tanstack/react-router";
import UploadView from "@/components/upload/Upload";

export const Route = createFileRoute("/upload")({
  component: UploadPage,
});

function UploadPage() {
  return <UploadView />;
}
