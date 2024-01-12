"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const slug = router.query;
  return <p>The slug is: {slug}</p>;
}
