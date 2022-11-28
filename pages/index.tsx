import { Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { About, Intro, Contact, Skills, Experiences } from '../components/pages'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio Khoerul Umam</title>
        <meta name='description' content='Portfolio Khoerul Umam' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Stack direction='column' spacing={{ base: 16, md: 36 }} mx='3'>
          <Intro />
          <About />
          <Experiences />
          <Skills />
          <Contact />
        </Stack>
      </main>
    </div>
  )
}

export default Home
