import { Inbox, Star, Paperclip } from "lucide-react";

/**
 * Fake email/inbox showing the demo arriving — third unique mockup variant.
 */
export default function InboxPreview() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a12] w-full max-w-[460px]">
      {/* Window chrome */}
      <div className="bg-[#0c0c16] px-4 py-2.5 flex items-center gap-3 border-b border-white/5">
        <Inbox className="w-3.5 h-3.5 text-slate-500" />
        <div className="text-[11px] text-slate-500 mono">Inbox</div>
        <div className="ml-auto text-[10px] text-slate-600 mono">2 new</div>
      </div>

      {/* Email row — the demo */}
      <div className="px-5 py-4 border-b border-white/5 bg-violet-500/5 relative">
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-violet-400" />
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-[11px] font-bold shrink-0">
            CD
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-0.5">
              <div className="text-[12px] font-semibold truncate">CBUS Digital</div>
              <div className="text-[10px] text-slate-500 mono shrink-0">9:41 AM</div>
            </div>
            <div className="text-[12px] font-medium mb-1 truncate">
              Your demo site is ready — take a look
            </div>
            <div className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">
              Hey! Built a first draft of your site. Here&rsquo;s the live link:
              aceplumbing.cbusdigital.com — no payment yet, just want your eyes on it.
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="inline-flex items-center gap-1 text-[10px] text-violet-300 mono bg-violet-500/10 border border-violet-500/20 rounded px-2 py-0.5">
                <Paperclip className="w-2.5 h-2.5" />
                aceplumbing.cbusdigital.com
              </div>
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Other emails (faded) */}
      {[
        { from: "Google Analytics", subj: "Your weekly report", time: "Yesterday" },
        { from: "Stripe", subj: "Payout sent", time: "Yesterday" },
      ].map((e) => (
        <div key={e.from} className="px-5 py-3 border-b border-white/5 opacity-50">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-white/5 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <div className="text-[11px] font-medium truncate text-slate-400">{e.from}</div>
                <div className="text-[10px] text-slate-600 mono shrink-0">{e.time}</div>
              </div>
              <div className="text-[11px] text-slate-500 truncate">{e.subj}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
