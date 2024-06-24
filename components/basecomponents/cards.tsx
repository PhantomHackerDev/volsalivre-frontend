import { log } from "console";
import { start } from "repl";

const stars = [0, 0, 0, 0, 0];

interface StarProps {
  flag: boolean;
}

const Star: React.FC<StarProps> = ({ flag }) => {
  return (
    <span>
      <svg
        className="text-orange-400"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
      >
        <path
          fill={`${flag ? "currentColor" : "none"}`}
          d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
        />
      </svg>
    </span>
  );
};

interface TransformingCardProps {
  star: number;
  text: string;
  name: string;
}

const TransformingCard: React.FC<TransformingCardProps> = ({
  star,
  text,
  name,
}) => {
  return (
    <div className="flex flex-col justify-between w-full h-auto gap-5 p-5 bg-white border border-slate-300 rounded-lg">
      <div className="flex gap-2">
        {stars.map((s: any, index: number) => (
          <Star key={index} flag={index < star ? true : false} />
        ))}
      </div>
      <p className="text-slate-400">{text}</p>
      <p className="font-semibold text-gray-700">{name}</p>
    </div>
  );
};

interface OtherSchoolsCardProps {
  mark: any;
  title: string;
  star: number;
  position: string;
  at: string;
  secure: any;
}

const OtherSchoolsCard: React.FC<OtherSchoolsCardProps> = ({
  mark,
  title,
  star,
  position,
  at,
  secure,
}) => {
  return (
    <div className="flex flex-col p-5 bg-white rounded-lg justify-between gap-5">
      <div className="flex gap-2 items-center">
        <img
          src={mark}
          alt=""
          width={70}
          height={70}
          className="w-12 h-12 rounded-full"
        />
        <p className="text-based font-semibold">{title}</p>
      </div>
      <div className="flex gap-2">
        {stars.map((s: any, index: number) => (
          <Star key={index} flag={index < star ? true : false} />
        ))}
        <span>{star}</span>
      </div>
      <div className="flex flex-col gap-2">
        <p>{position}</p>
        <p>{at}</p>
      </div>
      <p>{secure}</p>
    </div>
  );
};

interface LatestArticleCardProps {
  img: any;
  title: string;
  text: string;
}

const LatestArticleCard: React.FC<LatestArticleCardProps> = ({
  img,
  title,
  text,
}) => {
  return (
    <div className="flex flex-col gap-5 rounded-lg bg-white p-5">
      <img src={img} className="w-full" alt="" />
      <p className="text-lg font-semibold">{title}</p>
      <p>{text}</p>
    </div>
  );
};

interface PrivateSchoolCardProps {
  mark: any;
  title: string;
  star: number;
  at: string;
  position: string;
  scholarUnit: string;
  amount: number; 
}

const PrivateSchoolCard: React.FC<PrivateSchoolCardProps> = ({
  mark,
  title,
  star,
  at,
  position,
  scholarUnit,
  amount,
}) => {
  return (
    <div className="flex flex-col p-5 bg-white rounded-lg justify-between gap-5">
      <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-0">
        <img
          src={mark}
          alt=""
          width={70}
          height={70}
          className="w-12 h-auto rounded-full"
        />
        <p className="text-[16px] font-semibold text-gray-700 md:ml-3 md:text-xs text-center md:text-left">{title}</p>
      </div>
      <div className="flex gap-2 justify-center md:justify-start">
        {stars.map((s: any, index: number) => (
          <Star key={index} flag={index < star ? true : false} />
        ))}
        <span>{star}</span>
      </div>
      <div className="flex flex-col gap-2 text-gray-400 text-center md:text-left">
        <p>{position}</p>
        <p>{at}</p>
      </div><hr className="p-2"/>
      <div className="flex flex-col space-y-0 text-center md:text-left">
        <p className="pb-0 text-gray-400">sholarships form:</p>
        <p className="pt-0 font-semibold text-gray-700">{scholarUnit} {amount}</p>
      </div>
    </div>
  )
}

