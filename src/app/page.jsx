'use client'

import Hero from "@/components/Hero";
import { useState } from "react";
import Image from "next/image";
import ProjectList from "@/components/ProjectList";
import Navbar from "@/components/Navbar";

const Page = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section>
          <Navbar setTheme={setDarkMode} />
          <div className="mt-12">
            <Hero />
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I have worked on several personal projects, including creating websites and small applications. These
              projects demonstrate my ability to convert concepts into functional and attractive code.
            </p>
          </div>
          <ProjectList />
        </section>
      </main>
    </div>
  );
}

export default Page