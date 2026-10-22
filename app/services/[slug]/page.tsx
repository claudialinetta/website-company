import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

// generate a page for each slug at build time
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return { title: service ? service.title : "Service" };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <div className="container" style={{ maxWidth: 700 }}>
      <h1 className="page-title">{service.title}</h1>
      <p className="text-center">{service.description}</p>
      <div className="card p-4 my-4">
        <h5 className="fw-bold" style={{ color: "var(--accent)" }}>
          What you get
        </h5>
        <ul className="mb-0">
          {service.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="text-center">
        <Link href="/services" className="btn btn-pill me-2">
          Back
        </Link>
        <Link href="/contact" className="btn btn-fill">
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
