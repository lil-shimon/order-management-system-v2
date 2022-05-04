/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, memo } from "react";
import { PostageProps } from "../../../types/types";
import { DocumentPageLayout } from "../Document/Layout";
import { PostageListMemo } from "../../organisms/Postages/list";

const PostageComponent: FC<PostageProps> = ({ data }) => {

  return (
    <DocumentPageLayout>
      <PostageListMemo data={data} />
    </DocumentPageLayout>
  );
};

export const PostageComponentMemo = memo(PostageComponent);