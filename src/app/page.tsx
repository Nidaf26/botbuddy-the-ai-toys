import Image from "next/image";
import Header  from "@/components/Header";
import Heroparallax from "@/components/here-parallax";
import { div } from "framer-motion/client";

export default function Home() {
  return (
    <div>

      <Header/>
      <Heroparallax />
    </div>
  );
}
