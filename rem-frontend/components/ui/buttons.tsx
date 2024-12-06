const BlackButton = ({
  text,
  onClick,
  onSubmit,
  type,
}: {
  text: string;
  onClick?: () => void;
  onSubmit?: () => void;
  type?: "submit" | "button" | "reset";
}) => {
  return (
    <button className='p-[3px] relative' onClick={onClick} onSubmit={onSubmit} type={type}>
      <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg' />
      <div className='px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent'>
        {text}
      </div>
    </button>
  );
};

const WhiteButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <button
      className='px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-black text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md  '
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export { WhiteButton, BlackButton };
