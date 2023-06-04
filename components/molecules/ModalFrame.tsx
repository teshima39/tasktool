import { FC } from 'react'
import style_modalFrame from "components/molecules/ModalFrame.module.scss"
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import 'ress'
import { ModalTitle } from '../atoms/ModalTitle';
import { ModalDate } from '../atoms/ModalDate';
import { ModalComment } from '../atoms/ModalComment';
import { Task } from "../../types/task";


type Props = {
  procNo: number;
  taskNo: number;
  taskElement: Task;
  onChangeTaskElement: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, procNo: number, taskNo: number, taskKey: string) => void;
  closeModal: (procNo: number, taskNo: number) => void;
  onDeleteTask: (procNo: number, taskNo: number) => void;
}

export const ModalFrame: FC<Props> = (props) => {


  return (
    <div className={style_modalFrame.modal_wrapper} id={`modal__${props.procNo}${props.taskNo}`}>
      <div className={style_modalFrame.modal_bg} onClick={() => props.closeModal(props.procNo, props.taskNo)}></div>
      <div className={style_modalFrame.modal}>
        <DeleteIcon fontSize="small" className={style_modalFrame.list_delete} onClick={() => props.onDeleteTask(props.procNo, props.taskNo)}></DeleteIcon>

        <CloseIcon className={style_modalFrame.close_icon} onClick={() => props.closeModal(props.procNo, props.taskNo)}></CloseIcon>

        <ModalTitle onChangeTaskElement={props.onChangeTaskElement} procNo={props.procNo} taskNo={props.taskNo} taskElement={props.taskElement}></ModalTitle>

        <ModalDate taskElement={props.taskElement}></ModalDate>

        <ModalComment onChangeTaskElement={props.onChangeTaskElement} procNo={props.procNo} taskNo={props.taskNo} taskElement={props.taskElement}></ModalComment>
      </div>
    </div>
  )
}
