import { BsFillMoonStarsFill } from "react-icons/bs"

const Navbar = ({ setTheme }) => {
  return (
    <nav className="py-10 mb-12 flex justify-between text-base dark:text-white">
      <p className="font-burtons text-2xl font-semibold text-black dark:text-white">My Porfolio</p>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setTheme(prev => !prev)}
            className="cursor-pointer text-2xl text-black dark:text-white"
          />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
            href="/denisamador-resume.pdf"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar