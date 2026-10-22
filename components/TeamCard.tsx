import Image from "next/image";
import Link from "next/link";
import type { Member } from "@/data/team";

export default function TeamCard({ member }: { member: Member }) {
  return (
    <Link
      href={`/team/${member.slug}`}
      className="card d-block h-100 p-4 text-center text-decoration-none"
      style={{ color: "inherit" }}
    >
      <Image
        src={member.photo}
        alt={member.name}
        width={88}
        height={88}
        className="avatar-img mb-3"
      />
      <h6 className="fw-bold mb-1" style={{ color: "var(--accent)" }}>
        {member.name}
      </h6>
      <small className="text-muted">{member.role}</small>
    </Link>
  );
}
