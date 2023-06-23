import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbCovid from '../public/images/works/covid_codeigniter.png'
import thumbCovMean from '../public/images/works/covid_MEAN.png'
import thumbKrypto from '../public/images/works/krypto_tracker(1).png'
import thumbHMS from '../public/images/works/HMS.png'
import thumbIIJIS from '../public/images/works/IIJIS.png'
import thumbThunderkeg from '../public/images/works/thunderkeg.png'
import thumbKancha from '../public/images/works/kancha-bot.png'

import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
          <WorkGridItem id="krypto-tracker" title="Krypto-Tracker" thumbnail={thumbKrypto}>
             A cryptocurrency tracking application
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="covMean" title="COVID-X v2.0" thumbnail={thumbCovMean}>
             A COVID Resource management system built on the MEAN stack
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="hms"
            title="HMS"
            thumbnail={thumbHMS}
          >
            Hospital Management System
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
        <WorkGridItem id="kancha-bot" thumbnail={thumbKancha} title="Kancha-Bot">
           A Nepali Discord bot that plays music and plays Wordle with you.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="thunderkeg" thumbnail={thumbThunderkeg} title="Thunderkeg-Portfolio">
            A portfolio web-application made using Next.js , Chakra UI , Framer-Motion and Threejs
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="covid-x" thumbnail={thumbCovid} title="COVID-X">
            A covid statistics provider in Codeigniter Framework.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
        <WorkGridItem
            id="iijis"
            title="IIJIS"
            thumbnail={thumbIIJIS}
          >
            A full stack web-site for Indian Innovations: Journal of Indian Start-Ups
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
  )
}
export default Works
