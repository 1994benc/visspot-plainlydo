import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import CreateTodoButton from "../components/CreateTodoButton";
import LoginButton from "../components/LoginButton";
import styles from "./index.module.css";
import { TodoList } from "../components/TodoList/index";
import { SWRConfig } from "swr";

const Home: NextPage = (props: any) => {
  console.log(props);
  const todos = props.todos;
  return (
    <SWRConfig
      value={{
        fallback: {
          "/api/todos": todos,
        },
      }}
    >
      <div className={styles.indexContainer}>
        <Head>
          <title>plainlydo</title>
        </Head>
        <div>
          <h1>plainlydo</h1>
          <LoginButton />
        </div>
      
        <TodoList></TodoList>
        <div>
          <CreateTodoButton />
        </div>
      </div>
    </SWRConfig>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const protocol = context.req.headers["x-forwarded-proto"] || "http";
  const baseUrl = context.req
    ? `${protocol}://${context.req.headers.host}`
    : "";
  // fetch todos from API /api/todos
  const todos = await fetch(baseUrl + "/api/todos").then((res) => res.json());

  return {
    props: {
      todos,
    }, // will be passed to the page component as props
  };
}

export default Home;
