import React from "react";
import {
  Button,
  ModalDelete,
  ModalEdit,
  ModalSection,
  Input,
  Textarea,
} from "../styles/GlobalStyles";
import { handleChangeProps, UserInformationProps } from "./Home";
import { useEffect, useState } from "react";
import { validateField } from "../App";
import { ActionProps } from "../ManageInfoReducer";

interface ModalProps {
  admin: {
    id?: number;
    option: "delete" | "edit";
  };
  userInformation: UserInformationProps[];
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  dispatch: React.Dispatch<ActionProps>;
}
type EditFormProps = Pick<UserInformationProps, "title" | "content">;

type FunEditProps = React.FormEventHandler<HTMLFormElement> | undefined;

const Modal = ({ setModal, dispatch, userInformation, admin }: ModalProps) => {
  const [editForm, setEditForm] = useState<EditFormProps>({
    title: "",
    content: "",
  });
  const { title, content } = editForm;

  function funDelete() {
    dispatch({ type: "delete", id: admin.id });
    setModal(false);
    window.document.body.classList.remove("opacity");
  }

  const validateTitleField = validateField(title as string);
  const validateContentField = validateField(content as string);

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

  const edit: FunEditProps = (event) => {
    event.preventDefault();
    dispatch({ type: "change", title, content, id: admin.id });

    setModal(false);
    window.document.body.classList.remove("opacity");
  };

  function cancel() {
    setModal(false);
    window.document.body.classList.remove("opacity");
  }

  return (
    <ModalSection>
      {admin.option === "delete" ? (
        <ModalDelete>
          <p>Are you sure you want to delete this item?</p>
          <div className="buttons">
            <Button
              backgroundColor="#fff"
              color="#000"
              onClick={cancel}
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
        <ModalEdit onSubmit={edit}>
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
              onClick={cancel}
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
