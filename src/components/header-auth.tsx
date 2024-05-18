"use client";

import { Button, Link } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";

export default function HeaderAuth() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return <Button onClick={() => signOut()}>Sign Out</Button>;
  }

  return (
    <Button>
      <Link href="/login">Log In</Link>
    </Button>
  );
}
