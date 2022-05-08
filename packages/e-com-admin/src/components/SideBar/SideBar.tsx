// npm packages
import React from "react";
import { css } from "@emotion/css";
import { List } from "../../constants";
// components
import ListElement from "./ListElement";
import { useRouter } from "next/router";
// react-icons
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { ImCross } from "react-icons/im";
// css
import s from "./SideBar.module.css";
import { FormHeader } from "../../styles/styles";

const SideBar = () => {
  const ListArr = [
    { title: List.MainDashboard, Icon: AiFillHome },
    { title: List.Profile, Icon: CgProfile },
  ];
  const route = useRouter();

  return (
    <div
      className={css`
        width: 30%;
        height: 100vh;
        background: white;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        box-shadow: -1px 0 8px -2px #888;
      `}
    >
      <FormHeader
        className={css`
          margin-top: 0.5rem;
          text-align: center;
        `}
      >
        E-COM-ADMIN
      </FormHeader>
      <div
        onClick={() => console.log("close sidebar")}
        className={css`
          position: absolute;
          top: 0;
          right: 0;
          width: 2rem;
          height: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 0.9rem;
          cursor: pointer;
        `}
      >
        <ImCross
          className={css`
            width: 1.5rem;
            height: 1.5rem;
          `}
        />
      </div>
      <div className={s.line}></div>
      <ul
        className={css`
          width: 100%;
          padding: 0 1rem;
        `}
      >
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
