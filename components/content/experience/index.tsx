import {
  Box,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  chakra,
} from '@chakra-ui/react'
import React from 'react'
import TerminalBox from '../../components/TerminalBox/TerminalBox'
import { experience, ExperienceDataProps } from './experience'

type ExperienceProps = {}

const Experience = (props: ExperienceProps) => {
  return (
    <chakra.div id='experience'>
      <Box px={{ lg: '40', md: '4', base: '4' }}>
        <Heading fontSize='4xl' textAlign='center' mb='6'>
          Experience
        </Heading>
        <Box>
          <TerminalBox boxShadow='2xl' w={{ lg: '4xl', base: '2xl' }}>
            <Text as={'span'} color='#82DBD8'>
              ➜ khoerulumam $
            </Text>
            <Text as={'span'}> cd umam/experience</Text>
            <br />
            <Text as={'span'} color='#82DBD8'>
              ➜ experience $
            </Text>
            <Text as={'span'}> ls</Text>
            <br />
            {experience.map((val: ExperienceDataProps) => (
              <>
                <Text color='green.300' fontWeight='semibold' pt='4'>
                  {val.company}
                </Text>
                <Text ml='4'>{val.desciption}</Text>
                <Text as={'span'} ml='4' fontWeight='semibold'>
                  {val.position} =&gt;
                </Text>
                <Text as={'span'} ml='4' fontWeight='semibold'>
                  {`(${val.date})`}
                </Text>
                <br />
                <Text ml='4' fontWeight='semibold'>
                  Jobdesk/ Work scope:
                </Text>
                <UnorderedList ml='14'>
                  {val.jobdesk.map((job, idx) => (
                    <ListItem key={idx}>{job}</ListItem>
                  ))}
                </UnorderedList>
              </>
            ))}
          </TerminalBox>
        </Box>
      </Box>
    </chakra.div>
  )
}

export default Experience
