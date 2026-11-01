const notes = [
  {
    label: "From the host",
    message:
      "Welcome to Boho Haven. We've designed this space as your personal escape, a place where the Taal view becomes your meditation, and comfort meets adventure. Every detail, from the smart amenities to the cozy corners, is here to make your stay unforgettable. Enjoy.",
    name: "Jeremy Dimaangay",
    role: "Owner, Boho Haven Tagaytay",
  },
  {
    label: "From the Florist",
    message:
      "From SD Crafts & Design, we believe fearless is not the absence of fear, it's moving forward despite it. Each bouquet in your welcome gift carries that spirit. We craft with love, and we hope it brings a touch of artistry to your stay.",
    name: "Shynna Mae Amban",
    role: "Owner, SD Crafts & Design",
  },
];

function SproutIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 40"
      className="h-9 w-7 text-[#55663F]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 38V14" />
      <path d="M16 22c-5 0-8-3-8-8 5 0 8 3 8 8z" />
      <path d="M16 16c5 0 8-3 8-8-5 0-8 3-8 8z" />
      <path d="M16 30c-4 0-6-2-6-6 4 0 6 2 6 6z" />
    </svg>
  );
}

export default function Note() {
  return (
    <section
      id="notes"
      aria-labelledby="notes-heading"
      className="bg-[#E2D6C1] scroll-mt-16"
    >
      <div className="mx-auto max-w-5xl px-4 py-14 md:px-8 md:py-20">
        <h2
          id="notes-heading"
          className="mb-10 max-w-2xl text-3xl font-bold tracking-tight text-[#2C3626] md:mb-14 md:text-5xl"
        >
          From the card on your table
        </h2>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {notes.map(({ label, message, name, role }) => (
            <article
              key={label}
              className="relative rounded-sm border border-[#C9B99A] bg-[#F7F1E5] p-3 shadow-sm"
            >
       
              <div className="flex h-full flex-col border border-[#D8C9AE] px-6 py-8 md:px-8 md:py-10">
                <SproutIcon />

                <h3 className="mt-6 text-sm font-semibold tracking-widest text-[#55663F]">
                  {label}
                </h3>

                <blockquote className="mt-4 flex-1 font-['Fraunces',Georgia,serif] text-lg leading-relaxed text-[#2C3626] md:text-xl">
                  <p>{message}</p>
                </blockquote>

                <footer className="mt-8 border-t border-[#D8C9AE] pt-6">
                  <p className="font-['Fraunces',Georgia,serif] text-2xl font-semibold italic text-[#8A5A3C] md:text-3xl">
                    {name}
                  </p>
                  <p className="mt-2 text-xs tracking-wider text-[#5E5646]">
                    {role}
                  </p>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}