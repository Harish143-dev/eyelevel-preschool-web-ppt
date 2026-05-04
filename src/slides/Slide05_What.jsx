import { useState } from "react";
import { Plus } from "lucide-react";
import { eyebrow, headingLg, reveal, slideInner, stagger } from "../theme.js";

const services = [
  {
    num: "01 - Creative",
    title: "Creative & Content",
    list: "Graphic design - Video & reels - Open house collateral - WhatsApp visuals - Email designs",
  },
  {
    num: "02 - Digital",
    title: "Digital & Social",
    list: "Meta Ads - Google Ads - LinkedIn Ads - Social management - Content calendar",
  },
  {
    num: "03 - Web",
    title: "Web, Landing & UI/UX",
    list: "UI/UX design - Enrollment landing pages - Website improvements - Lead form setup - SEO",
  },
  {
    num: "04 - Tech",
    title: "Tech, CRM & Apps",
    list: "HubSpot - Salesforce - Zoho - App development - WhatsApp automation",
  },
  {
    num: "05 - Strategy",
    title: "Strategy & Consulting",
    list: "Annual marketing calendar - Admission season planning - Budget allocation - 360 campaign design",
  },
  {
    num: "06 - One Team",
    title: "From the first ad to the first day of school.",
    list: "Designers - Editors - Marketers - Developers - CRM specialists - Strategists - all under one roof.",
  },
];

function ServiceList({ text, mobile = false }) {
  return (
    <div
      className={
        mobile
          ? "text-left text-[13px] leading-[1.28] text-white/78"
          : "mt-auto text-left text-[13px] leading-[1.5] text-white/70 max-[880px]:text-[11.5px] max-[880px]:leading-[1.3] max-[560px]:hidden"
      }
    >
      {text.split(" - ").map((t, idx, arr) => (
        <span key={`${t}-${idx}`}>
          {t}
          {idx < arr.length - 1 && (
            <span className={mobile ? "mx-[3px] opacity-40" : "mx-[5px] opacity-40"}>
              -
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

export default function Slide05({ active }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={`${slideInner} mt-10 max-[880px]:mt-0 max-[880px]:justify-start max-[560px]:justify-start`}>
      <div
        className={reveal(
          active,
          1,
          `${eyebrow} max-[560px]:gap-2 max-[560px]:text-[9px] max-[560px]:before:w-5`,
        )}
      >
        What We Do
      </div>
      <h2
        className={reveal(
          active,
          2,
          `${headingLg} mt-2.5 max-w-[24ch] max-[880px]:!text-[28px] max-[880px]:!leading-[1.08] max-[560px]:mt-1.5 max-[560px]:!text-[22px] max-[560px]:!leading-[1.1]`,
        )}
      >
        One partner. <span className="text-primary">Everything you need.</span>
      </h2>

      <div className="mt-7 grid grid-cols-3 border-[1.5px] border-white/15 text-left max-[880px]:mt-4 max-[880px]:grid-cols-1 max-[560px]:mt-4">
        {services.map((s, i) => {
          const isOpen = openIndex === i;

          return (
            <article
              key={s.num}
              className={stagger(
                active,
                i,
                `flex min-h-[180px] flex-col gap-2.5 border-b-[1.5px] border-r-[1.5px] border-white/15 bg-bg p-5 text-left transition hover:bg-deck-deep max-[880px]:min-h-0 max-[880px]:gap-1.5 max-[880px]:border-r-0 max-[880px]:p-2.5 max-[560px]:gap-0 max-[560px]:overflow-hidden max-[560px]:p-0 max-[560px]:transition-colors max-[560px]:duration-300 ${isOpen ? "max-[560px]:bg-deck-deep" : ""}`,
              )}
            >
              <button
                type="button"
                className="flex w-full cursor-pointer items-start justify-between gap-3 border-0 bg-transparent p-0 text-left text-white max-[560px]:px-3.5 max-[560px]:py-4 max-[560px]:transition-[padding] max-[560px]:duration-300"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-primary max-[880px]:text-[8.5px] max-[560px]:text-[8px]">
                    {s.num}
                  </span>
                  <span className="mt-1 block font-display text-[22px] font-normal uppercase leading-none tracking-normal max-[880px]:text-[16px] max-[560px]:!text-[14.5px]">
                    {s.featured ? (
                      <>
                        From the first ad to{" "}
                        <span className="text-primary">the first day of school.</span>
                      </>
                    ) : (
                      s.title
                    )}
                  </span>
                </span>
                <span
                  className={`hidden h-5 w-5 shrink-0 items-center justify-center text-primary transition duration-300 max-[560px]:flex ${isOpen ? "rotate-45" : "rotate-0"}`}
                  aria-hidden="true"
                >
                  <Plus size={13} strokeWidth={2.2} />
                </span>
              </button>

              <ServiceList text={s.list} />

              <div
                className={`hidden overflow-hidden border-t border-white/10 px-3.5 transition-all duration-300 ease-out max-[560px]:block ${
                  isOpen
                    ? "max-h-28 pb-4 pt-2.5 opacity-100"
                    : "max-h-0 pb-0 pt-0 opacity-0"
                }`}
              >
                <div
                  className={`transition duration-300 ease-out ${
                    isOpen ? "translate-y-0 opacity-100 delay-75" : "-translate-y-1 opacity-0"
                  }`}
                >
                  <ServiceList text={s.list} mobile />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
