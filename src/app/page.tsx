import { LandingPage } from "./components/headers/LandingPage";
import { Header } from "./components/headers/Header";
import { MobileHeader } from "./components/headers/MobileHeader";

export default function Home() {
  return (
    <main className="   ">
      <section className="bg-secondary h-screen">
        <Header />
        <MobileHeader />
        <LandingPage />
      </section>
    </main>
  );
}
