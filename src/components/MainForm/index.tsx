import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {
    return (
        <form className='form' action="">
        <div className="formRow">
          <DefaultInput id="task" type="text" labelText="Task" placeholder='Digite o nome da tarefa' />
        </div>
        <div className="formRow">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="formRow">
          <Cycles />
          <DefaultButton icon={<PlayCircleIcon />} />
        </div>
      </form>
    )
}