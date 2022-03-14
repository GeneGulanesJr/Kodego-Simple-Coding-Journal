import DataTable from 'react-data-table-component';
import React from 'react';

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
    name:'Action',
    //delete the specific id
    cell: row => <button onClick={() => {
      let x = localStorage.getItem("tasks");
      let y = JSON.parse(x);
      let z = y.filter(item => item.id !== row.id);
      localStorage.setItem("tasks", JSON.stringify(z));
      window.location.reload();
    }}>Delete</button>

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