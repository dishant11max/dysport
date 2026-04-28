"use client";

import { useState, useEffect } from "react";

interface ShareBarProps {
  title: string;
  slug: string;
}

export default function ShareBar({ title, slug }: ShareBarProps) {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    // Build the canonical URL client-side so it works on any domain
    const origin = window.location.origin;
    setUrl(`${origin}/notes/${slug}`);
  }, [slug]);

  const handleCopy = async () => {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const tweetText = encodeURIComponent(`"${title}" — a note worth reading`);
  const tweetUrl = encodeURIComponent(url);
  const twitterHref = `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`;

  return (
    <div className="share-bar">
      <span className="share-bar-label">Share</span>

      <button
        className={`share-btn share-btn-copy ${copied ? "share-btn-copied" : ""}`}
        onClick={handleCopy}
        aria-label={copied ? "Link copied" : "Copy link"}
        title="Copy link"
      >
        {copied ? (
          <>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Copied
          </>
        ) : (
          <>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            Copy link
          </>
        )}
      </button>

      <a
        href={twitterHref}
        target="_blank"
        rel="noopener noreferrer"
        className="share-btn share-btn-x"
        aria-label="Share on X (Twitter)"
        title="Share on X"
      >
        {/* X / Twitter icon */}
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.261 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
        </svg>
        Share on X
      </a>
    </div>
  );
}
