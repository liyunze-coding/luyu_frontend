import { FolderPlus, Upload } from "lucide-react";

type Props = {
  title?: string;
  subtitle?: string;
  onUpload?: () => void;
  onNewFolder?: () => void;
};

function DocumentsHeader({
  title = "Documents",
  subtitle = "Upload and manage files. Convert any document into podcast-ready audio in a click.",
  onUpload,
  onNewFolder,
}: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#121418] p-6 shadow">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">{title}</h1>
          <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={onNewFolder}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm hover:bg-white/5"
          >
            <FolderPlus className="h-4 w-4" />
            New Folder
          </button>
          <button
            onClick={onUpload}
            className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-4 py-2 text-sm font-medium text-white hover:bg-violet-600"
          >
            <Upload className="h-4 w-4" />
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default DocumentsHeader;
