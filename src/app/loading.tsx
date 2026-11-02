import { Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="relative mx-auto w-20 h-20">
          <div className="absolute inset-0 rounded-full border-[6px] border-[#F5EDE7] border-t-[#8B5E3C] animate-spin" />
          <div className="absolute inset-3 rounded-full bg-[#F5EDE7] flex items-center justify-center">
            <Sparkles className="text-[#8B5E3C] animate-pulse" size={28} />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-[#172B4D]">Setting the Scene</h2>
          <p className="text-sm text-gray-500">Loading your creative studio experience...</p>
        </div>
        <div className="flex justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#8B5E3C] animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="h-2 w-2 rounded-full bg-[#8B5E3C] animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="h-2 w-2 rounded-full bg-[#8B5E3C] animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </main>
  );
}
