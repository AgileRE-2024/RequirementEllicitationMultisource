"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Loading from "./Loading";

const UseCasePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [data, setData] = useState<UseCaseResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [useCases, setUseCases] = useState<string[]>([]);

  interface UseCaseResponse {
    usecasespuml_code: string[];
    diagrams_url: string[];
  }

  useEffect(() => {
    try {
      axios
        .get(`http://127.0.0.1:8000/api/usecase/?id=${id}`)
        // http://127.0.0.1:8000/api/usecase/?id=dfbba1f8-9669-4252-b115-3738f9e3ea87
        .then((response) => {
          setData(response.data);
          setIsLoading(false);
          setUseCases(response.data.diagrams_url);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className='bg-black min-h-screen bg-dot-white/[0.2] pt-10 px-10'>
      <div className='mx-auto min-h-[90vh] p-8 w-3/4 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]'>
        <div className='flex justify-center items-center'>
          {isLoading ? (
            <Loading />
          ) : (
            <div>
              <h1 className='mb-5 text-xl text-center sm:text-5xl dark:text-white text-black '>
                Use Cases
              </h1>
              <div className='flex flex-col gap-2'>
                {useCases.map((useCase: any, index: number) => (
                  <div key={index} className=''>
                    <Image
                      src={useCase}
                      width={600}
                      height={600}
                      alt='use-case'
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* copy usecasespuml_code  */}\
      <div className='flex justify-center items-center mt-5'>
        <button
          onClick={() => {
            if (data?.usecasespuml_code) {
              navigator.clipboard.writeText(data.usecasespuml_code.join("\n"));
            }
          }}
          className='bg-[rgba(255,255,255,0.10)] text-white px-4 py-2 rounded-md'
        >
          Copy Use Case Code
        </button>
      </div>
    </div>
  );
};

export default UseCasePage;
