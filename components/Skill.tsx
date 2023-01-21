import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'


type Props = {
    directionLeft?: boolean,
    level: string,
    logo: string,
    title: string
}

function Skill({ directionLeft, level, logo, title }: Props) {
    return (
        <motion.div
            initial={{
                x: directionLeft ? -100 : 100,
                // opacity: 0

            }}
            transition={{
                duration: 2
            }}
            whileInView={{
                x: 0,
                // opacity: 1,
            }}
            className='group relative flex cursor-pointer overflow-hidden'>
            <div className='relative flex cursor-pointer w-12 md:w-24 h-12 md:h-24 rounded-full overflow-hidden object-center'>



                <Image
                    src={logo}
                    alt=""
                    objectFit="cover"
                    layout="fill"
                    className='w-auto h-auto filter group-hover:grayscale transition duration-300 ease-in-out absolute z-10'

                />
            </div>
            <div className='opacity-0 flex cursor-pointer w-12 md:w-24 h-12 md:h-24 rounded-full overflow-hidden object-center group-hover:opacity-70 transition duration-1000 ease-in-out absolute z-20 bg-white'>
                <p className='relative text-lg md:text-2xl font-bold text-black top-3 left-1 md:top-8 md:left-5'>
                    {level}
                </p>
            </div>
        </motion.div>
    )
}

export default Skill