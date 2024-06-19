'use client';

import { useState } from "react";
import { Neighborhood, SearchChecked, SearchRadius, SearchSchool, SearchSeries, TeachingState } from "./searchComponents";

interface FilterProps {
  type: string;
}

const Filters:React.FC<FilterProps> = ({type}) => {
    const [school, setSchool] = useState<string>("");
    return (
        <div className="flex flex-col gap-5">
          <div className="flex justify-between w-[270px] items-center">
            <p className="text-2xl text-gray-800 font-bold">Filters:</p>
            <a href="#" className="flex text-sm gap-4  items-center text-purple-700 hover:bg-purple-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
              >
                <rect
                  width="448"
                  height="80"
                  x="32"
                  y="48"
                  fill="currentColor"
                  rx="32"
                  ry="32"
                />
                <path
                  fill="currentColor"
                  d="M74.45 160a8 8 0 0 0-8 8.83l26.31 252.56a1.5 1.5 0 0 0 0 .22A48 48 0 0 0 140.45 464h231.09a48 48 0 0 0 47.67-42.39v-.21l26.27-252.57a8 8 0 0 0-8-8.83Zm248.86 180.69a16 16 0 1 1-22.63 22.62L256 318.63l-44.69 44.68a16 16 0 0 1-22.63-22.62L233.37 296l-44.69-44.69a16 16 0 0 1 22.63-22.62L256 273.37l44.68-44.68a16 16 0 0 1 22.63 22.62L278.62 296Z"
                />
              </svg>
              <span>Clear filters</span>
            </a>
          </div>
          <div className="flex flex-col text-sm gap-4 text-gray-600 ">
            <Neighborhood disp={1} className="" />
            <SearchSchool disp={1} className="" setSchoolParent={setSchool} />
            {
              type === "search" ? 
              <TeachingState disp={1} className="" school={school}/>              
              :
              ''
            }
            <SearchSeries disp={1} className="" school={school} />
          </div>
          <div className="flex flex-col space-y-2 text-sm gap-4 text-gray-600">
            {
              type === "search" ?
                <SearchRadius disp={1} className="" />
                :
                ''
            }
            <SearchRadius disp={2} className="" />
          </div>
          <div className="flex flex-col text-sm gap-4 text-gray-600">
          {
              type === "search" ?
                <SearchChecked disp={1} className="" checkedLabel="Scholarship year:" />
                :
                ''
            }
            <SearchChecked disp={2} className="" checkedLabel="Shift:" />
            <SearchChecked disp={3} className="" checkedLabel="Benefits:" />
          </div>
        </div>
    )
}

export default Filters;