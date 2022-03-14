import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
} from '@chakra-ui/react';
import {} from '@chakra-ui/react';
import CreateThoughts from '../Components/CreateThoughts';
import CreateTask from '../Components/CreateTask';



export default function AddTodo() {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={4}>
        <GridItem colSpan={1}>
          <Flex>
            <CreateThoughts/>
            </Flex>
        </GridItem>
        <GridItem>
          <Flex>
           <CreateTask/>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />

    </Box>
  );
}