import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';


interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

type tableProps={
  columns: ColumnsType<DataType>
  data: DataType[]
}

const Tables= (props: tableProps) => {
  const { columns , data } = props;
  return(<Table columns={ columns } dataSource={data} />)
};

export default Tables;