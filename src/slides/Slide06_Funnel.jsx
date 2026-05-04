import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cx, eyebrow, headingLg, reveal, slideInner, stagger } from "../theme.js";

const stages = [
  {
    num: "01",
    label: "Awareness",
    title: "Get Found",
    detail: "Meta, Google and LinkedIn ads - social content - local SEO",
  },
  {
    num: "02",
    label: "Enquiry",
    title: "Capture Intent",
    detail: "Landing pages - lead forms - instant WhatsApp and email automation",
  },
  {
    num: "03",
    label: "Open House",
    title: "Create Demand",
    detail: "Invite campaigns - premium event collateral - parent reminders",
  },
  {
    num: "04",
    label: "School Tour",
    title: "Build Trust",
    detail: "Tour creatives - reception videos - prospectus and parent guides",
  },
  {
    num: "05",
    label: "Enrollment",
    title: "Convert Families",
    detail: "Parent comms - testimonials - decision-stage nudges",
  },
  {
    num: "06",
    label: "Retention",
    title: "Keep Growing",
    detail: "Engagement campaigns - re-enrollment drives - referral triggers",
  },
];

function StageBody({ stage, mobile = false }) {
  return (
    <p
      className={
        mobile
          ? "text-left text-[12.5px] leading-[1.28] text-white/76"
          : "mt-2 text-left text-[12.5px] leading-[1.32] text-white/68"
      }
    >
      {stage.detail}
    </p>
  );
}

export default function Slide06({ active }) {
  const [open, setOpen] = useState(0);

  return (
    <div className={`${slideInner} max-[880px]:justify-start max-[560px]:justify-start`}>
      <div
        className={reveal(
          active,
          1,
          `${eyebrow} max-[560px]:gap-2 max-[560px]:text-[9px] max-[560px]:before:w-5`,
        )}
      >
        The Enrollment Funnel
      </div>
      <div className="mt-2.5 max-[880px]:mt-2">
        <h2
          className={reveal(
            active,
            2,
            `${headingLg} max-w-[23ch] max-[880px]:!text-[24px] max-[880px]:!leading-[1.08] max-[560px]:!text-[21px] max-[560px]:!leading-[1.1]`,
          )}
        >
          We manage every stage -{" "}
          <span className="text-primary">so nothing falls through.</span>
        </h2>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-left max-[880px]:mt-4 max-[880px]:grid-cols-1 max-[880px]:gap-1.5 max-[560px]:mt-4 max-[560px]:gap-2">
        {stages.map((stage, i) => {
          const isOpen = open === i;

          return (
            <article
              key={stage.num}
              className={stagger(
                active,
                i,
                cx(
                  "group relative min-h-[124px] overflow-hidden border border-white/15 bg-deck-surface p-3.5 transition hover:border-primary hover:bg-deck-deep max-[880px]:min-h-0 max-[880px]:p-0",
                  isOpen && "max-[880px]:bg-deck-deep",
                ),
              )}
            >
              <button
                type="button"
                className="flex w-full cursor-pointer items-start justify-between gap-3 border-0 bg-transparent p-0 text-left text-white max-[880px]:px-3.5 max-[880px]:py-3.5 max-[560px]:px-3.5 max-[560px]:py-4"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="min-w-0">
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary max-[880px]:text-[8px]">
                    <span>{stage.num}</span>
                    <span className="h-px w-6 bg-primary/55" />
                    <span>{stage.label}</span>
                  </span>
                  <span className="mt-2 block font-display text-[19px] font-normal uppercase leading-none tracking-normal max-[880px]:mt-0.5 max-[880px]:text-[14px] max-[560px]:!text-[13.5px]">
                    {stage.title}
                  </span>
                </span>
                <ChevronDown
                  size={16}
                  strokeWidth={2.2}
                  className={`hidden shrink-0 text-primary transition duration-300 max-[880px]:block ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div className="mt-3 h-[2px] overflow-hidden bg-white/10 max-[880px]:mx-3 max-[880px]:mt-0 max-[880px]:h-[2px]">
                <div
                  className={cx(
                    "h-full bg-primary transition-[width] duration-500",
                    active ? "w-full" : "w-0",
                  )}
                  style={{ transitionDelay: `${220 + i * 70}ms` }}
                />
              </div>

              <div className="max-[880px]:hidden">
                <StageBody stage={stage} />
              </div>

              <div
                className={`hidden overflow-hidden border-t border-white/10 px-3.5 transition-all duration-300 ease-out max-[880px]:block ${
                  isOpen
                    ? "max-h-24 pb-3.5 pt-2.5 opacity-100"
                    : "max-h-0 pb-0 pt-0 opacity-0"
                }`}
              >
                <StageBody stage={stage} mobile />
              </div>
            </article>
          );
        })}
      </div>

      <div
        className={reveal(
          active,
          6,
          "mt-3 max-w-[72ch] border-t border-white/15 pt-2.5 text-left font-display text-[clamp(15px,1.35vw,19px)] uppercase leading-[1.08] tracking-normal max-[880px]:mt-5 max-[880px]:block max-[880px]:pt-3.5 max-[880px]:text-[15px] max-[560px]:mt-5 max-[560px]:pt-3 max-[560px]:text-[13.5px]",
        )}
      >
        <span className="mr-3 font-mono text-[10px] tracking-[0.18em] text-primary max-[880px]:mb-1.5 max-[880px]:block max-[560px]:text-[8px]">
          RESULT
        </span>
        <p>
          From the first ad to the{" "}
          <span className="text-primary">signed enrollment form</span> - one
          accountable growth system.
        </p>
      </div>
    </div>
  );
}
