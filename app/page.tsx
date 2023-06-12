import Header from "./components/Header";
import Content from "./components/Content";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto lg:px-24 md:px-24 px-10 py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <Content />
      </div>
    </div>
  );
}
