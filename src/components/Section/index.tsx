import React from "react";

import ChevronRight from "../../assets/chevron-right.svg";
import { Invite, TeamMember } from "../../types";

interface SectionProps {
  title: string;
  image: string;
  items?: TeamMember[];
  invites?: Invite[];
}

export const Section = ({ title, items, invites, image }: SectionProps) => {
  return (
    <div className="section-container">
      <div className="section-title">
        <img src={image} alt={image.toString()} />
        <h4 className="title">{title}</h4>
      </div>
      <div className="section-body">
        {items?.map((item) => {
          const isInvite = invites?.find(
            (invite) =>
              invite.phone === item.user.phone && invite.role === item.role
          );
          return (
            <a href="/" className="section-body-item">
              <p className={isInvite && "phone"}>
                {isInvite
                  ? item.user.phone
                  : `${item.user.name} ${item.user.lastName}`}
              </p>
              <div className="status-container">
                {isInvite && <p className="status">{item.status}</p>}
                <img src={ChevronRight} alt="ChevronRight" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
