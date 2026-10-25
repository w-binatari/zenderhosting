"use client";

import { HOW_IT_WORKS, ONBOARDING_URL } from "@/lib/site";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function StepDetailMock({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="mt-7 space-y-3">
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl bg-zender-mint/80 px-4 py-3 text-sm text-zender-navy/75">
            Hello, we need to send \(USD\) to a supplier in Nairobi. What info do you need?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl bg-zender-navy px-4 py-3 text-sm text-white/85">
            Share amount, corridor, timeline, and beneficiary details. We’ll confirm
            the best next step and keep you updated end-to-end.
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl bg-white/70 px-4 py-3 text-sm text-zender-navy/70">
            Amount: $8,500 · Timeline: today · Beneficiary: business account
          </div>
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="mt-7 space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { k: "Corridor", v: "USD → KES" },
            { k: "Timeline", v: "Same day target" },
            { k: "Compliance", v: "KYC check + reference" },
            { k: "Settlement", v: "Confirm beneficiary route" },
          ].map((row) => (
            <div
              key={row.k}
              className="rounded-xl border border-zender-navy/8 bg-white/70 px-4 py-3"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-zender-navy/45">
                {row.k}
              </p>
              <p className="mt-1 text-sm font-semibold text-zender-navy">{row.v}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-zender-teal/20 bg-gradient-to-r from-zender-mint/70 to-white px-5 py-4">
          <p className="text-sm font-semibold text-zender-navy">Plan summary</p>
          <ul className="mt-2 space-y-1.5 text-sm text-zender-navy/65">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-zender-teal" />
              Confirm corridor, timeline, and documentation
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-zender-teal" />
              Provide confirmed pricing through the desk
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-zender-teal" />
              Execute and update you through completion
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-7 space-y-3">
      {[
        { label: "Initiated", status: "Complete" },
        { label: "Compliance checks", status: "Complete" },
        { label: "Settlement", status: "Processing" },
        { label: "Confirmation", status: "Next" },
      ].map((row, i) => (
        <div
          key={row.label}
          className="flex items-center justify-between rounded-xl border border-zender-navy/8 bg-white/70 px-4 py-3"
        >
          <span className="text-sm text-zender-navy/75">{row.label}</span>
          <span
            className={`text-xs font-semibold ${
              row.status === "Complete"
                ? "text-zender-teal"
                : row.status === "Processing"
                  ? "text-zender-navy"
                  : "text-zender-navy/45"
            }`}
          >
            {row.status}
          </span>
        </div>
      ))}
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-zender-navy/8">
        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-zender-teal to-zender-navy" />
      </div>
      <p className="text-xs text-zender-navy/45">Execution updates are shared as the transfer progresses.</p>
    </div>
  );
}

export function HomeHowItWorksScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(index);
        },
        { threshold: 0.55, rootMargin: "-20% 0px -25% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="dot-grid bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <p className="nav-link text-zender-teal">How it works</p>
          <h2 className="mt-4 text-3xl font-semibold text-zender-navy sm:text-4xl">
            From conversation to execution
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zender-navy/65">
            Scroll through each stage, a clear, relationship-led path supported
            by our web platform when you are ready to onboard.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-20">
          {/* Sticky progress rail */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="relative space-y-0">
                <div className="absolute left-[1.125rem] top-4 bottom-4 w-px bg-zender-navy/10" />
                <div
                  className="absolute left-[1.125rem] top-4 w-px bg-zender-teal transition-all duration-500 ease-out"
                  style={{
                    height: `${(activeIndex / Math.max(HOW_IT_WORKS.length - 1, 1)) * 100}%`,
                    maxHeight: "calc(100% - 2rem)",
                  }}
                />

                {HOW_IT_WORKS.map((step, index) => {
                  const isActive = index === activeIndex;
                  const isPast = index < activeIndex;

                  return (
                    <div
                      key={step.step}
                      className={`relative flex gap-5 py-6 transition-opacity duration-500 ${
                        isActive ? "opacity-100" : isPast ? "opacity-55" : "opacity-35"
                      }`}
                    >
                      <div
                        className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition-all duration-500 ${
                          isActive
                            ? "scale-110 border-zender-teal bg-zender-teal text-white shadow-lg shadow-zender-teal/30"
                            : isPast
                              ? "border-zender-teal bg-zender-mint text-zender-teal"
                              : "border-zender-navy/15 bg-white text-zender-navy/40"
                        }`}
                      >
                        {step.step}
                      </div>
                      <div
                        className={`pt-1 transition-all duration-500 ${
                          isActive ? "translate-x-0" : "-translate-x-1"
                        }`}
                      >
                        <h3
                          className={`text-lg font-semibold transition-colors duration-500 ${
                            isActive ? "text-zender-navy" : "text-zender-navy/50"
                          }`}
                        >
                          {step.title}
                        </h3>
                        {isActive && (
                          <p className="mt-2 text-sm leading-relaxed text-zender-navy/65 transition-opacity duration-500">
                            {step.description}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Scroll panels */}
          <div className="space-y-8 lg:space-y-0">
            {HOW_IT_WORKS.map((step, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={step.step}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  className="flex min-h-[55vh] items-center lg:min-h-[72vh]"
                >
                  <div
                    className={`glass-card w-full rounded-2xl p-8 transition-all duration-700 ease-out lg:p-10 ${
                      isActive
                        ? "scale-100 border-zender-teal/25 opacity-100 shadow-xl"
                        : "scale-[0.97] opacity-40"
                    }`}
                  >
                    <span className="font-nav text-5xl font-semibold text-zender-teal/20 lg:hidden">
                      {step.step}
                    </span>
                    <h3 className="mt-2 text-2xl font-semibold text-zender-navy lg:mt-0">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-zender-navy/65">
                      {step.description}
                    </p>
                    <StepDetailMock index={index} />
                    <div className="mt-8 h-1 overflow-hidden rounded-full bg-zender-navy/8">
                      <div
                        className="h-full rounded-full bg-zender-teal transition-all duration-700 ease-out"
                        style={{ width: isActive ? "100%" : "0%" }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-4">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-zender-teal px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-zender-navy"
          >
            Contact Treasury Desk
          </Link>
          <a
            href={ONBOARDING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-zender-navy/15 px-8 py-3.5 text-sm font-semibold text-zender-navy transition hover:border-zender-teal hover:text-zender-teal"
          >
            Open Platform
          </a>
        </div>
      </div>
    </section>
  );
}
