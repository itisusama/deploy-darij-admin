import React from "react";
import Threedot from "../../assets/Threedot.svg";

const NotificationItems = [
  {
    id: 1,
    title: "A New word added in a mini game",
    time: "40 minutes ago",
    img: Threedot,
  },
  {
    id: 2,
    title: "A New word added to the mini game",
    time: "40hour ago",
    img: Threedot,
  },
  {
    id: 2,
    title: "A New word added to the mini game",
    time: "40hour ago",
    img: Threedot,
  },
  {
    id: 2,
    title: "A New word added to the mini game",
    time: "40hour ago",
    img: Threedot,
  },
  {
    id: 2,
    title: "A New word added to the mini game",
    time: "40hour ago",
    img: Threedot,
  },
];

const Notificationalert = () => {
  return (
    <>
      <div className="font-[600] font-inter text-[16px] m-5">Notifications</div>

      <section className="overflow-y-auto h-screen custom-scrollbar">
      <div className="mx-5">
        {NotificationItems.map((item) => (
          <div
            className="flex justify-between h-[90px] p-2 m-2  bg-[#ffffff] items-center rounded-3xl"
            key={item.id}
          >
            <div>
              <div className="font-inter font-semibold text-lg text-[#2B2A28]">
                {item.title}
              </div>
              <div className="text-[#7A798A] text-xs">{item.time}</div>
            </div>

            {/* <div>
              <img src={item.img} alt="options" className="w-[14px] h-[14px] cursor-pointer" />
            </div> */}
          </div>
        ))}
      </div>
      <div className="mb-24"></div>
      </section>
    </>
  );
};

export default Notificationalert;