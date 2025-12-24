"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f9e8e8] text-gray-900">
      <header className="bg-[#4d1a1a] text-white py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Matriarchy</h1>
          <p className="text-lg">Empowering women through knowledge and support</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#330f0f]">Our Mission</h2>
          <p className="text-lg leading-relaxed mb-4">
            Matriarchy is dedicated to uplifting women by providing easy access to legal information, resources, and guidance. Our goal is to educate and empower women to understand their rights and take confident steps toward independence and safety.
          </p>
          <div className="w-full h-64 mb-4">
            <img
              src="https://i.pinimg.com/1200x/50/1a/99/501a995b121acea1fa768fc9c2c78390.jpg"
              alt="Empowering women"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#330f0f]">What We Offer</h2>
          <p className="text-lg leading-relaxed mb-4">
            We provide information on workplace rights, health and safety, family and marriage, and education rights. By simplifying complex legal topics, we make knowledge accessible for all women.
          </p>
          <div className="w-full h-64 mb-4">
            <img
              src="https://i.pinimg.com/736x/89/e9/77/89e9777d7aa967ccdc5f87b830cd7d2c.jpg"
              alt="Resources for women"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#330f0f]">Our Vision</h2>
          <p className="text-lg leading-relaxed mb-4">
            We envision a world where every woman feels empowered to make informed decisions about her life. Matriarchy serves as a safe digital space that fosters learning, growth, and solidarity among women.
          </p>
          <div className="w-full h-64 mb-4">
            <img
              src="https://i.pinimg.com/736x/df/fb/c4/dffbc4f7078c041e5d8b1e3573c8bbfb.jpg"
              alt="Vision for women empowerment"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </section>
      </main>

      <footer className="bg-[#4d1a1a] text-white py-8 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p>© 2025 Matriarchy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
