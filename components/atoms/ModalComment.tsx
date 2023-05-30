import { FC } from 'react'
import style_modalComment from "components/atoms/ModalComment.module.scss"

type Props = {
  onChangeElement:any
  listNo:number
  taskNo:number
  taskElement:any
}

export const ModalComment: FC<Props> = (props) => {
  return (
    <p className={style_modalComment.modal_comment}><textarea onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => props.onChangeElement(event, props.listNo, props.taskNo, "comment")} value={props.taskElement.comment} /></p>
  )
}
