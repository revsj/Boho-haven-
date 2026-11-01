import TransLogo from '../assets/TransLogo1.png'

const socials = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61593880892714',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M22.675 0h-21.35C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128v-2.671c0-3.097 1.894-4.785 4.659-4.785 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.309h3.587l-.467 3.622h-3.12V24h6.119c.733 0 1.325-.592 1.325-1.324V1.325C24 .592 23.408 0 22.675 0z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/bohohaven.tagaytay/',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@bohohaven.tagaytay',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
]

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#2C3626] scroll-mt-16 text-white">
      <div className="mx-auto max-w-5xl px-4 py-14 md:px-8 md:py-20">
        {/* Call to action */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Your window is waiting
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#D5E0C6] md:text-lg">
            We keep booking simple. Message us directly and we'll confirm your
            dates by hand. No forms, no back-and-forth with a system, just a
            real reply.
          </p>
          <a
            href="https://www.facebook.com/profile.php?id=61593880892714"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-[#A8BF8E] px-7 py-3 font-semibold text-[#2C3626] transition-colors hover:bg-[#BFD1A9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Message us to book
          </a>
        </div>

      
        <div className="mt-14 border-t border-[#6B7F55]/60 pt-8 md:mt-20">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <img
              src={TransLogo}
              alt="Boho Haven"
              className="h-16 w-auto md:h-20"
            />

            <nav aria-label="Boho Haven on social media">
              <ul className="flex items-center gap-3">
                {socials.map(({ name, href, icon }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Boho Haven on ${name} (opens in a new tab)`}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6B7F55] text-white transition-colors duration-200 hover:border-[#A8BF8E] hover:text-[#A8BF8E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <p className="mt-8 text-center text-sm text-[#D5E0C6] md:text-left">
            &copy; {new Date().getFullYear()} Boho Haven in partnership with SD
            Crafts &amp; Design
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer