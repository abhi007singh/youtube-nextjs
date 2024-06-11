import AppBar from "@/components/AppBar";
import VideoView from "@/components/VideoView";
import { useRouter } from "next/router";

export default function Page(props: any) {
  const router = useRouter();
  const vid_id = router.query.id;
  return (
    <>
      <VideoView id={vid_id} isOpen={props.isOpen} pathname={props.pathname} />
    </>
  );
}
