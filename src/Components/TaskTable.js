import DataTable from 'react-data-table-component';
import React from 'react';
import { Button, Select } from '@chakra-ui/react';

 let x = localStorage.getItem("tasks");
//
const data = JSON.parse(x);


// const data = [
//   {
//     id: 1,
//     title: 'Beetlejuice',
//     date: '1988',
//     task: 'A sequel to the 1984 film Beetlejuice',
//     action: 'Edit',
//   },
//
//
// ]







const columns = [




  {
    name: 'Title',
    selector: row => row.title,sortable: true,
  },
  {
    name: 'Task',
    selector: row => row.task,sortable: true,
  },
  {
    name: 'Date',
    selector: row => row.date,sortable: true,
  },
  {
    name: 'Status',
 //create a Select input to update value
    //in the localstorage
    cell: row => (
      <Select
        value={row.status}
        onChange={e => {
          const newData = [...data];
          const index = newData.indexOf(row);
          newData[index] = { ...row, status: e.target.value };
          localStorage.setItem("tasks", JSON.stringify(newData));
        }}
      >
        <option value="todo">To Do</option>
        <option value="inprogress">In Progress</option>
        <option value="done">Done</option>
      </Select>
    ),  },
  {
    name:'Action',
    //delete the specific id
    cell: row => <Button  colorScheme='blue' onClick={() => {
      let x = localStorage.getItem("tasks");
      let y = JSON.parse(x);
      let z = y.filter(item => item.id !== row.id);
      localStorage.setItem("tasks", JSON.stringify(z));
      window.location.reload();
    }}>Delete</Button>

  }


];



export default function TaskTable() {
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination={true}
    />
  );
};