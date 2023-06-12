export interface TeamMember {
  id: number;
  status: Status;
  user: UserShortData;
  role: Role;
}

type Role = "Administrator" | "Standard";

export type Status =
  | "request"
  | "pending"
  | "approved"
  | "declined"
  | "invited";

interface UserShortData {
  id: number;
  name: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface Invite {
  id: number;
  phone: string;
  role: Role;
}
