import { useNowDate } from "@/hook/useNowDate"
import style_header from "components/organisms/Header.module.scss"
import 'ress'

export const Header = () => {

  const onReset = () => {
    const taskList = [
      ['プロセス00',
        {
          'title': 'タスク00',
          'date': `${useNowDate()}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        },
        {
          'title': 'タスク01',
          'date': `${useNowDate()}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        },
        {
          'title': 'タスク02',
          'date': `${useNowDate()}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        }],

      ['プロセス01',
        {
          'title': 'タスク03',
          'date': `${useNowDate()}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        },
        {
          'title': 'タスク04',
          'date': `${useNowDate()}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        }],

      ['プロセス02',
        {
          'title': 'タスク05',
          'date': `${useNowDate()}`,
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
    <header className={style_header.header}>
      <h1>APP-Title</h1>
      <div className={style_header.txt}>
        <p>各プロセス・タスクはドラックし、移動することができます。<br />（プロセスは<span className={style_header.purple}>網目</span>部分が掴めます。）<br /><span className={style_header.blue}>編集</span>アイコンでタスクの内容を編集でき、<br />ゴミ箱アイコンで削除できます。</p>
      </div>
      <p className={style_header.reset_btn} onClick={() => { onReset() }}>初期化する</p></header>
  )
}
