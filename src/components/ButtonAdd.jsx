import React from "react";
import { Button, Popover } from "antd";
import FormNewUser from "./FormNewUser";

const ButtonAdd = () => {
   return (
      <Popover content={<FormNewUser/>} trigger='click' placement="right">
         <Button style={{ marginBottom: "10px" }}>Add user</Button>
      </Popover>
   );
};

export default ButtonAdd;
