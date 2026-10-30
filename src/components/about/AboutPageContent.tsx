import {
  ABOUT_STORY,
  BRAND_POSITIONING,
  TEAM_MEMBERS,
  ZENDER_WAY_PILLARS,
} from "@/lib/site";
import { FramedPhoto } from "@/components/ui/FramedPhoto";
import { RichPageHero } from "@/components/ui/RichPageHero";
import { PHOTOS } from "@/lib/photos";
import Image from "next/image";

export function AboutHero() {
  return (
    <RichPageHero
      title="A serious emerging African treasury and cross-border finance company"
      description={BRAND_POSITIONING}
      visual={
        <FramedPhoto
          photo={PHOTOS.victoriaIsland}
          className="min-h-[24rem]"
          imageClassName="object-cover object-[center_40%]"
          sizes="(min-width: 1024px) 36rem, 100vw"
        />
      }
    />
  );
}

export function AboutStory() {
  return (
    <>
      <section className="section bg-white">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="section-h2 text-zender-navy">
              Built where trust and execution must align
            </h2>
            <p className="lede">{ABOUT_STORY.origin}</p>
            <p className="lede">{ABOUT_STORY.conviction}</p>
            <p className="lede">{ABOUT_STORY.familyExplanation}</p>
            <p className="lede">
              Our aim is accessibility, responsiveness, and a deeper
              understanding of how African businesses experience cross-border
              finance: simpler, more transparent, more human, and more
              supportive of African growth.
            </p>
          </div>
          <FramedPhoto
            photo={PHOTOS.deskWork}
            className="min-h-[28rem]"
            imageClassName="object-cover object-[center_20%]"
            sizes="(min-width: 1024px) 36rem, 100vw"
          />
        </div>
      </section>

      <section className="section bg-zender-tint">
        <div className="mx-auto max-w-6xl">
          <h2 className="section-h2 text-zender-navy lg:whitespace-nowrap">
            Calm, structured, and relationship-focused
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {ZENDER_WAY_PILLARS.map((pillar) => (
              <div key={pillar.title} className="border-t-2 border-zender-navy pt-5">
                <h3 className="text-lg font-semibold text-zender-navy">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zender-navy/70">
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
    <section className="section bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="section-h2 text-zender-navy">People behind the desk</h2>
          <p className="lede">
            A focused team built around treasury conversations, settlement
            clarity, and long-term client relationships.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member) => (
            <article key={member.name}>
              <div className="relative h-28 w-28 overflow-hidden rounded-lg bg-zender-navy">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-2xl font-semibold tracking-wide text-white">
                      {memberInitials(member.name)}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-zender-navy">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-zender-teal">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-zender-navy/70">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
