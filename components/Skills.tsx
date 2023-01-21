import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {
  skills: SkillsData[],
}

type SkillsData = {
  title: string;
  level: string;
  logo: string;
  directionLeft: boolean;
}


function Skills({ skills }: Props) {

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className='flex relative flex-col text-center md:text-left h-screen max-w-full
        justify-center mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500'>Skills</h3>

        <h3 className='absolute top-36 uppercase tracking-[8px] text-gray-500 text-sm'>Hover over skill for current proficiency</h3>

        <div className='grid grid-cols-4 sm:grid-cols-4 gap-5'>

          {
            skills.map((el, idx) => (

              <Skill key={idx} directionLeft={el.directionLeft} level={el.level} logo={el.logo} title={el.title} />

            ))
          }


        </div>
      </motion.div>
    </>


  )
}

export default Skills