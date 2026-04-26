import Link from "next/link";
import ToggleTheme from "./ToggleTheme";

type MenuItem = {
  id: number;
  label: string;
  link: string;
};

const items: MenuItem[] = [
  {
    id: 1,
    label: "Home",
    link: "home",
  },
  {
    id: 2,
    label: "About",
    link: "about",
  },
  {
    id: 3,
    label: "Skills",
    link: "skills",
  },
  {
    id: 4,
    label: "Projects",
    link: "projects",
  },
  {
    id: 5,
    label: "Contact",
    link: "contact",
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="uppercase font-semibold text-lg tracking-wide">
        portfolio
      </h1>
      <ul className="flex gap-10">
        <li>
          <ToggleTheme />
        </li>
        {items.map(({ id, label, link }) => (
          <Link key={id} href={`#${link}`} className="font-medium">
            {label}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
