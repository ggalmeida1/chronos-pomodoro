import { Container } from './components/Container'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'

import './styles/theme.css'
import './styles/global.css'


export function App() {
    return (
      <>
        <Container>
            <Logo />
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