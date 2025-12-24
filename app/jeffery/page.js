"use client";

export default function EpsteinBlog() {
  return (
    <div className="min-h-screen bg-[#f9f0f0] text-gray-900">
      <header className="bg-[#330f0f] text-white py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">The Jeffrey Epstein Case</h1>
          <p className="text-lg">Understanding the events and controversies</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Who Was Jeffrey Epstein?</h2>
          <p className="text-lg leading-relaxed">
            Jeffrey Epstein was an American financier and convicted sex offender. Born in 1953, he built a network of wealthy and influential contacts and became notorious for his criminal activities involving sexual abuse of minors. His case attracted worldwide attention due to his connections with powerful figures.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Criminal Activities</h2>
          <p className="text-lg leading-relaxed mb-4">
            Epstein was arrested in July 2019 on federal charges of sex trafficking of minors in Florida and New York. He allegedly recruited and abused dozens of underage girls, often in his homes in Manhattan, Palm Beach, and elsewhere. His criminal actions spanned decades, but his network and wealth helped him avoid severe consequences for years.
          </p>
          <div className="w-full h-64 mb-4">
            <img
              src="https://i.pinimg.com/736x/e5/93/ba/e593ba245c576e89ead46f2cc337d209.jpg"
              alt="Epstein-related image"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Legal Proceedings</h2>
          <p className="text-lg leading-relaxed mb-4">
            Epstein previously avoided federal charges in 2008 through a controversial plea deal, serving just 13 months in a county jail with work release privileges. His 2019 arrest renewed scrutiny of this deal and brought attention to his connections with influential people, including politicians, celebrities, and royalty.
          </p>
          <div className="w-full h-64 mb-4">
            <img
              src="https://i.pinimg.com/736x/fd/ee/3a/fdee3aacdf727fb6d05b74474611cbfa.jpg"
              alt="Court or legal image"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Death and Controversy</h2>
          <p className="text-lg leading-relaxed">
            Epstein died in August 2019 in a federal jail in Manhattan. His death was ruled a suicide, but it sparked widespread speculation and conspiracy theories due to the high-profile individuals connected to him and alleged lapses in jail security. His death ended the possibility of a trial, leaving many victims without full legal closure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Impact and Legacy</h2>
          <p className="text-lg leading-relaxed">
            The Epstein case brought significant attention to issues of sex trafficking, abuse of power, and the justice system’s handling of wealthy offenders. It prompted legal reforms, investigations into associates, and advocacy for victims’ rights. The case remains a key example of how wealth and influence can affect accountability.
          </p>
        </section>
      </main>

      <footer className="bg-[#330f0f] text-white py-8 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p>© 2025 Informative Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
