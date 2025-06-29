// Filename: ./components/Modal.tsx

import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: string | undefined;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, size }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bg-black h-[120vh] inset-0 flex items-center justify-center z-50 overflow-y-auto ">
      <div className="fixed inset-0 bg-gray-900 opacity-50"  />
      <div
        className={`relative bg-black  rounded-xl shadow-lg h-[120vh]  ${
          size === "larg"
            ? `w-full h-full`
            : size === "mid"
            ? " lg:w-2/3 md:w-1/2  xs:w-full"
            : "lg:w-1/3 md:w-1/2  xs:w-full"
        }   z-10`}
      >
        <div className="bg-transparent-600 rounded-xl ">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
