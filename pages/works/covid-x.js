import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="COVID-X">
    <Container>
      <Title>
        COVID-X v1.0 <Badge>2019-</Badge>
      </Title>
      <P>
        A Covid Statistics Tracking Application made in Codeigniter framework with MySQL as a database.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Link</Meta>
          <Link href="https://github.com/Thunderk3g/CovidX">
          https://github.com/Thunderk3g/CovidX <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Codeigniter, MySQL, PHP , Javascript</span>
        </ListItem>
      </List>


      <WorkImage src="/images/works/covid_codeigniter.png" alt="Covid-X" />
      <WorkImage src="/images/works/covid_codeigniter(1).png" alt="Covid-X" />
    </Container>
  </Layout>
)


export default Work