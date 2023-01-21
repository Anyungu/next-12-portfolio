import { motion } from 'framer-motion'
import React from 'react'


function HeroCircles() {
    return (
        <motion.div
            className='relative flex justify-center items-center'
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 1],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"]
            }}
            transition={{
                duration: 3
            }}
        >
            <div className='absolute border mt-52 border-[#333333] rounded-full h-[200px] w-[200px] animate-ping' />
            <div className='absolute border mt-52 border-[#333333] rounded-full h-[300px] w-[300px]' />
            <div className='absolute border mt-52 border-[#333333] rounded-full h-[500px] w-[500px]' />
            <div className='absolute border mt-52 border-[#F7AB0A] rounded-full h-[650px] w-[650px] opacity-20 animate-pulse' />
            <div className='absolute border mt-52 border-[#333333] rounded-full h-[800px] w-[800px]' />

        </motion.div>
    )
}

export default HeroCircles