import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'


type Props = {
    experiences: ExperiencesData[]
}
type ExperiencesData = {
    title: string;
    company: string;
    start: string;
    end: string;
    duties: string[];
}


function Experience({ experiences }: Props) {

    return (
        <motion.div
            className='flex flex-col relative h-screen overflow-hidden text-left max-w-full px-6 md:px-10 justify-evenly mx-auto items-center'
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
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500'>Experience</h3>



            <div className='w-full flex space-x-3 p-10 snap-x snap-mandatory mt-28 md:mt-28 scrollbar overflow-y-hidden overflow-x-scroll scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>

                {experiences.map((e, idx) => (

                    <ExperienceCard key={idx} singleExp={e} />

                ))}

            </div>
        </motion.div>
    )
}




export default Experience