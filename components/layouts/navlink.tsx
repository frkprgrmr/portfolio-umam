import { Link, Text } from '@chakra-ui/react'

type NavlinkProps = {
  label: string
  path: string
}

const Navlink = (props: NavlinkProps) => {
  return (
    <Link
      rounded={'md'}
      _hover={{
        color: '#64ffda',
        transform: 'translateY(-3px)',
      }}
      href={props.path}
    >
      <Text fontFamily='mono' fontSize='sm'>
        {props.label}
      </Text>
    </Link>
  )
}

export default Navlink
