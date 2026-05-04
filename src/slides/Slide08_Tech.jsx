import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { eyebrow, headingLg, reveal, slideInner, stagger } from "../theme.js";

const tech = [
  ["CRM", "HubSpot - Salesforce - Zoho", "Fully integrated from first enquiry to enrollment."],
  ["ERP", "School management", "Setup & integration tied to your admission workflow."],
  [
    "Pages",
    "Smart landing pages",
    "Built for tours and open house sign-ups - not just your homepage.",
  ],
  ["Auto", "Automated follow-up", "Enquiry comes in. WhatsApp fires. Email sequence starts."],
  ["Cloud", "Twilio & cloud comms", "Manage parent communication at scale, programmatically."],
  ["Data", "Lead dashboard", "See where every parent is and what's needed next."],
  [
    "Channel",
    "WhatsApp Business",
    "Professional, automated, and personal at the same time.",
  ],
  ["Apps", "App development", "Custom tools for your school's admission workflow."],
];

export default function Slide08({ active }) {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className={`${slideInner} mt-10 max-[880px]:mt-0 max-[880px]:justify-start max-[560px]:justify-start`}>
      <div
        className={reveal(
          active,
          1,
          `${eyebrow} max-[560px]:gap-2 max-[560px]:text-[9px] max-[560px]:before:w-5`,
        )}
      >
        The Tech Behind the Scenes
      </div>
      <h2
        className={reveal(
          active,
          2,
          `${headingLg} mt-2.5 max-w-[27ch] max-[880px]:mt-2 max-[880px]:!text-[24px] max-[880px]:!leading-[1.08] max-[560px]:mt-1.5 max-[560px]:!text-[21px] max-[560px]:!leading-[1.1]`,
        )}
      >
        You shouldn't be chasing leads{" "}
        <span className="text-primary">on sticky notes.</span>
      </h2>
      <div className="mt-[22px] grid grid-cols-4 gap-[4px] text-left max-[880px]:mt-3 max-[880px]:grid-cols-1 max-[880px]:gap-1 max-[560px]:mt-3 max-[560px]:gap-1">
        {tech.map(([k, t, p], i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={k}
              className={stagger(
                active,
                i,
                `flex min-h-[140px] flex-col gap-2 border border-primary/20 bg-deck-surface p-4 text-left transition hover:border-primary hover:bg-deck-deep max-[880px]:min-h-0 max-[880px]:gap-0 max-[880px]:p-0 max-[880px]:overflow-hidden ${
                  isOpen ? "max-[880px]:bg-deck-deep" : ""
                }`,
              )}
            >
              <button
                type="button"
                className="flex w-full cursor-pointer items-start justify-between gap-3 border-0 bg-transparent p-0 text-left text-white max-[880px]:px-3 max-[880px]:py-2.5 max-[560px]:px-3 max-[560px]:py-3"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-primary max-[880px]:text-[8px]">
                    {k}
                  </span>
                  <span className="mt-1.5 block font-display text-base font-normal uppercase leading-none tracking-normal max-[880px]:mt-0.5 max-[880px]:text-[13px] max-[560px]:!text-[13.5px]">
                    {t}
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

              <p className="mt-auto text-left text-[13px] leading-normal text-white/70 max-[880px]:hidden">
                {p}
              </p>

              <div
                className={`hidden overflow-hidden border-t border-white/10 px-3 transition-all duration-300 ease-out max-[880px]:block ${
                  isOpen
                    ? "max-h-20 pb-2.5 pt-2 opacity-100"
                    : "max-h-0 pb-0 pt-0 opacity-0"
                }`}
              >
                <p
                  className={`text-left text-[13px] leading-[1.28] text-white/76 transition duration-300 ease-out max-[560px]:text-[12.5px] ${
                    isOpen ? "translate-y-0 opacity-100 delay-75" : "-translate-y-1 opacity-0"
                  }`}
                >
                  {p}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={reveal(
          active,
          6,
          "mt-3 max-w-[60ch] border-t border-white/15 pt-2.5 font-display text-[clamp(16px,1.6vw,22px)] uppercase leading-[1.1] tracking-normal max-[880px]:mt-4 max-[880px]:block max-[880px]:pt-3 max-[880px]:text-[15px] max-[560px]:mt-4 max-[560px]:pt-2.5 max-[560px]:text-[13.5px]",
        )}
      >
        We set it up once.{" "}
        <span className="text-primary">
          It works every admission season after that.
        </span>
      </div>
    </div>
  );
}
