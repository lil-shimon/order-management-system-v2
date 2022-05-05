/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { FC, memo } from "react";
import { DocumentPageLayout } from "../Document/Layout";
import { useSelector } from "react-redux";
import { postageState } from "../../../slicers/documentSlicer";
import { PostageFormScreenMemo } from "../../organisms/Postages/FormScreen";

const PostageCreateComponent: FC = () => {

  const postage = useSelector(postageState);

  return (
    <DocumentPageLayout>
      <PostageFormScreenMemo postage={postage} />
    </DocumentPageLayout>
  );
};

export const PostageCreateComponentMemo = memo(PostageCreateComponent);