import { Spin } from 'antd'; // Import the Ant Design Spin component

type TButtonBackgroundShine = {
  name: string;
  isLoading?: boolean;  // Add isLoading prop
  height?: number | string;
  customCss?: string;
};

const ButtonBackgroundShine = ({
  name,
  isLoading = false,  // Default isLoading to false
  height = 12,
  customCss,
}: TButtonBackgroundShine) => {
  return (
    <button
      disabled={isLoading} // Disable button while loading
      className={`inline-flex mx-auto h-${height} ${
        customCss && customCss
      } animate-background-shine items-center justify-center rounded-md border-2 dark:border-[#656fe2] border-[#c0c6fc] dark:bg-[linear-gradient(110deg,#1e2a78,45%,#3749be,55%,#1e2a78)] bg-[linear-gradient(110deg,#3d5af1,45%,#5471ff,55%,#3d5af1)] bg-[length:200%_100%] dark:hover:border-white px-6 font-medium text-black dark:text-white transition-colors focus:outline-none focus:ring-2 dark:focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50`}
    >
      {isLoading ? <Spin  /> : name}  {/* Show spinner when loading */}
    </button>
  );
};

export default ButtonBackgroundShine;
