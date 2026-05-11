/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemHooks from "./components/ProblemHooks";
import VibeCoding from "./components/VibeCoding";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import BlogPreview from "./components/BlogPreview";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange/20 selection:text-orange">
      <Navbar />
      <main>
        <Hero />
        <ProblemHooks />
        <VibeCoding />
        <TechStack />
        <About />
        <Process />
        <Pricing />
        <Portfolio />
        <Testimonials />
        <BlogPreview />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

