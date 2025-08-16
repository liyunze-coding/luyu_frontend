import { FolderPlus, Plus, Upload } from "lucide-react";

function EmptyState({
  onUpload,
  onNewFolder,
}: { onUpload?: () => void; onNewFolder?: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/10 bg-[#101215] p-12 text-center">
      <div className="rounded-2xl bg-white/5 p-4"><Plus className="h-6 w-6" /></div>
      <div>
        <p className="text-lg font-semibold">No documents yet</p>
        <p className="text-sm text-slate-400">Upload a PDF, DOCX, image or audio to get started.</p>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={onUpload} className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-4 py-2 text-sm font-medium text-white hover:bg-violet-600">
          <Upload className="h-4 w-4" /> Upload Files
        </button>
        <button onClick={onNewFolder} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm hover:bg-white/5">
          <FolderPlus className="h-4 w-4" /> New Folder
        </button>
      </div>
    </div>
  );
}

export default EmptyState;
