import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import ExploreJobListItem from '../../components/ExploreItems/ExploreJobListItem'
import ExploreLayout from '../../layouts/ExploreLayout'
import { explore_jobs_Action } from '../../redux/actions/jobActions'

function ExploreJobs() {
    const _jobs = useSelector(state => state.all_jobs)
    const { loading, error, jobs } = _jobs
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(explore_jobs_Action())
    }, [dispatch])

    return (
        <ExploreLayout>
            <div className="min-h-screen">
                {
                    loading ? (
                        <p className="text-lg text-gray-700 my-8 text-center">Loading...</p>
                    ) : error ? (
                        <p className="text-lg text-gray-700 my-8 text-center">Oops! Something went wrong, try refreshing the page</p>
                    ) : (
                        <>
                            {
                                jobs?.jobs?.map((job, index) => (
                                    <div key={index}>
                                        <ExploreJobListItem
                                            time={job.createdAt}
                                            description={job.description}
                                            amount={job.amount_to_pay}
                                            title={job.title}
                                            name={'tatendaZw'}
                                            createdBy={job.createdBy}
                                            id={job._id}
                                        />
                                    </div>
                                ))
                            }
                        </>
                    )
                }
            </div>
        </ExploreLayout>
    )
}

export default ExploreJobs
