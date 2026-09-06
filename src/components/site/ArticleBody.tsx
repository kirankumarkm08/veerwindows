import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { Article } from "@/lib/sanity/posts";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="my-6 leading-8">{children}</p>,
    h2: ({ children }) => <h2 className="mb-5 mt-12 text-3xl">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-4 mt-8 text-2xl">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-primary pl-6 italic">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="my-6 list-disc space-y-3 pl-6">{children}</ul>,
    number: ({ children }) => <ol className="my-6 list-decimal space-y-3 pl-6">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => {
      const href: unknown = value?.href;
      if (
        typeof href !== "string" ||
        !/^(https?:\/\/|mailto:|tel:|\/(?!\/)|#)/i.test(href) ||
        /[\s\\]/.test(href) ||
        [...href].some((character) => character.charCodeAt(0) < 32)
      )
        return <>{children}</>;
      return (
        <a
          href={href}
          className="text-primary underline underline-offset-4"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
  },
};

export function ArticleBody({ body }: { body: Article["body"] }) {
  return (
    <div className="break-words text-lg text-muted-foreground">
      <PortableText value={body} components={components} />
    </div>
  );
}
