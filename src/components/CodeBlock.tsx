import { useState } from 'react';
import { motion } from 'framer-motion';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  isOutput?: boolean;
}

export default function CodeBlock({ code, filename, showLineNumbers = false, isOutput = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="code-block rounded-xl overflow-hidden my-4 group hover:border-accent-cyan/15 transition-all duration-500"
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]/80 hover:bg-[#ff5f57] transition-colors cursor-default" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]/80 hover:bg-[#febc2e] transition-colors cursor-default" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]/80 hover:bg-[#28c840] transition-colors cursor-default" />
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span>{filename || (isOutput ? 'output' : 'terminal')}</span>
          </div>
        </div>
        {!isOutput && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-accent-cyan transition-colors px-2 py-1 rounded-md hover:bg-white/5"
          >
            {copied ? (
              <>
                <svg className="w-3 h-3 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span className="text-accent-green">Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">Copy</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm leading-relaxed">
          {lines.map((line, i) => (
            <div key={i} className="flex">
              {showLineNumbers && (
                <span className="select-none text-gray-600 w-8 text-right mr-4 flex-shrink-0 text-xs leading-relaxed">
                  {i + 1}
                </span>
              )}
              <code className={`font-mono ${isOutput ? 'text-accent-green/90' : 'text-gray-300'}`}>
                {!isOutput && line.startsWith('$') ? (
                  <>
                    <span className="text-accent-cyan">$</span>
                    <span className="text-gray-200">{line.slice(1)}</span>
                  </>
                ) : isOutput ? (
                  <span>{line}</span>
                ) : (
                  highlightCode(line, showLineNumbers)
                )}
              </code>
            </div>
          ))}
        </pre>
      </div>
    </motion.div>
  );
}

function highlightCode(line: string, isC: boolean): React.ReactNode {
  if (isC) {
    return highlightC(line);
  }
  return highlightBash(line);
}

function highlightC(line: string): React.ReactNode {
  // Comments
  if (line.trimStart().startsWith('/*') || line.trimStart().startsWith('*') || line.trimStart().startsWith('//')) {
    return <span className="text-gray-500 italic">{line}</span>;
  }

  // Preprocessor
  if (line.trimStart().startsWith('#')) {
    return <span className="text-accent-purple">{line}</span>;
  }

  // Keywords
  const cKeywords = ['int', 'char', 'void', 'return', 'if', 'else', 'for', 'while', 'exit', 'define'];
  const types = ['key_t', 'NULL', 'IPC_CREAT', 'IPC_RMID', 'SHMSIZE'];
  const funcs = ['shmget', 'shmat', 'shmdt', 'shmctl', 'printf', 'perror', 'memset', 'putchar', 'main'];

  const tokens = line.split(/(\b|\s+|[{}();,*&=<>!+\-\[\]])/);
  return (
    <>
      {tokens.map((token, i) => {
        if (cKeywords.includes(token)) {
          return <span key={i} className="text-accent-rose font-medium">{token}</span>;
        }
        if (types.includes(token)) {
          return <span key={i} className="text-accent-amber">{token}</span>;
        }
        if (funcs.includes(token)) {
          return <span key={i} className="text-accent-blue font-medium">{token}</span>;
        }
        if (token.match(/^".*"$/) || token.match(/^'.*'$/)) {
          return <span key={i} className="text-accent-green">{token}</span>;
        }
        if (token.match(/^\d+$/)) {
          return <span key={i} className="text-accent-amber">{token}</span>;
        }
        return <span key={i}>{token}</span>;
      })}
    </>
  );
}

function highlightBash(line: string): React.ReactNode {
  const keywords = ['sudo', 'apt', 'install', 'gcc', 'nano', 'cd', 'ls', 'cat', 'echo', 'chmod'];
  const parts: React.ReactNode[] = [];

  const tokens = line.split(/(\s+)/);
  tokens.forEach((token, i) => {
    if (keywords.includes(token)) {
      parts.push(<span key={i} className="text-accent-purple font-medium">{token}</span>);
    } else if (token.startsWith('-')) {
      parts.push(<span key={i} className="text-accent-amber">{token}</span>);
    } else if (token.startsWith('./')) {
      parts.push(<span key={i} className="text-accent-green font-medium">{token}</span>);
    } else if (token.endsWith('.c') || token.endsWith('.o')) {
      parts.push(<span key={i} className="text-accent-cyan">{token}</span>);
    } else if (token.match(/^["'].*["']$/)) {
      parts.push(<span key={i} className="text-accent-green">{token}</span>);
    } else {
      parts.push(<span key={i}>{token}</span>);
    }
  });

  return <>{parts}</>;
}
