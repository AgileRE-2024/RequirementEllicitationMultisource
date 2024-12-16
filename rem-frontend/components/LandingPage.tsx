"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholder-and-vanishinput";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LandingPage = () => {
  const [route, setRoute] = useState("");
  const router = useRouter();
 

  const placeholders = [
    "Covid 19",
    "Healthcare",
    "Food Management",
    "Economic Analysis",
    "Climate Change",
  ];
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `
        http://127.0.0.1:8000/api/add_query/?q=${route}`,
        {
          method: "POST",
        }
      );
      const data = await response.json();
      setTimeout(() => {
        router.push(`source-selection?q=${route}&id=${data}`);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='h-[100vh] flex flex-col justify-center  items-center px-4 bg-dot-white/[0.2] bg-black '>
      <h2 className='mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black'>
        Requirement Ellicitation from Multi Source Data Application
      </h2>
      <p className='mb-5 sm:mb-5 text-base  dark:text-white text-black'>
        Input your query...
      </p>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={(e) => {
          setRoute(e.target.value);
        }}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default LandingPage;
