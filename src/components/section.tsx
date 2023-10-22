import { cn } from "@/lib/utils"


export default function Section({children, top_edge, bottom_edge, className}: {children: React.ReactNode, top_edge?: string, bottom_edge?: string, className?: string}) {
  return (
    <div className={cn("w-full h-[600px] odd:bg-white even:bg-[#a1e0f2] relative overflow-visible -md-1", className)}>
      {top_edge == "wave" && (
      <svg className="absolute top-0 w-full" viewBox="0 10 100 10">
        <path d="M0 10 Q 12.5 0 25 10 T 50 10 T 75 10 T 100 10 L 100 10 L 0 10 Z" fill="#a1e0f2"/>
      </svg>
      )}
      {children}
      {bottom_edge == "wave" && (
      <svg className="absolute bottom-0 w-full" viewBox="0 0 100 10">
        <path d="M0 10 Q 12.5 0 25 10 T 50 10 T 75 10 T 100 10 L 100 10 L 0 10 Z" fill="white"/>
      </svg>
      )}
    </div>
  )
};