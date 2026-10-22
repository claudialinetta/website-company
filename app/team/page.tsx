import type { Metadata } from "next";
import TeamCard from "@/components/TeamCard";
import { team } from "@/data/team";

export const metadata: Metadata = { title: "Team" };

export default function TeamPage() {
  return (
    <div className="container">
      <h1 className="page-title">Our Team</h1>
      <div className="row g-4">
        {team.map((member) => (
          <div key={member.slug} className="col-6 col-lg-3">
            <TeamCard member={member} />
          </div>
        ))}
      </div>
    </div>
  );
}
