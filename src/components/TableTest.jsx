import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
   getUsers,
   sortName,
   selectUsers,
   selectStatus,
} from "../features/users/usersSlice";

//load data
//import { dataSource, columns } from "../helpers";

//components
import { Table } from "antd";
import Spinner from "./Spinner";

const TableTest = () => {
   const users = useSelector(selectUsers);
   const appState = useSelector(selectStatus);
   const dispatch = useDispatch();
   //console.log(users)
   const columns = [
      {
         title: "Name",
         dataIndex: "name",
         key: "name",
         width: 200,
         filters: users ? users.map((user) => {
            return {
               text: user.name,
               value: user.name,
            };
         }) : null,
         filterMode: "tree",
         filterSearch: true,
         onFilter: (value, record) => record.name.includes(value),
         sorter: (a, b) => a.name > b.name ? 1 : -1,
      },
      {
         title: "Email",
         dataIndex: "email",
         key: "email",
         width: 100,
         filters: users ? users.map((user) => {
            return {
               text: user.email,
               value: user.email,
            };
         }) : null,
         filterMode: "tree",
         filterSearch: true,
         onFilter: (value, record) => record.email.includes(value),
         sorter: (a, b) => a.email > b.email ? 1 : -1,
      },
      {
         title: "City",
         dataIndex: "city",
         key: "city",
         width: 100,
         filters: users ? users.map((user) => {
            return {
               text: user.city,
               value: user.city,
            };
         }) : null,
         filterMode: "tree",
         filterSearch: true,
         onFilter: (value, record) => record.city.includes(value),
         sorter: (a, b) => a.city > b.city ? 1 : -1,
      },
   ];

   useEffect(() => {
      dispatch(getUsers());
   }, []);

   return (
      <>
         {appState === "loading" && <Spinner />}

         {appState === "ok" && (
            <Table
               dataSource={users}
               columns={columns}
               size={'middle'}
               pagination={{ pageSize: 5 }}
            />
         )}

         {appState === "ko" && <h2>Not found</h2>}
      </>
   );
};

export default TableTest;
