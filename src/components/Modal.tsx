import React from "react";
import {
  Button,
  ModalDelete,
  ModalEdit,
  ModalSection,
  Input,
  Textarea,
} from "../styles/GlobalStyles";
import { handleChangeProps, userInformationProps } from "./Home";
import { useState, useEffect } from "react";

interface ModalProps {
  admin: {
    id: number;
    option: "delete" | "edit";
  };
  editForm: {
    title: string;
    content: string;
  };
  userInformation: userInformationProps[];
  setEditForm: React.Dispatch<
    React.SetStateAction<{
      title: string;
      content: string;
    }>
  >;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUserInformation: React.Dispatch<
    React.SetStateAction<userInformationProps[]>
  >;
}

type FunEditProps = React.FormEventHandler<HTMLFormElement> | undefined;

type FunDeleteAndCanlcel =
  | React.MouseEventHandler<HTMLButtonElement>
  | undefined;

const Modal = ({
  setModal,
  setUserInformation,
  userInformation,
  admin,
  editForm,
  setEditForm,
}: ModalProps) => {
  const funDelete: FunDeleteAndCanlcel = () => {
    setUserInformation((userInformation) =>
      userInformation.filter((user) => user.id !== admin.id)
    );
    setModal(false);
    window.document.body.classList.remove("opacity");
  };

  useEffect(() => {
    const newUserInformation = userInformation.filter(
      (user) => user.id === admin.id
    );
    newUserInformation.forEach((item) =>
      setEditForm({
        title: item.title,
        content: item.content,
      })
    );
  }, [userInformation]);

  const handleChange: handleChangeProps = ({ target }) => {
    setEditForm({ ...editForm, [target.id]: target.value });
  };

  const funEdit: FunEditProps = (event) => {
    event.preventDefault();
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
        <ModalEdit onSubmit={funEdit}>
          <p className="title">Edit item?</p>
          <div className="username">
            <p>Title</p>
            <Input
              type="text"
              onChange={handleChange}
              value={editForm.title}
              id="title"
              placeholder="Hello World"
            />
          </div>

          <div className="username">
            <p>Content</p>
            <Textarea
              onChange={handleChange}
              value={editForm.content}
              id="content"
              placeholder="Content Here"
            />
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
              type="submit"
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
