import React from "react";

const Loading = () => {
  return (
    <div className='min-w-screen min-h-screen bg-black bg-dot-white/[0.2] flex justify-center items-center'>
      <div className='animate-spin rounded-full h-20 w-20 border-t-4 border-b-8 border-[rgba(255,255,255,0.10)]'></div>
      Loading....
    </div>
  );
};

export default Loading;
