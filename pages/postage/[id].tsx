/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC } from "react";
import { Layout } from "../../components/Layout";
import { PostageCreateComponentMemo } from "../../components/templete/Postage/Create";

const PostageShow: FC = () => {
  return (
    <Layout title={"postage"}>
      <PostageCreateComponentMemo />
    </Layout>
  );
};

export default PostageShow;