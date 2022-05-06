import React from "react";
import { FormHeader } from "../../styles/styles";
import { css } from "@emotion/css";
import { List } from "../../constants";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import ListElement from "./ListElement";
import { useRouter } from "next/router";
const SideBar = () => {
  const ListArr = [
    { title: List.MainDashboard, Icon: AiFillHome },
    { title: List.Profile, Icon: CgProfile },
  ];
  const route = useRouter();

  return (
    <div
      className={css`
        width: 60%;
        height: 100vh;
      `}
    >
      <FormHeader
        className={css`
          margin-top: 0;
        `}
      >
        E-COM-ADMIN
      </FormHeader>
      <div className="line">-----</div>
      <ul>
        {ListArr.map((element, index) => {
          return (
            <ListElement
              key={index}
              title={element.title}
              Icon={element.Icon}
              route={route.pathname}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
