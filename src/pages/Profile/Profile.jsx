import { Input } from "@chakra-ui/input";
import { Select } from "@chakra-ui/select";
import { Textarea } from "@chakra-ui/textarea";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/Alerts/Error";
import Success from "../../components/Alerts/Success";
import BlueButton from "../../components/Buttons/BlueButton";
import Tags from "../../components/tags/Tags";
import AccountLayout from '../../layouts/AccountLayout'
import { create_a_service_Action, edit_a_service_Action } from "../../redux/actions/serviceActions";
import { data } from "../../utils/data";

function Profile() {
    const [description, setDescription] = useState("");
    const [catTags, setCatTags] = useState([]);
    const [pricerange, setPriceRange] = useState(0);
    const [selected, setSelected] = useState(data.categories[0].name);
    const [website, setWebsite] = useState("");
    const dispatch = useDispatch();
    const [seller_range_type, setSellerRangeType] = useState("hour");
    const [city, setCity] = useState("");
    const [code, setCode] = useState("");
    const [house_number, setHouseNumber] = useState("");
    const [street, setStreet] = useState();
    const [service] = useState(null)
    const _user = useSelector(state => state.user_login)
    const { userInfo } = _user
    const _create = useSelector(state => state.create_service)
    const { create_loading, create_error, create_message } = _create
    const _edit = useSelector(state => state.edit_service)
    const { edit_loading, edit_error, edit_message } = _edit

    const selectedTags = (tags) => {
        setCatTags(tags);
    };

    const create_service = () => {
        const body_obj = {
            description: description,
            price: pricerange,
            category: selected,
            work_area_number: house_number,
            street_name: street,
            postal_code: code,
            work_area_name: city,
            website: website,
            tags: catTags
        }
        dispatch(create_a_service_Action(body_obj, userInfo?.token))
    }

    const edit_service = () => {
        const body_obj = {
            description: description,
            price: pricerange,
            category: selected,
            work_area_number: house_number,
            street_name: street,
            postal_code: code,
            work_area_name: city,
            website: website,
            tags: catTags
        }
        dispatch(edit_a_service_Action(body_obj, userInfo?.user?.service))
    }

    return (
        <AccountLayout>
            <div className=" flex flex-col lg:px-32 md:px-16 px-4 items-center">
                <p className="py-16 text-xl font-semibold text-gray-700">
                    Describe your service
                </p>
                {/* category */}
                <div className="flex flex-col  w-full items-center">
                    <div className="flex flex-col self-center bg-white w-full">
                        <p className="text-sm mb-2 text-gray-700 ml-4">
                            Select service category
                        </p>
                        <div className={`" w-full"`}>
                            <div className="relative mt-1">
                                <Select
                                    variant="filled"
                                    value={selected}
                                    placeholder={`${service ? service.category : "Service Category"
                                        }`}
                                    onChange={(e) => setSelected(e.target.value)}
                                >
                                    {data.categories.map((category, index) => (
                                        <option key={index} value={category.name}>
                                            {category.name}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* tags */}
                <div className="flex flex-col w-full items-center">
                    <div className="flex flex-col self-center bg-white w-full">
                        {/* <p className="text-sm my-4 text-gray-700 ml-4 font-semibold">Search tags</p> */}
                        <Tags
                            selectedTags={selectedTags}
                            className=""
                            currentTags={service?.tags}
                        />
                    </div>
                </div>

                {/* description */}
                <div className="flex flex-col w-full items-center">
                    <div className="flex flex-col self-center bg-white w-full">
                        <p className="text-sm my-2 text-gray-700 ml-4">Description</p>
                        {/* <textarea 
                            name="description" 
                            id="description" 
                            cols="30" rows="10"
                            className="p-2 border border-gray-300 outline-none"  
                            placeholder="describe yourself with not less than 150 words"/> */}
                        <Textarea
                            minLength={150}
                            cols="30"
                            rows="7"
                            variant="filled"
                            className="p-2 border border-gray-300 outline-none rounded-lg bg-white"
                            placeholder={`${service
                                ? service.category
                                : "Describe yourself and/or your service with not less than 150 words"
                                }`}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                </div>


                {/* price range */}
                <div className="flex flex-col w-full items-center mt-4">
                    <div className="flex flex-col self-center bg-white w-full">
                        <p className="text-sm my-2 text-gray-700 ml-4">
                            Price range e.g $45/hour
                        </p>

                        <Select
                            className="mb-4"
                            onChange={(e) => setSellerRangeType(e.target.value)}
                            placeholder="per hour"
                        >
                            <option value="hour">per hour</option>
                            <option value="day">per day</option>
                            <option value="week">per week</option>
                            <option value="month">per month</option>
                        </Select>

                        <Input
                            type="number"
                            variant="filled"
                            placeholder={`$35/${seller_range_type}`}
                            className="p-2 border col-span-2 border-gray-300 bg-white outline-none rounded-lg"
                            onChange={(e) => setPriceRange(e.target.value)}
                        />
                    </div>
                </div>

                {/* location */}
                <div className="flex flex-col w-full items-center mt-4">
                    <div className="flex flex-col self-center bg-white w-full">
                        <p className="text-sm my-2 text-gray-700 ml-4">
                            Location info (city/country)
                        </p>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-2">
                            <Input
                                type="text"
                                variant="filled"
                                placeholder="Whats your work/house number"
                                className="p-2 border col-span-1 border-gray-300 bg-white outline-none rounded-lg"
                                onChange={(e) => setHouseNumber(e.target.value)}
                            />
                            <Input
                                type="text"
                                variant="filled"
                                placeholder="Whats your work area street name"
                                className="p-2 border col-span-1 border-gray-300 bg-white outline-none rounded-lg"
                                onChange={(e) => setStreet(e.target.value)}
                            />
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-2">
                            <Input
                                type="text"
                                variant="filled"
                                placeholder="postal code"
                                className="p-2 border col-span-1 border-gray-300 bg-white outline-none rounded-lg"
                                onChange={(e) => setCode(e.target.value)}
                            />
                            <Input
                                type="text"
                                variant="filled"
                                placeholder="Street name of work area"
                                className="p-2 border col-span-1 border-gray-300 bg-white outline-none rounded-lg"
                                onChange={(e) => setStreet(e.target.value)}
                            />
                        </div>
                        <Input
                            type="text"
                            variant="filled"
                            placeholder="Full address"
                            className="p-2 border col-span-2 border-gray-300 bg-white outline-none rounded-lg"
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </div>
                </div>
                {/* location */}
                <div className="flex flex-col w-full items-center mt-4">
                    <div className="flex flex-col self-center bg-white w-full">
                        <p className="text-sm my-2 text-gray-700 ml-4">
                            website (Optional)
                        </p>
                        <Input
                            type="text"
                            variant="filled"
                            placeholder="what is your website?"
                            className="p-2 border col-span-2 border-gray-300 bg-white outline-none rounded-lg"
                            onChange={(e) => setWebsite(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {/* //create profile button */}
                <div className="flex flex-col w-full items-center my-8">
                    {create_message && <Success text={create_message} />}
                    {create_error && <Error text={create_error} />}
                    {edit_message && <Success text={edit_message} />}
                    {edit_error && <Error text={edit_error} />}
                    <div className="flex flex-col self-center bg-white w-full">
                        {
                            userInfo?.user?.seller ? (
                                <BlueButton
                                    onClick={edit_service}
                                    loading={edit_loading}
                                    text={'edit my profile'} />)
                                : (
                                    <BlueButton
                                        onClick={create_service}
                                        loading={create_loading}
                                        text={'Become a freelancer'} />
                                )
                        }
                    </div>
                </div>
            </div>
        </AccountLayout>
    )
}

export default Profile
