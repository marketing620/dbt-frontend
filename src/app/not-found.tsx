import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
      <h1 className="display-1 fw-bold text-primary mb-3">404</h1>
      <h2 className="display-6 fw-semibold text-dark mb-4">Page Not Found</h2>
      <p className="lead text-muted mb-5" style={{ maxWidth: "600px" }}>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="btn btn-primary px-4 py-2 rounded-pill fw-medium"
      >
        Go Back Home
      </Link>
    </div>
  );
}
