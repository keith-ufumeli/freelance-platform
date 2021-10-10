import React, { useState } from 'react'
import GeneralLayout from './GeneralLayout'
import { SearchIcon} from "@heroicons/react/outline";
import ExploreLeft from '../components/ExploreLeft/ExploreLeft';
import ExploreRight from '../components/ExploreRight/ExploreRight';



function ExploreLayout({ children }) {
    const [search_query, setSearchQuery] = useState('')

    const searchItems = () =>{
        console.log(search_query)
    }

    return (
        <GeneralLayout>
            <div className="grid grid-cols-4 lg:gap-8 md:gap-4 gap-0 min-h-screen lg:px-32 md:px-16 px-2 pt-8">
                <div className="lg:block hidden col-span-1">
                    <ExploreLeft />
                </div>
                <div className="rounded lg:col-span-2 md:col-span-3 col-span-4">
                    <form onSubmit={searchItems} className="search bg-white flex flex-row items-center w-full rounded border border-gray-200 overflow-hidden mb-4">
                        <input
                            type="text"
                            className="bg-white border-none outline-none p-2 flex-1"
                            placeholder="search"
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-blue-900 p-4 cursor-pointer hover:bg-blue-800 rounded"
                        >
                            <SearchIcon height={20} width={20} className="text-white" />
                        </button>
                    </form>
                    {children}
                </div>
                <div className="md:block hidden col-span-1">
                    <ExploreRight />
                </div>
            </div>
        </GeneralLayout>
    )
}

export default ExploreLayout
