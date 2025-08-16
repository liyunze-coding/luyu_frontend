// src/components/documents/DocumentsGrid.tsx
import { 
  Download,
  Eye,
  FileAudio,
  FileText,
  Image as ImageIcon,
  MoreVertical,
  Trash2
} from "lucide-react";
import type { Doc } from "./types";

const Icon = ({ type }: { type: Doc["type"] }) => {
  const cls = "h-5 w-5";
  if (type === "image") return <ImageIcon className={cls} />;
  if (type === "audio") return <FileAudio className={cls} />;
  return <FileText className={cls} />;
};

const fmt = (kb: number) => (kb < 1024 ? `${kb} KB` : `${(kb / 1024).toFixed(1)} MB`);

type Props = {
  docs: Array<Doc>;
  onPreview?: (id: string) => void;
  onDownload?: (id: string) => void;
  onDelete?: (id: string) => void;
};

function DocumentsGrid({ docs, onPreview, onDownload, onDelete }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {docs.map((d) => (
        <div
          key={d.id}
          className="group rounded-2xl border border-white/10 bg-[#121418] p-4 transition hover:border-white/20"
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex min-w-0 items-center gap-2">
              <div className="rounded-lg bg-white/5 p-2">
                <Icon type={d.type} />
              </div>
              <div className="min-w-0">
                <p className="truncate font-medium">{d.name}</p>
                <p className="text-xs text-slate-400">
                  {fmt(d.sizeKB)} · {new Date(d.updatedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <button className="rounded-lg p-1.5 text-slate-400 hover:bg-white/5 hover:text-slate-100">
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <button
              onClick={() => onPreview?.(d.id)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-1.5 text-xs hover:bg-white/5"
            >
              <Eye className="h-4 w-4" /> Preview
            </button>
            <button
              onClick={() => onDownload?.(d.id)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-1.5 text-xs hover:bg-white/5"
            >
              <Download className="h-4 w-4" /> Download
            </button>
            <button
              onClick={() => onDelete?.(d.id)}
              className="inline-flex items-center gap-2 rounded-xl border border-red-500/30 px-3 py-1.5 text-xs text-red-300 hover:bg-red-500/10"
            >
              <Trash2 className="h-4 w-4" /> Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DocumentsGrid;
