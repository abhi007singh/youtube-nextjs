import { Inter } from "next/font/google";
import VideoGrid from "@/components/VideoGrid";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: any) {
  return (
    <>
      <VideoGrid isOpen={props.isOpen} />
    </>
  );
}
