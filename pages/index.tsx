import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const prompts = [
    {
      title: "Historical",
      desc: "Pick a popular historical movie (Bollywood/Tollywood etc.) and point out three major historical inaccuracies in a fun, myth-busting way.",
      url: "https://aiskillshouse.com/student/qr-mediator.html?uid=11196&promptId=15",
      border: "border-yellow-400",
      text: "text-yellow-400",
      button: "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black",
      bg: "bg-yellow-900/20",
    },
    {
      title: "Weekend plan",
      desc: "I have a week-long break. Suggest a location where I can go with my friends for a weekend getaway.",
      url: "https://aiskillshouse.com/student/qr-mediator.html?uid=11196&promptId=14",
      border: "border-green-400",
      text: "text-green-400",
      button: "border-green-400 text-green-400 hover:bg-green-400 hover:text-black",
      bg: "bg-green-900/20",
    },
    {
      title: "Festive season",
      desc: "The festive season is here. Suggest 5 creative and eco-friendly ways to decorate my home or hostel room to give it a festive vibe.",
      url: "https://aiskillshouse.com/student/qr-mediator.html?uid=11196&promptId=13",
      border: "border-blue-400",
      text: "text-blue-400",
      button: "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black",
      bg: "bg-blue-900/20",
    },
    {
      title: "Celebration",
      desc: "Help me plan a small, festive get-together for 5 friends at home. Suggest a simple menu, a music playlist.",
      url: "https://aiskillshouse.com/student/qr-mediator.html?uid=11196&promptId=16",
      border: "border-purple-400",
      text: "text-purple-400",
      button: "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black",
      bg: "bg-purple-900/20",
    },
    {
      title: "Personality",
      desc: "Ask me 5 short and simple, multiple choice questions about my personality, one by one, and then tell me what famous artist or designer I am most like.",
      url: "https://aiskillshouse.com/student/qr-mediator.html?uid=11196&promptId=17",
      border: "border-red-400",
      text: "text-red-400",
      button: "border-red-400 text-red-400 hover:bg-red-400 hover:text-black",
      bg: "bg-red-900/20",
    },
  ];

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main
        className="min-h-screen flex flex-col justify-between bg-black text-white"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* 🔥 HEADER SECTION */}
        <section className="flex flex-col items-center text-center px-4 sm:px-6 py-10 sm:py-12 max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
            Google Student Ambassador
          </h1>
          <p className="text-gray-400 mt-2 text-xs sm:text-base leading-relaxed px-2">
            empowering students with Google technologies, innovation, and
            community leadership.
          </p>

          {/* Run Prompt pill button */}
          <div className="flex items-center gap-2 sm:gap-3 mt-6">
            <Image src="/gemini.png" alt="Gemini Logo" width={24} height={24} />
            <div className="px-4 sm:px-6 py-2 rounded-full bg-gray-900 border border-gray-700 text-gray-300 text-xs sm:text-sm font-medium">
              Run Prompt
            </div>
            <Image src="/gemini.png" alt="Gemini Logo" width={24} height={24} />
          </div>

          <p className="mt-6 text-base sm:text-lg font-semibold leading-relaxed px-2">
            👉 “Run all curated prompts that support and elevate my journey as a{" "}
            <span className="text-yellow-400">
              Google Student Ambassador.
            </span>
            ”
          </p>

          <div className="flex items-center gap-2 mt-8">
            <Image src="/gemini.png" alt="Gemini Logo" width={24} height={24} />
            <span className="text-white font-bold text-lg sm:text-xl">
              Google Gemini
            </span>
            <Image src="/gemini.png" alt="Gemini Logo" width={24} height={24} />
          </div>
        </section>

        {/* 🔲 PROMPTS GRID */}
        <div className="flex flex-col items-center p-4 sm:p-8 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
            {prompts.map((p, i) => (
              <div
                key={i}
                className={`rounded-xl p-4 sm:p-6 flex flex-col justify-between hover:shadow-xl transition border-2 ${p.border} ${p.bg}`}
              >
                <div>
                  <h2
                    className={`text-base sm:text-lg font-bold mb-3 ${p.text}`}
                  >
                    {p.title}
                  </h2>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <button
                  onClick={() => window.open(p.url, "_blank")} // opens in NEW TAB
                  className={`mt-6 border-2 px-4 py-2 rounded-lg transition font-medium ${p.button}`}
                >
                  Open Prompt
                </button>
              </div>
            ))}
          </div>

          {/* ✨ NEW COMMUNITY SECTION */}
          <div className="mt-12 w-full max-w-3xl text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gradient bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Join our Gemini Community
            </h2>
            <div className="rounded-xl border-2 border-purple-400 bg-purple-900/20 p-6">
              <p className="text-gray-300 mb-4">
                Connect with other students, share ideas, and grow together!
              </p>
              <button
                onClick={() =>
                  window.open(
                    "https://aiskillshouse.com/community?userId=11196",
                    "_blank"
                  )
                }
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-6 py-2 rounded-lg font-medium transition"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="py-6 px-4 text-center text-xs sm:text-sm text-gray-400 border-t border-gray-700">
          <div className="flex justify-center items-center gap-2 sm:gap-3 flex-wrap">
            <Image src="/gemini.png" alt="Gemini Logo" width={20} height={20} />
            <p className="text-white font-semibold flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
              Google Student Ambassador
            </p>
            <Image src="/gemini.png" alt="Gemini Logo" width={20} height={20} />
          </div>
          <p className="text-gray-400 mt-1 text-xs sm:text-sm">
            Thank you for your support.
          </p>
        </footer>
      </main>
    </>
  );
}
