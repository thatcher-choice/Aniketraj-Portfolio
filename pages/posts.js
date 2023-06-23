import NextLink from 'next/link'
import {
  Box,
  Heading,
  List,
  Link,
  ListItem,
  Icon,
  Container,
  Divider,
  Image,
  Button,
  Text,
  useColorModeValue

} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import {  IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

const Posts = () => (
  <Layout title="Posts">
     <Container>
         <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
        <Heading as="h1" >Something will be here soon enough 🤔</Heading>       
         </Box>
     
      <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              src="/images/under.png"
              alt="Profile image"
            />
          </Box>
          <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="left"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
      <Text>You can follow me on my social media till then</Text>
     <List>
          <ListItem>
            <Link href="https://github.com/Thunderk3g" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @Thunderk3g
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/khuching_paryo" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @khuching_paryo
              </Button>
            </Link>
          </ListItem>
        </List>
      </Box>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  </Layout>
)

export default Posts