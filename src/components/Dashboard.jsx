import React, { useState } from "react";
import {Button, Input, Flex, Box, Heading} from "@chakra-ui/react";
import TodoComponent from "./TodoComponent";

const Dashboard = () => {
    const [todoText, setTodoText] = useState("");
    const [todos, setTodos] = useState([]);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date();
    console.log(todos);

    return(
        <Box flexDirection={"row"} w="80vw" backgroundColor={"#f4f4f4"}>
            <Flex p="5">
                <Heading fontSize="24px" bgClip="text" bgGradient='linear(to-r, blue.400, green.400)'>{date.toLocaleDateString("en-US", options)}</Heading>
            </Flex>
            <Flex pl="5">
                <Input placeholder='Enter your Todo' w="50%" value={todoText} onChange={(evt) => setTodoText(evt.target.value)}/>
                <Button colorScheme='teal' variant='outline' ml="5" onClick={() => {
                    setTodos([...todos, todoText])
                    setTodoText("")
                }}>
                    Add Todo
                </Button>
            </Flex>  
            <Flex w="90%" justifyContent={"center"}>
                {todos.map((todo) => (
                    <TodoComponent todoTask={todo} />
                ))}  
            </Flex>    
        </Box>
    )
}

export default Dashboard;