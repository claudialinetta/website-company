import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container text-center">
      <h1 className="fw-bold" style={{ color: "var(--accent)" }}>404</h1>
      <p className="text-muted">The page you are looking for could not be found.</p>
      <Link href="/" className="btn btn-fill">Back to Home</Link>
    </div>
  );
}
