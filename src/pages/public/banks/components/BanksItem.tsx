import { useState } from "react";
import Modal from "../../../../components/ui/Modal";
import PrimaryButton from "../../../../components/ui/PrimaryButton";
import { Bank } from "../../../../models/Bank";

interface Param {
  item: Bank;
}

const BanksItem: React.FC<Param> = ({ item }) => {
  const [showTogglel, setShowToggle] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowToggle(!showTogglel)}
        className="transition-all duration-300 hover:-translate-y-2   cursor-pointer bg-secondary opacity-90 rounded-xl border border-darkest-gray-color "
      >
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <div className=" m-4 ">
              <img src={item.logo} className="w-12 h-12 rounded-[10px]" />
            </div>

            <button className=" justify-left items-left text-left p-2 my-2  flex flex-col">
              <span className="font-bold mb-2">{item?.title}</span>
              <span className="bg-primary text-black text-sm rounded-lg w-20 text-center p-[2px] ml-2 mb-[3px]">
                Profit:<span className="font-bold">{item?.profit}</span>
              </span>
              <span className="bg-gray-dark  text-sm rounded-lg w-24 text-center  p-[1.5px] text-gray-light ">
                Loan:<span className="font-bold">{item?.loan}</span>
              </span>
            </button>
          </div>
          {item?.level === "Premium" && (
            <span className="bg-primary text-black text-sm rounded-lg w-20 text-center p-1 ml-2 mb-[3px] mr-4">
              <span className="font-bold">{item?.level}</span>
            </span>
          )}

          {item?.level === "Basic" && (
            <span className="bg-orange-dark  text-sm rounded-lg w-20 text-center  p-1 text-white mr-4">
              <span className="font-bold">{item?.level}</span>
            </span>
          )}

          {item?.level === "Standard" && (
            <span className="bg-gold-color  text-sm rounded-lg w-20  text-center  p-1 text-black mr-4">
              <span className="font-bold">{item?.level}</span>
            </span>
          )}
        </div>
        <div
          className={`${
            showTogglel === true ? "block " : "hidden"
          }  border-t  border-darkest-gray-color`}
        >
          <div className="w-full flex  flex-col mt-6 m-2 text-left justify-left items-left">
            <div className=" w-full  flex flex-row items-center gap-3 ">
              <img src={item?.logo} width={80} className="rounded-[10px]" />
              <span className="text-lg font-bold">{item?.title}</span>
            </div>
            <span className="my-6">{item?.desc}</span>
            <div className="grid grid-cols-1 lg:grid-cols-4">
              {item?.services.map((s) => {
                return (
                  <>
                    <div className="flex flex-col text-left  py-3 ">
                      <span className="font-bold  text-gold-color">
                        {s?.key}:
                      </span>
                      <span
                        className={`${
                          s.key === "Liquidity Pools"
                            ? "text-primary bg-gray-dark rounded-xl w-fit px-4"
                            : ""
                        }`}
                      >
                        {s?.value}
                      </span>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="flex flex-row gap-4 mt-6 items-end  w-64">
              <PrimaryButton
                aos={true}
                data-aos="fade-up"
                href=""
                className="!w-36 m-auto z-10"
              >
                View details
              </PrimaryButton>
              <PrimaryButton
                onClick={() => setShowToggle(false)}
                className="!w-20 h-8 !mt-0 !p-[0.4rem]"
                outlined={true}
              >
                Close
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BanksItem;
