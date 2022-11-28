import {
  Box,
  Image,
  Center,
  Flex,
  Text,
  Stack,
  Heading,
  chakra,
  Wrap,
} from '@chakra-ui/react'
import style from './intro.module.css'
import { Umam } from './me'
import ProgressBar from './progress-bar'

type IntroProps = {}

export function Intro(props: IntroProps) {
  return (
    <chakra.div id='intro'>
      <Center pt='12'>
        <Stack w='full' direction={{ base: 'column', md: 'row' }} padding={4}>
          <Flex flex={1} alignSelf='center'>
            <Box
              as={Image}
              src='./me.jpeg'
              als='Khoerul Umam'
              width={{ md: '40vh', base: '50vh' }}
              borderRadius='50%'
              p='0.75rem'
              bgGradient='linear(to-r, #64ffda, teal.600)'
            />
          </Flex>
          <Stack flex={1} flexDirection='column' justifyContent='center' p='4'>
            <Heading fontSize={'4xl'} fontFamily={'body'} textAlign='center'>
              Hi, I&apos;m{' '}
              <Text
                as={'span'}
                bgGradient='linear(to-r, #64ffda, teal.600)'
                bgClip='text'
              >
                Umam{' '}
              </Text>
              <Text as={'span'} className={style.hand}>
                👋🏻
              </Text>
            </Heading>
            <Text fontWeight={600} fontSize='2xl' textAlign='center'>
              I&apos;m a Front End Developer
            </Text>
            <Wrap pt='6' alignSelf='center' w='full'>
              <Stack direction='column' spacing='2' w='full'>
                {Umam.map((val: { label: string; value: number }) => (
                  <>
                    <Box>
                      <Text>{val.label}</Text>
                      <ProgressBar value={val.value} />
                    </Box>
                  </>
                ))}
              </Stack>
            </Wrap>
          </Stack>
        </Stack>
      </Center>
    </chakra.div>
  )
}
