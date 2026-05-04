import { assetUrl, eyebrow, headingLg, reveal, slideInner, stagger } from "../theme.js";

const items = [
  [
    "Emotion-led",
    "Choosing a school is one of the most emotional decisions a parent ever makes. We design around warmth, safety, trust, aspiration.",
  ],
  [
    "Brand-aligned",
    "We work within your existing brand guidelines - or help you build new ones from scratch.",
  ],
  ["Premium invites", "Open house invitations that look premium and feel personal."],
  [
    "Stop-the-scroll",
    "Social ads that interrupt parents mid-feed without feeling like an ad.",
  ],
  [
    "Conversational",
    "WhatsApp messages that feel like a conversation, not a broadcast.",
  ],
  [
    "Trust-building",
    "Email sequences that build trust over weeks, not pressure in one shot.",
  ],
];

export default function Slide07({ active }) {
  return (
    <div className={`${slideInner} mt-10 max-[880px]:mt-0 max-[880px]:justify-start max-[560px]:justify-start`}>
      <div
        className={reveal(
          active,
          1,
          `${eyebrow} max-[560px]:gap-2 max-[560px]:text-[9px] max-[560px]:before:w-5`,
        )}
      >
        Creative That Wins Parents
      </div>
      <div className="mt-[18px] grid grid-cols-[minmax(0,760px)_minmax(260px,380px)] items-center justify-between gap-16 max-[880px]:mt-4 max-[880px]:grid-cols-1 max-[880px]:gap-5 max-[560px]:mt-3">
        <div className="w-full max-w-[760px]">
          <h2
            className={reveal(
              active,
              2,
              `${headingLg} max-w-[24ch] max-[880px]:!text-[28px] max-[880px]:!leading-[1.08] max-[560px]:!text-[23px] max-[560px]:!leading-[1.1]`,
            )}
          >
            Parents don't enroll in schools.{" "}
            <span className="text-primary">They enroll in feelings.</span>
          </h2>
          <div className="mt-3.5 border-t-[1.5px] border-primary text-left max-[560px]:mt-2.5">
            {items.map(([k, v], i) => (
              <div
                key={k}
                className={stagger(
                  active,
                  i,
                  "border-b border-white/15 py-2.5 text-left text-[15px] leading-[1.45] text-white/90 max-[880px]:py-2 max-[880px]:text-[13.4px] max-[880px]:leading-[1.32] max-[560px]:py-2.5 max-[560px]:text-[12.8px] max-[560px]:leading-[1.24]",
                )}
              >
                <strong className="mr-2 inline-block font-display text-[13px] font-normal uppercase tracking-normal text-primary after:ml-2 after:font-bold after:text-primary after:content-['-'] max-[880px]:text-[11.5px] max-[560px]:text-[11px]">
                  {k}
                </strong>
                {v}
              </div>
            ))}
          </div>
        </div>
        <div
          className={reveal(
            active,
            3,
            "relative flex aspect-square w-full max-w-[380px] items-center justify-center overflow-hidden border-2 border-primary bg-deck-deep text-white max-[880px]:hidden",
          )}
        >
          <img
            src={assetUrl("parent-school-arrival.png")}
            alt="Parents walking with their child outside a premium school"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
