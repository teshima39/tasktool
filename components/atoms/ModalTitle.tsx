import { FC } from 'react'
import style_modalTitle from "components/atoms/ModalTitle.module.scss"

type Props = {
  onChangeElement: any
  listNo: number
  taskNo: number
  taskElement: any
}

export const ModalTitle: FC<Props> = (props) => {
  return (
    <h3 className={style_modalTitle.modal_ttl}><input type="text" onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChangeElement(event, props.listNo, props.taskNo, "title")} value={props.taskElement.title} /></h3>
  )
}
