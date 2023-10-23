"use client"

import { useState } from "react";
import CupModel from "./cup-model";
import CupSelector from "./cup-selector";

export default function CupModels() {

  const [selectedIndex, selectIndex] = useState(0)

  const cups: [string, string, string][] = [
    ["#9FCFD6", "mindfulness", "takeaway/scene.gltf"],
    ["#E4AE6F", "thoughts", "mug/scene.gltf"],
    ["#CF7C79", "journaling", "low_poly_takeaway/scene.gltf"],
    ["#CD563B", "exercise", "takeaway/scene.gltf"],
    ["#75B6A7", "grounding", "mug/scene.gltf"],
    ["#BBB5CD", "gratitude", "low_poly_takeaway/scene.gltf"]
  ]

  return (
    <div className="w-full flex flex-col items-center">
      <CupModel path={cups[selectedIndex][2]} className="h-[400px] w-2/5"/>
      <CupSelector cups={cups} selectedIndex={selectedIndex} selectIndex={selectIndex}/>
    </div>
  )
}