export const cx = (...classes) => classes.filter(Boolean).join(' ')

export const assetUrl = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

const revealDelays = {
  1: 'delay-[60ms]',
  2: 'delay-[140ms]',
  3: 'delay-[220ms]',
  4: 'delay-[300ms]',
  5: 'delay-[380ms]',
  6: 'delay-[460ms]',
}

export const reveal = (active, delay = 1, extra = '') =>
  cx(
    'transition-all duration-500 ease-out',
    revealDelays[delay],
    active ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
    extra,
  )

export const stagger = (active, index = 0, extra = '') => {
  const delays = [
    'delay-100',
    'delay-[160ms]',
    'delay-[220ms]',
    'delay-[280ms]',
    'delay-[340ms]',
    'delay-[400ms]',
    'delay-[460ms]',
    'delay-[520ms]',
  ]

  return cx(
    'transition-all duration-[450ms] ease-out',
    delays[index] || 'delay-[520ms]',
    active ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
    extra,
  )
}

export const slideInner =
  'mx-auto flex min-h-0 w-full max-w-[1280px] flex-1 flex-col justify-center'

export const eyebrow =
  "flex items-center gap-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-primary opacity-85 before:block before:h-0.5 before:w-7 before:bg-current before:opacity-60"

export const display =
  'font-display font-normal uppercase leading-[1.04] tracking-normal'

export const headingLg = cx(display, 'text-[clamp(28px,3.4vw,48px)] max-[880px]:text-[34px] max-[560px]:text-[28px]')

export const headingHero = cx(display, 'text-[clamp(44px,6.4vw,88px)] leading-[1.02] max-[880px]:text-[48px] max-[560px]:text-[36px]')

export const headingFinal = cx(display, 'text-[clamp(40px,5.4vw,72px)] leading-[1.02] max-[880px]:text-[44px] max-[560px]:text-[34px]')

export const cta =
  'inline-flex w-fit items-center gap-2.5 rounded-full border-2 border-deck-deep bg-primary px-6 py-4 font-display text-lg uppercase tracking-normal text-bg no-underline shadow-[6px_6px_0_#152820] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#152820] max-[560px]:px-4 max-[560px]:py-3 max-[560px]:text-sm'
