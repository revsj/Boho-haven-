const nightlyRates = [
  { name: "Weekday", days: "Sunday to Thursday", price: "₱2,199" },
  { name: "Weekend", days: "Friday and Saturday", price: "₱2,399" },
];

function FlowerIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-0.5 h-5 w-5 shrink-0 text-[#A8BF8E]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="9" r="2.5" />
      <path d="M12 6.5C12 4 13.5 2.5 15 3c.5 1.5-.5 3.2-3 3.5z" />
      <path d="M9.5 9C7 9 5.5 7.5 6 6c1.500-.5 3.200.5 3.500 3z" />
      <path d="M14.500 9c2.500 0 4-1.500 3.500-3-1.500-.5-3.200.5-3.500 3z" />
      <path d="M12 11.500V21" />
      <path d="M12 17c-2.500 0-4-1.200-4-3 2.500 0 4 1.200 4 3z" />
    </svg>
  );
}

export default function Rates() {
  return (
    <section
      id="rates"
      aria-labelledby="rates-heading"
      className="bg-[#2C3626] scroll-mt-16"
    >
      <div className="mx-auto max-w-5xl px-4 py-14 md:px-8 md:py-20">
        <header className="mb-10 max-w-2xl md:mb-14">
          <h2
            id="rates-heading"
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            Rates
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#D5E0C6] md:text-lg">
            Simple pricing, no surprises.
          </p>
        </header>


        <dl className="grid gap-5 sm:grid-cols-2 md:gap-6">
          {nightlyRates.map(({ name, days, price }) => (
            <div
              key={name}
              className="rounded-2xl border border-[#6B7F55]/60 bg-[#354230] p-6 md:p-8"
            >
              <dt>
                <span className="block text-xl font-semibold text-[#A8BF8E] md:text-2xl">
                  {name}
                </span>
                <span className="mt-1 block text-sm text-[#D5E0C6] md:text-base">
                  {days}
                </span>
              </dt>
              <dd className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold tabular-nums text-white md:text-5xl">
                  {price}
                </span>
                <span className="text-base text-[#D5E0C6]">per night</span>
              </dd>
            </div>
          ))}
        </dl>

      
        <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 rounded-2xl border border-[#6B7F55]/60 px-6 py-5 md:mt-6 md:px-8">
          <p className="text-lg font-semibold text-white md:text-xl">
            Extra guest
          </p>
          <p className="text-[#D5E0C6]">
            <span className="text-2xl font-bold tabular-nums text-white md:text-3xl">
              ₱300
            </span>{" "}
            per head, per night
          </p>
        </div>

     
        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-2 md:gap-12">
          <div className="flex items-start gap-3">
            <FlowerIcon />
            <p className="text-base leading-relaxed text-white md:text-lg">
              A welcome bouquet is included in every stay.
            </p>
          </div>

          <div>
            {/* <p className="text-base leading-relaxed text-white md:text-lg">
              Staying longer? We offer long-stay rates.
            </p> */}
            {/* <a
              href="#contact"
              className="mt-4 inline-flex items-center rounded-full bg-[#A8BF8E] px-6 py-3 font-semibold text-[#2C3626] transition-colors hover:bg-[#BFD1A9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Message us for a quote
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}