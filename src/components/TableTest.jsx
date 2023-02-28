import React from "react";

//load data
import { dataSource, columns } from '../helpers'

//components
import { Table } from "antd";


const TableTest = () => {
   return (
      <Table
         dataSource={dataSource}
         columns={columns}
         pagination={{ pageSize: 5 }}
         scroll={{ y: 240 }}
      />
   );
};

export default TableTest;