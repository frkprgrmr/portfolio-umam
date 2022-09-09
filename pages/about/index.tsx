import { Box, Text, Heading, chakra } from '@chakra-ui/react'
import React from 'react'

type AboutProps = {}

const About = (props: AboutProps) => {
  return (
    <chakra.div id='about'>
      <Box w='full' px={{ lg: '40', md: '4', base: '4' }}>
        <Heading fontSize='4xl' textAlign='center' mb='4'>
          About
        </Heading>
        <Text>
          Hi, I&apos;m Khoerul Umam. I&apos;m software engineer based in Bogor,
          Indonesia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Auctor neque sed imperdiet nibh lectus feugiat nunc sem. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Auctor neque sed
          imperdiet nibh lectus feugiat nunc sem. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus
          feugiat nunc sem.
        </Text>
      </Box>
    </chakra.div>
  )
}

export default About
