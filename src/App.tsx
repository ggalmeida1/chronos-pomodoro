import { Container } from './components/Container'
//import { Heading } from './components/Heading'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'

import './styles/theme.css'
import './styles/global.css'
import { Timer } from './components/Timer'
import { DefaultInput } from './components/DefaultInput'



export function App() {
    return (
      <>
        <Container>
            <Logo />
        </Container>
        <Container>
          <Menu />
        </Container>
        <Container>
          <Timer />
        </Container>
        <Container>
          <form className='form' action="">
            <div className="formRow">
              <DefaultInput id="task" type="text" labelText="Task" placeholder='Digite o nome da tarefa' />
            </div>
            <div className="formRow">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="formRow">
              <p>Ciclos</p>
              <p>0 0 0 0 0 </p>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </Container>
      </>
      
    )
}