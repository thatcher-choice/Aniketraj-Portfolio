import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="HMS">
    <Container>
      <Title>
        HMS <Badge>2021-</Badge>
      </Title>
      <P>
        A Hospital Management System made in PHP , HTML5/CSS3  and SQL
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Link</Meta>
          <Link href="https://github.com/Thunderk3g/HMS2">
          https://github.com/Thunderk3g/HMS2 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Android/iOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5/CSS3, MySQL, Bootstrap , PHP</span>
        </ListItem>
      </List>


      <WorkImage src="/images/works/HMS(1).png" alt="Covid-X" />
      <WorkImage src="/images/works/HMS(2).png" alt="Covid-X" />
    </Container>
  </Layout>
)


export default Work