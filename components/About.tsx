import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'



function About() {
    return (
        <motion.div
            className='flex flex-col lg:flex-row relative h-screen text-center lg:text-left max-w-7xl px-10 justify-center tall:justify-evenly pt-5 tall:mt-0  mx-auto items-center'
            initial={{
                opacity: 0
            }}
            whileInView={{

                opacity: 1
            }}
            transition={{
                duration: 2
            }}
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500'>About</h3>

            <motion.div
                className='relative w-24 md:w-48 lg:w-full h-24 md:h-48 lg:h-96 rounded-full md:rounded-lg overflow-hidden'
                initial={{
                    x: -200,
                    opacity: 0.
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 1.5
                }}

            >

                <Image
                    src="/sit.jpg"
                    alt=""
                    objectFit="cover"
                    layout="fill"
                    className=' w-24 md:w-48 lg:w-full h-24 md:h-48 lg:h-96'
                    priority

                />


            </motion.div>
            <div className='space-y-5 px-0 md:px-10'>
                <h4 className='text-2xl md:text-4xl font-semibold'>
                    Some Intro
                </h4>
                <p className='text-sm md:text-xl'>

                    Anyungu is a versatile Full-Stack Engineer with 5 years of experience designing, building, and deploying scalable apps for clients in the education,
                    financing, and legal spaces. He is proficient in JavaScript technologies such as Node.js, React.js, TypeScript, and Angular, and Java frameworks
                    like Spring Boot. He has worked with MongoDB and MySQL databases and has a good understanding of REST and GraphQL APIs. Anyungu has collaborated
                    with Scrum teams and is a quick learner and resourceful professional who communicates well with both technical and non-technical audiences.

                </p>

            </div>
        </motion.div>


    )
}

export default About