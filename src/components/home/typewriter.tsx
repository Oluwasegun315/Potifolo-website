type TypewriterProps = {
  words: string[];
  className?: string;
};

/** Static role line — no typing loop (better performance) */
export function Typewriter({ words, className }: TypewriterProps) {
  return <span className={className}>{words[0]}</span>;
}
