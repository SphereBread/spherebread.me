import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hi, <br /> I'm Matvey.
        </BigTitle>
        <Subtitle>I'm trying to do some programming, working Application Support Analyst at EPAM.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Instagram"
            link="https://www.instagram.com/sphere_bread/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Тут различные фоточки.
          </ProjectCard>
          <ProjectCard
            title="Тинькофф"
            link="https://www.tinkoff.ru/rm/gerasimov.matvey1/1g2MK91488/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Какие выплаты мне положены?
          </ProjectCard>
          <ProjectCard
            title="GitHub"
            link="https://github.com/SphereBread"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Всякие репозитории, энджой.
          </ProjectCard>
          <ProjectCard
            title="Яндекс.Музыка"
            link="https://music.yandex.ru/users/gerasimov.matvei/playlists/3"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            А тут вся музыка, которую я лайкаю (около 8,5 тысяч треков).
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
          Born in 1999 in New York. <br/> Live in Saint-Petersburg. <br/> I love cats, food and sleep.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Тут всякие буковки о том, какой я классный, чем занимаюсь и всякое такое. Бла бла бла.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="https://tlg.fyi/sphere_bread">Hi</a> or find me on other platforms:{' '}
            <a href="https://twitter.com/Sphere_Bread">Twitter</a> &{' '}
            <a href="https://vk.com/menya_est_kust">VK</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2020 by SphereBread.{' '}
          <a href="https://github.com/SphereBread/spherebread.tk">Github Repository</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
