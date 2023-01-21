import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
    singleExp: ExperiencesData
}
type ExperiencesData = {
    title: string;
    company: string;
    start: string;
    end: string;
    duties: string[];
}


function ExperienceCard({ singleExp }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-12 md:space-y-7 flex-shrink-0 
                            overflow-y-scroll md:overflow-y-hidden
                            w-[320px] md:w-[900px]
                            snap-start bg-[#292929] p-4 md:p-10 
                            hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200'
        >
            {/* <motion.div
                className='relative w-12 h-12 md:w-24 md:h-24 rounded-full overflow-hidden object-left lg:object-center'
                initial={{
                    y: -100,
                    opacity: 0.
                }}
                whileInView={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 2
                }}

            >

                <Image
                    src="https://images.unsplash.com/photo-1665703626532-16ecb54da5e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""
                    objectFit="cover"
                    layout="fill"
                    className='w-auto h-auto'

                />
            </motion.div> */}
            <div className='px-2 md:px-10'>
                <h4 className='text-lg md:text-2xl lg:text-4xl font-light'>
                    {singleExp.title}
                </h4>
                <p className='font-bold text-lg md:text-2xl md:mt-1'>
                    {singleExp.company}
                </p>
                <p className='uppercase py-3 md:py-5 text-gray-300'>{`${singleExp.start} ${singleExp.end ? `- ${singleExp.end}` : ''}`}</p>

                <ul className='list-disc space-y-4 ml-5 text-sm md:text-lg'>
                    {singleExp.duties.map((el, idx) => (
                        <li key={idx}>
                            {el}
                        </li>
                    ))}

                </ul>

            </div>



        </article>
    )
}

export default ExperienceCard