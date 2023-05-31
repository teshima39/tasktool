import {MouseEvent, ReactNode, FC } from 'react'
import style_taskList from "components/molecules/TaskList.module.scss"
import AddIcon from '@mui/icons-material/Add';
import 'ress';
import { TaskTitle } from '../atoms/TaskTitle';
import { ModalFrame } from './ModalFrame';
import { Task } from "../../types/task";


type TaskList = [string, ...Task[]];

type Props = {
  children?: ReactNode;
  listElement:TaskList;
  index: number;
  listNo: number;
  grabTaskNo: number | null;
  altGrabListNo: number | null;
  trans: any;
  taskMouseDown: (event:MouseEvent<HTMLDivElement>) => void;
  onClickAddTask: (event: MouseEvent<SVGSVGElement>) => void;
  onChangeElement: (event: React.ChangeEvent<HTMLInputElement>,listNo: number, taskNo: number, taskKey: string) => void;
  onDeleteTask:(listNo: number,taskNo: number) => void;
  closeModal:(listNo: number,taskNo: number) => void;
}

export const TaskList: FC<Props> = (props) => {

  const openModal = (listNo: number, taskNo: number) => {
    let node = document.getElementById(`modal__${listNo}${taskNo}`)
    if (node) {
      node.style.display = 'block';
    }
  }

  return (
    <>
      {props.listElement.map((taskElement: any, taskNo: number) => {
        if (taskNo != 0) {
          return (
            <>
              <dd>
                <TaskTitle taskNo={taskNo} listNo={props.listNo} taskMouseDown={props.taskMouseDown} grabTaskNo={props.grabTaskNo} altGrabListNo={props.altGrabListNo} trans={props.trans} taskElement={taskElement} openModal={openModal}></TaskTitle>

                <ModalFrame listNo={props.listNo} taskNo={taskNo} onDeleteTask={props.onDeleteTask} onChangeElement={props.onChangeElement} taskElement={taskElement} closeModal={props.closeModal}></ModalFrame>
              </dd>
            </>
          )
        }
      })}
      <dd>
        <AddIcon
          className={style_taskList.addIcon}
          fontSize="large"
          onClick={props.onClickAddTask}
          id={String(props.index)} />
      </dd>
    </>
  )
}
