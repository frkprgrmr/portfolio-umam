import {
  Box,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  chakra,
  Stack,
} from '@chakra-ui/react'
import React from 'react'
import TerminalBox from '../../components/components/TerminalBox/TerminalBox'

type Experiencesrops = {}

export function Experiences(props: Experiencesrops) {
  const experience = [
    {
      company: 'Zero one Group',
      desciption:
        'Digital Marketing, Social Media Management, ERP and Software Development, Technical due Diligence, and Artificial Intelligent Systems.',
      position: 'Product Engineer',
      date: 'October 2020 - Now',
      jobdesk: [
        'Frontend Web Developer With ReactJS',
        'Write Unit Test',
        'Integrate Endpoint',
        'Create backend stuff using NodeJS if needed',
      ],
    },
    {
      company: 'PT. Artysys Integrasi Solusindo',
      desciption: 'Odoo Consultant, Implementer, and Developer Specialis.',
      position: 'Technical Engineer',
      date: 'Maret 2017 – September 2020',
      jobdesk: [
        'Technical Development Odoo ERP Manufacture, HR, and API BCA.',
        'Preparing the server for Odoo production and development',
        'Presentations to prospective clients with functional leads, if needed',
        'Analyze needs with Functional leads If there are new projects',
        'Conduct weekly meetings for all technical development teams related to obstacles in developing odoo and solving solutions',
      ],
    },
  ]
  return (
    <chakra.div id='experience'>
      <Stack direction='column' w='full' align='center'>
        <Heading fontSize='4xl' textAlign='center' mb='6'>
          Experience
        </Heading>
        <Box>
          <TerminalBox shadow='lg' w='full'>
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
            {experience.map((val) => (
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
      </Stack>
    </chakra.div>
  )
}
