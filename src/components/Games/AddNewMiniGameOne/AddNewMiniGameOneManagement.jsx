import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WithContext as ReactTags } from "react-tag-input";
import { miniGameOne } from '../../../Data/miniGameOne';

const AddNewMiniGameOneManagement = () => {
    const navigate = useNavigate();

    const [tags, setTags] = useState([]);
    const [suggestions] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);


    const handleDelete = (i) => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = (tag) => {
        const wordIndex = miniGameOne.findIndex((item) => item.title === tag.text);
    
        if (wordIndex !== -1 && !selectedImages.includes(wordIndex)) {
            // Add to tags and mark as selected if it exists in miniGameOne
            setTags([...tags, tag]);
            setSelectedImages([...selectedImages, wordIndex]);
        } else if (wordIndex === -1) {
            // Add to tags only if it's not in miniGameOne
            setTags([...tags, tag]);
        }
    };

    const toggleImageSelection = (index) => {
        const selectedWord = miniGameOne[index].title;
    
        if (selectedImages.includes(index)) {
            // Deselect the image and remove the word from tags
            setSelectedImages(selectedImages.filter((i) => i !== index));
            setTags(tags.filter((tag) => tag.text !== selectedWord));
        } else {
            // Select the image and add the word to tags
            setSelectedImages([...selectedImages, index]);
            setTags([...tags, { id: selectedWord, text: selectedWord }]);
        }
    };


    return (
        <section className="overflow-y-auto h-screen custom-scrollbar">
        <div>
            <div className="w-full h-fit bg-[#FFFFFF] border border-[#E1E5E8] rounded-[30px] overflow-auto">
                <h1 className="font-inter font-semibold text-2xl leading-9 pt-8 px-6 pb-4">Add New</h1>
                <div className="mx-5">
                    <label htmlFor="tags" className="font-inter text-base text-gray-500">
                        Selected Words
                    </label>

                    <div id="tags" className="relative mt-2 text-[#8D8D8D]">
                        <ReactTags
                            tags={tags}
                            // suggestions={suggestions}
                            handleDelete={handleDelete}
                            handleAddition={handleAddition}
                            placeholder=""
                            classNames={{
                                tags: "flex items-center bg-[#f2f2f2] p-2 rounded-md",
                                tagInputField: "bg-transparent w-full h-[38px] px-4 py-2 border-none shadow-none",
                                selected: "flex flex-wrap",
                                tag: "flex items-center bg-[#FFFFFF] text-[#8D8D8D] text-sm px-3 py-0 rounded-md mr-2 my-1",
                                remove: "text-black"
                            }}
                            removeComponent={({ index }) => (
                                <span
                                onClick={() => {
                                    console.log("Tag delete clicked at index:", index);
                                    handleDelete(index); // Call your handleDelete function directly
                                }}
                                    className="ml-2 text-black cursor-pointer"
                                    style={{ fontSize: '14px'}}
                                >
                                    X
                                </span>
                            )}
                        />
                    </div>
                </div>
                {/* Word Selection */}
                <div className="flex justify-between mx-5 my-8">
                    <p className="font-inter text-base text-gray-500">
                        Select from below words
                    </p>
                    <button
                        className="w-[151px] h-[42px] border border-[#FFC600] rounded-full bg-[#FFF1B2] py-3 ml-5 font-inter font-[600] text-[12px] leading-6" onClick={()=> alert("Functionality will be added soon")}
                    >
                        Select All
                    </button>
                </div>
                <div className="flex flex-wrap gap-5 px-5 ml-5">
                    {miniGameOne.map((data, index) => (
                        <div
                            key={index}
                            onClick={() => toggleImageSelection(index)}
                            className="w-[132px] flex flex-col items-center cursor-pointer"
                        >
                            <img
                                src={data.image}
                                alt={data.title}
                                className={`w-[132px] h-[130px] object-cover rounded-[24px] ${selectedImages.includes(index) ? "border-2 border-[#FFC80D]" : "border-none"
                                    }`} 
                            />
                            <p
                                className={`font-inter font-[700] text-[14px] leading-6 text-center mt-2 ${selectedImages.includes(index) ? "text-[#FFC80D]" : "text-[#000000]"
                                    }`} 
                            >
                                {data.title}
                            </p>
                        </div>

                    ))}
                </div>
            </div>
        </div>
         {/* Buttons */}
         <div className="flex justify-end mt-7">
                <button
                    onClick={()=> navigate("/mini-game-one", {replace: true})}
                    className="w-52 h-11 rounded-full border border-black font-inter font-semibold text-base leading-6"
                >
                    Cancel
                </button>
                <button
                    onClick={() => alert('Functionality will be added soon')}
                    className="w-52 h-11 rounded-full bg-[#FFC600] ml-5 font-inter font-semibold text-base leading-6"
                >
                    Add
                </button>
            </div>
        <div className='mb-24'></div>  
        </section>
    );
};

export default AddNewMiniGameOneManagement;