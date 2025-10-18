import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const prompts = [
    {
      title: "Study Plan",
      desc: "Create a 7-day study plan for my upcoming final exams, including short breaks.",
      url: "https://aiskillshouse.com/student/qr-mediator.html?uid=2242&promptId=18",
      border: "border-yellow-400",
      text: "text-yellow-400",
      button: "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black",
      bg: "bg-yellow-900/20",
    },
    {
      title: "Podcast Ideas",
      desc: "I want to start a podcast for college students. Brainstorm 5 unique podcast concepts and suggest a name and a target audience for each.",
      url: "https://aiskillshouse.com/student/qr-mediator.html?uid=2242&promptId=19",
      border: "border-green-400",
      text: "text-green-400",
      button: "border-green-400 text-green-400 hover:bg-green-400 hover:text-black",
      bg: "bg-green-900/20",
    },
    {
      title: "College Fest",
      desc: "My college fest is coming up. Help me brainstorm 5 unique ideas for a stall or event that are low-cost but can attract a lot of footfall.",
      url: "https://aiskillshouse.com/student/qr-mediator.html?uid=2242&promptId=20",
      border: "border-blue-400",
      text: "text-blue-400",
      button: "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black",
      bg: "bg-blue-900/20",
    },
    {
      title: "Track Spending",
      desc: "Suggest a fun way to track my spending that feels more like a story or game than a spreadsheet.",
      url: "https://aiskillshouse.com/student/qr-mediator.html?uid=2242&promptId=21",
      border: "border-purple-400",
      text: "text-purple-400",
      button: "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black",
      bg: "bg-purple-900/20",
    },
    {
      title: "Local Festival",
      desc: "Explain a local festival from my region to a friend from a different part of the country.",
      url: "https://aiskillshouse.com/student/qr-mediator.html?uid=2242&promptId=22",
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
                  onClick={() => window.open(p.url, "_blank")}
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
                    "https://aiskillshouse.com/community?userId=2242",
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
