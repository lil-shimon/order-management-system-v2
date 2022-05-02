/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Layout } from "../../components/Layout";
import { MeasurementCreateComponentMemo } from "../../components/templete/Product/MeasurementCreate";

const MeasurementShow: NextPage = () => {
  return (
    <Layout title={"measurement"}>
      <MeasurementCreateComponentMemo />
    </Layout>
  );
};

export default MeasurementShow;

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