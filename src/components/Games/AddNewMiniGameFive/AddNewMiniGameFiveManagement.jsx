import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoVolumeHighOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const AddNewMiniGameFiveManagement = () => {
    const [audioFile, setAudioFile] = useState(null);

    const handleAudioSelect = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('audio/')) {
            setAudioFile(file);
            console.log("Selected Audio File: ", file.name);
        } else {
            alert("Please select a valid audio file.");
        }
    };

    return (
        <div className="overflow-y-auto h-screen custom-scrollbar">
            <div className="w-full min-h-[500px] bg-[#FFFFFF] border border-[#E1E5E8] rounded-[30px] overflow-y-auto pb-10">
                <h1 className="font-inter font-semibold text-2xl leading-9 pt-6 px-6 pb-4">Add New</h1>
                <div className="mx-5">
                    <label htmlFor="topic" className="font-inter font-[500] text-[16px] leading-6">
                        Topic
                    </label>
                    <input
                        type="text"
                        id="topic"
                        placeholder="Enter topic name"
                        className="w-full h-[44px] outline-none border border-[#D0D5DD] rounded-lg px-3 py-2"
                    />
                </div>

                <div className="mx-5 mt-6">
                    <label htmlFor="dialogues" className="font-inter font-[600] text-[24px] leading-6">
                        Dialogues
                    </label>
                    <div className="w-full h-[300px] border border-[#D0D5DD] rounded-lg mt-1">
                        <div className="mx-5 mt-4">
                            <label htmlFor="topic" className="font-inter font-[500] text-[16px] leading-6">
                                French
                            </label>
                            <div className="flex">
                                <input
                                    type="text"
                                    id="topic"
                                    placeholder="Write dialogue in french"
                                    className="w-[65%] h-[44px] outline-none border border-[#D0D5DD] rounded-lg px-3 py-2"
                                />
                                <select
                                    name=""
                                    id=""
                                    className="w-[28%] h-[44px] mx-8 px-3 border border-[#D0D5DD] rounded-lg pr-4"
                                >
                                    <option value="Narrator">Narrator</option>
                                    <option value="Man">Man</option>
                                    <option value="Woman">Woman</option>
                                </select>

                                <div
                                    className="w-[34px] h-[34px] mt-1 flex items-center justify-center bg-[#FFEAEA] border border-[#D80027] rounded-lg"
                                >
                                    <FaRegTrashAlt onClick={() => alert("Functionality will be added soon")} className="text-[#D80027] cursor-pointer" style={{ fontSize: "16px" }} />
                                </div>
                            </div>
                            <div className="mt-12 flex">
                                <div className="flex mt-3" onClick={() => document.getElementById('audio-input').click()}>
                                    <IoIosAddCircleOutline className='w-[20px] h-[20px] cursor-pointer' />
                                    <p className='text-[#000000] underline font-inter font-[400] cursor-pointer text-[16px] leading-6 '>Add Audio</p>
                                </div>
                                <div
                                    className="relative w-[34px] h-[34px] mt-1 ml-14 flex items-center justify-center bg-[#E2E2E2] rounded-full cursor-pointer"
                                >
                                    <IoVolumeHighOutline className="w-[20px] h-[20px] text-[#333333]" />
                                    <div
                                        className="absolute top-0 right-0 bg-[#D80027] w-[12px] h-[12px] flex items-center justify-center rounded-full"
                                        title="Remove"
                                    >
                                        <span className="text-white text-[10px] font-bold leading-none" onClick={()=> setAudioFile(null)}>×</span>
                                    </div>
                                </div>

                                <input
                                    type="file"
                                    id="audio-input"
                                    accept="audio/*"
                                    className="hidden"
                                    onChange={handleAudioSelect}
                                />
                            </div>
                            {audioFile && (
                                    <p className="mt-2 text-green-600 font-inter text-[14px]">
                                        {audioFile.name}
                                    </p>
                                    )}
                            <div className="mt-14">
                                <label htmlFor="translate" className="font-inter font-[500] text-[16px] leading-6">
                                    Translated Version
                                </label>
                                <div className="">
                                    <input
                                        type="text"
                                        id="translate"
                                        placeholder="Enter topic name"
                                        className="w-[70%] h-[44px] outline-none border border-[#D0D5DD] rounded-lg px-3 py-2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ml-5">
                    <button
                        onClick={() => alert("Functionality will be added soon")}
                        className="w-[210px] h-[44px] mt-5 rounded-[100px] px-4 py-2 bg-[#FFF1B2] font-[600] text-[16px] leading-[24px] flex items-center justify-center space-x-2"
                    >
                        <IoMdAdd className="text-black" />
                        <span>Add more</span>
                    </button>
                </div>

                <div className="flex justify-end mt-5">
                    <Link to="/mini-game-five">
                    <button className="w-[210px] h-[44px] mr-4 rounded-[100px] px-4 py-2 border border-black font-[600] text-[16px] leading-[24px] flex items-center justify-center space-x-2">
                        Cancel
                    </button>
                    </Link>
                    <button className="w-[210px] h-[44px] mr-4 rounded-[100px] px-4 py-2 bg-[#FFC600] font-[600] text-[16px] leading-[24px] flex items-center justify-center space-x-2" onClick={()=> alert("Functionality will be added soon")}>
                        Add
                    </button>
                </div>

            </div>
            <div className='mb-24'></div>
        </div>
    );
};

export default AddNewMiniGameFiveManagement;
