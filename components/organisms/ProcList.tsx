import { useState, ChangeEvent, useEffect, Fragment, FC } from "react"
import style_procList from "../organisms/ProcList.module.scss"
import 'ress'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { ProcFrame } from "../molecules/ProcFrame";
import { TaskList } from "../molecules/TaskList";
import { ProcTitle } from "../atoms/ProcTitle";
import { useDidUpdateEffect } from "../../hook/useDidUpdateEffect";
import { Task } from "../../types/task";

type Props = {
  nowDate: string;
}


export const ProcList: FC<Props> = (props) => {

  /* タスク配列  */
  type TaskList = Array<[string, ...Array<Task>]>;
  const [taskList, setTaskList] = useState<TaskList>(
    [
      ['プロセス00',
        {
          'title': 'タスク00',
          'date': `${props.nowDate}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        },
        {
          'title': 'タスク01',
          'date': `${props.nowDate}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        },
        {
          'title': 'タスク02',
          'date': `${props.nowDate}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        }],

      ['プロセス01',
        {
          'title': 'タスク03',
          'date': `${props.nowDate}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        },
        {
          'title': 'タスク04',
          'date': `${props.nowDate}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        }],

      ['プロセス02',
        {
          'title': 'タスク05',
          'date': `${props.nowDate}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        }]
    ]
  );

  /* ローカルストレージにタスク配列を保存  */
  useEffect(() => {
    let taskListJson = localStorage.getItem('taskList') || '';
    if (taskListJson) {
      let getTaskListJson = JSON.parse(`${taskListJson}`);
      setTaskList(getTaskListJson);
    } else {
      setTaskList(taskList);
    }
  }, []);
  useDidUpdateEffect(() => {
    let taskListJson = JSON.stringify(taskList, undefined, 1);
    localStorage.setItem('taskList', taskListJson);
  }, [taskList]);

  /* 各変数  */
  const [mousepositionX, setMousepositionX] = useState<number>(0);
  const [mousepositionY, setMousepositionY] = useState<number>(0);
  const [grabTaskNo, setGrabTaskNo] = useState<number | null>(null);
  const [grabProcNo, setgrabProcNo] = useState<number | null>(null);
  const [altgrabProcNo, setAltgrabProcNo] = useState<number | null>(null);

  let grabPositionX: number = 0;
  let grabPositionY: number = 0;
  let procNo: number | null = null;
  let taskNo: number | null = null;

  const trans: any = {
    transform: `translate(${mousepositionX}px, ${mousepositionY}px)`,
    position: 'relative',
    zIndex: '999',
    opacity: '0.8'
  };

  /* プロセス追加  */
  const onClickAddProc = () => {
    let newTaskList = [...taskList];
    newTaskList.push(
      ["newプロセス",
        {
          'title': 'newタスク',
          'date': `${props.nowDate}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        }]
    );
    setTaskList(newTaskList as never[]);
  };

  /* タスク追加  */
  const onClickAddTask: React.MouseEventHandler<SVGSVGElement> = (event) => {
    const eventNode = event.currentTarget;
    const addtaskNo = Number(eventNode.getAttribute('id'));
    let newTaskList: any = [...taskList]
    let newTask = [...taskList[addtaskNo]]
    newTask.push(
      {
        'title': 'newタスク',
        'date': `${props.nowDate}`,
        'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
      }
    )
    newTaskList.splice(addtaskNo, 1, newTask)
    setTaskList(newTaskList)
  };

  /* プロセスクリック  */
  const procMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const eventNode = event.currentTarget as HTMLDivElement;
    procNo = Number(eventNode.getAttribute('id')?.replace("grabArea__", ""))
    setgrabProcNo(procNo);
    let elemBelowProcNo: number | null = null;

    /* プロセスマウス追従  */
    const procMouseMove = (event: MouseEvent) => {
      if (eventNode && eventNode.parentNode) {
        const parentNode = eventNode.parentNode as HTMLElement;
        eventNode.style.visibility = "hidden";
        parentNode.style.visibility = "hidden";
      }
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      let elemBelowId = elemBelow?.getAttribute('id');
      if (elemBelowId?.includes('procInsertArea__')) {
        elemBelowProcNo = Number(elemBelowId.replace("procInsertArea__", ""));
      }
      if (eventNode && eventNode.parentNode) {
        const parentNode = eventNode.parentNode as HTMLElement;
        eventNode.style.visibility = "visible";
        parentNode.style.visibility = "visible";
      }
      let ulWidth = document.getElementById('ul')?.clientWidth!;
      let mainHeight = document.getElementById('main')?.clientHeight!;
      setMousepositionX(
        event.clientX + window.scrollX < ulWidth
          ? event.clientX - grabPositionX + window.scrollX
          : ulWidth - grabPositionX
      );
      setMousepositionY(
        event.clientY - grabPositionY + window.scrollY < mainHeight
          ? event.clientY - grabPositionY + window.scrollY
          : mainHeight
      );
    }

    document.addEventListener("mousemove", procMouseMove);
    grabPositionX = eventNode.getBoundingClientRect().left + window.scrollX + eventNode.offsetWidth / 2;
    grabPositionY = eventNode.getBoundingClientRect().top + window.scrollY + eventNode.offsetHeight / 2;

    /* プロセス並び替え  */
    const processSort = (grabIndex: number | null, elemBelowProcNo: number | null) => {
      if (grabIndex != null && elemBelowProcNo != null && elemBelowProcNo >= 0 && grabIndex != elemBelowProcNo) {
        let newTaskList = [...taskList]
        let remove = newTaskList.splice(grabIndex, 1)
        if (grabIndex > elemBelowProcNo) { newTaskList.splice(elemBelowProcNo, 0, remove[0]) } else {
          newTaskList.splice(elemBelowProcNo - 1, 0, remove[0])
        }
        setTaskList(newTaskList)
      }
    };

    if (eventNode) {
      eventNode.onmouseup = () => {
        processSort(procNo, elemBelowProcNo)
        document.removeEventListener("mousemove", procMouseMove);
        setMousepositionX(0);
        setMousepositionY(0);
        setGrabTaskNo(null);
        setgrabProcNo(null);
        setAltgrabProcNo(null);
      }
    };
  };

  /* タスククリック  */
  const taskMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const eventNode = event.currentTarget;
    let insertedProcNo: number | null = null;
    let insertedTaskNo: number | null = null;
    /* タスクマウス追従  */
    const taskMouseMove = (event: MouseEvent) => {
      if (eventNode) {
        eventNode.style.visibility = "hidden";
      }
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      let elemBelowId = elemBelow?.getAttribute('id');
      if (elemBelowId?.includes('taskInsertArea__') && elemBelow) {
        let elemBelowIndex = String(elemBelowId).replace('taskInsertArea__', '').split('');
        let elemBelowIndex__0 = elemBelowIndex[0];
        let elemBelowIndex__1 = elemBelowIndex[1];
        insertedProcNo = Number(elemBelowIndex__0);
        insertedTaskNo = Number(elemBelowIndex__1);
      } else {
        insertedProcNo = null;
        insertedTaskNo = null;
      }
      if (eventNode) {
        eventNode.style.visibility = "visible";
      }
      let ulWidth = document.getElementById('ul')?.clientWidth!;
      let mainHeight = document.getElementById('main')?.clientHeight!;
      setMousepositionX(
        event.clientX + window.scrollX < ulWidth
          ? event.clientX - grabPositionX + window.scrollX
          : ulWidth - grabPositionX
      );
      setMousepositionY(
        event.clientY - grabPositionY + window.scrollY < mainHeight
          ? event.clientY - grabPositionY + window.scrollY
          : mainHeight
      );
    }

    document.addEventListener("mousemove", taskMouseMove as EventListener);
    let taskId = String(eventNode.getAttribute('id'))
    taskId = taskId?.replace("task__", "")
    procNo = Number((taskId)[0])
    taskNo = Number((taskId)[1])
    grabPositionX = eventNode.getBoundingClientRect().left + window.scrollX + eventNode.offsetWidth / 2;
    grabPositionY = eventNode.getBoundingClientRect().top + window.scrollY + eventNode.offsetHeight / 2;
    setGrabTaskNo(taskNo);
    setAltgrabProcNo(procNo);

    /* タスク並び替え  */
    const taskSort = (procNo: number | null, taskNo: number | null, insertedProcNo: number | null, insertedTaskNo: number | null) => {
      if (procNo != null && taskNo != null && insertedProcNo != null && insertedTaskNo != null) {
        let newTaskList = [...taskList]
        let moveProc = taskList[procNo]
        let moveTask = taskList[procNo][taskNo]
        let insertedProc = [...taskList][insertedProcNo]
        if (procNo == insertedProcNo) {
          insertedProc.splice(insertedTaskNo, 0, moveTask)
          if (taskNo > insertedTaskNo) {
            insertedProc.splice(taskNo + 1, 1)
          } else {
            insertedProc.splice(taskNo, 1)
          }
          newTaskList.splice(insertedProcNo, 1, insertedProc)
          setTaskList(newTaskList)
        }
        else {
          moveProc.splice(taskNo, 1)
          insertedProc.splice(insertedTaskNo, 0, moveTask)
          newTaskList.splice(insertedProcNo, 1, insertedProc)
          setTaskList(newTaskList)
        }
      }
    };

    if (eventNode) {
      eventNode.onmouseup = () => {
        taskSort(procNo, taskNo, insertedProcNo, insertedTaskNo)
        document.removeEventListener("mousemove", taskMouseMove);
        setMousepositionX(0);
        setMousepositionY(0);
        setGrabTaskNo(null);
        setgrabProcNo(null);
        setAltgrabProcNo(null);
      }
    };
  };

  /* プロセスタイトル変更  */
  const onChangeProcttl = (event: ChangeEvent<HTMLInputElement>, procNo: number) => {
    if (event.target.value.length <= 10) {
      let changeList = taskList[procNo]
      changeList[0] = event.target.value;
      setTaskList(
        taskList.map((element, index) => (
          index === procNo ? changeList : element
        ))
      );
    }
  };

  /* タスク要素変更  */
  const onChangeTaskElement = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, procNo: number, taskNo: number, taskKey: string) => {
    let changeList: any = taskList[procNo]
    if (taskKey == 'title' && event.target.value.length <= 10) {
      changeList[taskNo][taskKey] = event.target.value;
    }
    if (taskKey == 'comment') {
      changeList[taskNo][taskKey] = event.target.value;
    }
    setTaskList(
      taskList.map((element, index) => (
        index === procNo ? changeList : element
      ))
    );
  };

  /* プロセス削除 */
  const onDeleteProc = (procNo: number) => {
    let result = confirm('削除します。よろしいですか？');
    if (result) {
      let newTaskList = [...taskList]
      newTaskList.splice(procNo, 1)
      setTaskList(newTaskList)
    }
  };

  /* タスク削除 */
  const onDeleteTask = (procNo: number, taskNo: number) => {
    let result = confirm('削除します。よろしいですか？');
    if (result) {
      let changeList = taskList[procNo]
      changeList.splice(taskNo, 1)
      setTaskList(
        taskList.map((element, index) => (
          index === procNo ? changeList : element
        ))
      );
      closeModal(procNo, taskNo);
    }
  };

  /* モーダル閉じる */
  const closeModal = (procNo: number, taskNo: number) => {
    let node = document.getElementById(`modal__${procNo}${taskNo}`)
    if (node) {
      node.style.display = 'none';
    }
  }

  return (
    <ul className={style_procList.proc_list} id="ul">
      <li id="procInsertArea__0" className={`${style_procList.insertArea} ${grabProcNo != null ? style_procList.insertArea_active : ''}`}>
      </li>
      {taskList.map((listElement, index) => {
        const procNo = index;
        return (
          <Fragment key={index}>
            <ProcFrame index={index} grabProcNo={grabProcNo} grabTaskNo={grabTaskNo} procMouseDown={procMouseDown} trans={trans} key={index}>
              <DeleteIcon fontSize="small" className={style_procList.list_delete} onClick={() => onDeleteProc(index)}></DeleteIcon>
              <dl>
                <ProcTitle index={index} onChangeProcttl={onChangeProcttl}
                  value={taskList[index][0]} key={index}>
                </ProcTitle>
                <TaskList listElement={listElement} index={index} procNo={procNo} grabTaskNo={grabTaskNo} altgrabProcNo={altgrabProcNo} taskMouseDown={taskMouseDown} onClickAddTask={onClickAddTask} trans={trans} onChangeTaskElement={onChangeTaskElement}
                  onDeleteTask={onDeleteTask} closeModal={closeModal} >
                </TaskList>
              </dl>
            </ProcFrame>
            <li id={`procInsertArea__${index + 1}`} className={`${style_procList.insertArea} ${grabProcNo != null ? style_procList.insertArea_active : ''} `}>
            </li>
          </Fragment>
        )
      })}
      <li className={style_procList.list_last} style={{ visibility: taskList.length < 5 ? "visible" : "hidden" }}>
        < AddIcon className={style_procList.addIcon} onClick={onClickAddProc} style={{ width: "50px", height: "50px" }} ></ AddIcon>
      </li>
    </ul>
  )
}
