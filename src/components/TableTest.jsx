import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
   getUsers,
   selectUsers,
   selectStatus,
} from "../features/users/usersSlice";

//load data
import { dataSource, columns } from "../helpers";

//components
import { Table } from "antd";
import Spinner from "./Spinner";

const TableTest = () => {
   const users = useSelector(selectUsers);
   const appState = useSelector(selectStatus);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getUsers());
   }, [dispatch]);

   return (
      <>
         {appState === "loading" && <Spinner/>}

         {appState === "ok" && (
            <Table
               dataSource={users}
               columns={columns}
               pagination={{ pageSize: 5 }}
            />
         )}

         {appState === "ko" && <h2>Not found</h2>}
      </>
   );
};

export default TableTest;
