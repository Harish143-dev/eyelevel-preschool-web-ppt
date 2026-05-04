import { assetUrl, eyebrow, headingLg, reveal, slideInner, stagger } from "../theme.js";

export default function Slide04({ active }) {
  return (
    <div className={`${slideInner} mt-10 max-[880px]:mt-0 max-[880px]:justify-start max-[560px]:justify-start`}>
      <div
        className={reveal(
          active,
          1,
          `${eyebrow} max-[560px]:gap-2 max-[560px]:text-[9px] max-[560px]:before:w-5`,
        )}
      >
        Who We Are
      </div>
      <div className="mt-[18px] grid grid-cols-[minmax(260px,360px)_minmax(0,760px)] items-center justify-between gap-16 max-[880px]:mt-4 max-[880px]:grid-cols-1 max-[880px]:gap-5 max-[560px]:mt-3">
        <div
          className={reveal(
            active,
            2,
            "relative aspect-[4/5] w-full max-w-[340px] overflow-hidden border-1 border-deck-deep max-[880px]:hidden",
          )}
        >
     
          <img
            src={assetUrl("akmal.png")}
            alt="Akmal Rahman"
            className="absolute inset-0 h-full w-full object-contain"
          />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 border-t-2 border-bg bg-deck-surface px-[18px] py-3.5 text-white">
            <h4 className="font-display text-[22px] font-normal uppercase leading-none tracking-normal">
              Akmal Rahman
            </h4>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em]">
              Co-Founder · Chief Growth Architect
            </span>
          </div>
        </div>
        <div className="w-full max-w-[760px]">
          <h2
            className={reveal(
              active,
              2,
              `${headingLg} max-w-[24ch] max-[880px]:!text-[28px] max-[880px]:!leading-[1.08] max-[560px]:!text-[23px] max-[560px]:!leading-[1.1]`,
            )}
          >
            We're not an agency.{" "}
            <span className="text-primary">We're your growth partner.</span>
          </h2>
          <div>
            {[
              "EyeLevel Growth Studio was built on one belief — marketing should drive measurable growth, not just activity. We don't run campaigns and send reports. We build systems that fill seats.",
              "Our edge in preschool and daycare is simple — we've worked inside it. We understand the admission cycle, parent psychology, and what it takes to move a family from first click to enrollment day.",
            ].map((text, i) => (
              <p
                key={text}
                className={stagger(
                  active,
                  i,
                  "mt-3 max-w-[72ch] text-left text-[15px] leading-[1.5] text-white/90 max-[880px]:mt-2.5 max-[880px]:text-[13.4px] max-[880px]:leading-[1.36] max-[560px]:mt-2.5 max-[560px]:text-[12.6px] max-[560px]:leading-[1.28]",
                )}
              >
                {text}
              </p>
            ))}
          </div>
          <div className="mt-5 border-t-[1.5px] border-white/15 pt-3 text-left max-[880px]:mt-4 max-[880px]:pt-2.5 max-[560px]:mt-3 max-[560px]:pt-2">
            {[
              ["Previously", "Marketing lead — Amelio Early Education"],
              [
                "Previously",
                "Head of Marketing — Kido Schools (UK · US · India)",
              ],
              [
                "Project work",
                "Babilo Family (France) · Blossom Schools (Dubai)",
              ],
              [
                "Experience",
                "15 years in marketing · Deep roots in early education",
              ],
            ].map(([k, v], i) => (
              <div
                key={`${k}-${v}`}
                className={stagger(
                  active,
                  i,
                  "grid grid-cols-[130px_1fr] items-baseline gap-5 border-b border-white/15 py-2 text-left max-[880px]:grid-cols-1 max-[880px]:gap-0.5 max-[880px]:py-1.5 max-[560px]:gap-1 max-[560px]:py-2",
                )}
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] opacity-65 max-[560px]:text-[8.5px]">
                  {k}
                </span>
                <span className="text-left text-[13.5px] font-medium max-[880px]:text-[12.5px] max-[560px]:text-[11.8px]">
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
