import { LandingPage } from "./components/landingPage/LandingPage";
import { Header } from "./components/headers/Header";
import { MobileHeader } from "./components/headers/MobileHeader";

export default function Home() {
  return (
    <main className="   ">
      <section className="bg-secondary h-screen">
        <LandingPage />
      </section>
    </main>
  );
}
