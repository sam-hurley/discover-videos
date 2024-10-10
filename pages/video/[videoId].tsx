import { useRouter } from "next/router";

export default function Video() {
	const router = useRouter();
	console.log(router.query);
	return <div>video page {router.query.videoId}</div>;
}
