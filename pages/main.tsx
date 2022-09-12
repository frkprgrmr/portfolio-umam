import React from 'react'
import { VStack } from '@chakra-ui/react'
import About from '../components/content/about'
import Skills from '../components/content/skills'
import Experience from '../components/content/experience'
import Contact from '../components/content/contact'
import Intro from '../components/content/intro'

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
