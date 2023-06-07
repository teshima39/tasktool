import { FC } from 'react'
import style_modalTitle from "components/atoms/ModalTitle.module.scss"
import { Task } from "../../types/task";

type Props = {
  onChangeTaskElement: (event: React.ChangeEvent<HTMLInputElement>, procNo: number, taskNo: number, taskKey: string) => void;
  procNo: number;
  taskNo: number;
  taskElement: Task;
}

export const ModalTitle: FC<Props> = (props) => {
  return (
    <h3 className={style_modalTitle.modal_ttl}><input type="text" onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChangeTaskElement(event, props.procNo, props.taskNo, "title")} value={props.taskElement.title} /></h3>
  )
}
