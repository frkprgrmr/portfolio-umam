import {
  Box,
  Text,
  Center,
  Icon,
  Stack,
  Heading,
  VStack,
  Link,
  chakra,
} from '@chakra-ui/react'
import { skills } from './skills'
import React from 'react'

type SkillsProps = {}

const Skills = (props: SkillsProps) => {
  return (
    <chakra.div id='skills'>
      <Center w='full' h='200px'>
        <VStack>
          <Heading mb='8' fontSize='4xl'>
            Skills
          </Heading>
          <Stack direction='row' spacing='12'>
            {skills.map((val, idx) => (
              <Box
                key={idx}
                textAlign='center'
                as={Link}
                href={val.url}
                target='_blank'
              >
                <Icon as={val.icon} boxSize='60px' />
                <Text>{val.label}</Text>
              </Box>
            ))}
          </Stack>
        </VStack>
      </Center>
    </chakra.div>
  )
}

export default Skills
