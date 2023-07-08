import Image from "next/image";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <header>
        <h1 className="text-4xl font-bold text-slate-200">hongmei</h1>
        <h3>I like to build apps that live on the web</h3>
      </header>
      <main>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellat
        ipsa dolorem. Quo consequatur iste odio veritatis tempore natus magni at
        fuga ad adipisci, quasi libero, veniam tenetur itaque soluta!
      </main>
    </div>
  );
}
