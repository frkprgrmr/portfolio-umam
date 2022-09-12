export interface ExperienceDataProps {
  company: string
  desciption: string
  position: string
  date: string
  jobdesk: string[]
}
export const experience: ExperienceDataProps[] = [
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
