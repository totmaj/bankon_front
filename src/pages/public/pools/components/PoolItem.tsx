import { useState } from "react";
import { Pool } from "../../../../models/Pool";
import Modal from "../../../../components/ui/Modal";
import PrimaryButton from "../../../../components/ui/PrimaryButton";

interface Param {
  item: Pool;
}

const PoolItem: React.FC<Param> = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-secondary opacity-90 rounded-xl  p-8 border border-darkest-gray-color flex flex-col gap-4"
      >
        <span className="font-bold">{item?.title}</span>
        <span className="text-gray-color">{item?.header}</span>
      </button>

      <Modal isOpen={showModal} size="larg" onClose={() => setShowModal(false)}>
        <div className="w-full flex  items-center justify-center mt-6">
          <div className=" w-full md:w-4/6 flex flex-col items-center gap-3 ">
            <img src={item?.logo} width={80} />
            <span className="text-3xl font-bold">{item?.title}</span>
            <span className="bg-green-color rounded-lg px-3 py-1 text-black">
              {item?.level}
            </span>
            <span className="my-6 px-4">{item?.desc}</span>
            <div className="flex flex-col ">
              {item?.services.map((s) => {
                return (
                  <>
                    <div className="flex flex-row text-left justify-between py-3 border-b border-b-darkest-gray-color">
                      <span className="font-bold text-md  text-primary">
                        {s?.key}:
                      </span>
                      <span className="text-right">{s?.value}</span>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="flex flex-row gap-4 mt-6 items-end">
              <PrimaryButton
             
                aos={true}
                data-aos="fade-up"
                href=""
                className="!w-36 m-auto z-10"
              >
               View details
              </PrimaryButton>
              <PrimaryButton
                onClick={() => setShowModal(false)}
                className="!w-20 h-8 !mt-0 !p-[0.4rem]"
                outlined={true}
              >
                Close
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PoolItem;
