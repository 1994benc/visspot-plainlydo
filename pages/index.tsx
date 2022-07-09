import type { NextPage } from "next";
import Head from "next/head";
import LoginButton from "../components/LoginButton";
import styles from './index.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.indexContainer}>
      <Head>
        <title>plainlydo</title>
      </Head>
      <div>
        <h1>plainlydo</h1>
        <LoginButton />
      </div>
    </div>
  );
};

export default Home;
