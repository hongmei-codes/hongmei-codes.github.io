export default function About() {
  return (
    <section id="about" className="mb-16">
      <div className="sticky top-0 z-20 backdrop-blur py-4 -mx-10 lg:-mx-24 md:-mx-24 px-10 lg:px-24 md:px-24">
        <h2 className="dark:text-slate-200 text-slate-600 font-bold">ABOUT</h2>
      </div>
      <p className="mb-4">
        I started learning{" "}
        <a
          href="https://www.w3schools.com/js/"
          target="_blank"
          className="font-medium dark:text-slate-200 text-slate-600 hover:text-primary dark:hover:text-primary"
        >
          JavaScript
        </a>{" "}
        back when we were using Internet Explorer.{" "}
      </p>
      <p className="mb-4">
        Currently, I work with start-ups trying to make a positive impact in the
        world. I’ve had the pleasure of contributing to meaningful missions like{" "}
        <a
          href="https://www.stemly.ai/"
          target="_blank"
          className="font-medium dark:text-slate-200 text-slate-600 hover:text-primary dark:hover:text-primary"
        >
          reducing waste in supply chains
        </a>
        , and{" "}
        <a
          href="https://www.rimm.io/"
          target="_blank"
          className="font-medium dark:text-slate-200 text-slate-600 hover:text-primary dark:hover:text-primary"
        >
          democratizing sustainability
        </a>
        .
      </p>
      <p className="mb-4">
        I am always trying to write better code and build cooler apps! Now, I am
        expanding my horizon by learning to build apps that live on phones.
        Whether you want to work with me or just to say hi, feel free to{" "}
        <a
          href="mailto:duhongmei@pm.me"
          target="_blank"
          className="font-medium dark:text-slate-200 text-slate-600 hover:text-primary dark:hover:text-primary"
        >
          get in touch
        </a>
        !
      </p>
    </section>
  );
}
