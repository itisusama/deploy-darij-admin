import React from 'react';
import { miniGameOne } from '../../../Data/miniGameOne';
import { useNavigate } from 'react-router-dom';

const EditMiniGameOneManagement = () => {
    const navigate = useNavigate();
    return (
        <div className="">
            <div className="w-full h-[540px] bg-[#FFFFFF] border border-[#E1E5E8] rounded-[30px] overflow-auto">
                <h1 className="font-inter font-semibold text-2xl leading-9 pt-8 px-6 pb-4">Edit</h1>
                <div className="mx-5">
                    <label htmlFor="tags" className="font-inter text-base text-gray-500">
                        Word
                    </label>
                    <input id='tags' type="text" className='w-full h-[46px] border border-[#E2E2E2] rounded-lg px-3 outline-none' />
                </div>
                {/* Word Selection */}
                <div className="flex justify-between mx-5 my-8">
                    <p className="font-inter text-base text-gray-500">
                        Select a word
                    </p>
                </div>
                <div className="flex flex-wrap gap-5 px-5 ml-5">
                    {miniGameOne.map((data, index) => (
                        <div key={index} className="w-[132px] flex flex-col items-center group">
                            <img
                                src={data.image}
                                alt={data.title}
                                className="w-[132px] h-[130px] object-cover rounded-[24px] filter grayscale blur-[1px] group-hover:grayscale-0  hover:border hover:border-[#FFC600] group-hover:brightness-100 group-hover:blur-none transition duration-300 ease-in-out"
                            />
                            <p className="font-inter font-[700] text-[14px] leading-6 text-center mt-2 text-gray-500 group-hover:text-[#FFC600] transition duration-300 ease-in-out">
                                {data.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Buttons */}
            <div className="flex justify-end mt-7">
                <button
                    onClick={() => navigate('/mini-game-one')}
                    className="w-52 h-11 rounded-full border border-black font-inter font-semibold text-base leading-6"
                >
                    Cancel
                </button>
                <button
                    onClick={() => navigate('/mini-game-one')}
                    className="w-52 h-11 rounded-full bg-[#FFC600] ml-5 font-inter font-semibold text-base leading-6"
                >
                    Add
                </button>
            </div>
        </div>
    )
}

export default EditMiniGameOneManagement;
