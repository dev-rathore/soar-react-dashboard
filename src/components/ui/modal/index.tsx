import React from 'react';
import { X } from 'lucide-react';
import IconButton from '../icon-button';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div
      aria-labelledby="modal-title"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
    >
      <div
        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        />

        <span
          className="sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full"
        >
          <div className="bg-white p-8">
            <h3 className="text-lg font-medium text-app-black" id="modal-title">
              {title}
            </h3>
            <div className="mt-3">
              {children}
            </div>
          </div>
        </div>
      </div>
      <IconButton
        onClick={onClose}
        className="absolute top-4 right-4"
      >
        <span className="sr-only">Close</span>
        <X className="h-6 w-6" aria-hidden="true" />
      </IconButton>
    </div>
  );
};

export default Modal;
