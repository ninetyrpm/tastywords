export default function EssayClosing({ essay }) {
  return (
    <footer className="closing">
      <p>{essay.closing}</p>
      <div className="signature">
        <span>—{essay.signature}</span>
        <small>{essay.dateline}</small>
      </div>
    </footer>
  );
}
