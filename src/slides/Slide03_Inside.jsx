import {
  assetUrl,
  cx,
  eyebrow,
  headingLg,
  reveal,
  slideInner,
  stagger,
} from "../theme.js";

const gaps = [
  [
    "01",
    "US preschools run two enrollment windows â€” Fall (Jan-Apr for Aug/Sep start) and Mid-Year (Jan intake). Most agencies miss the timing.",
  ],
  [
    "02",
    "Agencies start campaigns when you ask â€” not when parents are deciding.",
  ],
  [
    "03",
    "Creative built for clicks, not parent trust. Looks good on a report. Doesn't convert.",
  ],
  [
    "04",
    "Reports show reach & impressions â€” never enquiries, tours booked, or enrollments influenced.",
  ],
  ["05", "You manage multiple vendors with no single accountability."],
  ["06", "That's the gap. We were built to fill it."],
];

export default function Slide03({ active }) {
  return (
    <div
      className={`${slideInner} max-[880px]:justify-start max-[560px]:justify-start`}
    >
      <div className="grid grid-cols-[minmax(0,760px)_minmax(260px,420px)] items-center justify-between gap-16 max-[880px]:grid-cols-1 max-[880px]:gap-5">
        <div className="w-full max-w-[760px]">
          <div
            className={reveal(
              active,
              1,
              cx(
                eyebrow,
                "mb-4 text-primary max-[880px]:mb-3 max-[560px]:mb-2 max-[560px]:gap-2 max-[560px]:text-[9px] max-[560px]:before:w-5",
              ),
            )}
          >
            Inside the Preschool World
          </div>
          <h2
            className={reveal(
              active,
              2,
              `${headingLg} max-w-[25ch] max-[880px]:!text-[28px] max-[880px]:!leading-[1.08] max-[560px]:max-w-[22ch] max-[560px]:!text-[23px] max-[560px]:!leading-[1.1]`,
            )}
          >
            We understand your{" "}
            <span className="text-primary">admission calendar.</span> Most
            agencies don't.
          </h2>
          <div className="mt-5 w-full text-left max-[880px]:mt-4 max-[560px]:mt-4">
            {gaps.map(([n, p], i) => (
              <div
                key={n}
                className={stagger(
                  active,
                  i,
                  "grid grid-cols-[36px_1fr] items-start gap-3 border-b border-white/15 py-2 text-left max-[880px]:grid-cols-[32px_1fr] max-[880px]:gap-2.5 max-[880px]:py-1.5 max-[560px]:grid-cols-[25px_1fr] max-[560px]:gap-3 max-[560px]:py-2.5",
                )}
              >
                <span className="font-display text-base leading-none text-primary max-[880px]:text-sm max-[560px]:!text-[12px]">
                  {n}
                </span>
                <p className="text-left text-[14.5px] leading-[1.42] text-white/85 max-[880px]:text-[13.6px] max-[880px]:leading-[1.3] max-[560px]:text-[13px] max-[560px]:leading-[1.22]">
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
        <img
          src={assetUrl("entrollment.png")}
          alt="Parents walking with their child outside a premium school"
          className={reveal(
            active,
            3,
            "block w-full max-w-[420px] object-contain max-[880px]:hidden",
          )}
        />
      </div>
    </div>
  );
}
