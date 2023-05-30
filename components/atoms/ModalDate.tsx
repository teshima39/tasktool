import { FC } from 'react'
import style_modalDate from "components/atoms/ModalDate.module.scss"

type Props = {
  onChangeElement: any
  listNo: number
  taskNo: number
  taskElement: any
}

export const ModalDate: FC<Props> = (props) => {
  return (
    <p className={style_modalDate.modal_date}>作成日時 : {props.taskElement.date}</p>
  )
}
