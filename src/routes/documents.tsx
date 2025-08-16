import { useMemo, useState } from "react";
import { createFileRoute } from '@tanstack/react-router'
import type { Doc } from "@/components/documents/types";
import DocumentsHeader from "@/components/documents/DocumentsHeader.tsx";
import DocumentsToolbar from "@/components/documents/DocumentsToolbar";
import DocumentsGrid from "@/components/documents/DocumentsGrid";
import DocumentsList from "@/components/documents/DocumentsList";
import EmptyState from "@/components/documents/EmptyState";



const DEMO_DOCS: Array<Doc> = [
  { id: "1", name: "Cloud_Computing_Notes.pdf", type: "pdf", sizeKB: 932,  updatedAt: "2025-08-10T10:00:00Z" },
  { id: "2", name: "SIT233_Assignment.docx",   type: "doc", sizeKB: 487,  updatedAt: "2025-08-12T03:10:00Z" },
  { id: "3", name: "wireframe-home.png",       type: "image", sizeKB: 1204, updatedAt: "2025-08-14T08:35:00Z" },
  { id: "4", name: "reading-list.pdf",         type: "pdf", sizeKB: 211,  updatedAt: "2025-08-13T21:00:00Z" },
  { id: "5", name: "chapter-1-draft.docx",     type: "doc", sizeKB: 92,   updatedAt: "2025-08-16T01:15:00Z" },
  { id: "6", name: "demo-voiceover.mp3",       type: "audio", sizeKB: 5340, updatedAt: "2025-08-09T11:00:00Z" },
];


export const Route = createFileRoute('/documents')({
  component: DocumentsPage,
})

function DocumentsPage() {
  const [query, setQuery] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [type, setType] = useState<"all" | Doc["type"]>("all");
  const [sort, setSort] = useState<"recent" | "name" | "size">("recent");

  const docs = useMemo(() => {
    let list = DEMO_DOCS.slice();
    if (type !== "all") list = list.filter((d) => d.type === type);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((d) => d.name.toLowerCase().includes(q));
    }
    switch (sort) {
      case "recent": list.sort((a, b) => +new Date(b.updatedAt) - +new Date(a.updatedAt)); break;
      case "name":   list.sort((a, b) => a.name.localeCompare(b.name)); break;
      case "size":   list.sort((a, b) => b.sizeKB - a.sizeKB); break;
    }
    return list;
  }, [query, type, sort]);

  const handleUpload = () => console.log("upload clicked");
  const handleNewFolder = () => console.log("new folder clicked");

  return (
    <div className="w-full px-6 py-8">
      <DocumentsHeader onUpload={handleUpload} onNewFolder={handleNewFolder} />
      <DocumentsToolbar
        query={query} onQuery={setQuery}
        type={type} onType={setType}
        sort={sort} onSort={setSort}
        view={view} onView={setView}
      />
      <div className="mt-6">
        {docs.length === 0 ? (
          <EmptyState onUpload={handleUpload} onNewFolder={handleNewFolder} />
        ) : view === "grid" ? (
          <DocumentsGrid docs={docs} />
        ) : (
          <DocumentsList docs={docs} />
        )}
      </div>
    </div>
  );
}


