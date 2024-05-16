import { Button, Link } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-100vw h-100vh">
      <Button>
        <Link href="/login">Log In</Link>
      </Button>
    </main>
  );
}

// we want every page in the project to have
// the header.
