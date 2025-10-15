"use client";

import Photos from "@/app/components/photos/Photos";

export default function AboutMeSection() {
  return (
    <main className="flex flex-col items-center gap-12 px-6 lg:px-16 xl:px-24 2xl:px-40 md:mt-5 max-w-[1920px] ">
      <h2 className="w-full text-5xl font-bold text-center mb-5 max-md:text-3xl">
        About <span className="text-[#7cf03d]">Me</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
        <div className=" ">
          <Photos />
        </div>
        <div className="md:text-3xl space-y-4 mb-16 md:mb-0">
          <p>
            I&apos;m a passionate developer from Madagascar, currently pursuing
            a{" "}
            <span className="font-semibold text-[#7cf03d]">
              Master&apos;s degree in Data Science and Artificial Intelligence
              (SDIA)
            </span>{" "}
            at EMIT Fianarantsoa. I hold a{" "}
            <span className="font-semibold text-[#7cf03d]">
              Bachelor&apos;s degree in Internet and Intranet Application
              Development (DA2I)
            </span>
            , and I&apos;ve worked on several academic and professional projects
            ranging from web applications to mobile solutions.
          </p>

          <p>
            My main expertise lies in{" "}
            <span className="font-semibold text-[#7cf03d]">
              web development
            </span>{" "}
            with technologies such as{" "}
            <span className="font-semibold text-[#7cf03d]">
              ReactJS and NextJS
            </span>{" "}
            with{" "}
            <span className="font-semibold text-[#7cf03d]">TypeScript</span>.
          </p>

          <p>
            I am also working in{" "}
            <span className="font-semibold text-[#7cf03d]">data analysis</span>{" "}
            using <span className="font-semibold text-[#7cf03d]">PowerBi</span>{" "}
            as a tool for analysis, modeling, and visualization.
          </p>

          <p>
            I value teamwork, clear communication, and continuous learning. I
            enjoy solving real-world problems and turning ideas into
            well-crafted digital experiences.
          </p>
        </div>
      </div>
    </main>
  );
}
