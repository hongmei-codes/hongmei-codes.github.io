import { FaGithub, FaCodepen, FaFigma } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Socials() {
  return (
    <div className="flex gap-2 mt-5">
      <a
        href="https://github.com/hongmei-codes"
        target="_blank"
        className="p-2 rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 lg:cursor-pointer hover:text-primary"
      >
        <FaGithub size={28} />
      </a>
      <a
        href="https://codepen.io/hongmei/pens/popular"
        target="_blank"
        className="p-2 rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 lg:cursor-pointer hover:text-primary"
      >
        <FaCodepen size={28} />
      </a>
      <a
        href="https://www.figma.com/@hongmei"
        target="_blank"
        className="p-2 rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 lg:cursor-pointer hover:text-primary"
      >
        <FaFigma size={28} />
      </a>
      <a
        href="mailto:duhongmei@pm.me"
        target="_blank"
        className="p-2 rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 lg:cursor-pointer hover:text-primary"
      >
        <MdEmail size={28} />
      </a>
    </div>
  );
}
