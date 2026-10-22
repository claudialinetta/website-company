import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { team } from "@/data/team";

type Props = { params: Promise<{ member: string }> };

export function generateStaticParams() {
  return team.map((m) => ({ member: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { member } = await params;
  const found = team.find((m) => m.slug === member);
  return { title: found ? found.name : "Team" };
}

export default async function MemberPage({ params }: Props) {
  const { member: slug } = await params;
  const member = team.find((m) => m.slug === slug);

  if (!member) notFound();

  return (
    <div className="container text-center" style={{ maxWidth: 640 }}>
      <Image
        src={member.photo}
        alt={member.name}
        width={160}
        height={160}
        priority
        className="avatar-img mb-3"
      />
      <h1 className="h2 fw-bold" style={{ color: "var(--accent)" }}>
        {member.name}
      </h1>
      <p className="fw-semibold">{member.role}</p>
      <p className="mb-4">{member.bio}</p>
      <Link href="/team" className="btn btn-pill">
        Back to Team
      </Link>
    </div>
  );
}
