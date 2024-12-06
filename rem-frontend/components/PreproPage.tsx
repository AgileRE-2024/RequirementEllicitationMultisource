"use client";
import { Label } from "./ui/label";
import Textarea from "./ui/textarea";
import { BlackButton } from "./ui/buttons";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Loading from "./Loading";
import axios from "axios";

const PreproPage = () => {
  const data = {
    "1": "The app is really helpful for daily task management, but I wish it had more customization options.",
    "2": "I really like the app, but it's a bit hard to navigate.",
    "3": "The app is great, but I wish it had more features.",
    "4": "I love the app, but I wish it had more customization options.",
  };
  const [textArea, setTextArea] = useState(JSON.stringify(data, null, 2));
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    try {
      axios
        .get(`http://127.0.0.1:8000/api/preprocessing/?id=${id}`)
        .then((response) => {
          setTextArea(JSON.stringify(response.data, null, 2));
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  function handleOnSubmit(e: any) {
    e.preventDefault();
    console.log(textArea);
    router.push("userstory?id=" + id);
  }

  function handleOnChange(e: any) {
    setTextArea(e.target.value);
  }

  function handleCleanData() {
    setLoading(true);
    try {
      axios
        .get(`http://127.0.0.1:8000/api/user_story/?id=${id}`)
        .then((response) => {
          setTextArea(JSON.stringify(response.data, null, 2));
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='bg-black bg-dot-white/[0.2] min-h-screen'>
      <h1 className='text-xl text-center sm:text-5xl dark:text-white text-black '>
        Result
      </h1>
      <div className='px-10 '>
        <form action='' onSubmit={handleOnSubmit}>
          <Label>Edit Result : </Label>
          <Textarea
            id='preprossed-data'
            placeholder=''
            className='min-h-[70vh] max-h-[80vh]'
            data={data}
            onChange={handleOnChange}
          >
            {textArea}
          </Textarea>
          <div className='flex justify-center items-center mt-10 h-[30vh] sm:h-[20vh]'>
            <BlackButton text='Generate User Story' type='submit' />
            <div className='ml-4'>
              <BlackButton
                text='Clean Data'
                type='button'
                onClick={handleCleanData}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PreproPage;
