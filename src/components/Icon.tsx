import type { IconName } from '../data/portfolio';

const paths: Record<IconName, string> = {
  api: 'M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16',
  plug: 'M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0V8ZM12 17v4',
  shield: 'M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.500 7-10V6l-7-3ZM9 12l2 2 4-4',
  layers: 'm12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 17.500l9 5 9-5',
  brain: 'M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V4a3 3 0 0 0-3 0ZM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1',
  code: 'M4 5h16v14H4zM8 10l-2 2 2 2M16 10l2 2-2 2M13 9l-2 6',
  tools: 'M14 6a4 4 0 0 0 5 5l-9 9a2.100 2.100 0 0 1-3-3l9-9a4 4 0 0 0-2-2ZM5 5l3 3',
};

export default function Icon({ name }: { name: IconName }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d={paths[name]} />
    </svg>
  );
}
