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
import { SiTypescript, SiChakraui, SiPython, SiNx } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaReact } from 'react-icons/fa'
import React from 'react'

type SkillsProps = {}

export const Skills = (props: SkillsProps) => {
  const skills = [
    {
      icon: SiTypescript,
      label: 'Typescript',
      url: 'https://www.typescriptlang.org/',
    },
    {
      icon: SiPython,
      label: 'Python',
      url: 'https://www.python.org/',
    },
    {
      icon: FaReact,
      label: 'React',
      url: 'https://reactjs.org/',
    },
    {
      icon: TbBrandNextjs,
      label: 'NextJs',
      url: 'https://nextjs.org/',
    },
    {
      icon: SiNx,
      label: 'NX',
      url: 'https://nx.dev/',
    },
    {
      icon: SiChakraui,
      label: 'Chakra-Ui',
      url: 'https://chakra-ui.com/',
    },
  ]

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
