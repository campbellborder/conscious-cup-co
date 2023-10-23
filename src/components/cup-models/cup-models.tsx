import CupModel from "./cup-model";
import CupSelector from "./cup-selector";

export default function CupModels() {

  return (
    <div className="w-full flex flex-col items-center">
      <CupModel className="h-[400px] w-2/5"/>
      <CupSelector/>
    </div>
  )
}