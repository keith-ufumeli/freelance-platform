import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Switch } from "@headlessui/react";
import GeneralLayout from '../../layouts/GeneralLayout'
import { Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { create_a_contract } from "../../redux/actions/contractActions";
import BlueButton from "../../components/Buttons/BlueButton";
import Error from "../../components/Alerts/Error";
import Success from "../../components/Alerts/Success";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

function CreateContract() {

    const [agreed, setAgreed] = useState(false);
    const { id } = useParams();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    // eslint-disable-next-line
    const [country_code, setCountryCode] = useState("");
    const [details, setDetails] = useState("");
    const [phone_number, setPhonenumber] = useState();
    const [amount, setAmount] = useState(0);
    const [err, setErr] = useState("");
    const [period, setPeriod] = useState("");
    const [title, setTitle] = useState("");
    const _user = useSelector(state => state.user_login)
    const { userInfo } = _user
    const [contract_type, setContractType] = useState("");
    const [payment_period, setPaymentPeriod] = useState('');
    const contract_state = useSelector((state) => state.create_Contract);
    const { loading, error, message } = contract_state;
    const dispatch = useDispatch();

    const create_contract = () => {
        if (!firstname || !lastname || !company || !email || !details) {
            setErr("please enter all fields");
        } else {
            const msg_obj = {
                createdBy: userInfo?.user.uid,
                sent_to: id,
                firstname,
                lastname,
                company,
                email,
                details,
                phone_number,
                amount,
                country_code,
                period_of_contract: period,
                payment_period,
                title,
                contract_type
            };
            if (agreed) {
                dispatch(create_a_contract(msg_obj, id, userInfo?.token));
            }
            if(!agreed){
                setErr('You have to agree for the contract to proceed')
            }
        }
    };

    return (
        <GeneralLayout>
            <div className="bg-white py-16 px-4 overflow-hidden lg:px-32 md:px-16 lg:py-24">
                <div className="relative max-w-xl mx-auto">
              
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">
                            Create contract
                        </h2>
                        <p className="my-4 text-lg leading-6 text-gray-500">
                            Write your info here and send to the other party. Create contract
                            in which both parties should agree in order for work to start
                        </p>
                    </div>
                    <div className="mt-12">
                        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div className="mr-2">
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Your first name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="first-name"
                                        required
                                        onChange={(e) => setFirstname(e.target.value)}
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="py-3 px-4 block w-full shadow-sm  border border-gray-300 outline-none rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="ml-2">
                                <label
                                    htmlFor="last-name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Your Last name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="last-name"
                                        required
                                        onChange={(e) => setLastname(e.target.value)}
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="py-3 px-4 block w-full shadow-sm  border border-gray-300 outline-none rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="company"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Contract title
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        required
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="py-3 px-4 block w-full shadow-sm  border border-gray-300 outline-none rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="company"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Company
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        required
                                        onChange={(e) => setCompany(e.target.value)}
                                        autoComplete="organization"
                                        className="py-3 px-4 block w-full shadow-sm  border border-gray-300 outline-none rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoComplete="email"
                                        className="py-3 px-4 block w-full shadow-sm  border border-gray-300 outline-none rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="phone-number"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Phone Number
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm flex">
                                    
                                    <input
                                        type="text"
                                        name="phone-number"
                                        id="phone-number"
                                        autoComplete="tel"
                                        required
                                        onChange={(e) => setPhonenumber(e.target.value)}
                                        className="py-3 px-4 block w-full pl-20  border border-gray-300 outline-none rounded-md"
                                        placeholder="+1 (555) 987-6543"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Contract details
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        onChange={(e) => setDetails(e.target.value)}
                                        className="py-3 px-4 block w-full shadow-sm border border-gray-300 outline-none rounded-md"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>

                            {/* //type of contract and amount to be payed */}

                            <div className="sm:col-span-2">
                                <p className="text-sm text-gray-700 mt-8">
                                    Type of contract payment method
                                </p>
                                <Select
                                    className="block w-full shadow-sm  border border-gray-300 outline-none rounded-md"
                                    placeholder="Select type of contract payment"
                                    w={"full"}
                                    size={"lg"}
                                    mb={4}
                                    onChange={(e) => setContractType(e.target.value)}
                                >
                                    <option value="once_off">Once off payment</option>
                                    <option value="periodic">Periodic payment</option>
                                </Select>

                                {contract_type === "once_off" ? (
                                    <div className="sm:col-span-2 mb-8">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Amount to pay
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="number"
                                                name="amount"
                                                required
                                                onChange={(e) => setAmount(e.target.value)}
                                                type="number"
                                                className="py-3 px-4 block w-full shadow-sm  border border-gray-300 outline-none rounded-md"
                                            />
                                        </div>
                                    </div>
                                ) : contract_type === "periodic" ? (
                                    <div className="grid grid-cols-2 w-full gap-4">
                                        <div>
                                            <label
                                                htmlFor="first-name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Period
                                            </label>
                                            <div className="mt-1">
                                                <Select
                                                    className="block w-full shadow-sm  border border-gray-300 outline-none rounded-md"
                                                    placeholder="Select the period"
                                                    w={"full"}
                                                    size={"lg"}
                                                    mb={4}
                                                    onChange={(e) => setPaymentPeriod(e.target.value)}
                                                >
                                                    <option value="hourly">Hourly</option>
                                                    <option value="weekly">Weekly</option>
                                                    <option value="monthly">Monthly</option>
                                                    <option value="yearly">Yearly</option>
                                                </Select>
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="first-name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Amount
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="amount"
                                                    required
                                                    onChange={(e) => setAmount(e.target.value)}
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    className="py-3 px-4 block w-full shadow-sm col-span-1 border border-gray-300 outline-none rounded-md"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Period of contract
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="number"
                                        name="period"
                                        required
                                        onChange={(e) => setPeriod(e.target.value)}
                                        type="text"
                                        className="py-3 px-4 block w-full shadow-sm  border border-gray-300 outline-none rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2 my-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <Switch
                                            checked={agreed}
                                            onChange={setAgreed}
                                            className={classNames(
                                                agreed ? "bg-blue-900" : "bg-gray-200",
                                                "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"
                                            )}
                                        >
                                            <span className="sr-only">Agree to policies</span>
                                            <span
                                                aria-hidden="true"
                                                className={classNames(
                                                    agreed ? "translate-x-5" : "translate-x-0",
                                                    "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                                                )}
                                            />
                                        </Switch>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-base text-gray-500">
                                            By selecting this, you agree that{" "}
                                            <a
                                                href="/"
                                                className="font-medium text-gray-700 underline"
                                            >
                                                you have signed the contract
                                            </a>{" "}
                                            and{" "}
                                            <a
                                                href="/"
                                                className="font-medium text-gray-700 underline"
                                            >
                                                await other party's confirmation
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                                {err ? (
                                    <p className="bg-red-100 text-red-700 p-2 text-center w-full my-4">
                                        enter all detals
                                    </p>
                                ) : null}
                            </div>
                            <div className="sm:col-span-2">
                                {error && <Error text={error} />}
                                {err && <Error text={err} />}
                                {message && <Success text={message} />}
                                <BlueButton loading={loading} onClick={create_contract} text={'Send Contract'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GeneralLayout>
    )
}

export default CreateContract
