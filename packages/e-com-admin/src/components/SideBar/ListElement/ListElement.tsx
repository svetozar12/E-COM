import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { List, Routes } from "../../../constants";
import { IconType } from "react-icons";
import { useRouter } from "next/router";

const Element = styled.li`
  list-style: none;
  cursor: pointer;
  margin: 1rem 0;
`;

interface IListElement {
  title: string;
  Icon: IconType;
  route: string;
}

const ListElement = ({ title, Icon, route }: IListElement) => {
  const router = useRouter();
  const [isCurrent, setIsCurrent] = React.useState(false);
  const checkCurrent = () => {
    console.log(route, title.toLowerCase(), "cp");

    if (route === `/${title.toLowerCase()}`) return true;
    return false;
  };

  return (
    <Element
      // @ts-ignore
      onClick={() => router.push(`/${Routes[title]}`)}
      className={css`
        color: ${checkCurrent() ? List.ActiveTextColor : List.TextColor};
      `}
    >
      {title}
    </Element>
  );
};

export default ListElement;
