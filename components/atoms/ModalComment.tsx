import { FC } from 'react'
import style_modalComment from "components/atoms/ModalComment.module.scss"
import { Task } from "../../types/task";

type Props = {
  onChangeTaskElement: (event: React.ChangeEvent<HTMLTextAreaElement>, procNo: number, taskNo: number, taskKey: string) => void;
  procNo: number;
  taskNo: number;
  taskElement: Task;
}

export const ModalComment: FC<Props> = (props) => {
  return (
    <p className={style_modalComment.modal_comment}><textarea onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => props.onChangeTaskElement(event, props.procNo, props.taskNo, "comment")} value={props.taskElement.comment} /></p>
  )
}
