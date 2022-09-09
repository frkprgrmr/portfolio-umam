import { Box, Center, HStack, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { SocialMediaItem } from '../components/social-media-items'
import SocialMedia from '../components/social-media'

type SidebarProps = {}

const Sidebar = (props: SidebarProps) => {
  return (
    <>
      <Box
        id='sidebar-left'
        position='fixed'
        bottom='-80px'
        left='65px'
        alignContent='center'
        h='300px'
      >
        <Stack>
          {SocialMediaItem.map((val, idx) => (
            <SocialMedia key={idx} icon={val.icon} path={val.path} />
          ))}
          <Center>
            <Box border='2px' h='100px' borderRadius='xl' />
          </Center>
        </Stack>
      </Box>
      <Box
        id='sidebar-right'
        position='fixed'
        bottom='-40px'
        right='80px'
        transform='rotate(90deg)'
        transformOrigin='top right'
        alignContent='center'
        w='300px'
      >
        <HStack>
          <Text
            as={Link}
            fontSize='sm'
            fontFamily='mono'
            _hover={{
              color: '#64ffda',
              transform: 'translateX(-6px)',
            }}
            cursor='pointer'
            href='mailto:khoerulumam954@gmail.com'
          >
            Khoerulumam954@gmail.com
          </Text>
          <Center>
            <Box border='2px' w='80px' borderRadius='xl' />
          </Center>
        </HStack>
      </Box>
    </>
  )
}

export default Sidebar
