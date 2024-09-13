import StepPage from "../components/State";
import PlayerScore from "../components/PlayerScore";
import StarPage from "../components/Rating";
import Fetch from "@/components/Fetch";
import Challenge from "@/components/UseEffect";

export default function Home() {
  return (
    <div className="flex justify-center mx-auto max-w-[1280px]">
      <Challenge />
    </div>
  );
}
