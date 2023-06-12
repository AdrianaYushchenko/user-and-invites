import React, { useEffect, useState } from "react";

import "./index.css";
import { userApi } from "../../api/userApi";
import { Invite, TeamMember } from "../../types";
import Administrator from "../../assets/administrators.svg";
import Users from "../../assets/users.svg";
import { Section } from "../Section";

export const UserAndInvites = () => {
  const [users, setUsers] = useState<TeamMember[]>();
  const [administrators, setAdministrators] = useState<TeamMember[]>();
  const [invites, setInvites] = useState<Invite[]>();

  useEffect(() => {
    const getUsersAndInvites = async () => {
      const responseUsers = await userApi.getUsers();

      const administrators = responseUsers.filter(
        (user) => user.role === "Administrator"
      );
      const standardUsers = responseUsers.filter(
        (user) => user.role === "Standard"
      );

      const responseInvites = await userApi.getInvites();

      setAdministrators(administrators);
      setUsers(standardUsers);
      setInvites(responseInvites);
    };

    getUsersAndInvites();
  }, []);

  return (
    <div className="container">
      <Section
        title="Administrators"
        items={administrators}
        invites={invites}
        image={Administrator}
      />

      <Section
        title="Standard Users"
        items={users}
        invites={invites}
        image={Users}
      />
    </div>
  );
};
