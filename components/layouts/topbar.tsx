import {
  Box,
  Flex,
  Button,
  useDisclosure,
  useColorMode,
  HStack,
  Stack,
  Link,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import React from 'react'
import Navlink from './navlink'
import { navItem } from './routes'

type TopbarProps = {}

const Topbar = (props: TopbarProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  console.log('colorMode', colorMode)

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      pos='fixed'
      h='70px'
      w='full'
      backdropFilter='auto'
      backdropBlur='4px'
      zIndex='banner'
    >
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        mx={{ md: '80px', base: 'unset' }}
      >
        <Button
          onClick={isOpen ? onClose : onOpen}
          variant='ghost'
          _hover={{
            bg: 'none',
          }}
          display={{ md: 'none' }}
        >
          {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </Button>
        <Box
          as={Link}
          ml={{ md: 'unset', base: '3' }}
          href='/#intro'
          _hover={{
            color: '#64ffda',
            transform: 'translateY(-3px)',
          }}
        >
          Khumam
        </Box>

        <Flex alignItems={'center'}>
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={12}
              display={{ base: 'none', md: 'flex' }}
            >
              {navItem.map((val, idx) => (
                <Navlink key={idx} path={val.path} label={val.label} />
              ))}
            </HStack>
            <Button
              onClick={toggleColorMode}
              variant='ghost'
              _hover={{
                bg: 'none',
              }}
            >
              {colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </HStack>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4} ml='4'>
            {navItem.map((val, idx) => (
              <Navlink key={idx} path={val.path} label={val.label} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}

export default Topbar
