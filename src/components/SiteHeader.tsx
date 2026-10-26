"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CountrySelector } from "@/components/CountrySelector";
import { MobileMenu } from "@/components/MobileMenu";
import { navLabel, navLinks } from "@/lib/nav";

function ZenderLogo({ light }: { light: boolean }) {
  return (
    <Link href="/" className="inline-flex h-full items-center">
      <Image
        src={light ? "/colored_logo.png" : "/logo_nav.png"}
        alt="Zender Finance"
        width={320}
        height={88}
        priority
        className="h-12 w-auto transition sm:h-14 lg:h-[4.25rem]"
      />
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [light, setLight] = useState(!isHome);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setLight(true);
      return;
    }

    setLight(false);
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setLight(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkColor = light
    ? "text-zender-navy/70 hover:text-zender-teal"
    : "text-white/90 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        light
          ? "bg-white/90 shadow-sm backdrop-blur-md"
          : scrolled
            ? "bg-zender-navy/35 backdrop-blur-md"
            : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid h-[5.5rem] w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 lg:px-8">
        <div className="justify-self-start">
          <ZenderLogo light={light} />
        </div>

        <div className="justify-self-center">
          <div className="md:hidden">
            <CountrySelector />
          </div>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 lg:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link transition ${linkColor} ${
                  pathname === link.href ? "text-zender-teal" : ""
                }`}
              >
                {navLabel(link.label)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-end gap-3 justify-self-end sm:gap-4">
          <div className="hidden md:block">
            <CountrySelector />
          </div>
          <Link
            href="/contact"
            className={`nav-link hidden items-center justify-center rounded-lg px-5 py-2.5 transition sm:inline-flex ${
              light
                ? "bg-zender-teal text-white hover:bg-zender-navy"
                : "bg-white/15 text-white hover:bg-white/25"
            }`}
          >
            {navLabel("Treasury Desk")}
          </Link>
          <MobileMenu light={light} />
        </div>
      </div>
    </header>
  );
}
