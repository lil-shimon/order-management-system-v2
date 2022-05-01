/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { useEffect } from "react";
import { GraphQLClient } from "graphql-request";
import Cookie from "universal-cookie";

export const endpoint = process.env.NEXT_PUBLIC_HASURA_ENDPOINT;

export let graphQLClient: GraphQLClient;

export const GraphQLSetHeader = () => {
  const cookie = new Cookie();
  useEffect(() => {
    //    @ts-ignore
    graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        Authorization: `Bearer ${cookie.get("token")}`,
      },
    });
  }, [cookie.get("token")]);

};