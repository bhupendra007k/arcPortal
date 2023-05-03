import React, { ReactElement } from "react";
import Modal from "react-modal";

interface IModalProps {
  isOpen: boolean;
  children: ReactElement;
}

const index: React.FC<IModalProps> = ({ isOpen, children }: IModalProps) => {
  return <Modal isOpen={isOpen}>{children}</Modal>;
};

export default index;
