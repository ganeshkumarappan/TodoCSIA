import React from "react"
import { Flex, Text } from "@chakra-ui/react";

const TodoComponent = ({todoTask}) => 
{
    return (
        <Flex w="100%" bgColor="white" p="5">
            <Text>{todoTask}</Text>
        </Flex>
    )
}

export default TodoComponent;