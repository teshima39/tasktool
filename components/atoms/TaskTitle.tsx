import { FC,CSSProperties } from 'react'
import style_taskTitle from "components/atoms/TaskTitle.module.scss"
import EditIcon from '@mui/icons-material/Edit';

type Props = {
  taskNo:number
  listNo:number
  taskMouseDown:any
  grabTaskNo:number|null
  altGrabListNo:number|null
  trans:any
  taskElement:any
  openModal:any
}

export const TaskTitle:FC<Props> = (props) => {
  return (
    <div key={props.taskNo} onMouseDown={props.taskMouseDown}
    style={props.altGrabListNo == props.listNo && props.grabTaskNo == props.taskNo ? props.trans as CSSProperties : undefined}
    className={style_taskTitle.task_frame}
    id={`task__${props.listNo}${props.taskNo}`}>
    {props.taskElement.title}
    <EditIcon className={style_taskTitle.edit_icon} onClick={() => props.openModal(props.listNo, props.taskNo)}></EditIcon>
  </div>
  )
}
