"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import ServiceDetail from "@/components/ServiceDetail";
import Cases from "@/components/Cases";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import Consultation from "@/components/Consultation";
import AuthModal from "@/components/AuthModal";
import Footer from "@/components/Footer";

type AuthMode = "login" | "register";

export default function Home() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>("login");

  const handleLoginClick = () => {
    setAuthMode("login");
    setAuthOpen(true);
  };

  const handleRegisterClick = () => {
    setAuthMode("register");
    setAuthOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <Header
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
      />

      <main>
        <Hero />
        <ServicesOverview />
        <ServiceDetail />
        <Cases />
        <Team />
        <Pricing />
        <Consultation />
      </main>

      <Footer />

      <AuthModal
        mode={authMode}
        open={authOpen}
        onOpenChange={setAuthOpen}
        onSwitchMode={setAuthMode}
      />
    </div>
  );
}
