import { Box, BoxProps, HStack, useColorModeValue } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaCircle } from 'react-icons/fa'

interface TerminalBoxProps extends BoxProps {
  children?: ReactNode
}

const TerminalBox = ({ children, ...props }: TerminalBoxProps) => {
  return (
    <Box as='section' {...props}>
      <Box
        bg={useColorModeValue('#6c757d', '#8FE3CF')}
        p={'0.5rem'}
        borderRadius={'0.5rem 0.5rem 0 0'}
      >
        <HStack spacing='1'>
          <FaCircle color='red' />
          <FaCircle color='green' />
          <FaCircle color='yellow' />
        </HStack>
      </Box>
      <Box
        p='4'
        borderRadius={'0 0 0.5rem 0.5rem'}
        bg={useColorModeValue('#f8f9fa', '#2B4865')}
        fontSize='16px'
        fontFamily='monospace'
        minH='300px'
      >
        {children}
      </Box>
    </Box>
  )
}

export default TerminalBox
