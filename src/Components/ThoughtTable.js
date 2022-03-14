import DataTable from 'react-data-table-component';
import React from 'react';
import { Button } from '@chakra-ui/react';

let x = localStorage.getItem("thoughts");


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
    name: 'Thought',
    selector: row => row.thought,sortable: true,
  },
  {
    name: 'Date',
    selector: row => row.date, sortable: true,
  },
  {
    name: 'Mood',
    //create a Select input to update value
    //in the localstorage
    cell: row => (
      <select value={row.mood} onChange={(e) => {
        let y = localStorage.getItem("thoughts");
        let z = JSON.parse(y);
        z.forEach(function(item, index) {
          if (item.id === row.id) {
            z[index].mood = e.target.value;
          }
        });
        localStorage.setItem("thoughts", JSON.stringify(z));
      }}>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="angry">Angry</option>
        <option value="neutral">Neutral</option>
      </select>
    ),
  },
  {
    name:'Action',
    //delete the specific id
    cell: row => <Button  colorScheme='blue' onClick={() => {
      let x = localStorage.getItem("thoughts");
      let y = JSON.parse(x);
      let z = y.filter(item => item.id !== row.id);
      localStorage.setItem("thoughts", JSON.stringify(z));
      window.location.reload();
    }}>Delete</Button>
  }
];






export default function ThoughtTable() {
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination={true}
    />
  );
};