type TButtonBackgroundShine = {
  name: string;
  height?: number | string;
  width?: string | number;
};

const ButtonBackgroundShine = ({
  name,
  height = 12,
  width,
}: TButtonBackgroundShine) => {
  return (
    <button
      className={`inline-flex  mx-auto h-${height} w-${width} animate-background-shine items-center justify-center rounded-md  border-2 dark:border-[#656fe2] border-[#c0c6fc] dark:bg-[linear-gradient(110deg,#1e2a78,45%,#3749be,55%,#1e2a78)] bg-[linear-gradient(110deg,#3d5af1,45%,#5471ff,55%,#3d5af1)] bg-[length:200%_100%] dark:hover:border-white px-6 font-medium text-black dark:text-white transition-colors focus:outline-none focus:ring-2 dark:focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50`}
    >
      {name}
    </button>
  );
};

export default ButtonBackgroundShine;
