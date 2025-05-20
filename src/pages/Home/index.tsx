import { MainTemplate } from "../../templates/MainTemplate";
import { Timer } from "../../components/Timer";
import { Container } from "../../components/Container";
import { MainForm } from "../../components/MainForm";

export function Home() {
    return (
      <MainTemplate>
        <Container>
          <Timer />
        </Container>
        <Container>
            <MainForm />
        </Container>
      </MainTemplate>
      
    )
}