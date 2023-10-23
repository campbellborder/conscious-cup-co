"use client"

import { cn } from "@/lib/utils";
import { Tooltip } from 'react-tooltip'

export default function CupSelector({cups, selectedIndex, selectIndex}: {cups: [string, string, string][], selectedIndex: number, selectIndex: (index: number) => void}) {

  return (
    <div className="flex items-center h-20">
      {cups.map(([colour, title], index) => {
        const id = `button-${index}`
        return (
          <div
            key={index}
            className={cn("w-12 h-12 mx-2 rounded-full border-2 border-gray-500 cursor-pointer", id)}
            style={{background: colour}}
            onClick={() => {console.log(index); selectIndex(index)}}
          >
            <Tooltip anchorSelect={"." + id} place="top" variant="light" style={{background: colour, fontWeight: "bold"}}>
              {title}
            </Tooltip>
          </div>
        )
      })}
      
    </div>
  )
}