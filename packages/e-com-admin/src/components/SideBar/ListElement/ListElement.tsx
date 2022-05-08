import React from "react";
import styled from "@emotion/styled";
import { css, cx } from "@emotion/css";
import { Routes } from "../../../constants";
import { IconType } from "react-icons";
import { useRouter } from "next/router";
import s from "./ListElement.module.css";

const Element = styled.li`
  list-style: none;
  cursor: pointer;
  margin: 1rem 0;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
`;

interface IListElement {
  title: string;
  Icon: IconType;
  route: string;
}

const ListElement = ({ title, Icon, route }: IListElement) => {
  const router = useRouter();
  const checkCurrent = () => {
    if (route === `/${title.toLowerCase()}`) return true;
    return false;
  };

  return (
    <Element
      // @ts-ignore
      onClick={() => router.push(`/${Routes[title]}`)}
    >
      <Icon
        className={cx(
          { [s.Icon]: !checkCurrent() },
          { [s.Icon_Active]: checkCurrent() },
        )}
      />
      <p
        className={cx(
          { [s.Text]: !checkCurrent() },
          { [s.Text_Active]: checkCurrent() },
        )}
      >
        {title}
      </p>
    </Element>
  );
};

export default ListElement;
