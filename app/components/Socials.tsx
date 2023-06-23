import { FaGithub, FaCodepen, FaFigma } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Socials() {
  return (
    <div className="flex gap-2 mt-5">
      <a
        href="https://github.com/hongmei-codes"
        target="_blank"
        className="p-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/15 lg:cursor-pointer hover:text-primary"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://codepen.io/hongmei/pens/public"
        target="_blank"
        className="p-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/15 lg:cursor-pointer hover:text-primary"
      >
        <FaCodepen size={24} />
      </a>
      <a
        href="https://www.figma.com/@hongmei"
        target="_blank"
        className="p-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/15 lg:cursor-pointer hover:text-primary"
      >
        <FaFigma size={24} />
      </a>
      <a
        href="mailto:duhongmei@pm.me"
        target="_blank"
        className="p-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/15 lg:cursor-pointer hover:text-primary"
      >
        <MdEmail size={24} />
      </a>
    </div>
  );
}
