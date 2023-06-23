import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="COVID-X">
    <Container>
      <Title>
        Krypto-Tracker <Badge>2022-</Badge>
      </Title>
      <P>
        A full-stack crypto-currency tracking application that tracks different crypto and provides a comparitive analysis.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Link</Meta>
          <Link href="https://github.com/Thunderk3g/Krypto-Tracker">
          https://github.com/Thunderk3g/Krypto-Tracker<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Android/Ios</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Angular, NodeJS, MongoDB , Express</span>
        </ListItem>
      </List>


      <WorkImage src="/images/works/krypto_tracker(1).png" alt="krypto-tracker" />
      <WorkImage src="/images/works/krypto_tracker(2).png" alt="krypto-tracker" />
      <WorkImage src="/images/works/krypto_tracker(3).png" alt="krypto-tracker" />
    </Container>
  </Layout>
)


export default Work