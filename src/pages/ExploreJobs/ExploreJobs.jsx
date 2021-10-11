import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Error from '../../components/Alerts/Error'
import ExploreJobListItem from '../../components/ExploreItems/ExploreJobListItem'
import ExploreLayout from '../../layouts/ExploreLayout'
import { explore_jobs_Action } from '../../redux/actions/jobActions'

function ExploreJobs() {
    const _jobs = useSelector(state => state.all_jobs)
    const { loading, error, jobs } = _jobs
    const dispatch = useDispatch()
    const _search = useSelector(state => state.search_query)
    const { query } = _search

    useEffect(() => {
        dispatch(explore_jobs_Action(query))
    }, [dispatch, query])

    return (
        <ExploreLayout>
            <div className="min-h-screen">
                {
                    loading ? (
                        <p className="text-lg text-gray-700 my-8 text-center">Loading...</p>
                    ) : error ? (
                        <Error>Oops! Something went wrong, try refreshing the page</Error>
                    ) : (
                        <>
                            {
                                jobs?.jobs?.length >= 1 ? (
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
                                ) : (
                                    <p className="text-center text-gray-700 text-lg">There are not jobs to show</p>
                                )
                            }
                        </>
                    )
                }
            </div>
        </ExploreLayout>
    )
}

export default ExploreJobs
