import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Textarea } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

export default function CreateThoughts() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const id = Date.now()

  const onSubmit = data => {

    let objects = []
    const newData = {
      id: id,
      title: data.Title,
      thought: data.Thoughts,
      date: data.Date,
      type: 'thoughts'
    }
    objects.push(newData)
    console.log(newData);
    let oldData = JSON.parse(localStorage.getItem('thoughts'))
    if(oldData){
      objects = [...oldData, ...objects]
    }
    localStorage.setItem('thoughts', JSON.stringify(objects))
    window.location.reload();
  }

  console.log(errors);

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading mb={4}>Create New Thoughts</Heading>
      <Input type="text" placeholder="Title" {...register("Title", {required: true, min: 1})} />
      <Input type='datetime-local' placeholder='Date' {...register('Date', { required: true, maxLength: 80 })} />
      <Textarea {...register('Thoughts', { required: true, min: 1, maxLength: 100 })} />


      <Button type='submit' bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',

              }} mt={4}>Add Thoughts</Button>

    </form>
  );
}