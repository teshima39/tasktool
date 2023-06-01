import { FC } from 'react'
import style_modalComment from "components/atoms/ModalComment.module.scss"
import { Task } from "../../types/task";

type Props = {
  onChangeElement: (event: React.ChangeEvent<HTMLTextAreaElement>, listNo: number, taskNo: number, taskKey: string) => void;
  listNo: number;
  taskNo: number;
  taskElement: Task;
}

export const ModalComment: FC<Props> = (props) => {
  return (
    <textarea onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => props.onChangeElement(event, props.listNo, props.taskNo, "comment")} value={props.taskElement.comment} className={style_modalComment.modal_comment} />
  )
}
