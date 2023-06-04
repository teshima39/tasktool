import { ReactNode, FC } from "react";
import style_procTitle from "components/atoms/ProcTitle.module.scss"

type Props = {
  children?: ReactNode
  index: number
  value: string;
  onChangeProcttl: (event: React.ChangeEvent<HTMLInputElement>, procNo: number) => void;
}

export const ProcTitle: FC<Props> = (props) => {

  return (
    <dt><h3>
      <input type="text" value={props.value} onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChangeProcttl(event, props.index)} className={style_procTitle.proc_title} />
    </h3></dt>
  )
}
