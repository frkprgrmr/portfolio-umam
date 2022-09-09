import { Text, Center, Stack, Link } from '@chakra-ui/react'
import React from 'react'

type FooterProps = {}

const Footer = (props: FooterProps) => {
  return (
    <Center height='100px' width='full' fontSize='xs'>
      <Stack>
        <Text textAlign='center'>Designed & Built by Khoerul Umam.</Text>
        <Text textAlign='center'>
          This website built with
          <Link href='https://nextjs.org/' target='_blank'>
            {' '}
            Next.js
          </Link>{' '}
          &
          <Link href='https://chakra-ui.com/' target='_blank'>
            Chakra-UI
          </Link>
          . Written using{' '}
          <Link href='https://www.typescriptlang.org/' target='_blank'>
            Typescript
          </Link>
          .
        </Text>
      </Stack>
    </Center>
  )
}

export default Footer
