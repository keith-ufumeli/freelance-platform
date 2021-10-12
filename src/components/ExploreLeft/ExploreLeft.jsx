import React, { useState } from "react";
import {
  ChevronDownIcon,
} from "@heroicons/react/outline";
import { RadioGroup } from "@headlessui/react";

import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { data } from "../../utils/data";
import { set_search_query_Action } from "../../redux/actions/SearchAction";

const filter_price = [
  { name: 'Low to high', value: 'ascending' },
  { name: 'High to low', value: 'descending' }
]

function ExploreLeft() {
  const [distance, setDistance] = useState(30)
  // const [selected, setSelected] = useState(filter_price[0])
  const [selected_category, setSelecCategory] = useState('');
  const dispatch = useDispatch()
  console.log(distance)


  const filter_by_category = (category) => {
    dispatch(set_search_query_Action(category))
  };

  return (
    <>
      <div className="w-full lg:block md:block hidden min-h-screen">
        <div className="flex flex-col items-center">
          <div className=" w-full">
            <div className="border border-gray-200 dark:border-gray-800 rounded p-3 bg-white dark:bg-gray-800 flex-col">
              <span className="flex flex-row items-center mb-4 dark:text-white">
                {/* <XIcon height={20} width={20} /> */}
                <p className="text-gray-700 font-sm dark:text-green-500 font-semibold">
                  Filters
                </p>
                <div className="flex-1 "></div>
                <ChevronDownIcon
                  height={20}
                  width={20}
                  className="text-blue-900"
                />
              </span>

              {/* // select price range */}
              <div className="bg-white z-30 mb-4">
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Sort by
                  </label>
                  <select
                    id="location"
                    name="location"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none sm:text-sm rounded-md"
                    defaultValue="Price (Low to high)"
                  >
                    {filter_price.map((option, index) => (
                      <option key={index}>{option.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="my-8">
                <p className="text-gray-700 font-sm dark:text-green-500 font-semibold">
                  Distance{" "}
                </p>
                <Slider
                  aria-label="slider-ex-1"
                  defaultValue={30}
                  onChange={val => setDistance(val)}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <Text className="text-sm text-gray-600 ml-2">{distance}km</Text>
              </div>

              <p className="text-gray-700 font-sm dark:text-green-500 font-semibold">
                Categories:
              </p>

              {/* // categories */}


              {
                data.categories?.map((category, index) => (
                  <div key={index} onClick={() => filter_by_category(category.name)} className="cursor-pointer ml-1">
                    <p className="text-sm my-1 text-gray-700 hover:text-gray-900">{category.name}</p>
                  </div>
                ))
              }

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function NewCheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#059669"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ExploreLeft;
