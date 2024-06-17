import teachImage from "@/public/assets/images/banner-home.png";
import Image from "next/image";

const TeachStage: React.FC = () => {
  return (
    <div className="flex flex-col bg-white 2xl:w-[70vw] xl:w-[80vw] lg:w-[90vw] px-2">
      <div className="flex flex-col gap-5">
        <Image
          src={teachImage}
          alt="this is teach image"
          className="rounded-xl"
        />

        <div className="flex flex-col gap-5">
          <p className="lg:text-xl font-semibold">
            Search for the teaching stage
          </p>
          <div className="grid lg:grid-cols-4 lg:gap-10 sm:grid-cols-2 gap-3">
            <button
              type="button"
              className="px-6 py-3.5 lg:text-base font-medium text-white inline-flex gap-2 items-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-lg text-center"
            >
              <svg
                className="text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>
              Education Children{"'"}s
            </button>
            <button
              type="button"
              className="px-6 py-3.5 lg:text-base font-medium text-white inline-flex gap-2 items-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-lg text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 512 512"
              >
                <circle
                  cx="256"
                  cy="256"
                  r="192"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="m256 175.15l-76.09 63.83L200 320h112l20.09-81.02zm76.09 63.83l52.87-22.4l25.78-73.26M447 269.97l-62.04-53.39m-205.05 22.4l-52.87-22.4l-25.78-73.26M65 269.97l62.04-53.39M256 175.15v-57.57l64-42.64m-128-.01l64 42.65M312 320l28 48l-28 71m98.74-71H342m-142-48l-28 48l28.37 71.5M101.63 368H172"
                />
              </svg>
              Teaching Fundamental 1
            </button>
            <button
              type="button"
              className="px-6 py-3.5 lg:text-base font-medium text-white inline-flex gap-2 items-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-lg text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 712 512"
              >
                <path
                  fill="currentColor"
                  d="M328.9 2.7c-5.4-3.6-12.4-3.6-17.8 0L171.2 96H64C28.7 96 0 124.7 0 160V448c0 35.3 28.7 64 64 64H256h32 64 32H576c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H468.8L328.9 2.7zM384 384c0-35.3-28.7-64-64-64s-64 28.7-64 64v96H64c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32H176c3.2 0 6.2-.9 8.9-2.7L320 35.2l135.1 90.1c2.6 1.8 5.7 2.7 8.9 2.7H576c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H384V384zm-32 96H288V384c0-17.7 14.3-32 32-32s32 14.3 32 32v96zM96 192v64c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32zm64 0v64H128V192h32zm320-32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H480zm0 32h32v64H480V192zM96 352v64c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32zm64 0v64H128V352h32zm320-32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H480zm0 32h32v64H480V352zM320 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm16-128c0-8.8-7.2-16-16-16s-16 7.2-16 16v32c0 8.8 7.2 16 16 16h24c8.8 0 16-7.2 16-16s-7.2-16-16-16h-8V160z"
                ></path>
              </svg>
              Teaching Fundamental 2
            </button>
            <button
              type="button"
              className="px-6 py-3.5 lg:text-base font-medium text-white inline-flex gap-2 items-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-lg text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 612 512"
              >
                <path
                  fill="currentColor"
                  d="M307.2 66.2L47.6 160l74 26.7c10.3-6.9 21.5-12.6 33.4-17.1l159.4-59.8c8.3-3.1 17.5 1.1 20.6 9.4s-1.1 17.5-9.4 20.6L166.2 199.6c-1.5 .5-2.9 1.1-4.3 1.7l145.3 52.5c4.1 1.5 8.4 2.2 12.8 2.2s8.7-.8 12.8-2.2L592.4 160 332.8 66.2c-4.1-1.5-8.4-2.2-12.8-2.2s-8.7 .8-12.8 2.2zM296.3 283.9L126.9 222.7C99.4 246 82.1 279.9 80.2 316.9c5.9 13.2 10.2 27.5 13.4 41.5c6.4 27.6 10.7 65.9 2.1 108.7c-.9 4.3-3.4 8-7.1 10.4s-8.2 3.1-12.4 2l-64-16c-5.2-1.3-9.4-5.1-11.2-10.2s-.9-10.7 2.3-14.9c8.6-11.7 16-24.6 22.5-37.6C37.2 377.8 48 348.4 48 320c0-.6 0-1.2 .1-1.8c1.4-41 18-79.1 45.1-107.7L15.8 182.6C6.3 179.1 0 170.1 0 160s6.3-19.1 15.8-22.6L296.3 36.1c7.6-2.7 15.6-4.1 23.7-4.1s16.1 1.4 23.7 4.1L624.2 137.4c9.5 3.4 15.8 12.5 15.8 22.6s-6.3 19.1-15.8 22.6L343.7 283.9c-7.6 2.7-15.6 4.1-23.7 4.1s-16.1-1.4-23.7-4.1zm-122-10L160.4 406.3c.7 .8 1.8 2.1 3.7 3.7c6 5.2 16.5 11.5 31.9 17.5C226.4 439.4 270.3 448 320 448s93.6-8.6 124.1-20.6c15.4-6 25.8-12.3 31.9-17.5c1.9-1.6 3-2.8 3.7-3.7L465.7 273.8l31-11.2L512 408c0 35.3-86 72-192 72s-192-36.7-192-72l15.3-145.4 31 11.2zM480.5 405a.2 .2 0 1 0 -.3-.1 .2 .2 0 1 0 .3 .1zm-321 0a.1 .1 0 1 0 .2 0 .1 .1 0 1 0 -.2 0zM67 444.2c2.5-20.7 1.7-40-.5-56.7c-3.8 10-8 19.3-12.1 27.6c-3.8 7.6-7.9 15.2-12.5 22.8L67 444.2z"
                ></path>
              </svg>
              Teaching Average
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachStage;
