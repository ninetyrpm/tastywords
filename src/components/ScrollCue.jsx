export default function ScrollCue() {
  return (
    <a className="scroll-indicator" href="#letter" aria-label="Read the letter">
      <span>Read</span>
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path
          d="M12 5v13M6.5 12.5 12 18l5.5-5.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
