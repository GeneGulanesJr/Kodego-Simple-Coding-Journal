
import { Box } from '@chakra-ui/react';

import ThoughtTable from '../Components/ThoughtTable';
import TaskTable from '../Components/TaskTable';
import { SimpleGrid } from '@chakra-ui/react'


//create a keyname task and thoughts in local storage if it doesn't exist
if (!localStorage.getItem('tasks')&&!localStorage.getItem('thoughts')) {
    localStorage.setItem('tasks', JSON.stringify([]));
    localStorage.setItem('thoughts', JSON.stringify([]));
  window.location.reload();
}


export default function Homepage() {
  return (

    <SimpleGrid columns={2} spacing={10}>
      <Box >  <ThoughtTable/></Box>
      <Box  > <TaskTable/></Box>


    </SimpleGrid>


  );
}