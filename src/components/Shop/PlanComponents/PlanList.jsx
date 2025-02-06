import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const Planlist = () => {
    const navigate = useNavigate();
    const [dropdownVisible, setDropdownVisible] = useState(null);

    const toggleDropdown = (index) => {
        setDropdownVisible(dropdownVisible === index ? null : index);
    };

    // const handleEdit = (plan) => {
    //     setDropdownVisible(null); 
    //     console.log("Edit clicked for:", plan);
    // };

    const handleDelete = (plan) => {
        setDropdownVisible(null); 
        alert("Functionality will be added soon");
    };

    const plans = [
        {
            title: "8.95€/month",
            features: [
                "Language courses for beginners (level A1/A2, 1200 words)",
                "Language courses for advanced (level B1/B2, 2600 words)",
                "Advanced language courses (level C1/C2, 4000 words)",
                "Access to mini-games and dialogues, podcasts, learning methods",
                "Possibility to speak the language with a single payment",
                "15% for inviting friends - less stress",
            ],
        },
        {
            title: "37.95€/year",
            features: [
                "Language courses for beginners (level A1/A2, 1200 words)",
                "Language courses for advanced (level B1/B2, 2600 words)",
                "Advanced language courses (level C1/C2, 4000 words)",
                "Access to mini-games and dialogues, podcasts, learning methods",
                "Possibility to speak the language with a single payment",
                "15% for inviting friends - less stress",
            ],
        },
        {
            title: "67.95€ (lifetime)",
            features: [
                "Language courses for beginners (level A1/A2, 1200 words)",
                "Language courses for advanced (level B1/B2, 2600 words)",
                "Advanced language courses (level C1/C2, 4000 words)",
                "Access to mini-games and dialogues, podcasts, learning methods",
                "Possibility to speak the language with a single payment",
                "15% for inviting friends - less stress",
            ],
        },
    ];

    return (
        <div className="w-full bg-transparent flex flex-col h-screen overflow-y-scroll custom-scrollbar">
            {plans.map((plan, index) => (
                <div key={index} className="flex justify-between h-fit rounded-[12px] bg-white p-2 my-3 relative">
                    <div>
                        <h2 className="font-inter font-[600] text-[16px] leading-6 pl-1 pb-3">{plan.title}</h2>
                        <div className="flex flex-col">
                            {plan.features.map((feature, idx) => (
                                <p
                                    key={idx}
                                    className="font-inter font-[400] text-[12px] text-[#B8B7B8] leading-5"
                                >
                                    ✔️ {feature}
                                </p>
                            ))}
                        </div>
                    </div>
                    <FontAwesomeIcon
                        icon={faEllipsisVertical}
                        className="w-5 h-5 text-[#000000] cursor-pointer"
                        onClick={() => toggleDropdown(index)}
                    />
                    {dropdownVisible === index && (
                        <div className="absolute top-8 right-0 w-32 bg-white border rounded-lg shadow-md z-10">
                            <button
                                onClick={() => navigate("/editplan", { state: { plan: plans[index] } })}
                                className="w-full px-4 py-2 text-left hover:bg-gray-100"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(plan.title)}
                                className="w-full px-4 py-2 text-left hover:bg-gray-100 text-red-500"
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            ))}
            <div className='mb-60'></div>
        </div>
    );
};

export default Planlist;
