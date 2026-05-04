import { eyebrow, headingLg, reveal, slideInner, stagger } from "../theme.js";

const items = [
  ["01", "Globally tested", "Preschool brands across the US, UK, UAE, France & India."],
  [
    "02",
    "Full-stack team",
    "Designers, editors, marketers, developers, CRM specialists, strategists - one point of contact.",
  ],
  [
    "03",
    "Preschool specialists",
    "We understand admissions psychology, not just marketing mechanics.",
  ],
  [
    "04",
    "Globally delivered",
    "India-based, international quality - a cost advantage that does more with your budget.",
  ],
  [
    "05",
    "No vendor juggling",
    "One team handles everything from a social ad to a CRM integration.",
  ],
  ["06", "Your seats, our system", "You focus on the children. We fill the school."],
];

export default function Slide09({ active }) {
  return (
    <div className={`${slideInner} mt-10 max-[880px]:mt-0 max-[880px]:justify-start max-[560px]:justify-start`}>
      <div
        className={reveal(
          active,
          1,
          `${eyebrow} max-[560px]:gap-2 max-[560px]:text-[9px] max-[560px]:before:w-5`,
        )}
      >
        Why EyeLevel
      </div>
      <h2
        className={reveal(
          active,
          2,
          `${headingLg} mt-2.5 max-w-[25ch] max-[880px]:mt-2 max-[880px]:!text-[26px] max-[880px]:!leading-[1.08] max-[560px]:mt-1.5 max-[560px]:!text-[23px] max-[560px]:!leading-[1.1]`,
        )}
      >
        International quality.{" "}
        <span className="text-primary">Preschool expertise.</span> Real value.
      </h2>
      <div className="mt-6 grid grid-cols-3 border-l-[1.5px] border-t-[1.5px] border-white text-left max-[880px]:mt-4 max-[880px]:grid-cols-1 max-[880px]:border-l-0 max-[560px]:mt-4">
        {items.map(([n, t, p], i) => (
          <div
            key={n}
            className={stagger(
              active,
              i,
              "flex min-h-40 flex-col gap-2 border-b-[1.5px] border-r-[1.5px] border-white p-[18px] pb-[22px] text-left max-[880px]:min-h-0 max-[880px]:grid max-[880px]:grid-cols-[34px_minmax(150px,0.65fr)_1fr] max-[880px]:items-start max-[880px]:gap-3 max-[880px]:border-r-0 max-[880px]:p-3 max-[560px]:grid-cols-[25px_1fr] max-[560px]:gap-x-3 max-[560px]:gap-y-2 max-[560px]:p-3.5",
            )}
          >
            <span className="font-display text-lg leading-none text-primary max-[880px]:text-base max-[560px]:!text-[12px]">
              {n}
            </span>
            <div className="font-display text-lg uppercase leading-none tracking-normal max-[880px]:text-[13px] max-[560px]:!text-[13.5px]">
              {t}
            </div>
            <p className="mt-auto max-w-[38ch] text-left text-[13.5px] leading-normal text-white/80 max-[880px]:mt-0 max-[880px]:max-w-none max-[880px]:text-[12.5px] max-[880px]:leading-[1.28] max-[560px]:col-span-2 max-[560px]:text-[12.8px]">
              {p}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
