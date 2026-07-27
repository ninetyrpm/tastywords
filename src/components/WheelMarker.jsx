export default function WheelMarker() {
  return (
    <div className="wheel-marker" aria-hidden="true">
      <svg viewBox="0 0 40 40" role="img">
        <circle cx="20" cy="20" r="16" />
        <circle cx="20" cy="20" r="2" />
        <path d="M20 4v32M4 20h32M8.7 8.7l22.6 22.6M31.3 8.7 8.7 31.3" />
      </svg>
    </div>
  );
}
