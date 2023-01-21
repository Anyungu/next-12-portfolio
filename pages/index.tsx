import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import CustomHeader from '../components/CustomHeader'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import Skills from '../components/Skills'


type SkillsData = {
  title: string;
  level: string;
  logo: string;
  directionLeft: boolean;
}

type ExperiencesData = {
  title: string;
  company: string;
  start: string;
  end: string;
  duties: string[];
}


const Home: NextPage<{ experiences: ExperiencesData[], skills: SkillsData[] }> = ({ experiences, skills }) => {

  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Anyungu</title>
        {/* Icon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* * Header */}
      <CustomHeader />

      {/* * Me  */}
      <section id="me" className='snap-start'>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      <section id="experience" className='snap-center'>
        <Experience experiences={experiences} />
      </section>

      <section id="skills" className='snap-start'>
        <Skills skills={skills} />
      </section>


    </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const res = await Promise.all([fetch('http://localhost:3000/api/experience'), fetch('http://localhost:3000/api/skills')])

  const experiences = await res[0].json()

  const skills = await res[1].json()



  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      experiences,
      skills
    },
  }
}

export default Home
