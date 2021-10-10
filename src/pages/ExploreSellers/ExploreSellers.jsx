import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Error from '../../components/Alerts/Error'
import ExploreSellersListItem from '../../components/ExploreItems/ExploreSellersListItem'
import ExploreLayout from '../../layouts/ExploreLayout'
import { explore_serviceS_Action } from '../../redux/actions/serviceActions'

function ExploreSellers() {

    const _services = useSelector(state => state.explore_services)
    const { loading, services, error } = _services
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(explore_serviceS_Action())
    }, [dispatch])

    console.log(services?.services)

    return (
        <ExploreLayout>
            {error ? (
                <Error text={'Oops! Somthing went wrong, try refreshing the page'} />
            ) : loading ? (
                <p className="text-center text-gray-700 text-lg">Loading...</p>
            ) : (
                <>
                    {
                        services?.services.map((service, index)=>(
                            <div key={index} className="mb-8">
                                <ExploreSellersListItem
                                    verified={service.user_verified}
                                    description={service.description}
                                    businessname={service.displayName}
                                    tags={service.tags}
                                    price={service.price}
                                    id={service._id}
                                />
                            </div>
                        ))
                    }
                </>
            )}
        </ExploreLayout>
    )
}

export default ExploreSellers
