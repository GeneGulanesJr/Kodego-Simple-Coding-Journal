import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Select, Textarea } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';


export default function CreateTask() {
  const { register, handleSubmit, formState: { errors } } = useForm();


  const onSubmit = data => {
    let objects = []
    const newData = {
      id:id,
      title: data.Title,
      task: data.Task,
      date: data.Date,
      status: data.Status
    }
    objects.push(newData)
    console.log(newData);

    let oldData = JSON.parse(localStorage.getItem('tasks'))
    if(oldData){
      objects = [...oldData, ...objects]
    }
    localStorage.setItem('tasks', JSON.stringify(objects))
    window.location.reload()

  };





  const id = Date.now()
  console.log(errors);



  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading mb={4}>Create new Task</Heading>
      <Input type="text" placeholder="Title" {...register("Title", {required: true, min: 1})} />
      <Input type='datetime-local' placeholder='Date' {...register('Date', { required: true, maxLength: 80 })} />
      <Textarea {...register('Task', { required: true, min: 1, maxLength: 100 })} />
      <Select {...register("Status", { required: true })}>
        <option value="todo">To Do</option>
        <option value="inprogress">In Progress</option>
        <option value=" done"> Done</option>
      </Select>


      <Button type='submit' bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',

              }} mt={4}>Add Task</Button>
    </form>
  );
}



