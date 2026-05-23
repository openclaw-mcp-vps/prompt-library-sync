export default function Home() {
  const faqs = [
    {
      q: "Which AI platforms are supported?",
      a: "PromptSync works with Claude, ChatGPT (GPT-4/3.5), and any OpenAI-compatible API. More integrations ship regularly."
    },
    {
      q: "Can my whole team use one account?",
      a: "Yes. Every plan includes team workspaces with role-based access so you can share and collaborate on prompts without stepping on each other."
    },
    {
      q: "Is there a free trial?",
      a: "You get a 7-day free trial on signup — no credit card required. Cancel any time before the trial ends and you won't be charged."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Nav */}
      <nav className="border-b border-[#21262d] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-lg tracking-tight">PromptSync</span>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="bg-[#58a6ff] text-[#0d1117] text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#79b8ff] transition-colors"
        >
          Start Free Trial
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#21262d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          For AI-heavy teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
          Sync prompts across{" "}
          <span className="text-[#58a6ff]">Claude, ChatGPT</span>
          {" "}and your whole team
        </h1>
        <p className="text-[#8b949e] text-lg max-w-2xl mx-auto mb-10">
          One central hub to create, version, and deploy prompt templates to every AI tool your agency uses — no more copy-pasting across tabs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-3 rounded-md hover:bg-[#79b8ff] transition-colors text-base"
          >
            Get started — $29/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] text-[#c9d1d9] font-semibold px-8 py-3 rounded-md hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors text-base"
          >
            Learn more
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: "Version Control", desc: "Track every change to your prompts with full history and rollback." },
            { title: "Team Workspaces", desc: "Share prompt libraries with your team and control who can edit." },
            { title: "One-Click Sync", desc: "Push the same prompt to Claude and ChatGPT simultaneously." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#21262d] rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple, flat pricing</h2>
        <p className="text-[#8b949e] mb-12">Everything you need. No seat fees, no surprises.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-8">per month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited prompt templates",
              "Claude + ChatGPT sync",
              "Team workspaces (up to 10 members)",
              "Version history & rollback",
              "API access",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] text-[#0d1117] font-bold py-3 rounded-md hover:bg-[#79b8ff] transition-colors text-center"
          >
            Start 7-day free trial
          </a>
          <p className="text-[#8b949e] text-xs mt-3">No credit card required</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently asked questions</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#21262d] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} PromptSync. All rights reserved.</p>
      </footer>
    </main>
  );
}
