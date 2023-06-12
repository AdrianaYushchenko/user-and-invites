import { Invite, TeamMember } from "../types";
import { Invites, Users } from "../test-data";

export const userApi = {
  getUsers: (): Promise<TeamMember[]> =>
    new Promise((resolve) => resolve(Users)),
  getInvites: (): Promise<Invite[]> =>
    new Promise((resolve) => resolve(Invites)),
};
