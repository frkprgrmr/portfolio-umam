import { Button, Icon, Link } from '@chakra-ui/react'
import { IconType } from 'react-icons'

type SocialMediaProps = {
  icon: IconType
  path: string
}

const SocialMedia = ({ icon, path }: SocialMediaProps) => {
  return (
    <Button
      variant='ghost'
      _hover={{
        bg: 'none',
        color: '#64ffda',
        transform: 'translateY(-3px)',
      }}
    >
      <Link href={path} target='_blank'>
        <Icon as={icon} boxSize='6' />
      </Link>
    </Button>
  )
}

export default SocialMedia
