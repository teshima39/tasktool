import { useNowDate } from "@/hook/useNowDate"
import style_header from "components/organisms/Header.module.scss"
import 'ress'

export const Header = () => {

  const nowDate = useNowDate();

  const onReset = () => {
    const taskList = [
      ['Procttl00',
        {
          'title': 'task00',
          'date': `${nowDate}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        },
        {
          'title': 'task01',
          'date': `${nowDate}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        },
        {
          'title': 'task02',
          'date': `${nowDate}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        }],

      ['Procttl01',
        {
          'title': 'task03',
          'date': `${nowDate}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        },
        {
          'title': 'task04',
          'date': `${nowDate}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        }],

      ['Procttl02',
        {
          'title': 'task05',
          'date': `${nowDate}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        }]
    ]

    let result = confirm('初期化します。よろしいですか？');
    if (result) {
      let taskListJson = JSON.stringify(taskList, undefined, 1);
      localStorage.setItem('taskList', taskListJson);
      location.reload()
    }
  }

  return (
    <header className={style_header.header}><h1>TIssaTLE</h1>
      <p onClick={() => { onReset() }}>初期化する</p></header>
  )
}
