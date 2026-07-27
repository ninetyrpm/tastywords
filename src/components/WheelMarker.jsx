export default function WheelMarker() {
  return (
    <div className="wheel-marker" aria-hidden="true">
      <svg viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="18" />
        <circle cx="24" cy="24" r="2.3" />
        {[0, 45, 90, 135].map((degrees) => (
          <line
            key={degrees}
            x1="24"
            y1="6"
            x2="24"
            y2="42"
            transform={`rotate(${degrees} 24 24)`}
          />
        ))}
      </svg>
    </div>
  );
}
