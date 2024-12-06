import { WhiteButton } from "../ui/buttons";
import { Skeleton } from "../ui/card";

const SourceCard = ({
  onClick,
  source,
  sourceLogo,
  isScrapping,
  data,
}: {
  onClick: () => void;
  source: string;
  sourceLogo?: React.ReactNode;
  isScrapping: boolean;
  data: any;
}) => {
  console.log(data);
  if (data) {
    return (
      <div className='max-h-[500px] max-w-sm w-full sm:w-[23%] mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'>
        <div className=' h-80 rounded-xl border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] mb-10 p-2 text-white overflow-y-scroll'>
          <p className=''>{JSON.stringify(data)}</p>
        </div>
        <div className='flex justify-end'>
          <WhiteButton text='Get Data' onClick={onClick} />
        </div>
      </div>
    );
  } else {
    return (
      <div className='max-h-[500px] max-w-sm w-full sm:w-[23%] mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'>
        <div className=' h-80 rounded-xl border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] mb-10'>
          {isScrapping ? (
            <div className='h-full flex justify-center items-center'>
              <div className='animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-[rgba(255,255,255,0.10)]'></div>
            </div>
          ) : (
            <Skeleton logo={sourceLogo} />
          )}
        </div>
        <div className='flex justify-end'>
          <WhiteButton text='Get Data' onClick={onClick} />
        </div>
      </div>
    );
  }
};

export default SourceCard;
