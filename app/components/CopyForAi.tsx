"use client";

import { useState } from "react";

export function CopyForAi({ content }: { content: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button className="button button--outline button--small" type="button" onClick={copy}>
      {copied ? "Copied" : "Copy for AI"}
    </button>
  );
}
