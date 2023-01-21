// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    title: string;
    level: string;
    logo: string;
    directionLeft: boolean;
}[]

const skills = [
    {
        title: 'React JS',
        level: '80%',
        logo: '/reactjs-svgrepo-com.png',
        directionLeft: true
    },
    {
        title: 'Node JS',
        level: '70%',
        logo: '/node-js-svgrepo-com.png',
        directionLeft: true
    },
    {
        title: 'Nest JS',
        level: '70%',
        logo: '/nest-middleware-js-svgrepo-com.png',
        directionLeft: false
    },
    {
        title: 'AWS',
        level: '60%',
        logo: '/aws-svgrepo-com.png',
        directionLeft: false
    },
    {
        title: 'Next JS',
        level: '60%',
        logo: '/nextjs-svgrepo-com.png',
        directionLeft: true
    },
    {
        title: 'Docker',
        level: '70%',
        logo: '/docker-svgrepo-com.png',
        directionLeft: true
    },
    {
        title: 'SQL',
        level: '60%',
        logo: '/sql-database-sql-azure-svgrepo-com.png',
        directionLeft: false
    },
    {
        title: 'InfluxDB',
        level: '70%',
        logo: '/influxdb-svgrepo-com.png',
        directionLeft: false
    },
    {
        title: 'RabbitMQ',
        level: '60%',
        logo: '/rabbitmq-svgrepo-com.png',
        directionLeft: true
    },
    {
        title: 'Redis',
        level: '70%',
        logo: '/redis-logo-svgrepo-com.png',
        directionLeft: true
    },
    {
        title: 'GraphQL',
        level: '60%',
        logo: '/graphql-svgrepo-com.png',
        directionLeft: false
    },



]


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    res.status(200).json(skills)
}
