import { FC, CSSProperties, ReactNode } from "react"
import style_procFrame from "components/molecules/ProcFrame.module.scss"
import 'ress'

type Props = {
  children?: ReactNode;
  index: number;
  grabProcNo: number | null;
  grabTaskNo: number | null;
  procMouseDown: (event: React.MouseEvent<HTMLDivElement>) => void;
  trans: any;
}

export const ProcFrame: FC<Props> = (props) => {

  return (
    <li className={style_procFrame.list_bg}>
      <div className={style_procFrame.list_frame} id={`List__${props.index}`}
        style={props.grabProcNo == props.index ? props.trans as CSSProperties : undefined}>
        <div
          className={style_procFrame.grab_area}
          onMouseDown={props.procMouseDown} id={`grabArea__${props.index}`}>
        </div>

        {props.children}

        <div className={`${style_procFrame.taskMoveFrame}`} style={{ visibility: props.grabTaskNo != null ? "visible" : "hidden" }} id={`taskMoveFrame__${props.index}`}></div>
      </div>
    </li>
  )
}
