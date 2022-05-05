/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { GetStaticProps, NextPage } from "next";
import { Layout } from "../../components/Layout";
import { dehydrate, QueryClient, useQueryClient } from "react-query";
import { fetchUsers } from "../../hooks/useQueryUser";
import { User } from "../../types/types";
import { UserComponentMemo } from "../../components/templete/User";

const User: NextPage = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<User[]>("users");
  return (
    <Layout title={"user"}>
      <UserComponentMemo data={data} />
    </Layout>
  );
};

export default User;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery<User[]>("users", fetchUsers);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 3,
  };
};