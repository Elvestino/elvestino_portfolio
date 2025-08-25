"use client";

import Photos from "@/app/components/photos/Photos";

export default function Page() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center gap-12 px-[9%]  mt-20 md:mt-40 ">
      <div className="mt-20 md:mt-0">
        <Photos />
      </div>
      <div className="text-justify md:text-3xl">
        <p>
          I&apos;m a passionate developer from Madagascar, currently pursuing a{" "}
          <span className="font-semibold text-[#7cf03d]">
            Master&apos;s degree in Data Science and Artificial Intelligence
            (SDIA){" "}
          </span>
          at EMIT Fianarantsoa. I hold a{" "}
          <span className="font-semibold text-[#7cf03d]">
            Bachelor&apos;s degree in Internet and Intranet Application
            Development (DA2I)
          </span>
          , and I&apos;ve worked on several academic and professional projects
          ranging from web applications to mobile solutions . <br />
          My main expertise lies in{" "}
          <span className="font-semibold text-[#7cf03d]">
            front-end web development
          </span>{" "}
          with technologies such as{" "}
          <span className="font-semibold text-[#7cf03d]">ReactJS</span> and{" "}
          <span className="font-semibold text-[#7cf03d]">NextJS</span>. <br /> I
          value teamwork, clear communication, and continuous learning. I enjoy
          solving real-world problems and turning ideas into well-crafted
          digital experiences.
        </p>
      </div>
    </main>
  );
}
