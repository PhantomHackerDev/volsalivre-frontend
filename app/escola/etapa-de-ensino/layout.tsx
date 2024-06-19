import Link from "next/link";
import Filters from "@/components/basecomponents/filters";
import { SearchResultCard } from "@/components/basecomponents/cards";
import Popularmarks from '@/components/dashboard/popularschools/page';


let SearchResults = [{
  mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20230111134036974.jpg",
  star: 1,
  title: "Santo Antonio College",
  at: "Joinville - SC",
  position: "Iririu",
  amount: "306.57",
  period: "Early Childhood Education - Nursery (0 to 1 year old)",
  schoolYear: [2024, 2025],
  shift: ['full', 'morning'],
  originUnit: "R$",
  originPrice: 1000,
  presentUnit: "BRL",
  presentPrice: 500,
}, 
{
  mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20230111134036974.jpg",
  star: 1,
  title: "Santo Antonio College",
  at: "Joinville - SC",
  position: "Iririu",
  amount: "306.57",
  period: "Early Childhood Education - Nursery (0 to 1 year old)",
  schoolYear: [2024, 2025],
  shift: ['full', 'morning'],
  originUnit: "R$",
  originPrice: 1000,
  presentUnit: "BRL",
  presentPrice: 500,
}, 
{
  mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20230111134036974.jpg",
  star: 1,
  title: "Santo Antonio College",
  at: "Joinville - SC",
  position: "Iririu",
  amount: "306.57",
  period: "Early Childhood Education - Nursery (0 to 1 year old)",
  schoolYear: [2024, 2025],
  shift: ['full', 'morning'],
  originUnit: "R$",
  originPrice: 1000,
  presentUnit: "BRL",
  presentPrice: 500,
}, 
{
  mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20230111134036974.jpg",
  star: 1,
  title: "Santo Antonio College",
  at: "Joinville - SC",
  position: "Iririu",
  amount: "306.57",
  period: "Early Childhood Education - Nursery (0 to 1 year old)",
  schoolYear: [2024, 2025],
  shift: ['full', 'morning'],
  originUnit: "R$",
  originPrice: 1000,
  presentUnit: "BRL",
  presentPrice: 500,
}, 
{
  mark: "https://img.imageboss.me/me/cover:center/48x48/format:auto/20230111134036974.jpg",
  star: 1,
  title: "Santo Antonio College",
  at: "Joinville - SC",
  position: "Iririu",
  amount: "306.57",
  period: "Early Childhood Education - Nursery (0 to 1 year old)",
  schoolYear: [2024, 2025],
  shift: ['full', 'morning'],
  originUnit: "R$",
  originPrice: 1000,
  presentUnit: "BRL",
  presentPrice: 500,
}
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-slate-100 flex-col">
      <div className="flex flex-col space-y-5 bg-slate-100 h-auto items-center bg-[url('https://img.imageboss.me/me/width/768/dpr:2/banners/banner-xplp-mobile-melhor-escola.webp')]">      
        <div className="flex gap-3 items-center xl:w-[80vw] lg:w-[90vw] pt-3">
          <Link href="/" className="text-white">
            Home page
          </Link>
          <span className="pt-2 text-white text-md" >{`/`} School</span>
        </div>
        <div className="flex pt-5 gap-3 items-center xl:w-[80vw] lg:w-[90vw] pt-3">
          <h1 className="text-4xl font-semibold text-white">High Schools</h1>
        </div>
        <div className="flex gap-3 items-center xl:w-[80vw] lg:w-[90vw] pt-3">
          <p className="text-lg  text-white">Find the best private high schools! Secure your scholarship with a monthly <br/>fee starting at R$85.00!</p>
        </div>
        <div className="flex gap-3 justify-start items-start xl:w-[80vw] lg:w-[90vw] py-5">
          <div className="flex relative items-center space-x-5 pt-1 ">
            <input
              type="text"
              placeholder="Enter your neighborhood"
              className="px-10 py-3 text-sm rounded-full w-full focus:outline-none border border-purple-500 focus:ring-2 focus:ring-purple-500"
            />
            <input type="button" value='View schools' className="text-white bg-orange-500 hover:bg-orange-600 focus:outline-double focus:ring-4 focus:ring-purple-500 font-medium rounded-full text-sm px-10 py-3 me-2 mb-2 dark:focus:ring-yellow-900" />
          </div>
        </div>
      </div>
      {/* <hr className="text-gray-700 p-0" /> */}
      <div className="flex flex-col bg-slate-100 py-5 space-y-6 items-center">
        <div className="pt-0 flex gap-5 xl:w-[80vw] lg:w-[90vw] pb-5">
          <Filters />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {SearchResults.map((result: any, index: number) => 
              <div key={index} className="bg-white max-w-sm p-4 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <SearchResultCard 
                  key={index}
                  mark={result.mark}
                  title={result.title}
                  star={result.star}
                  at={result.at}
                  period={result.period}
                  position={result.position}
                  schoolYear={result.schoolYear}
                  shift={result.shift}
                  originUnit={result.originUnit}
                  originPrice={result.originPrice}
                  presentUnit={result.presentUnit}
                  presentPrice={result.presentPrice}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
