import {
  Box,
  Center,
  Heading,
  Text,
  VStack,
  chakra,
  Link,
} from '@chakra-ui/react'
import React from 'react'

type ContactProps = {}

const Contact = (props: ContactProps) => {
  return (
    <chakra.div id='contact'>
      <Center w='full' h='200px'>
        <VStack>
          <Heading fontSize='4xl'>Get In Touch !</Heading>
          <Text fontSize='lg'>
            Whether you have a question or just want to say hello, I&apos;ll try
            my best to get back to you!
          </Text>
          <Box
            as={Link}
            href='mailto:khoerulumam954@gmail.com'
            p='2'
            color='white'
            fontWeight='bold'
            borderRadius='md'
            bgGradient='linear(to-r, teal.500, green.500)'
          >
            Say Hello!
          </Box>
        </VStack>
      </Center>
    </chakra.div>
  )
}

export default Contact
