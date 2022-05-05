/*
 * Copyright (c) 2022. Kenta Shimosawa
 */

import { gql } from "graphql-request";


export const GET_PRODUCTS_BY_TYPE = gql`
    query GetProducts($m_product_type_id: uuid!) {
        products(where: {m_product_type_id: {_eq: $m_product_type_id}}) {
            created_at
            id
            name
            note
            unit
            unit_price
            m_product_type_id
        }
    }
`;

export const GET_PRODUCT_BY_ID = gql`
    query GetProductById($m_product_type_id: uuid!, $id: uuid!) {
        products(where: {m_product_type_id: {_eq: $m_product_type_id}, id: {_eq: $id}}) {
            created_at
            id
            name
            note
            unit
            unit_price
            m_product_type_id
        }
    }
`;

export const CREATE_PRODUCT = gql`
    mutation CreateProduct($m_product_type_id: uuid!, $name: String!, $note: String, $unit: String!, $unit_price: Int!) {
        insert_products_one(object: {m_product_type_id: $m_product_type_id, name: $name, note: $note, unit: $unit, unit_price: $unit_price}) {
            name
            note
            unit
            unit_price
            m_product_type_id
        }
    }
`;

export const UPDATE_PRODUCT = gql`
    mutation UpdateProduct($id: uuid!, $m_product_type_id: uuid!, $name: String!, $note: String, $unit: String, $unit_price: Int!) {
        update_products_by_pk(pk_columns: {id: $id}, _set: {name: $name, note: $note, m_product_type_id: $m_product_type_id, unit: $unit, unit_price: $unit_price}) {
            name
            note
            unit
            unit_price
            m_product_type_id
        }
    }
`;

export const DELETE_PRODUCT = gql`
    mutation DeleteProduct($id: uuid) {
        delete_products_by_pk(id: $id) {
            name
            id
        }
    }
`;

export const GET_LOGOS = gql`
    query GetLogos {
        logos {
            name
            src
            id
        }
    }
`;

export const GET_LOGO_BY_ID = gql`
    query GetLogoById($id: uuid!) {
        logos_by_pk(id: $id) {
            id
            src
            name
        }
    }
`;

export const CREATE_LOGO = gql`
    mutation CreateLogo($name: String!, $src: String!) {
        insert_logos_one(object: {name: $name, src: $src}) {
            id
            name
            src
        }
    }
`;

export const UPDATE_LOGO = gql`
    mutation UpdateLogo($id: uuid!, $name: String!, $src: String!) {
        update_logos_by_pk(pk_columns: {id: $id}, _set: {src: $src, name: $name}) {
            id
            name
            src
        }
    }
`;

export const GET_POSTAGES = gql`
    query GetPostages {
        postages {
            id
            from
            to
            size
            price
            updated_at
            created_at
        }
    }
`;

export const CREATE_POSTAGE = gql`
    mutation CreatePostage($from: String!, $to: String!, $size: String!, $price: Int!) {
        insert_postages_one(object: {from: $from, to: $to, size: $size, price: $price}) {
            id
            from
            to
            size
            price
            created_at
            updated_at
        }
    }
`;

export const UPDATE_POSTAGE = gql`
    mutation UpdatePostage($id: uuid!, $from: String!, $to: String!, $size: String!, $price: Int!) {
        update_postages_by_pk(pk_columns: {id: $id}, _set: {from: $from, to: $to, size: $size, price: $price}) {
            id
            from
            to
            size
            price
            created_at
            updated_at
        }
    }
`;


export const GET_NEWS = gql`
    query GetNews {
        news {
            id
            content
            created_at
        }
    }
`;

export const CREATE_NEWS = gql`
    mutation CreateNews($content: String!) {
        insert_news_one(object: {content: $content}) {
            id
            content
            created_at
        }
    }
`;

export const UPDATE_NEWS = gql`
    mutation UpdateNews($id: uuid!, $content: String!) {
        update_news_by_pk(pk_columns: {id: $id}, _set: {content: $content}) {
            id
            content
            created_at
        }
    }
`;

export const DELETE_NEWS = gql`
    mutation DeleteNews($id: uuid!) {
        delete_news_by_pk(id: $id) {
            id
            content
        }
    }
`;

export const GET_TASKS = gql`
    query GetTasks {
        tasks {
            id
            title
            created_at
            user_id
        }
    }
`;

export const CREATE_TASK = gql`
    mutation CreateTask($title: String!) {
        insert_tasks_one(object: {title: $title}) {
            id
            title
            created_at
            user_id
        }
    }
`;

export const UPDATE_TASK = gql`
    mutation UpdateTask($id: uuid!, $title: String!) {
        update_tasks_by_pk(pk_columns: {id: $id}, _set: {title: $title}) {
            id
            title
            created_at
            user_id
        }
    }
`;

export const DELETE_TASK = gql`
    mutation DeleteTask($id: uuid!) {
        delete_tasks_by_pk(id: $id) {
            id
            title
        }
    }
`;
