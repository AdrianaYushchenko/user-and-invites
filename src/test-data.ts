import { Invite, TeamMember } from "./types";

export const Users: TeamMember[] = [
  {
    id: 1,
    status: "request",
    user: {
      id: 1,
      name: "Joespeh",
      lastName: "Bloggs",
      phone: "+380979342245",
      email: "test@gmail.com",
    },
    role: "Administrator",
  },
  {
    id: 2,
    status: "request",
    user: {
      id: 2,
      name: "Sarah",
      lastName: "Connors",
      phone: "+380999342245",
      email: "test@gmail.com",
    },
    role: "Standard",
  },
  {
    id: 2,
    status: "request",
    user: {
      id: 2,
      name: "Sidney",
      lastName: "Connors",
      phone: "+380999342245",
      email: "test@gmail.com",
    },
    role: "Standard",
  },
  {
    id: 3,
    status: "request",
    user: {
      id: 3,
      name: "Brad",
      lastName: "Prix",
      phone: "+380979342245",
      email: "test@gmail.com",
    },
    role: "Administrator",
  },
  {
    id: 4,
    status: "invited",
    user: {
      id: 4,
      name: "Mathew",
      lastName: "Murphy",
      phone: "+380689342245",
      email: "test@gmail.com",
    },
    role: "Standard",
  },
  {
    id: 5,
    status: "request",
    user: {
      id: 5,
      name: "Joespeh",
      lastName: "Bloggs",
      phone: "+380989342245",
      email: "test@gmail.com",
    },
    role: "Administrator",
  },
  {
    id: 6,
    status: "request",
    user: {
      id: 6,
      name: "Mathew",
      lastName: "Murphy",
      phone: "+380989342945",
      email: "test@gmail.com",
    },
    role: "Standard",
  },
  {
    id: 7,
    status: "pending",
    user: {
      id: 7,
      name: "Joespeh",
      lastName: "Bloggs",
      phone: "+380679348245",
      email: "test@gmail.com",
    },
    role: "Administrator",
  },
];

export const Invites: Invite[] = [
  {
    id: 1,
    phone: "+380679342245",
    role: "Administrator",
  },
  {
    id: 2,
    phone: "+380689342245",
    role: "Standard",
  },
  {
    id: 3,
    phone: "+380679348245",
    role: "Administrator",
  },
  {
    id: 4,
    phone: "+380989342945",
    role: "Standard",
  },
];
