export default function EssayFooter({ closing, signature, dateline }) {
  return (
    <footer className="closing">
      <p>{closing}</p>
      <div className="signature">
        <span>—{signature}</span>
        <small>{dateline}</small>
      </div>
    </footer>
  );
}
