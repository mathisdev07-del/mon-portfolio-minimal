export function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background: `
          radial-gradient(circle at 16% 22%, rgba(99, 102, 241, 0.14) 0%, rgba(99, 102, 241, 0) 42%),
          radial-gradient(circle at 82% 78%, rgba(168, 85, 247, 0.11) 0%, rgba(168, 85, 247, 0) 38%),
          radial-gradient(circle at 78% 16%, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0) 33%),
          linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #f8fafc 100%)
        `,
      }}
    />
  );
}
