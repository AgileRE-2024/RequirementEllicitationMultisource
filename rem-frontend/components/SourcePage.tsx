"use client";
import SourceCard from "./source-components/SourceCard";
import { BlackButton } from "./ui/buttons";
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";s

interface DataState {
  xtwitter: { loading: boolean; data: null };
  news: { loading: boolean; data: null };
  playstore: { loading: boolean; data: null };
  appstore: { loading: boolean; data: null };
}

type SourceType = "xtwitter" | "news" | "playstore" | "appstore";



const SourcePage = () => {
  const [dataState, setDataState] = useState<DataState>({
    xtwitter: { loading: false, data: null },
    news: { loading: false, data: null },
    playstore: { loading: false, data: null },
    appstore: { loading: false, data: null },
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const id = searchParams.get("id");


  async function handleClickPreprocessing() {
    router.push(`/preprocessing?id=${id}`);
  }

  async function handleClick(source: SourceType) {
    setDataState((prevState) => ({
      ...prevState,
      [source]: { loading: true, data: null },
    }));
    try {
      console.log(id);
      const response = await fetch(
        `http://127.0.0.1:8000/api/get_data/?q=${query}&type=${source}&id=${id}`
      );
      
      const data = await response.json();
      setDataState((prevState) => ({
        ...prevState,
        [source]: { loading: false, data },
      }));
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='min-h-screen bg-black bg-dot-white/[0.2] flex flex-col justify-center items-center'>
      <div className='flex justify-center items-center h-full'>
        {" "}
        <h2 className='text-xl text-center sm:text-5xl dark:text-white text-black '>
          Select the source of Requirement
        </h2>
      </div>

      <div className='flex justify-around pt-10 w-full'>
        <SourceCard
          onClick={() => handleClick("xtwitter")}
          source='xtwitter'
          sourceLogo={<BsTwitterX className='h-20 w-20 dark:text-white' />}
          isScrapping={dataState.xtwitter.loading}
          data={dataState.xtwitter.data}
        />
        <SourceCard
          onClick={() => handleClick("news")}
          source='news'
          sourceLogo={<ImNewspaper className='h-20 w-20 dark:text-white' />}
          isScrapping={dataState.news.loading}
          data={dataState.news.data}
        />
        <SourceCard
          onClick={() => handleClick("playstore")}
          source='playstore'
          sourceLogo={<FaGooglePlay className='h-20 w-20 dark:text-white' />}
          isScrapping={dataState.playstore.loading}
          data={dataState.playstore.data}
        />
        <SourceCard
          onClick={() => handleClick("appstore")}
          source='appstore'
          sourceLogo={<FaAppStoreIos className='h-20 w-20 dark:text-white' />}
          isScrapping={dataState.appstore.loading}
          data={dataState.appstore.data}
        />
      </div>
      <div className='flex justify-center items-center mt-10 h-[30vh] sm:h-[10vh]'>
        <BlackButton
          text='Do Preprocessing'
          onClick={() => handleClickPreprocessing()}
        />
      </div>
    </div>
  );
};

export default SourcePage;
