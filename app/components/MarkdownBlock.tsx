import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function MarkdownBlock({ children, statement = false }: { children: string; statement?: boolean }) {
  return (
    <div className={statement ? "markdown markdown--statement" : "markdown"}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}
