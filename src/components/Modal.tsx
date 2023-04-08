import React from "react";
import {
  Button,
  ModalDelete,
  ModalEdit,
  ModalSection,
  Input,
  Textarea,
} from "../styles/GlobalStyles";
import { userInformationProps } from "./Home";

interface ModalProps {
  admin: {
    id: number;
    option: "delete" | "edit";
  };
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUserInformation: React.Dispatch<
    React.SetStateAction<userInformationProps[]>
  >;
}

type FunDeleteAndCanlcel =
  | React.MouseEventHandler<HTMLButtonElement>
  | undefined;

const Modal = ({ setModal, setUserInformation, admin }: ModalProps) => {
  const funDelete: FunDeleteAndCanlcel = () => {
    setUserInformation((userInformation) =>
      userInformation.filter((user) => user.id !== admin.id)
    );
    setModal(false);
    window.document.body.classList.remove("opacity");
  };

  const funCancel: FunDeleteAndCanlcel = () => {
    setModal(false);
    window.document.body.classList.remove("opacity");
  };

  return (
    <ModalSection>
      {admin.option === "delete" ? (
        <ModalDelete>
          <p>Are you sure you want to delete this item?</p>
          <div className="buttons">
            <Button
              backgroundColor="#fff"
              color="#000"
              onClick={funCancel}
              border="2px solid #DDDD"
            >
              Cancel
            </Button>
            <Button
              backgroundColor="#FF5151"
              color="#fff"
              onClick={funDelete}
              border="2px solid #FF5151"
            >
              Delete
            </Button>
          </div>
        </ModalDelete>
      ) : (
        <ModalEdit>
          <p className="title">Edit item?</p>
          <div className="username">
            <p>Title</p>
            <Input type="text" id="titleField" placeholder="Hello World" />
          </div>

          <div className="username">
            <p>Content</p>
            <Textarea id="contentField" placeholder="Content Here" />
          </div>
          <div className="buttons">
            <Button
              backgroundColor="#fff"
              color="#000"
              onClick={funCancel}
              border="2px solid #DDDD"
            >
              Cancel
            </Button>
            <Button
              backgroundColor="#47B960"
              color="#fff"
              onClick={funDelete}
              border="2px solid #47B960"
            >
              Save
            </Button>
          </div>
        </ModalEdit>
      )}
    </ModalSection>
  );
};

export default Modal;
