/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { Layout } from "../../components/Layout";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MonitorCreateComponentMemo } from "../../components/templete/Monitor/Create";

const MonitorShow: NextPage = () => {

  return (
    <Layout title={"monitor"}>
      <MonitorCreateComponentMemo />
    </Layout>
  );
};

export default MonitorShow;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 3,
  };
};