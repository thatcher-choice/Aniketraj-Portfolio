import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="thunderkeg-homepage">
    <Container>
      <Title>
        Thunderkeg-Homepage<Badge>2022-</Badge>
      </Title>
      <P>
         A personal portfolio made using Next.js,Chakra UI, Framer Motion and Three.js
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Link</Meta>
          <Link href="https://github.com/Thunderk3g/thunderkeg-homepage">
          https://github.com/Thunderk3g/thunderkeg-homepage<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Vercel Link</Meta>
          <Link href="https://thunderkeg-homepage-chdmz8b69-thunderk3g.vercel.app/">
          https://thunderkeg-homepage-chdmz8b69-thunderk3g.vercel.app/<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Android/ioS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Codeigniter, MySQL, PHP , Javascript</span>
        </ListItem>
      </List>


      <WorkImage src="/images/works/thunderkeg(1).png" alt="thunderkeg" />
      <WorkImage src="/images/works/thunderkeg(2).png" alt="thunderkeg" />
    </Container>
  </Layout>
)


export default Work