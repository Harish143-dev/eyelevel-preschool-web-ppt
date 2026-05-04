import { useEffect, useMemo, useRef, useState } from "react";
import { assetUrl, cx } from "./theme.js";

import Slide01 from "./slides/Slide01_Cover.jsx";
import Slide02 from "./slides/Slide02_Problem.jsx";
import Slide03 from "./slides/Slide03_Inside.jsx";
import Slide04 from "./slides/Slide04_Who.jsx";
import Slide05 from "./slides/Slide05_What.jsx";
import Slide06 from "./slides/Slide06_Funnel.jsx";
import Slide07 from "./slides/Slide07_Creative.jsx";
import Slide08 from "./slides/Slide08_Tech.jsx";
import Slide09 from "./slides/Slide09_Why.jsx";
import Slide10 from "./slides/Slide10_Talk.jsx";

const SLIDES = [
  { id: "s1", label: "01 Cover", Component: Slide01 },
  { id: "s2", label: "02 The Problem", Component: Slide02 },
  { id: "s3", label: "03 Inside the Preschool", Component: Slide03 },
  { id: "s4", label: "04 Who We Are", Component: Slide04 },
  { id: "s5", label: "05 What We Do", Component: Slide05 },
  { id: "s6", label: "06 Enrollment Funnel", Component: Slide06 },
  { id: "s7", label: "07 Creative", Component: Slide07 },
  { id: "s8", label: "08 The Tech", Component: Slide08 },
  { id: "s9", label: "09 Why EyeLevel", Component: Slide09 },
  { id: "s10", label: "10 Let's Talk", Component: Slide10 },
];

const TRANSITION_MS = 460;

