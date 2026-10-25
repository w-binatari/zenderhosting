import {
  ABOUT_STORY,
  BRAND_POSITIONING,
  BRAND_TAGLINE,
  TEAM_MEMBERS,
  TRUST_SIGNALS,
  ZENDER_WAY_PILLARS,
} from "@/lib/site";
import { RichPageHero } from "@/components/ui/RichPageHero";
import Image from "next/image";

function AboutHeroVisual() {
  return (
    <>
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-zender-teal/15 to-zender-navy/10" />
      <div className="relative space-y-4">
        <div className="glass-card-dark rounded-2xl bg-zender-navy/90 p-6 text-white shadow-xl">
          <p className="nav-link text-zender-teal">Our conviction</p>
          <p className="mt-3 text-xl font-semibold leading-snug">{BRAND_TAGLINE}</p>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <p className="text-sm leading-relaxed text-zender-navy/65">
            {ABOUT_STORY.familyExplanation}
          </p>
        </div>
      </div>
    </>
  );
}

export function AboutHero() {
  return (
    <RichPageHero
      eyebrow="About Zender"
      title="A serious emerging African treasury and cross-border finance company"
      description={BRAND_POSITIONING}
      pills={["Calm", "Trustworthy", "Execution-focused"]}
      visual={<AboutHeroVisual />}
    />
  );
}

export function AboutStory() {
  return (
    <>
      <section className="dot-grid bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="nav-link text-zender-teal">Why we exist</p>
            <h2 className="mt-4 text-3xl font-semibold text-zender-navy">
              Built where trust and execution must align
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zender-navy/65">
              {ABOUT_STORY.origin}
            </p>
            <p className="mt-4 text-base leading-relaxed text-zender-navy/65">
              {ABOUT_STORY.conviction}
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-zender-mint to-zender-teal/10" />
            <div className="relative glass-card rounded-2xl p-8">
              <p className="nav-link text-zender-teal">What we stand for</p>
              <p className="mt-4 text-base leading-relaxed text-zender-navy/70">
                Accessibility, responsiveness, and a deeper understanding of how
                African businesses experience cross-border finance, simpler, more
                transparent, more human, and more supportive of African growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-zender-navy px-6 py-20 text-white lg:px-8">
        <div className="pointer-events-none absolute inset-0 page-mesh-dark opacity-60" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">
          {TRUST_SIGNALS.map((signal) => (
            <div
              key={signal.label}
              className="glass-card-dark rounded-2xl p-6 text-center backdrop-blur"
            >
              <p className="text-2xl font-bold text-zender-teal">{signal.value}</p>
              <p className="mt-2 text-sm text-white/55">{signal.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-zender-mint/30 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="nav-link text-zender-teal">How we work</p>
            <h2 className="mt-4 text-3xl font-semibold text-zender-navy">
              Calm, structured, and relationship-focused
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {ZENDER_WAY_PILLARS.map((pillar, i) => (
              <div
                key={pillar.title}
                className="glass-card rounded-2xl p-8 shadow-sm"
              >
                <span className="font-nav text-3xl font-semibold text-zender-teal/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-zender-navy">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zender-navy/65">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function memberInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function AboutTeam() {
  return (
    <section className="page-mesh px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="nav-link text-zender-teal">Our team</p>
          <h2 className="mt-4 text-3xl font-semibold text-zender-navy sm:text-4xl">
            People behind the desk
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zender-navy/65">
            A focused team built around treasury conversations, settlement
            clarity, and long-term client relationships.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member, index) => (
            <article
              key={member.name}
              className="group relative"
              style={{ marginTop: index % 2 === 1 ? "1.25rem" : "0" }}
            >
              <div className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-zender-teal/10 to-zender-navy/5 opacity-0 transition group-hover:opacity-100" />
              <div className="relative glass-card rounded-2xl p-6">
                <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-2xl bg-zender-navy/5">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zender-navy to-zender-navy-deep">
                      <span className="font-nav text-2xl tracking-widest text-zender-teal">
                        {memberInitials(member.name)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mt-5 text-center">
                  <p className="nav-link text-zender-teal">{member.role}</p>
                  <h3 className="mt-2 text-lg font-semibold text-zender-navy">
                    {member.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zender-navy/60">
                    {member.bio}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
