import React, { useState } from 'react'
import GeneralLayout from './GeneralLayout'
import { SearchIcon, ViewGridAddIcon, ViewListIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import ExploreLeft from '../components/ExploreLeft/ExploreLeft';



function ExploreLayout({children}) {
  const [grid_view, setGridView] = useState(false);
  const [skip, setSkip] = useState(0);
  const dispatch = useDispatch();

    return (
        <GeneralLayout>
            <div className="grid grid-cols-4 lg:gap-8 md:gap-4 gap-0 min-h-screen lg:px-32 md:px-16 px-2 pt-8">
                <div className="lg:block hidden col-span-1">
                    <ExploreLeft/>
                </div>
                <div className="bg-blue-600 lg:col-span-2 md:col-span-3 col-span-4">
                    {children}
                </div>
                <div className="md:block hidden col-span-1">
                    right
                </div>
            </div>
        </GeneralLayout>
    )
}

export default ExploreLayout
