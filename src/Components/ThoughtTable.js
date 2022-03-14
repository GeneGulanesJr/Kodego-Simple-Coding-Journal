import DataTable from 'react-data-table-component';
import React from 'react';
import { Button, Select } from '@chakra-ui/react';

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
      <Select value={row.mood} onChange={(e) => {
        window.location.reload();
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
      </Select>

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



const conditionalRowStyles = [
  {
    when: row => row.mood === 'happy',
    style: {
      backgroundColor: 'rgba(63, 195, 128, 0.9)',
      color: 'white',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  {
    when: row => row.mood === 'sad',
    style: {
      backgroundColor: 'rgba(248, 148, 6, 0.9)',
      color: 'white',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  {
    when: row => row.mood === 'angry',
    style: {
      backgroundColor: 'rgba(242, 38, 19, 0.9)',
      color: 'white',
      '&:hover': {
        cursor: 'not-allowed',
      },
    },
  },
  {
    when: row => row.mood === 'neutral',
    style: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      color: 'black',
      '&:hover': {
        cursor: 'not-allowed',
      },
    },
  },
];


export default function ThoughtTable() {
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination={true}
      conditionalRowStyles={conditionalRowStyles}
    />
  );
};