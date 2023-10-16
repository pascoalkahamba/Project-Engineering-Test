import React from "react";
import { UserInformationProps } from "./Home";

export interface ActionProps extends UserInformationProps {
  type: "add" | "change" | "delete";
}

export default function manageInfoReducer(
  state: UserInformationProps[],
  action: ActionProps
) {
  switch (action.type) {
    case "add": {
      return [
        ...state,
        {
          title: action.title,
          content: action.content,
          username: action.username,
          id: Number(Math.round(Math.random() * 100)),
          minutes: new Date().getMinutes(),
        },
      ];
    }

    case "change": {
      const newState = state.map((user) => {
        if (user.id === action.id)
          return {
            title: action.title,
            id: user.id,
            content: action.content,
            username: user.username,
            minutes: user.minutes,
          };
        else return user;
      });
      return newState;
    }

    case "delete": {
      return state.filter((user) => user.id !== action.id);
    }
  }
}
