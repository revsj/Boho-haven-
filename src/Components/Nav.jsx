import { useEffect, useState } from 'react'
import TransLogo from '../assets/TransLogo1.png'

const links = [
  { label: 'Amenities', href: '#inside' },
  { label: 'Rates', href: '#rates' },
  { label: 'Contact', href: '#contact' },
]

export default function Content() {
  const [open, setOpen] = useState(false)


  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <nav aria-label="Main" className="relative bg-transparent px-4 py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 md:px-12 lg:px-20">
        {/* Logo */}
        <img
          src={TransLogo}
          alt="Boho Haven"
          className="h-14 w-auto sm:h-20"
        />

        <div className="flex items-center gap-3 md:gap-8">
          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="rounded text-base font-medium text-white/90 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>


          <a
            href="https://www.facebook.com/profile.php?id=61593880892714"
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#6B7F55]
              shadow-sm transition-all duration-200
              hover:-translate-y-0.5 hover:bg-[#F4F1DE] hover:shadow-md
              active:translate-y-0 active:shadow-sm
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
              sm:px-6
            "
          >
            Book via FB
          </a>


          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-black/30 text-white transition-colors hover:bg-black/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden cursor-pointer"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>


      {open && (
        <ul
          id="mobile-menu"
          className="absolute inset-x-4 top-full mt-1 rounded-2xl border border-[#6B7F55]/60 bg-[#2C3626] p-2 shadow-lg md:hidden cursor-pointer"
        >
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-lg font-medium text-white transition-colors hover:bg-[#354230] focus-visible:outline-2 focus-visible:outline-offset-2px focus-visible:outline-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}