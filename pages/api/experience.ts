// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    title: string;
    company: string;
    start: string;
    end: string;
    duties: string[];
}[]

const experiences = [
    {
        title: 'Lead Full Stack Engineer',
        company: 'InspiraFarms',
        start: 'April 2022',
        end: '',
        duties: [
            'Lead design sessions for new features',
            'Implement new features in both the frontend and the backend',
            'Test new features with clients',
            'Document any existing/new features',
            'Write new unit tests for new logic',
            'Give recommendations and implement element new third party services'
        ]
    },

    {
        title: 'Full Stack Engineer',
        company: 'Mortgage Ezy',
        start: 'Jul 2021',
        end: 'Jul 2022',
        duties: [
            'Designing workflows for the different processes, features, and services',
            'Designing the data models of various services',
            'Building a document and report generating system',
            'Implementing a notifications service to send out generated documents as emails',
            'Creating general company wikis',
            'Setting up Github Actions for the deployment of the back-end project to GKE',
        ]
    },

    {
        title: 'Full Stack Engineer',
        company: 'Libryo',
        start: 'Jan 2021',
        end: 'Oct 2021',
        duties: [
            'Coordinated communication between the ingestion team and the business teams',
            'Wrote over 20 scripts using playwright to scrap content from different online website sources',
            'In charge of the production and development MySQL databases',
            'Manually scrapped huge web sources whose capacity was beyond the system available memory',
            'In charge of the ingestion team and coordinated tasks between',
            'Improved the main API test coverage to over 50% from less than 10% coverage.'
        ]
    },

    {
        title: 'Backend Engineer, Microservices',
        company: 'Mesozi Group',
        start: 'Jul 2020',
        end: 'Feb 2021',
        duties: [
            'Built the notifications services to send out SMS, emails, and mobile notifications',
            'Deployed a consul mesh network for the services proxy communication',
            'Deployed Kafka brokers into the Microservices network',
            'Assembled all the Microservices API documentation (openapi spec v3)into one point using redoc.',
            'Set up the ECS to deploy the service EC2 nodes.'

        ]
    },

    {
        title: 'IoT Software Engineer',
        company: 'Liquid Intelligent Technologies',
        start: 'Jan 2020',
        end: 'Aug 2020',
        duties: [
            'Designed and implemented a V1 demo platform to facilitate Client Demos',
            'Built a V1 network traffic monitoring API for the East Africa Region',
            'Built over 10 open source potential client SDKs to read and interpret Sigfox device messages',
            'Provided channel partners support to test out and integrate Sigfox software and devices.',
            'Organized and managed community events to support Sigfox network adoption in the country',
        ]
    },

    {
        title: 'Lead Applications Developer',
        company: 'Fibo Systems',
        start: 'Dec, 2018',
        end: 'Jan 2020',
        duties: [
            'Built An Admin React Native Application to aid administrative duties.',
            'Made presentations and slides for potential client demos',
            'Deployed the APIs as applications in Docker for over 90 schools.',
            'Designed the multi-tenant solution where schools had different DB instances but shared some of the APIs.',
            'Implemented the core API using Spring Boot.',
        ]
    },
]


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    res.status(200).json(experiences)
}
