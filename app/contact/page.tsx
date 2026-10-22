import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="container" style={{ maxWidth: 520 }}>
      <h1 className="page-title">Got ideas? Say hi!</h1>
      <ContactForm />
      <p className="text-center text-muted small mt-4 mb-0">
        hello@cierustudio.com · Jakarta, Indonesia
      </p>
    </div>
  );
}
