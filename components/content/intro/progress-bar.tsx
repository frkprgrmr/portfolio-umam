import { Box, HStack, Progress, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

type ProgressBarProps = {
  value: number
}

const ProgressBar = (props: ProgressBarProps) => {
  const [progressValue, setProgressValue] = useState<number>(0)
  useEffect(() => {
    if (progressValue < props.value) {
      setTimeout(() => {
        setProgressValue(progressValue + 1)
      }, 10)
    }
  }, [progressValue, props.value])
  return (
    <HStack>
      <Box w='full'>
        <Progress value={progressValue} size='xs' />
      </Box>
      <Text>{progressValue}%</Text>
    </HStack>
  )
}
export default ProgressBar
