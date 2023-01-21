import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import HeroCircles from './HeroCircles'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

function Hero({ }: Props) {

    const [text] = useTypewriter({
        words: ["Hey 🤝🤝, Anyungu here", "Any application that can be written in JavaScript,", "Will eventually be written in JavaScript", "<ReusableComponent/>"],
        typeSpeed: 30,
        deleteSpeed: 30,
        loop: 0,
        delaySpeed: 2500
    })
    return (
        <div className='h-screen flex flex-col space-y-8 justify-center text-center overflow-hidden'>
            <HeroCircles />
            <div className="relative w-32 h-32 rounded-full mx-auto">
                <Image
                    src="/laugh.jpg"
                    alt=""
                    objectFit="cover"
                    layout="fill"
                    className='w-32 h-32 rounded-full'
                    unoptimized

                />

            </div>
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
                <h1 className='text:lg md:text-3xl lg:text-5xl font-semibold px-10'>
                    <span>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>

                <div className='pt-5'>
                    <Link href="#about"><button className='heroButton'>About</button></Link>
                    <Link href="#experience"><button className='heroButton'>Experience</button></Link>
                    <Link href="#skills"><button className='heroButton'>Skills</button></Link>
                    <Link href="#project"><button className='heroButton'>Projects</button></Link>


                </div>

            </div>

        </div>
    )
}

export default Hero