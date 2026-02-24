import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownStoryProps {
  content: string;
}

const MarkdownStory = ({ content }: MarkdownStoryProps) => (
  <div className="space-y-4 text-muted-foreground leading-relaxed">
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children }) => <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">{children}</h3>,
        h3: ({ children }) => <h4 className="font-display text-lg font-semibold text-foreground mt-6 mb-2">{children}</h4>,
        p: ({ children }) => <p className="text-muted-foreground leading-relaxed">{children}</p>,
        ul: ({ children }) => <ul className="list-disc pl-6 space-y-1">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pl-6 space-y-1">{children}</ol>,
        li: ({ children }) => <li className="text-muted-foreground">{children}</li>,
        a: ({ children, href }) => (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">
            {children}
          </a>
        ),
        strong: ({ children }) => <strong className="text-foreground font-semibold">{children}</strong>,
        code: ({ children }) => <code className="font-mono text-xs bg-muted border border-border px-1.5 py-0.5 rounded">{children}</code>,
      }}
    >
      {content}
    </ReactMarkdown>
  </div>
);

export default MarkdownStory;
