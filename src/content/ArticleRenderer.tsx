"use client";

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Renders a blog article from the block model in src/content/articleBlocks.json.
 *
 * Block types: lead, p, h2, h3, ul, ol, table, note, faq, sources
 * Inline token: { s: text, b?: bold, h?: href }
 *
 * House style matches the rest of the site:
 *   lead   text-2xl font-black uppercase, emerald left rule
 *   h2     text-3xl font-black uppercase, top border
 *   h3     text-xl font-bold emerald, uppercase
 *   table  zinc-950 header, zebra rows, horizontal scroll on small screens
 */

export interface Tok { s: string; b?: boolean; h?: string }
export interface Block {
  t: string;
  x?: Tok[];
  items?: any[];
  head?: string[];
  rows?: Tok[][][];
}

const Inline: React.FC<{ x?: Tok[] }> = ({ x }) => (
  <>
    {(x || []).map((tok, i) => {
      if (tok.h) {
        const internal = tok.h.startsWith('/');
        return internal ? (
          <Link
            key={i}
            to={tok.h}
            className="text-emerald-700 underline underline-offset-4 hover:text-emerald-900"
          >
            {tok.s}
          </Link>
        ) : (
          <a
            key={i}
            href={tok.h}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 underline underline-offset-4 hover:text-emerald-900"
          >
            {tok.s}
          </a>
        );
      }
      if (tok.b) return <strong key={i} className="text-zinc-950 font-black">{tok.s}</strong>;
      return <React.Fragment key={i}>{tok.s}</React.Fragment>;
    })}
  </>
);

const ArticleRenderer: React.FC<{ blocks: Block[] }> = ({ blocks }) => (
  <div className="space-y-8 mono text-lg leading-relaxed text-zinc-800">
    {blocks.map((b, i) => {
      switch (b.t) {
        case 'lead':
          return (
            <p
              key={i}
              className="text-xl md:text-2xl text-zinc-950 font-black uppercase tracking-tight border-l-4 border-emerald-600 pl-6 py-3 bg-emerald-50"
            >
              <Inline x={b.x} />
            </p>
          );

        case 'h2':
          return (
            <h2
              key={i}
              className="text-2xl md:text-3xl font-black text-zinc-950 uppercase tracking-tight pt-8 border-t border-zinc-200"
            >
              <Inline x={b.x} />
            </h2>
          );

        case 'h3':
          return (
            <h3 key={i} className="text-lg md:text-xl font-bold text-emerald-800 uppercase tracking-wider pt-2">
              <Inline x={b.x} />
            </h3>
          );

        case 'p':
          return (
            <p key={i}>
              <Inline x={b.x} />
            </p>
          );

        case 'note':
          return (
            <p key={i} className="text-sm text-zinc-500 border-l-2 border-zinc-300 pl-4">
              <Inline x={b.x} />
            </p>
          );

        case 'ul':
          return (
            <ul key={i} className="list-disc pl-8 space-y-2 text-base text-zinc-700">
              {(b.items as Tok[][]).map((it, j) => (
                <li key={j}><Inline x={it} /></li>
              ))}
            </ul>
          );

        case 'ol':
          return (
            <ol key={i} className="list-decimal pl-8 space-y-2 text-base text-zinc-700">
              {(b.items as Tok[][]).map((it, j) => (
                <li key={j}><Inline x={it} /></li>
              ))}
            </ol>
          );

        case 'table':
          return (
            <div key={i} className="overflow-x-auto my-8 border border-zinc-200 shadow-sm">
              <table className="w-full mono text-sm text-left">
                <thead className="bg-zinc-950 text-white">
                  <tr>
                    {(b.head || []).map((h, j) => (
                      <th
                        key={j}
                        className="px-4 py-3 font-black uppercase tracking-wider text-xs whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(b.rows || []).map((row, r) => (
                    <tr key={r} className={r % 2 ? 'bg-zinc-50' : 'bg-white'}>
                      {row.map((cell, c) => (
                        <td
                          key={c}
                          className={
                            c === 0
                              ? 'px-4 py-3 border-t border-zinc-200 font-bold text-zinc-950 align-top'
                              : 'px-4 py-3 border-t border-zinc-200 text-zinc-700 align-top'
                          }
                        >
                          <Inline x={cell} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );

        case 'faq':
          return (
            <div key={i} className="pt-8 border-t border-zinc-200">
              <h2 className="text-2xl md:text-3xl font-black text-zinc-950 uppercase tracking-tight mb-8">
                Frequently asked questions
              </h2>
              <div className="space-y-px bg-zinc-200 border border-zinc-200">
                {(b.items as { q: string; a: string }[]).map((f, j) => (
                  <div key={j} className="bg-white p-6">
                    <h3 className="text-base md:text-lg font-black text-zinc-950 mb-3">{f.q}</h3>
                    <p className="text-base text-zinc-700 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          );

        case 'sources':
          return (
            <div key={i} className="pt-8 border-t border-zinc-200">
              <p className="mono text-xs uppercase tracking-widest text-emerald-700 font-black mb-4">
                Sources
              </p>
              <ul className="space-y-2 text-sm text-zinc-600">
                {(b.items as { label: string; url: string; note: string }[]).map((s, j) => (
                  <li key={j}>
                    {s.url ? (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 underline underline-offset-4 hover:text-emerald-900"
                      >
                        {s.label}
                      </a>
                    ) : (
                      s.label
                    )}
                    {s.note ? <span className="text-zinc-500">, {s.note}</span> : null}
                  </li>
                ))}
              </ul>
            </div>
          );

        default:
          return null;
      }
    })}
  </div>
);

export default ArticleRenderer;
