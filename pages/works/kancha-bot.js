import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="Simple Image Processing">
    <Container>
      <Title>
        Kancha-Bot <Badge>2022-</Badge>
      </Title>
      <P>
            A Nepali Discord Music bot that also plays Wordle with you
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Link</Meta>
          <Link href="https://github.com/Thunderk3g/kancha-bot">
          https://github.com/Thunderk3g/Kancha-Bot<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Android/IOs</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJs,Javascript</span>
        </ListItem>
      </List>


      <WorkImage src="/images/works/kancha-bot.png" alt="simple" />
      
    </Container>
  </Layout>
)


export default Work