export default function App() {
  const [active, setActive] = useState(() => {
    if (typeof window === "undefined") return 0;
    const idx = SLIDES.findIndex((s) => `#${s.id}` === window.location.hash);
    return idx > 0 ? idx : 0;
  });
  const isTransitioningRef = useRef(false);
  const wheelLockRef = useRef(false);
  const wheelTimerRef = useRef(null);
  const touchStartRef = useRef(null);

  const total = SLIDES.length;

  const goTo = useMemo(
    () => (idx) => {
      if (idx < 0 || idx >= total) return;
      if (isTransitioningRef.current) return;
      if (idx === active) return;
      isTransitioningRef.current = true;
      setActive(idx);
      const id = SLIDES[idx].id;
      try {
        window.history.replaceState(null, "", `#${id}`);
      } catch (_) {}
      try {
        window.parent.postMessage({ slideIndexChanged: idx }, "*");
      } catch (_) {}
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, TRANSITION_MS);
    },
    [active, total],
  );

  const next = () => goTo(Math.min(active + 1, total - 1));
  const prev = () => goTo(Math.max(active - 1, 0));

  useEffect(() => {
    const onWheel = (e) => {
      e.preventDefault();
      if (isTransitioningRef.current || wheelLockRef.current) return;
      if (Math.abs(e.deltaY) < 8) return;
      wheelLockRef.current = true;
      if (e.deltaY > 0) next();
      else prev();
      const release = () => {
        clearTimeout(wheelTimerRef.current);
        wheelTimerRef.current = setTimeout(() => {
          wheelLockRef.current = false;
        }, 250);
      };
      release();
      const onTick = (ev) => {
        ev.preventDefault();
        release();
      };
      window.addEventListener("wheel", onTick, { passive: false });
      setTimeout(
        () => window.removeEventListener("wheel", onTick),
        TRANSITION_MS + 400,
      );
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [active]);

  useEffect(() => {
    const onKey = (e) => {
      if (["ArrowDown", "PageDown", " ", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
        next();
      } else if (["ArrowUp", "PageUp", "ArrowLeft"].includes(e.key)) {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") goTo(0);
      else if (e.key === "End") goTo(total - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  useEffect(() => {
    const onStart = (e) => {
      if (e.touches.length !== 1) return;
      const scrollEl = e.target.closest?.("[data-slide-scroll]");
      touchStartRef.current = {
        y: e.touches[0].clientY,
        x: e.touches[0].clientX,
        scrollEl,
        scrollTop: scrollEl?.scrollTop ?? 0,
      };
    };
    const onMove = (e) => {
      if (touchStartRef.current?.scrollEl) return;
      if (touchStartRef.current) e.preventDefault();
    };
    const onEnd = (e) => {
      const start = touchStartRef.current;
      if (!start) return;
      if (start.scrollEl && Math.abs(start.scrollEl.scrollTop - start.scrollTop) > 4) {
        touchStartRef.current = null;
        return;
      }
      const t = e.changedTouches[0];
      const dy = t.clientY - start.y;
      const dx = t.clientX - start.x;
      touchStartRef.current = null;
      if (Math.abs(dy) < 50 || Math.abs(dx) > Math.abs(dy)) return;
      if (dy < 0) next();
      else prev();
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [active]);

  const progressPct = ((active + 1) / total) * 100;
  const counter = `${String(active + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[90] h-[3px] bg-white/10">
        <div
          className="h-full bg-primary transition-[width] duration-200 ease-out"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <div className="pointer-events-none fixed left-6 right-6 top-[18px] z-80 flex items-center justify-between pl-0 max-[560px]:left-4 max-[560px]:right-4 max-[560px]:top-4 md:pl-6">
        <a
          className="pointer-events-auto flex items-center gap-2.5 px-1 py-1.5 font-display text-xl uppercase tracking-normal text-white no-underline mix-blend-difference"
          href="#s1"
          onClick={(e) => {
            e.preventDefault();
            goTo(0);
          }}
        >
          <img
            src={assetUrl("eyelevel-logo-color-new.png")}
            alt=""
            className="block h-[28px] w-auto max-[560px]:h-[24px] md:h-[32px] md:h-[38px]"
          />
        </a>
        <div className="pointer-events-auto px-1 py-1.5 font-mono text-[11px] tracking-[0.16em] text-white mix-blend-difference">
          {counter}
        </div>
      </div>

      <nav className="fixed right-[22px] top-1/2 z-[85] flex -translate-y-1/2 flex-col gap-3 max-[880px]:hidden">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            className={cx(
              "group relative h-[9px] w-[9px] rotate-45 cursor-pointer border-[1.5px] bg-transparent p-0 transition-all",
              i === active
                ? "scale-[1.4] border-primary bg-primary text-primary"
                : "border-white/40 text-white/40 hover:border-primary hover:text-primary",
            )}
            aria-label={`Go to ${s.label}`}
            onClick={() => goTo(i)}
          >
            <span className="pointer-events-none absolute right-[18px] top-1/2 origin-right -translate-y-1/2 -rotate-45 whitespace-nowrap bg-primary px-[9px] py-[5px] font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-bg opacity-0 transition group-hover:opacity-100">
              {s.label}
            </span>
          </button>
        ))}
      </nav>

      <a
        href="#s10"
        className="fixed bottom-5 right-5 z-[85] inline-flex items-center gap-2.5 rounded-full border-2 border-deck-deep bg-primary px-5 py-3 text-[13px] font-bold uppercase tracking-[0.04em] text-bg no-underline shadow-[6px_6px_0_#152820] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#152820] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_#152820] max-[880px]:bottom-3.5 max-[880px]:right-3.5 max-[880px]:px-4 max-[880px]:py-2.5 max-[880px]:text-xs max-[880px]:shadow-[4px_4px_0_#152820] max-[560px]:bottom-4 max-[560px]:right-4 max-[560px]:px-3.5 max-[560px]:py-2 max-[560px]:text-[11px] max-[560px]:shadow-[3px_3px_0_#152820]"
        onClick={(e) => {
          e.preventDefault();
          goTo(total - 1);
        }}
      >
        Book a Call
        <span>→</span>
      </a>

      <div className="fixed inset-0 h-[100svh] w-screen overflow-hidden">
        {SLIDES.map((s, i) => {
          const Comp = s.Component;
          const isActive = i === active;
          return (
            <section
              key={s.id}
              id={s.id}
              className={cx(
                "absolute inset-0 z-[1] flex h-[100svh] w-full flex-col overflow-hidden bg-bg px-16 pb-[110px] pt-20 text-white transition-all duration-[420ms] ease-out will-change-transform max-[880px]:overflow-y-auto max-[880px]:px-8 max-[880px]:pb-[108px] max-[880px]:pt-[88px] max-[560px]:px-5 max-[560px]:pb-[108px] max-[560px]:pt-[72px]",
                isActive
                  ? "z-[2] scale-100 opacity-100"
                  : "pointer-events-none scale-[1.012] opacity-0",
              )}
              data-slide-scroll
              data-screen-label={s.label}
            >
              <Comp active={isActive} isLast={i === total - 1} />
            </section>
          );
        })}
      </div>
    </>
  );
}
