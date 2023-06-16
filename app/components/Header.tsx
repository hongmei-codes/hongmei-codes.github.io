import { ThemeSwitch } from "./ThemeSwitch";
import Socials from "./Socials";

export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 py-9 lg:py-24 lg:flex-col lg:justify-between">
      <div>
        <ThemeSwitch />
        <h1 className="text-5xl dark:text-slate-200 text-slate-600 font-bold mt-5">
          hongmei
        </h1>
        <p className="mt-4 max-w-xs text-xs">
          I like to build apps that live on the web
        </p>
      </div>
      <Socials />
    </header>
  );
}
