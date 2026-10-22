import type { Metadata } from "next";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <div className="container" style={{ maxWidth: 760 }}>
      <h1 className="page-title">About Us</h1>
      <p>
        Cieru Studio was founded in 2021 by a group of friends working in
        design and programming. We saw many small businesses struggling to
        look good online, so we started helping them.
      </p>
      <p>
        Today we work with all kinds of clients, from coffee shops to clinics,
        with the same approach: simple, clear, and built around what they
        need.
      </p>
      <p>
        Our vision is to be a digital partner that local businesses can trust,
        through strong brand identities, fast websites, and open communication
        with our clients.
      </p>
    </div>
  );
}
