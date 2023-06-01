import { FC, CSSProperties, MouseEvent } from 'react'
import style_taskTitle from "components/atoms/TaskTitle.module.scss"
import EditIcon from '@mui/icons-material/Edit';
import { Task } from "../../types/task";

type Props = {
  taskNo: number
  listNo: number
  grabTaskNo: number | null
  altGrabListNo: number | null
  trans: any
  taskMouseDown: (event: MouseEvent<HTMLDivElement>) => void;
  taskElement: Task;
  openModal:(listNo: number,taskNo: number) => void;
}

export const TaskTitle: FC<Props> = (props) => {
  return (
    <div onMouseDown={props.taskMouseDown}
      style={props.altGrabListNo == props.listNo && props.grabTaskNo == props.taskNo ? props.trans as CSSProperties : undefined}
      className={style_taskTitle.task_frame}
      id={`task__${props.listNo}${props.taskNo}`}>

      {props.taskElement.title}
      
      <EditIcon fontSize='medium' className={style_taskTitle.edit_icon} onClick={() => props.openModal(props.listNo, props.taskNo)}></EditIcon>
    </div>
  )
}
