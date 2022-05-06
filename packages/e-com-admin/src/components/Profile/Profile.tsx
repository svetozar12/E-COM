import React from "react";
import { FormHeader } from "../../styles/styles";
import s from "./Profile.module.css";
import Image from "next/image";
import { css } from "@emotion/css";
import { AiOutlineLogout } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Profile = () => {
  const icons = [{ icon: GiHamburgerMenu }, { icon: AiOutlineLogout }];
  return (
    <>
      <FormHeader>Profile</FormHeader>
      <div className={`${s.flex} ${s.container}`}>
        <input placeholder="Search..." className={s.input} type="text" />
        <div className={`${s.flex} ${s.icons}`}>
          {icons.map((element, index) => {
            return (
              <element.icon
                className={css`
                  cursor: pointer;
                  width: 25px;
                  height: 25px;
                  margin: 0 0.5rem;
                `}
                key={index}
              />
            );
          })}
          <Image
            className={css`
              border-radius: 25px;
              cursor: pointer;
            `}
            width={50}
            height={50}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/800px-A_black_image.jpg?20201103073518"
            alt="user logo"
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
