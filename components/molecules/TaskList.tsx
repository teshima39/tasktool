import { MouseEvent, ReactNode, FC, Fragment } from 'react'
import style_taskList from "components/molecules/TaskList.module.scss"
import AddIcon from '@mui/icons-material/Add';
import 'ress';
import { TaskTitle } from '../atoms/TaskTitle';
import { ModalFrame } from './ModalFrame';
import { Task } from "../../types/task";


type TaskList = [string, ...Task[]];

type Props = {
  children?: ReactNode;
  listElement: TaskList;
  index: number;
  procNo: number;
  grabTaskNo: number | null;
  altgrabProcNo: number | null;
  trans: any;
  taskMouseDown: (event: MouseEvent<HTMLDivElement>) => void;
  onClickAddTask: (event: MouseEvent<SVGSVGElement>) => void;
  onChangeTaskElement: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, procNo: number, taskNo: number, taskKey: string) => void;
  onDeleteTask: (procNo: number, taskNo: number) => void;
  closeModal: (procNo: number, taskNo: number) => void;
}

export const TaskList: FC<Props> = (props) => {

  /* モーダル開く */
  const openModal = (procNo: number, taskNo: number) => {
    let node = document.getElementById(`modal__${procNo}${taskNo}`)
    if (node) {
      node.style.display = 'block';
    }
  }

  return (
    <>
    <dd className={`${style_taskList.taskInsertArea} ${props.grabTaskNo != null ? style_taskList.taskInsertArea_active : ''}`} id={`taskInsertArea__${props.procNo}1`}></dd>
      {props.listElement.map((taskElement: any, taskNo: number) => {
        if (taskNo != 0) {
          return (
            <Fragment key={taskNo}>
              <dd>
                <TaskTitle taskNo={taskNo} procNo={props.procNo} taskMouseDown={props.taskMouseDown} grabTaskNo={props.grabTaskNo} altgrabProcNo={props.altgrabProcNo} trans={props.trans} taskElement={taskElement} openModal={openModal}></TaskTitle>

                <ModalFrame procNo={props.procNo} taskNo={taskNo} onDeleteTask={props.onDeleteTask} onChangeTaskElement={props.onChangeTaskElement} taskElement={taskElement} closeModal={props.closeModal}></ModalFrame>
              </dd>
              <dd
              className={`${style_taskList.taskInsertArea} ${props.grabTaskNo != null ? style_taskList.taskInsertArea_active : ''}`} id={`taskInsertArea__${props.procNo}${taskNo + 1}`} ></dd>
            </Fragment>
          )
        }
      })}
      <dd>
        <AddIcon
          className={style_taskList.addIcon}
          onClick={props.onClickAddTask}
          id={String(props.index)} style={{width:"40px",height:"40px"}}/>
      </dd>
    </>
  )
}
