import { FC, CSSProperties, MouseEvent } from 'react'
import style_taskTitle from "components/atoms/TaskTitle.module.scss"
import EditIcon from '@mui/icons-material/Edit';
import { Task } from "../../types/task";

type Props = {
  taskNo: number;
  procNo: number;
  grabTaskNo: number | null;
  altgrabProcNo: number | null;
  trans: any;
  taskMouseDown: (event: MouseEvent<HTMLDivElement>) => void;
  taskElement: Task;
  openModal: (procNo: number, taskNo: number) => void;
}

export const TaskTitle: FC<Props> = (props) => {
  return (
    <div onMouseDown={props.taskMouseDown}
      style={props.altgrabProcNo == props.procNo && props.grabTaskNo == props.taskNo ? props.trans as CSSProperties : undefined}
      className={style_taskTitle.task_frame}
      id={`task__${props.procNo}${props.taskNo}`}>

      {props.taskElement.title}

      <EditIcon className={style_taskTitle.edit_icon} onClick={() => props.openModal(props.procNo, props.taskNo)} style={{width:"30px",height:"30px"}}></EditIcon>
    </div>
  )
}
