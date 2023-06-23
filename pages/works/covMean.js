import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="COVID-X 2.0">
    <Container>
      <Title>
        COVID-X v2.0 <Badge>2020-</Badge>
      </Title>
      <P>
        A pandemic resource management system made using Angular Framework and Nodejs for backend
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Link</Meta>
          <Link href="https://github.com/Thunderk3g/COVID-X-v2.0">
          https://github.com/Thunderk3g/COVID-X-v2.0 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Android/iOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Angular, MongoDB, Nodejs , Express</span>
        </ListItem>
      </List>


      <WorkImage src="/images/works/covid_MEAN(1).png" alt="Covid-X" />
      <WorkImage src="/images/works/covid_MEAN(2).png" alt="Covid-X" />
    </Container>
  </Layout>
)


export default Work