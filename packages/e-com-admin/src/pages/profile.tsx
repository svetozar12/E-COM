import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { useCookie } from "next-cookie";
import { css } from "@emotion/css";
import Profile from "../components/Profile";

const Home: NextPage = () => {
  return (
    <div
      className={css`
        width: 100%;
        height: 100%;
        background: #f9fbfe;
      `}
    >
      <Profile />
    </div>
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
