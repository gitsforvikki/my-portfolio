import { LandingPage } from "@/components/landingPage";
import { Footer } from "@/components/footer/Footer";
import { Skills } from "@/components/skills";
import { Resume } from "@/components/resume/Resume";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="   ">
      <section className="bg-secondary min-h-screen">
        <LandingPage />
        <Skills />
        <Resume />
        <Contact />
      </section>
    </main>
  );
}
