import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto lg:px-24 md:px-24 px-10 py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main className="py-9 lg:py-24 lg:w-1/2">
          <Content />
          <Footer />
        </main>
      </div>
    </div>
  );
}
