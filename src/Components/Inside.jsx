const amenities = [
  {
    title: "Rest",
    items: [
      "King bed",
      "Sofa bed",
      "Smart room controls",
      "Taal Lake view",
      "Unlimited Wi-Fi",
    ],
  },
  {
    title: "Play",
    items: ['55" Smart TV with Netflix and Spotify', "PlayStation", "Karaoke"],
  },
  {
    title: "Board games",
    items: ["Monopoly", "Guess Who", "Jenga", "Chess", "Uno"],
  },
  {
    title: "Kitchen",
    items: [
      "Refrigerator",
      "Microwave",
      "Induction cooker",
      "Rice cooker",
      "Electric kettle",
    ],
  },
]

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="mt-1 h-4 w-4 shrink-0 text-[#A8BF8E]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

export default function Inside() {
  return (
    <section
      id="inside"
      aria-labelledby="inside-heading"
      className="bg-[#2C3626] scroll-mt-16"
    >
      <div className="mx-auto max-w-5xl px-4 py-14 md:px-8 md:py-20">
        <header className="mb-10 max-w-2xl md:mb-14">
          <h2
            id="inside-heading"
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            Inside the Haven
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#D5E0C6] md:text-lg">
            Everything you need for a cozy stay.
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 md:gap-6">
          {amenities.map(({ title, items }) => (
            <article
              key={title}
              className="rounded-2xl border border-[#6B7F55]/60 bg-[#354230] p-6 md:p-7"
            >
              <h3 className="mb-4 text-xl font-semibold text-[#A8BF8E] md:text-2xl">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base leading-snug text-white md:text-lg"
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
