export default function Footer() {
  return (
    <footer>
      <p className="max-w-md text-slate-400 dark:text-slate-500 text-xs font-light">
        This site is prototyped using{" "}
        <a
          href="https://www.figma.com/"
          target="_blank"
          className="text-slate-500 dark:text-slate-400 font-medium hover:text-primary"
        >
          Figma
        </a>
        , built with{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="text-slate-500 dark:text-slate-400 font-medium hover:text-primary"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className="text-slate-500 dark:text-slate-400 font-medium hover:text-primary"
        >
          Tailwind CSS
        </a>
        , and heavily influenced by the works of{" "}
        <a
          href="https://github.com/bchiang7"
          target="_blank"
          className="text-slate-500 dark:text-slate-400 font-medium hover:text-primary"
        >
          Brittany Chiang
        </a>
        !
      </p>
    </footer>
  );
}
