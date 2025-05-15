import './styles/theme.css'
import './styles/global.css'

import { Container } from './components/Container'
import { Heading } from './components/Heading'

export function App() {
    return (
      <>
        <Container>
            <Heading>
              Logo
            </Heading>
        </Container>
        <Container>
          <Heading>
              Menu
            </Heading>
        </Container>
        <Container>
            <Heading>
              Timer
            </Heading>
        </Container>
        <Container>
            <Heading>
              Descrição
            </Heading>
        </Container>
        <Container>
          <Heading>
              Footer
            </Heading>
        </Container>
      <Container>
          <div className='content'>
            <Heading>
              Footer
            </Heading>
          </div>
        </Container>
      </>
      
    )
}