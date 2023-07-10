import Image from "next/image";

export default function Home() {
  return (
    <div className="dark:bg-black lg:flex lg:justify-between lg:gap-4">
      <header>
        <h1 className="text-4xl font-bold text-slate-200">hongmei</h1>
        <h3 className="font-bold text-slate-200">
          I like to build apps that live on the web
        </h3>
      </header>
      <main className="dark:text-white"></main>
    </div>
  );
}
