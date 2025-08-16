import { Filter, Grid3X3, List, Search, SortAsc } from "lucide-react";
import type { Doc } from "./types";

type Props = {
  query: string;
  onQuery: (v: string) => void;
  type: "all" | Doc["type"];
  onType: (t: "all" | Doc["type"]) => void;
  sort: "recent" | "name" | "size";
  onSort: (s: "recent" | "name" | "size") => void;
  view: "grid" | "list";
  onView: (v: "grid" | "list") => void;
};

function DocumentsToolbar({
  query, onQuery, type, onType, sort, onSort, view, onView,
}: Props) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-3">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
        <input
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder="Search documents…"
          className="w-72 rounded-xl border border-white/10 bg-black/20 pl-9 pr-3 py-2 text-sm outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-violet-500/40"
        />
      </div>

      <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-2 py-1.5 text-sm">
        <Filter className="h-4 w-4 text-slate-400" />
        <select
          value={type}
          onChange={(e) => onType(e.target.value as any)}
          className="bg-transparent outline-none"
        >
          <option value="all">All types</option>
          <option value="pdf">PDF</option>
          <option value="doc">Docs</option>
          <option value="image">Images</option>
          <option value="audio">Audio</option>
        </select>
      </div>

      <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-2 py-1.5 text-sm">
        <SortAsc className="h-4 w-4 text-slate-400" />
        <select
          value={sort}
          onChange={(e) => onSort(e.target.value as any)}
          className="bg-transparent outline-none"
        >
          <option value="recent">Most recent</option>
          <option value="name">Name (A–Z)</option>
          <option value="size">Size (big → small)</option>
        </select>
      </div>

      <div className="ml-auto inline-flex overflow-hidden rounded-xl border border-white/10">
        <button
          onClick={() => onView("grid")}
          className={`px-3 py-1.5 text-sm ${view === "grid" ? "bg-white/10" : "hover:bg-white/5"}`}
          title="Grid view"
        >
          <Grid3X3 className="h-4 w-4" />
        </button>
        <button
          onClick={() => onView("list")}
          className={`px-3 py-1.5 text-sm ${view === "list" ? "bg-white/10" : "hover:bg-white/5"}`}
          title="List view"
        >
          <List className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default DocumentsToolbar;
