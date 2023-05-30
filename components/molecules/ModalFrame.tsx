import { FC } from 'react'
import style_modalFrame from "components/molecules/ModalFrame.module.scss"
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import 'ress'
import { ModalTitle } from '../atoms/ModalTitle';
import { ModalDate } from '../atoms/ModalDate';
import { ModalComment } from '../atoms/ModalComment';

type Props = {
  listNo: number
  taskNo: number
  onDeleteTask: any
  onChangeElement: any
  taskElement: any
  closeModal: any
}

export const ModalFrame: FC<Props> = (props) => {


  return (
    <div className={style_modalFrame.modal_wrapper} id={`modal__${props.listNo}${props.taskNo}`}>
      <div className={style_modalFrame.modal_bg} onClick={() => props.closeModal(props.listNo, props.taskNo)}></div>
      <div className={style_modalFrame.modal}>
        <DeleteIcon fontSize="small" className={style_modalFrame.list_delete} onClick={() => props.onDeleteTask(props.listNo, props.taskNo)}></DeleteIcon>

        <CloseIcon className={style_modalFrame.close_icon} onClick={() => props.closeModal(props.listNo, props.taskNo)}></CloseIcon>

        <ModalTitle onChangeElement={props.onChangeElement} listNo={props.listNo} taskNo={props.taskNo} taskElement={props.taskElement}></ModalTitle>

        <ModalDate onChangeElement={props.onChangeElement} listNo={props.listNo} taskNo={props.taskNo} taskElement={props.taskElement}></ModalDate>

        <ModalComment onChangeElement={props.onChangeElement} listNo={props.listNo} taskNo={props.taskNo} taskElement={props.taskElement}></ModalComment>
      </div>
    </div>
  )
}
