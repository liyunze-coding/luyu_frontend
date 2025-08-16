import { FileAudio, FileText, Image as ImageIcon } from "lucide-react";
import type { Doc } from "./types";

const Icon = ({ type }: { type: Doc["type"] }) => {
  const cls = "h-4 w-4";
  if (type === "image") return <ImageIcon className={cls} />;
  if (type === "audio") return <FileAudio className={cls} />;
  return <FileText className={cls} />;
};

const fmt = (kb: number) => (kb < 1024 ? `${kb} KB` : `${(kb / 1024).toFixed(1)} MB`);

function DocumentsList({ docs }: { docs: Array<Doc> }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#121418]">
      <div className="grid grid-cols-12 border-b border-white/10 px-4 py-2 text-xs uppercase tracking-wide text-slate-400">
        <div className="col-span-6">Name</div>
        <div className="col-span-2">Type</div>
        <div className="col-span-2">Size</div>
        <div className="col-span-2 text-right">Updated</div>
      </div>
      {docs.map((d) => (
        <div key={d.id} className="grid grid-cols-12 items-center px-4 py-3 text-sm hover:bg-white/5">
          <div className="col-span-6 flex min-w-0 items-center gap-2">
            <span className="rounded-lg bg-white/5 p-1.5"><Icon type={d.type} /></span>
            <span className="truncate">{d.name}</span>
          </div>
          <div className="col-span-2 capitalize">{d.type}</div>
          <div className="col-span-2">{fmt(d.sizeKB)}</div>
          <div className="col-span-2 text-right">{new Date(d.updatedAt).toLocaleDateString()}</div>
        </div>
      ))}
    </div>
  );
}

export default DocumentsList;
