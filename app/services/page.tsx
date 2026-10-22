import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className="container">
      <h1 className="page-title">Our Services</h1>
      <div className="row g-4">
        {services.map((service) => (
          <div key={service.slug} className="col-md-6">
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
}
