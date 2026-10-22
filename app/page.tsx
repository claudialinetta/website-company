import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container text-center">
      <Image
        src="/logo.png"
        alt="Cieru Studio logo"
        width={260}
        height={130}
        priority
        className="mb-4"
      />
      <h1 className="display-5 fw-bold" style={{ color: "var(--accent)" }}>
        Welcome to Cieru Studio
      </h1>
      <p className="text-muted mx-auto mt-3 mb-4" style={{ maxWidth: 560 }}>
        We are a creative digital agency in Jakarta, working on branding,
        websites, social media, and video for growing businesses.
      </p>
      <Link href="/services" className="btn btn-pill me-2">
        Our Services
      </Link>
      <Link href="/contact" className="btn btn-fill">
        Contact Us
      </Link>
    </div>
  );
}
