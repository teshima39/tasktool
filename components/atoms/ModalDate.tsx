import { FC } from 'react'
import style_modalDate from "components/atoms/ModalDate.module.scss"
import { Task } from "../../types/task";


type Props = {
  taskElement: Task;
}

export const ModalDate: FC<Props> = (props) => {
  return (
    <p className={style_modalDate.modal_date}>作成日時 : {props.taskElement.date}</p>
  )
}
