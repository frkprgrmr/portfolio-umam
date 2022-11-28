import { Box, Text, Heading, chakra, Stack, Link } from '@chakra-ui/react'
import React from 'react'

type AboutProps = {}

export function About(props: AboutProps) {
  return (
    <chakra.div id='about'>
      <Box w='full'>
        <Heading fontSize='4xl' textAlign='center' mb='6'>
          About
        </Heading>
        <Stack direction='column' spacing='4'>
          <Text textAlign='justify'>
            Hi, I&apos;m Khoerul Umam. I&apos;m software engineer based in
            Bogor, Indonesia. I have finished my studies at Pamulang University
            in 2019. Currently working as a Frontend Developer at{' '}
            <Link href='https://zero-one-group.com/' fontWeight='semibold'>
              {' '}
              Zero One Group.
            </Link>
          </Text>
          <Text>
            I Love Coding, I prefer reading programming code than books.
          </Text>
        </Stack>
      </Box>
    </chakra.div>
  )
}
