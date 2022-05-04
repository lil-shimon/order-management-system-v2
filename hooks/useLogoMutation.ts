/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { useDispatch } from "react-redux";
import { graphQLClient, GraphQLSetHeader } from "../utils/api";
import { useMutation, useQueryClient } from "react-query";
import { EditLogo, Logo } from "../types/types";
import { CREATE_LOGO } from "../queries/queries";
import { resetLogo } from "../slicers/documentSlicer";
import { FormEvent, useState } from "react";
import { storage } from "../firebaseConfig";

export const useLogoMutation = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const [file, setFile] = useState<File | null>(null);

  const handleFile = (e: any) => {
    const image = e.target.files[0];
    setFile(image);
  };

  GraphQLSetHeader();

  const createLogoMutation = useMutation((logo: EditLogo) => graphQLClient.request(CREATE_LOGO, {
    name: logo.name,
    src: logo.src,
  }), {
    onSuccess: (res) => {
      const prev = queryClient.getQueryData<Logo[]>("logos");
      if (prev)
        queryClient.setQueriesData<Logo[]>("logos", [...prev, res.insert_logos_one]);
      dispatch(resetLogo());
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>, logo: EditLogo, file: File | null) => {
    e.preventDefault();
    if (!file) {
      alert("select file");
      return;
    }

    // directory
    const storageRef = storage.ref("/logo");

    // image name
    const imageRef = storageRef.child(file.name);

    const upLoadTask = imageRef.put(file);

    upLoadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("progress", percent);
      },
      (error) => {
        console.log("file upload error: \n", error);
      },
      () => {
        upLoadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          const data = {
            name: logo.name,
            src: downloadURL,
          };
          createLogoMutation.mutate(data);
          dispatch(resetLogo());
        });
      },
    );
  };

  return {
    handleFile,
    handleSubmit,
    file,
  };
};