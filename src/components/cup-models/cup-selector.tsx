"use client"

import { cn } from "@/lib/utils";
import { Tooltip } from 'react-tooltip'

export default function CupSelector() {

  const zip = (a: string[], b: string[]) => a.map((k: any, i: number) => [k, b[i]]);

  const colour_classes = ["bg-[#9FCFD6]", "bg-[#E4AE6F]", "bg-[#CF7C79]", "bg-[#CD563B]", "bg-[#75B6A7]", "bg-[#BBB5CD]"];
  const titles = ["mindfulness", "thoughts", "journaling", "exercise", "grounding", "gratitude"];

  return (
    <div className="flex items-center h-20">
      {zip(colour_classes, titles).map(([colour, title], index) => {
        return (
          <div
            key={index}
            className={cn("w-12 h-12 mx-2 rounded-full border-2 border-gray-500 cursor-pointer", colour)}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={title}
            data-tooltip-place="top"
            data-tooltip-variant="light"
            />
        )
      })}
      <Tooltip id="my-tooltip" style={{background: "#a1e0f2", fontWeight: "bold"}}/>
    </div>
  )
}