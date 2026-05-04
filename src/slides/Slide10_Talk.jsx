import { cta, eyebrow, headingFinal, reveal, slideInner } from "../theme.js";

const contacts = [
  ["Email", "akmal@eyelevelstudio.in", "mailto:akmal@eyelevelstudio.in"],
  ["Phone", "+91 9884414813", "tel:+919884414813"],
  ["Web", "theeyelevelstudio.com", "https://www.theeyelevelstudio.com"],
  ["Booking", "theeyelevelstudio.com/booking", "https://theeyelevelstudio.com/booking"],
];

export default function Slide10({ active }) {
  return (
    <>
      <div className={`${slideInner} max-[880px]:justify-start max-[560px]:justify-start`}>
        <div className="grid h-full grid-cols-[1.15fr_1fr] items-center gap-12 max-[880px]:h-auto max-[880px]:grid-cols-1 max-[880px]:gap-3.5">
          <div>
            <div
              className={reveal(
                active,
                1,
                `${eyebrow} max-[560px]:gap-2 max-[560px]:text-[9px] max-[560px]:before:w-5`,
              )}
            >
              Let's Talk
            </div>
            <h2
              className={reveal(
                active,
                2,
                `${headingFinal} mt-3 max-w-[12ch] max-[880px]:mt-2 max-[880px]:!text-[28px] max-[880px]:!leading-[1.08] max-[560px]:mt-1.5 max-[560px]:!text-[27px] max-[560px]:!leading-[1.1]`,
              )}
            >
              Ready to build your{" "}
              <span className="text-primary">enrollment engine?</span>
            </h2>
            <p
              className={reveal(
                active,
                3,
                "mt-[18px] max-w-[48ch] text-[clamp(16px,1.08vw,19px)] leading-[1.52] text-white/85 max-[880px]:mt-2.5 max-[880px]:text-[13px] max-[880px]:leading-[1.34] max-[560px]:mt-2 max-[560px]:text-[12.6px] max-[560px]:leading-[1.32]",
              )}
            >
              Let's start with a 30-minute call - no pitch, just an honest
              conversation about where your school is and what we can do
              together.
            </p>
            <a
              className={reveal(
                active,
                5,
                `${cta} mt-[22px] max-[880px]:mt-3 max-[880px]:px-4 max-[880px]:py-2.5 max-[880px]:text-xs max-[880px]:shadow-[4px_4px_0_#152820] max-[560px]:mt-3 max-[560px]:px-4 max-[560px]:py-2.5 max-[560px]:text-[11px] max-[560px]:shadow-[3px_3px_0_#152820]`,
              )}
              href="https://theeyelevelstudio.com/booking"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a free strategy call
              <span>-&gt;</span>
            </a>
          </div>
          <aside
            className={reveal(
              active,
              4,
              "flex flex-col gap-1.5 border-2 border-deck-deep bg-white p-[26px] pb-[22px] text-bg shadow-[6px_6px_0_#e2fea5] max-[880px]:gap-1 max-[880px]:p-3.5 max-[880px]:pb-3 max-[880px]:shadow-[4px_4px_0_#e2fea5] max-[560px]:p-3 max-[560px]:pb-2.5",
            )}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-deck-muted max-[560px]:text-[8px]">
              Your point of contact
            </div>
            <div className="mt-1 font-display text-[28px] font-normal uppercase leading-none tracking-normal max-[880px]:text-[17px] max-[560px]:text-[15px]">
              Akmal Rahman
            </div>
            <div className="mb-3.5 max-w-[38ch] text-[14px] text-deck-surface max-[880px]:mb-2 max-[880px]:text-[11.5px] max-[560px]:text-[11px]">
              Co-Founder &amp; Chief Growth Architect, EyeLevel Growth Studio
            </div>
            <div className="flex flex-col border-t-[1.5px] border-bg">
              {contacts.map(([k, v, href]) => (
                <div
                  key={k}
                  className="grid grid-cols-[80px_1fr] items-center gap-3 border-b border-bg/25 py-[9px] max-[880px]:grid-cols-[58px_1fr] max-[880px]:gap-2 max-[880px]:py-1.5 max-[560px]:grid-cols-[48px_1fr] max-[560px]:py-1.5"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-70 max-[560px]:text-[8px]">
                    {k}
                  </span>
                  <a
                    className="w-fit break-all border-b-[1.5px] border-bg pb-px text-[14px] font-semibold text-bg no-underline hover:bg-bg hover:text-primary max-[880px]:text-[11.5px] max-[560px]:text-[11px]"
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {v}
                  </a>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
      <div className="absolute bottom-6 left-16 right-16 flex justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-white/40 max-[880px]:hidden">
        <span>EyeLevel Growth Studio - 2026</span>
        <span>End of presentation - up to revisit</span>
      </div>
    </>
  );
}