interface SearchResultCardProps {
  mark: any;
  title: string;
  star: number;
  at: string;
  period: string;
  position: string;
  schoolYear: any;
  shift: any;
  originUnit: string;
  originPrice: number;
  presentUnit: string;
  presentPrice: number;
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({
  mark,
  title,
  star,
  at,
  period,
  position,
  schoolYear,
  shift,
  originUnit,
  originPrice,
  presentUnit,
  presentPrice,
}) => {
  const shiftArray: any = [];
  const schoolYearArray: any = [];
  let shiftlength = shift.length;
  let yearlength = schoolYear.length;
  for (let i = 0; i < shiftlength; i++) {
    const element = shift[i];
    shiftArray.push(
      <button type="button" className="text-purple-700 border rounded-full border-purple-700 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium text-sm px-4 py-1 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
        {element}
      </button>
    )
  }
  for (let i = 0; i < yearlength; i++) {
    const element = schoolYear[i];
    schoolYearArray.push(
      <button type="button" className="text-purple-700 border rounded-full border-purple-700 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium text-sm px-3 py-1 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
        {element}
      </button>
    )
  }
  return (
    <div className="flex flex-col bg-white rounded-lg justify-between gap-2">
      <div className="flex justify-between items-center">
        <img
          src={mark}
          alt=""
          width={70}
          height={70}
          className="w-12 h-12 rounded-full ring-2 "
        />
        <p className="text-based font-semibold text-gray-700">{title}</p>
      </div>
      <div className="flex gap-1">
        {stars.map((s: any, index: number) => (
          <Star key={index} flag={index < star ? true : false} />
        ))}
        <span>{star}</span>
      </div>
      <div className="flex flex-col gap-2 text-gray-400">
        <p className="text-gray-700">{period}</p>
        <p className="text-sm">{position}</p>
        <p className="text-sm">{at}</p>
      </div><hr className="p-2"/>
      <div className="flex flex-col">
        <p>School year</p>
        <span className="flex justify-start">
          {schoolYearArray}
        </span>
        <p>Shift</p>
        <span className="flex justify-start">
          {shiftArray}
        </span>
      </div>
      <div className="flex flex-col">
        <p className="pb-0 text-gray-400 line-through decoration-gray-500">{originUnit} {originPrice}</p>
        <p className="pt-0 font-semibold text-gray-700">
          {presentUnit} {presentPrice} 
          <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
          </span>
        </p>
      </div>
      <div className="flex flex-col">
        <button type="button" className="text-white bg-orange-500 hover:bg-orange-600 focus:outline-double focus:ring-4 focus:ring-purple-500 font-medium rounded-full text-sm px-5 py-1 text-center me-2 mb-2 dark:focus:ring-yellow-900">
          See Scholarship
        </button>
      </div>
    </div>
  )
}

interface PopularSchoolCardProps {
  mark: any;
}

const PopularSchoolCard: React.FC<PopularSchoolCardProps> = ({ mark }) => {
  return (
    <div className="flex ">
      <img
        src={mark}
        alt="#"
        width={70}
        height={70}
        className="w-36 h-36 rounded-md"
      />
    </div>
  )
};

interface BlogCardProps {
  img: any;
  title: string;
  date: string;
  env: string;
  category:string;
}
  
const BlogCard: React.FC<BlogCardProps> = ({img, title, date, env,category}) => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="space-y-3">
        <p className="text-xl md:text-2xl font-semibold text-gray-900">{title}</p>
        <div className="flex text-xs text-gray-500 gap-3">
          <a href="#" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m96 240h-96a16 16 0 0 1-16-16V128a16 16 0 0 1 32 0v128h80a16 16 0 0 1 0 32"/></svg>
            <span>{date}</span>
          </a>
          <a href="#" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M408 96H252.11a23.9 23.9 0 0 1-13.31-4L211 73.41A55.77 55.77 0 0 0 179.89 64H104a56.06 56.06 0 0 0-56 56v24h416c0-30.88-25.12-48-56-48m15.75 352H88.25a56 56 0 0 1-55.93-55.15L16.18 228.11v-.28A48 48 0 0 1 64 176h384.1a48 48 0 0 1 47.8 51.83v.28l-16.22 164.74A56 56 0 0 1 423.75 448m56.15-221.45"/></svg>
            <span>{category}</span>
          </a>
        </div>
      </div>
      <div className="flex w-full  overflow-hidden">
        <img className="rounded-3xl object-contain w-full" src={img} alt="img" />
      </div>
      <div className="flex flex-col w-full  items-start space-y-5">
        <p className="text-gray-500">{env}</p>
        <button className="text-orange-500 font-bold border-[2px] rounded-full p-3 px-5 hover:bg-orange-500 hover:text-white border-orange-500">LEIA MAIS {"->"} </button>
      </div>
    </div>
  )
};

interface CategoriesCardProps {
  name:any;
}

const CategoriesCard: React.FC<CategoriesCardProps> = ({name}) => {
  const cateLi: any = [];
  const length = name.length;
  for (let i = 0; i < length; i++) {
      cateLi.push(
          <li className="border-b">
              <a className="hover:text-gray-500" href="">{name[i]}</a>
          </li>
      )
  }
  return (
    <>
      <p className="uppercase text-gray-900 font-bold">CATEGORIAS</p>
      <ul className="flex flex-col text-orange-500 space-y-6">
          {cateLi}
      </ul>
    </>
  )
}

export { BlogCard, CategoriesCard, TransformingCard, OtherSchoolsCard, LatestArticleCard, PrivateSchoolCard, SearchResultCard, PopularSchoolCard };
