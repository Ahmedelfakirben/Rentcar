import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/212660292821"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] group"
      aria-label="WhatsApp"
    >
      {/* Main button - Minimalist Black Style */}
      <div className="relative flex items-center justify-center w-14 h-14 bg-black text-white rounded-full border border-white/20 shadow-2xl transform hover:scale-110 active:scale-95 transition-all duration-300">
        <MessageCircle size={28} strokeWidth={2} />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-black/90 backdrop-blur-md text-white text-[11px] font-bold rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase tracking-wider">
        WhatsApp
      </div>
    </a>
  );
}
