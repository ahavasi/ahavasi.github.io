import Meme from "./Meme";
import "./MemeGenerator.css";
import MemeHeader from "./MemeHeader";

export default function MemeGenerator() {
  return (
    <div className="meme-body">
      <MemeHeader />
      <Meme />
    </div>
  );
}
