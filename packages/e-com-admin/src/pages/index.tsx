import type { NextPage } from "next";
import Login from "../components/Login";
import { GetServerSideProps } from "next";
import { useCookie } from "next-cookie";

const Home: NextPage = () => {
  return <p>auth page</p>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const cookie = useCookie(context);
  if (!cookie.get("token")) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { cookie: context.req.headers.cookie || "" },
  };
};
export default Home;
