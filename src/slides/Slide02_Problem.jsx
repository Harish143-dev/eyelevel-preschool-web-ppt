import { eyebrow, headingLg, reveal, slideInner, stagger } from "../theme.js";

const items = [
  [
    "01",
    "Parents research online before they call — most schools aren't ready for that moment.",
  ],
  [
    "02",
    "Open houses happen with no strategy — leads aren't captured or nurtured.",
  ],
  [
    "03",
    "The admission visit is an afterthought, not an experience designed to convert.",
  ],
  [
    "04",
    "Social media looks generic and doesn't connect with parents emotionally.",
  ],
  ["05", "Heavy spend on Meta & Google Ads — unoptimized, low ROI."],
  ["06", "Enquiries go cold. No automation to keep leads warm."],
  ["07", "Landing pages aren't built around parent psychology."],
  ["08", "No system. Just hope that word of mouth fills the seats."],
];

export default function Slide02({ active }) {
  return (
    <div className={`${slideInner} mt-10 max-[880px]:mt-0 max-[880px]:justify-start max-[560px]:justify-start`}>
      <div className={reveal(active, 1, `${eyebrow} max-[560px]:gap-2 max-[560px]:text-[9px] max-[560px]:before:w-5`)}>
        The Problem
      </div>
      <h2
        className={reveal(
          active,
          2,
          `${headingLg} mt-3 max-w-[26ch] max-[880px]:max-w-[22ch] max-[880px]:!text-[24px] max-[880px]:!leading-[1.08] max-[560px]:mt-2 max-[560px]:max-w-[22ch] max-[560px]:!text-[23px] max-[560px]:!leading-[1.1]`,
        )}
      >
        Most preschools are great at education.{" "}
        <span className="pb-0.5 text-primary">Not at marketing.</span>
      </h2>
      <div className="mt-7 grid grid-cols-2 border-t-[1.5px] border-primary/20 text-left max-[880px]:mt-4 max-[880px]:grid-cols-1 max-[560px]:mt-4">
        {items.map(([n, p], i) => (
          <div
            key={n}
            className={stagger(
              active,
              i,
              "grid grid-cols-[42px_1fr] items-start gap-3 border-b-[1.5px] border-primary/20 py-3 pr-6 text-left odd:border-r-[1.5px] odd:pr-8 even:pl-8 max-[880px]:grid-cols-[34px_1fr] max-[880px]:gap-2.5 max-[880px]:border-r-0 max-[880px]:px-0 max-[880px]:py-2.5 max-[880px]:odd:border-r-0 max-[880px]:odd:pr-0 max-[880px]:even:pl-0 max-[560px]:grid-cols-[25px_1fr] max-[560px]:gap-3 max-[560px]:py-3",
            )}
          >
            <span className="font-display text-xl leading-none text-primary max-[880px]:text-lg max-[560px]:!text-[12px]">
              {n}
            </span>
            <p className="text-left text-[15px] font-medium leading-[1.45] max-[880px]:text-[14px] max-[880px]:leading-[1.34] max-[560px]:text-[13px] max-[560px]:leading-[1.28]">
              {p}
            </p>
          </div>
        ))}
      </div>
      <p
        className={reveal(
          active,
          6,
          "mt-4 max-w-[36ch] font-display text-[clamp(18px,1.8vw,26px)] uppercase leading-[1.12] tracking-normal max-[880px]:mt-4 max-[880px]:max-w-[30ch] max-[560px]:mt-4 max-[560px]:max-w-[31ch] max-[560px]:!text-[13px] max-[560px]:!leading-[1.12]",
        )}
      >
        The gap between "interested" and{" "}
        <span className="text-primary">"enrolled"</span> is where schools lose
        revenue every year.
      </p>
    </div>
  );
}
