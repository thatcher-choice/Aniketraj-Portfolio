import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="IIJIS">
    <Container>
      <Title>
        IIJIS <Badge>2019-</Badge>
      </Title>
      <P>
        A full stack web-application for Indian Innovations: Journal of Indian Start-Ups
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Link</Meta>
          <Link href="https://github.com/Thunderk3g/IIJIS-2">
          https://github.com/Thunderk3g/IIJIS-2 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Android/iOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>RESTful API, Docker, Nodejs , Angular</span>
        </ListItem>
      </List>


      <WorkImage src="/images/works/IIJIS(1).png" alt="Covid-X" />
      <WorkImage src="/images/works/IIJIS(2).png" alt="Covid-X" />
    </Container>
  </Layout>
)


export default Work