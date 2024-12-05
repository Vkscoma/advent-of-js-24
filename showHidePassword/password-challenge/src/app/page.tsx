import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Challenge</h1>
      <Image src="/lock.svg" alt="Secure Login" width={50} height={50} />
      <Image src="/eye.svg" alt="Secure Login" width={50} height={50} />
    </div>
  );
}
