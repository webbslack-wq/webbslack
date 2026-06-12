export default function AgentDemo() {
  return (
    <div className="rounded-2xl border border-white/15 bg-slate-900/80 shadow-card overflow-hidden backdrop-blur-xl">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
        <p className="font-mono text-[11px] tracking-wide text-gray-400">
          site-agent · connected ✓
        </p>
        <p className="font-mono text-[11px] tracking-wide text-gray-500">
          admin / dashboard
        </p>
      </div>

      {/* Chat exchanges */}
      <div className="space-y-4 p-5">
        <div className="flex justify-end">
          <p className="max-w-[85%] rounded-xl rounded-br-sm bg-cobalt px-4 py-3 text-sm leading-relaxed text-white">
            Change our opening hours to 10am–9pm and update the Diwali offer
            banner
          </p>
        </div>

        <div className="flex justify-start">
          <p className="max-w-[85%] rounded-xl rounded-bl-sm border border-white/10 bg-white/5 px-4 py-3 text-sm leading-relaxed text-gray-200">
            Done. Updated hours on 3 pages + new banner. Preview ready →
          </p>
        </div>

        <p className="font-mono text-[11px] tracking-wide text-gray-400">
          ✓ build passed · ✓ preview deployed · awaiting approval
        </p>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md bg-cobalt px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cobaltDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt"
        >
          Approve &amp; publish
        </button>
      </div>

      {/* Footer metadata */}
      <div className="border-t border-white/10 px-4 py-2.5">
        <p className="font-mono text-[11px] tracking-wide text-gray-500">
          preview → approve → live · full audit log
        </p>
      </div>
    </div>
  );
}
