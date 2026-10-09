import { useEffect, useRef, useState } from "react";
import { Bot, Send, X } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "assistant", content: "Hii, welcome to Chinmayi's futuristic world! Ask me anything about her skills, projects, achievements, or how to reach her." },
  ]);
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), [msgs, open]);

  // Hide the greeting bubble after 6 seconds or if user clicks anywhere
  useEffect(() => {
    if (hasOpened) return;

    const timer = setTimeout(() => {
      setHasOpened(true);
    }, 6000);

    const handleClick = () => {
      setHasOpened(true);
    };

    window.addEventListener("click", handleClick);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("click", handleClick);
    };
  }, [hasOpened]);

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    const next: Msg[] = [...msgs, { role: "user", content: text }];
    setMsgs([...next, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(1) }),
      });
      if (!res.ok || !res.body) throw new Error(await res.text());
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      let acc = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += dec.decode(value, { stream: true });
        setMsgs([...next, { role: "assistant", content: acc }]);
      }
      if (!acc) setMsgs([...next, { role: "assistant", content: "Sorry, I couldn't answer that." }]);
    } catch (e) {
      setMsgs([...next, { role: "assistant", content: (e as Error).message || "Something went wrong." }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[28rem] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-primary">
              <Bot className="h-4 w-4" /> ASK ABOUT CHINMAYI
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-muted-foreground hover:text-primary">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm">
            {msgs.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex"}>
                <div className={m.role === "user" ? "max-w-[85%] rounded-lg bg-primary px-3 py-2 text-primary-foreground" : "max-w-[85%] whitespace-pre-wrap text-foreground"}>
                  {m.content || <span className="animate-pulse text-muted-foreground">Thinking…</span>}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <form onSubmit={(e) => { e.preventDefault(); send(); }} className="flex gap-2 border-t border-border p-3">
            <input
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question…"
              className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
            <button type="submit" disabled={busy} aria-label="Send" className="rounded-md bg-primary px-3 text-primary-foreground disabled:opacity-50">
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
      {!hasOpened && !open && (
        <div className="fixed bottom-24 right-5 z-50 mb-2 max-w-xs animate-bounce rounded-2xl rounded-br-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-xl">
          Hii, welcome to Chinmayi's futuristic world! 👋 Let's chat!
        </div>
      )}
      <button
        onClick={() => {
          setOpen((o) => !o);
          setHasOpened(true);
        }}
        aria-label="Open chat"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
      >
        {open ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </button>
    </>
  );
}
