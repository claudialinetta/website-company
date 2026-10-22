import Link from "next/link";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="card h-100 p-4 d-flex flex-column">
      <h5 className="fw-bold" style={{ color: "var(--accent)" }}>
        {service.title}
      </h5>
      <p className="text-muted">{service.short}</p>
      <Link
        href={`/services/${service.slug}`}
        className="btn btn-pill btn-sm mt-auto align-self-start"
      >
        View details
      </Link>
    </div>
  );
}
