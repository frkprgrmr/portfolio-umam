import React from 'react'
import { VStack } from '@chakra-ui/react'
import About from './about'
import Skills from './skills'
import Experience from './experience'
import Contact from './contact'
import Intro from './intro'

type Props = {}

const Main = (props: Props) => {
  return (
    <VStack spacing='32' direction='row'>
      <Intro />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </VStack>
  )
}

export default Main
