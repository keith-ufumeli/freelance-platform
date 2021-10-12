import React from 'react'
import ContractsLayout from '../../layouts/ContractsLayout'

function Contracts() {
    return (
        <ContractsLayout>
            <p className="text-center text-gray-700 text-lg mb-4">you do not have any contracts at the moment</p>
        </ContractsLayout>
    )
}

{/* <ContractsLayout>
            <>
                {
                    jobs?.jobs?.length < 1 ? (
                        <p className="mb-4 text-center text-gray-700 text-lg">You have no contracts at the moment</p>
                    ) : (
                        <>
                            {jobs?.jobs?.map((job, index) => (
                                <Disclosure key={index}>
                                    {({ open }) => (
                                        <div id="my-node" className="w-full">
                                            <Disclosure.Button className="myPage flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-sm hover:bg-blue-200 focus:outline-none focus-visible:ring my-1 focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                                                <span>{job.title !== '' ? job.title : 'No Title'}</span>
                                                <ChevronDownIcon
                                                    className={`${open ? "transform rotate-180" : ""
                                                        } w-5 h-5 text-blue-500`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                <div className="bg-white overflow-hidden sm:rounded-lg">
                                                    <div className="px-4 py-5 sm:px-6">
                                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                                            Contract Details
                                                        </h3>
                                                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                                            Details about this contract
                                                        </p>
                                                    </div>
                                                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                                                        <dl className="sm:divide-y sm:divide-gray-200">
                                                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                <dt className="text-sm font-medium text-gray-500">
                                                                    Contractor name
                                                                </dt>
                                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                                    {job.displayName}
                                                                </dd>
                                                            </div>
                                                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                <dt className="text-sm font-medium text-gray-500">
                                                                    Contract title
                                                                </dt>
                                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                                    {job.title !== '' ? job.title : 'No Title'}
                                                                </dd>
                                                            </div>
                                                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                <dt className="text-sm font-medium text-gray-500">
                                                                    Contract status
                                                                </dt>
                                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                                    {job.status}
                                                                </dd>
                                                            </div>
                                                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                <dt className="text-sm font-medium text-gray-500">
                                                                    Email address
                                                                </dt>
                                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                                    {job.email}
                                                                </dd>
                                                            </div>
                                                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                <dt className="text-sm font-medium text-gray-500">
                                                                    Expected earnings
                                                                </dt>
                                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                                    ${job.amount_to_pay}
                                                                </dd>
                                                            </div>
                                                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                <dt className="text-sm font-medium text-gray-500">
                                                                    Details
                                                                </dt>
                                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                                    {job.description}
                                                                </dd>
                                                            </div>
                                                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                                <dt className="text-sm font-medium text-gray-500">
                                                                    Download contract?
                                                                </dt>
                                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                                    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                                                            <div className="w-0 flex-1 flex items-center">
                                                                                <PaperClipIcon
                                                                                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                                                                                    aria-hidden="true"
                                                                                />
                                                                                <span className="ml-2 flex-1 w-0 truncate">
                                                                                    <span>{job.title !== '' ? job.title : 'No Title'}</span>.pdf
                                                                                </span>
                                                                            </div>
                                                                            <div className="ml-4 flex-shrink-0">
                                                                                <span
                                                                                    onClick={onButtonClick}
                                                                                    href="/"
                                                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                                >
                                                                                    Download
                                                                                </span>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </dd>
                                                            </div>
                                                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 items-center">
                                                                <dt className="text-sm font-medium text-gray-500">
                                                                    Action
                                                                </dt>
                                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                                    <ul className="divide-y divide-gray-200">
                                                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                                                            <div className="flex flex-row items-center justify-end w-full">
                                                                                <p className="text-green-700 mr-3 font-semibold cursor-pointer">Accept</p>
                                                                                <p className="text-red-700 mr-3 font-semibold cursor-pointer">Decline</p>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </dd>
                                                            </div>
                                                        </dl>
                                                    </div>
                                                </div>
                                            </Disclosure.Panel>
                                        </div>
                                    )}
                                </Disclosure>
                            ))}
                        </>
                    )
                }
            </>
        </ContractsLayout> */}

export default Contracts
