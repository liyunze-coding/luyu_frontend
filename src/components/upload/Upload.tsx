import { useCallback, useMemo, useRef, useState } from "react";
import {
  FileAudio, FileText, Image as ImageIcon, RotateCw, Upload, X
} from "lucide-react";

export type QueueItem = {
  id: string;
  file: File;
  sizeText: string;
  totalText?: string;
  progress: number;            // 0–100
  status: "uploading" | "done" | "error";
};

export default function UploadView() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [queue, setQueue] = useState<Array<QueueItem>>([]);

  const accept = useMemo(
    () => [".pdf", ".doc", ".docx", ".png", ".jpg", ".jpeg", ".mp3"].join(","),
    []
  );

  const onBrowse = () => inputRef.current?.click();

  const addFiles = useCallback((files: FileList | null) => {
    if (!files) return;
    const items: Array<QueueItem> = Array.from(files).map((f) => ({
      id: crypto.randomUUID(),
      file: f,
      sizeText: formatSize(f.size),
      totalText: undefined,
      progress: 2 + Math.random() * 25,
      status: "uploading",
    }));
    setQueue((q) => [...q, ...items]);
    items.forEach(simulateUpload(setQueue));
  }, []);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    addFiles(e.dataTransfer.files);
  };

  const removeItem = (id: string) => setQueue((q) => q.filter((i) => i.id !== id));

  const retryItem = (id: string) => {
    setQueue((q) =>
      q.map((i) => (i.id === id ? { ...i, status: "uploading", progress: 5 } : i))
    );
    const item = queue.find((i) => i.id === id);
    if (item) simulateUpload(setQueue)({ ...item, progress: 5, status: "uploading" });
  };

  return (
    <div className="w-full px-6 py-10">
      {/* Dropzone */}
      <div
        onClick={onBrowse}
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        className="mx-auto max-w-3xl cursor-pointer rounded-3xl border-2 border-dashed border-violet-300/60 bg-white/60 p-10 text-center shadow-sm backdrop-blur transition hover:border-violet-400 dark:bg-white/5 dark:border-white/20"
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept={accept}
          className="hidden"
          onChange={(e) => addFiles(e.target.files)}
        />
        <Upload className="mx-auto mb-3 h-10 w-10 text-violet-500" />
        <p className="text-xl font-semibold text-violet-600 dark:text-violet-300">
          Import your files
        </p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Drag or click to upload
        </p>
      </div>

      {/* Queue */}
      <div className="mx-auto mt-6 flex max-w-3xl flex-col gap-4">
        {queue.map((item) => (
          <QueueCard
            key={item.id}
            item={item}
            onRemove={() => removeItem(item.id)}
            onRetry={() => retryItem(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- queue card ---------- */

function QueueCard({
  item,
  onRemove,
  onRetry,
}: {
  item: QueueItem;
  onRemove: () => void;
  onRetry: () => void;
}) {
  const ext = item.file.name.split(".").pop()?.toLowerCase();
  const type =
    ext === "pdf"
      ? "pdf"
      : ["png", "jpg", "jpeg"].includes(ext || "")
      ? "image"
      : ["mp3"].includes(ext || "")
      ? "audio"
      : "doc";
  const Icon = type === "image" ? ImageIcon : type === "audio" ? FileAudio : FileText;

  const barColor =
    item.status === "error"
      ? "bg-orange-500"
      : item.progress >= 100
      ? "bg-green-600"
      : "bg-violet-500";

  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_10px_25px_rgba(80,0,200,0.06)] ring-1 ring-black/5 dark:bg-[#111316] dark:ring-white/10">
      <div className="flex items-start gap-3">
        <div className="rounded-2xl bg-violet-100 p-3 text-violet-600 dark:bg-violet-500/20 dark:text-violet-300">
          <Icon className="h-6 w-6" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-base font-semibold">{item.file.name}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {item.totalText ? `${item.sizeText} / ${item.totalText}` : item.sizeText}
          </p>

          <div className="mt-2 h-2.5 w-full rounded-full bg-slate-200 dark:bg-white/10">
            <div
              className={`h-2.5 rounded-full ${barColor} transition-[width]`}
              style={{ width: `${Math.min(item.progress, 100)}%` }}
            />
          </div>

          <div className="mt-1 flex items-center justify-between text-xs">
            <span
              className={
                item.status === "error"
                  ? "text-orange-500"
                  : item.progress >= 100
                  ? "text-green-600"
                  : "text-slate-500 dark:text-slate-400"
              }
            >
              {item.status === "error"
                ? "Error"
                : item.progress >= 100
                ? "100%"
                : `${Math.floor(item.progress)}%`}
            </span>
          </div>
        </div>

        <div className="ml-2 flex items-center gap-2">
          {item.status === "error" && (
            <button
              onClick={onRetry}
              className="rounded-full p-2 text-violet-600 hover:bg-violet-50 dark:text-violet-300 dark:hover:bg-white/10"
              title="Retry"
            >
              <RotateCw className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={onRemove}
            className="rounded-full p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10"
            title="Remove"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */

function simulateUpload(setQueue: React.Dispatch<React.SetStateAction<Array<QueueItem>>>) {
  return (item: QueueItem) => {
    let p = item.progress;
    const fail = Math.random() < 0.12;
    const id = setInterval(() => {
      p = Math.min(100, p + Math.random() * 18);
      setQueue((q) =>
        q.map((it) =>
          it.id === item.id
            ? {
                ...it,
                progress: p,
                status: fail && p > 70 ? "error" : p >= 100 ? "done" : "uploading",
              }
            : it
        )
      );
      if (p >= 100 || (fail && p > 70)) clearInterval(id);
    }, 250);
  };
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(kb < 10 ? 1 : 0)} KB`;
  const mb = kb / 1024;
  return `${mb.toFixed(mb < 10 ? 1 : 0)} MB`;
}
