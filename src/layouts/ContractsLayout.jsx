import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Input, Stack, Textarea, Select, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import { data } from "../utils/data";
import GeneralLayout from "./GeneralLayout";
import BlueButton from "../components/Buttons/BlueButton";
import { create_a_job_Action } from "../redux/actions/jobActions";
import Success from "../components/Alerts/Success";
import Error from "../components/Alerts/Error";

const contract_routes = [
    { name: "Contracts", location: "/contracts" },
    { name: "Jobs", location: "/myjobs" },
    {name: "Proposals", location: '/proposals'}
];

export default function ContractsLayout({ children }) {
    const location = useLocation();
    const history = useHistory();
    const [details, setDetails] = useState("");
    const [amount, setAmount] = useState(0);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState(data.categories[0].name);
    const [paymeny_option, setPaymentOption] = useState("");
    const [period, setPeriod] = useState("hourly");
    const _user = useSelector(state => state.user_login)
    const _job = useSelector(state => state.create_job)
    const { loading, message, error } = _job
    const { userInfo } = _user
    const dispatch = useDispatch();

    const post_job = (e) => {
        e.preventDefault();
        const msg_obj = {
            description: details,
            amount_to_pay: amount,
            title,
            paymant_period: period,
            category,
            payment_plan: paymeny_option
        };
        dispatch(create_a_job_Action(msg_obj, userInfo?.token));
    };

    return (
        <GeneralLayout>
            <div className="flex flex-col items-center px-4">
                <div className="pb-16 pt-4 lg:w-3/5 md:w-4/5 w-full">
                    <>
                        <SideDrawer
                            sendButton={
                                <BlueButton text={'Post Job'} onClick={post_job} className="rounded" loading={loading} />
                            }
                            drawer_heading={"Create a job"}
                        >
                            <Stack spacing={8} pt={8}>
                                <div>
                                    <label
                                        htmlFor="location"
                                        className="block text-sm text-gray-700"
                                    >
                                        Select category:
                                    </label>
                                    <select
                                        id="location"
                                        name="location"
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="mt-1 block w-full px-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none sm:text-sm rounded-md"
                                        defaultValue="Vehicle and transportation"
                                    >
                                        {data.categories.map((option, index) => (
                                            <option value={option.name} key={index}>
                                                {option.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <Input
                                    type="text"
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="contract title"
                                />

                                <Text>Payment</Text>
                                <Select
                                    placeholder="set payment option"
                                    onChange={(e) => setPaymentOption(e.target.value)}
                                >
                                    <option value="once_off">Once off payment</option>
                                    <option value="periodically">Periodically</option>
                                </Select>

                                {paymeny_option === "periodically" ? (
                                    <div className="flex flex-row items-center gap-4 w-full">
                                        <Select
                                            placeholder="set period"
                                            onChange={(e) => setPeriod(e.target.value)}
                                        >
                                            <option value="hour">per hour</option>
                                            <option value="day">per day</option>
                                            <option value="week">per week</option>
                                            <option value="month">per month</option>
                                        </Select>
                                        <Input
                                            type="number"
                                            onChange={(e) => setAmount(e.target.value)}
                                            placeholder={`$amount/${period}`}
                                        />
                                    </div>
                                ) : (
                                    <Input
                                        type="number"
                                        onChange={(e) => setAmount(e.target.value)}
                                        placeholder="Amount for the job"
                                    />
                                )}
                                <Textarea
                                    rows={5}
                                    onChange={(e) => setDetails(e.target.value)}
                                    placeholder="Full details for the job"
                                />
                            </Stack>
                            {message && <Success text={message} />}
                            {error && <Error text={error} />}
                        </SideDrawer>
                    </>
                    <div className="flex jobs w-full">
                        <div className="w-full pt-2">
                            <div className="w-full flex flex-col p-2 mx-auto bg-white rounded-sm shadow">
                                <div className="flex flex-row items-center">
                                    {contract_routes.map((option, index) => (
                                        <span
                                            onClick={() => history.push(option.location)}
                                            key={index}
                                            className={`${location.pathname === option.location
                                                ? "border-b-2 border-blue-900 bg-gray-100 "
                                                : "border-none "
                                                } text-gray-700 hover:bg-gray-100 cursor-pointer py-2 mb-8 px-2 text font-semibold`}
                                        >
                                            {option.name}
                                        </span>
                                    ))}
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GeneralLayout>
    );
}
