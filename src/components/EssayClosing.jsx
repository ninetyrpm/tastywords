export default function EssayClosing({ essay }) {
  return (
    <footer className="closing">
      <p>{essay.closing}</p>
      <div className="signature">
        <span>—{essay.signature}</span>
        <small>{essay.dateline}</small>
        <a
          className="signature-instagram"
          href="https://www.instagram.com/ninetyrpm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram · @ninetyrpm
        </a>
      </div>
    </footer>
  );
}
