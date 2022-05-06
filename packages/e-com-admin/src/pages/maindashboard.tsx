import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { useCookie } from "next-cookie";
import { css } from "@emotion/css";
const Home: NextPage = () => {
  return (
    <div
      className={css`
        width: 100%;
        heoght: 100%;
      `}
    ></div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const cookie = useCookie(context);
  // if (!cookie.get("token")) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //       permanent: false,
  //     },
  //   };
  // }
  return {
    props: { cookie: context.req.headers.cookie || "" },
  };
};
export default Home;
