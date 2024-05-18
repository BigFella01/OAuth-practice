import Profile from "@/components/profile";

export default function Home() {
  return (
    <main className="w-100vw h-100vh">
      <Profile />
    </main>
  );
}

// When we hit the sign in button, we redirect to the sign in page. 
// Once we are signed in, we redirect to the home page where we
// will see a sentence stating we are signed in, as well as our 
// profile. If we hit the sign out button, we will be redirected
// to the home page where we will see a message stating we are not 
// signed in. 
