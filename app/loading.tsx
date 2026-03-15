"use client";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full z-[9999] pointer-events-none">
      <div 
        className="h-[2px] bg-black origin-left animate-loading-bar"
        style={{
          boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}
      />
      <style jsx global>{`
        @keyframes loading-bar {
          0% {
            transform: scaleX(0);
            opacity: 1;
          }
          50% {
            transform: scaleX(0.7);
            opacity: 1;
          }
          100% {
            transform: scaleX(1);
            opacity: 0;
          }
        }
        .animate-loading-bar {
          animation: loading-bar 2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>
    </div>
  );
}
