import { assetUrl, reveal } from "../theme.js";

export default function Slide01({ active }) {
  return (
    <div className="relative z-10 mx-auto grid min-h-0 w-full max-w-[1280px] flex-1 grid-rows-[minmax(0,1fr)_auto] items-center gap-4 pb-1 pt-2 sm:gap-6 sm:pb-3 sm:pt-5 md:grid-cols-[minmax(0,760px)_minmax(220px,320px)] md:grid-rows-1 md:gap-12 md:pb-10 md:pt-16">
      <div className="min-w-0 self-center">
        <h1 className="mb-4 max-w-full font-display text-[clamp(2rem,9.4vw,2.75rem)] font-normal uppercase leading-[1.02] tracking-normal min-[390px]:text-[clamp(2.25rem,9.2vw,3.1rem)] sm:mb-6 sm:text-[clamp(2.8rem,8vw,4.25rem)] md:mb-9 md:max-w-[760px] md:text-[clamp(3rem,5.8vw,4.5rem)] md:leading-[1.03]">
          <span className={reveal(active, 1, "block text-white md:inline")}>
            More
          </span>
          <span
            className={reveal(
              active,
              1,
              "block text-[clamp(1.5rem,7.4vw,2.05rem)] text-primary sm:text-[clamp(2.5rem,8vw,4.25rem)] md:inline md:pl-4 md:text-[clamp(3rem,5.8vw,4.5rem)]",
            )}
          >
            enrollments.
          </span>
          <span className={reveal(active, 2, "block text-white md:block")}>
            Fewer
          </span>
          <span className={reveal(active, 2, "block text-white md:inline")}>
            empty
          </span>
          <span
            className={reveal(active, 2, "block text-white md:inline md:pl-4")}
          >
            seats<span className="text-primary">.</span>
          </span>
        </h1>

        <div
          className={reveal(
            active,
            4,
            "border-t border-white/15 pt-3.5 md:pt-3.5",
          )}
        >
          <p className="max-w-[34ch] text-sm font-semibold leading-[1.42] text-white/75 min-[390px]:text-[15px] sm:text-base md:max-w-[48ch]">
            Full-service marketing for preschools &amp; daycare centers - from
            first impression to first day of school.
          </p>
        </div>

      </div>

      <div
        className={reveal(
          active,
          3,
          "flex min-h-0 items-end justify-end self-end md:self-end",
        )}
      >
        <img
          src={assetUrl("Mascot_teacher (2).png")}
          alt=""
          aria-hidden="true"
          className="w-[min(42vw,140px)] max-w-none select-none sm:w-[170px] md:w-[200px] max-[880px]:md:w-[180px] lg:w-[220px]"
        />
      </div>
    </div>
  );
}
