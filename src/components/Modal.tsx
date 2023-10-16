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
import { useEffect, useState } from "react";
import { validateField } from "../App";

interface ModalProps {
  admin: {
    id: number;
    option: "delete" | "edit";
  };
  userInformation: userInformationProps[];
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  dispatch: React.Dispatch<ActionProps>;
}

type FunEditProps = React.FormEventHandler<HTMLFormElement> | undefined;

const Modal = ({ setModal, dispatch, userInformation, admin }: ModalProps) => {
  const [editForm, setEditForm] = useState({ title: "", content: "" });

  const funDelete = () => {
    dispatch({ type: "delete" });
    setModal(false);
    window.document.body.classList.remove("opacity");
  };

  const validateTitleField = validateField(editForm.title);
  const validateContentField = validateField(editForm.content);

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
    const editedData = userInformation.map((user) => {
      if (user.id === admin.id)
        return {
          title: editForm.title,
          id: user.id,
          content: editForm.content,
          username: user.username,
          minutes: user.minutes,
        };
      else return user;
    });

    dispatch(editedData);
    setModal(false);
    window.document.body.classList.remove("opacity");
  };

  const funCancel = () => {
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
              disabled={
                (validateTitleField && true) || (validateContentField && true)
              }
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
