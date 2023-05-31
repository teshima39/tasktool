import { useState, ChangeEvent, useEffect,Fragment } from "react"
import style_procList from "components/organisms/ProcList.module.scss"
import 'ress'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { ProcFrame } from "../molecules/ProcFrame";
import { TaskList } from "../molecules/TaskList";
import { ProcTitle } from "../atoms/ProcTitle";
import { useDidUpdateEffect } from "@/hook/useDidUpdateEffect";
import { useNowDate } from "@/hook/useNowDate"
import { Task } from "../../types/task";

export const ProcList = () => {

  type TaskList = Array<[string, ...Array<Task>]>;

  const nowDate = useNowDate();

  const [taskList, setTaskList] = useState<TaskList>(
    [
      ['プロセス00',
        {
          'title': 'タスク00',
          'date': `${nowDate}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        },
        {
          'title': 'タスク01',
          'date': `${nowDate}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        },
        {
          'title': 'タスク02',
          'date': `${nowDate}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        }],

      ['プロセス01',
        {
          'title': 'タスク03',
          'date': `${nowDate}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        },
        {
          'title': 'タスク04',
          'date': `${nowDate}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        }],

      ['プロセス02',
        {
          'title': 'タスク05',
          'date': `${nowDate}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        }]
    ]
  );

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

  const [mousepositionX, setmousepositionX] = useState<number>(0);
  const [mousepositionY, setmousepositionY] = useState<number>(0);
  const [grabTaskNo, setGrabTaskNo] = useState<number | null>(null);
  const [grabListNo, setGrabListNo] = useState<number | null>(null);
  const [altGrabListNo, setAltGrabListNo] = useState<number | null>(null);

  let grabPositionX: number = 0;
  let grabPositionY: number = 0;
  let grabIndex: number | null = null;
  let listNo: number | null = null;
  let taskNo: number | null = null;
  let elemBelowlistNo: number | null = null;
  let elemBelowtaskNo: number | null = null;

  const trans: any = {
    transform: `translate(${mousepositionX}px, ${mousepositionY}px)`,
    position: 'relative',
    zIndex: '999'
  };

  const listSort = (grabIndex: number | null, elemBelowlistNo: number | null) => {
    if (grabIndex != null && elemBelowlistNo != null && elemBelowlistNo >= 0 && grabIndex != elemBelowlistNo) {
      let newTaskList = [...taskList]
      let remove = newTaskList.splice(grabIndex, 1)
      if (grabIndex > elemBelowlistNo) { newTaskList.splice(elemBelowlistNo, 0, remove[0]) } else {
        newTaskList.splice(elemBelowlistNo - 1, 0, remove[0])
      }
      setTaskList(newTaskList)
    }
    setGrabTaskNo(null);
    setGrabListNo(null);
    setAltGrabListNo(null);

  };

  const taskSort = (listNo: number | null, taskNo: number | null, elemBelowtaskNo: number | null) => {
    if (listNo != null && taskNo != null && elemBelowtaskNo != null && elemBelowtaskNo >= 0 && listNo != elemBelowtaskNo) {
      console.log('OK')
      let newTaskList = [...taskList]
      let insertTaskList = [...taskList][elemBelowtaskNo]
      let beforeTaskList = taskList[listNo]
      let moveTask = taskList[listNo][taskNo]
      beforeTaskList.splice(taskNo, 1)
      insertTaskList.push(moveTask)
      newTaskList.splice(listNo, 1, beforeTaskList)
      newTaskList.splice(elemBelowtaskNo, 1, insertTaskList)
      setTaskList(newTaskList)
    }
    setGrabTaskNo(null);
    setGrabListNo(null);
    setAltGrabListNo(null);

  };

  const onClickAddProcess = () => {
    let newTaskList = [...taskList];
    newTaskList.push(
      ["newプロセス",
        {
          'title': 'newタスク',
          'date': `${nowDate}`,
          'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
        }]
    );
    setTaskList(newTaskList as never[]);
  };

  const onClickAddTask: React.MouseEventHandler<SVGSVGElement> = (event) => {
    const eventNode = event.currentTarget;
    const addtaskNo = Number(eventNode.getAttribute('id'));
    let newTaskList: any = [...taskList]
    let newTask = [...taskList[addtaskNo]]
    newTask.push(
      {
        'title': 'newタスク',
        'date': `${nowDate}`,
        'comment': 'txtxtxtxtxtxtxtxtxtxtxt'
      }
    )
    newTaskList.splice(addtaskNo, 1, newTask)
    setTaskList(newTaskList)
  };

  const listMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const eventNode = event.currentTarget as HTMLDivElement;
    grabIndex = Number(eventNode.getAttribute('id')?.replace("grabArea__", ""))
    setGrabListNo(grabIndex);

    const listMouseMove = (event: MouseEvent) => {
      if (eventNode && eventNode.parentNode) {
        const parentNode = eventNode.parentNode as HTMLElement;
        eventNode.style.visibility = "hidden";
        parentNode.style.visibility = "hidden";
      }
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      console.log(elemBelow)
      let elemBelowNo = elemBelow?.getAttribute('id')?.replace("listInsertArea__", "");

      if (elemBelowNo != null) {
        elemBelowlistNo = Number(elemBelowNo);
      } else { elemBelowlistNo = null }
      if (eventNode && eventNode.parentNode) {
        const parentNode = eventNode.parentNode as HTMLElement;
        eventNode.style.visibility = "visible";
        parentNode.style.visibility = "visible";
      }
      setmousepositionX(event.clientX - grabPositionX + window.scrollX);
      setmousepositionY(event.clientY - grabPositionY + window.scrollY)
    }

    document.addEventListener("mousemove", listMouseMove);
    grabPositionX = eventNode.getBoundingClientRect().left + window.scrollX + eventNode.offsetWidth / 2;
    grabPositionY = eventNode.getBoundingClientRect().top + window.scrollY + eventNode.offsetHeight / 2;

    if (eventNode) {
      eventNode.onmouseup = () => {
        listSort(grabIndex, elemBelowlistNo)
        document.removeEventListener("mousemove", listMouseMove);
        setmousepositionX(0);
        setmousepositionY(0);
        setGrabTaskNo(null);
        setGrabListNo(null);
        setAltGrabListNo(null);
      }
    };
  };

  const taskMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const eventNode = event.currentTarget;

    const taskMouseMove = (event: MouseEvent) => {
      if (eventNode) {
        eventNode.style.visibility = "hidden";
      }
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      let elemBelowNo = elemBelow?.getAttribute('id')?.replace("taskMoveFrame__", "");
      if (elemBelowNo != null) {
        elemBelowtaskNo = Number(elemBelowNo);
      } else { elemBelowtaskNo = null }
      if (eventNode) {
        eventNode.style.visibility = "visible";
      }
      setmousepositionX(event.clientX - grabPositionX + window.scrollX);
      setmousepositionY(event.clientY - grabPositionY + window.scrollY);
    }

    document.addEventListener("mousemove", taskMouseMove as EventListener);
    let taskId = String(eventNode.getAttribute('id'))
    taskId = taskId?.replace("task__", "")
    listNo = Number(String(taskId)[0])
    taskNo = Number(String(taskId)[1])
    grabPositionX = eventNode.getBoundingClientRect().left + window.scrollX + eventNode.offsetWidth / 2;
    grabPositionY = eventNode.getBoundingClientRect().top + window.scrollY + eventNode.offsetHeight / 2;
    setGrabTaskNo(taskNo);
    setAltGrabListNo(listNo);

    if (eventNode) {
      eventNode.onmouseup = () => {
        taskSort(listNo, taskNo, elemBelowtaskNo)
        document.removeEventListener("mousemove", taskMouseMove);
        setmousepositionX(0);
        setmousepositionY(0);
        setGrabTaskNo(null);
        setGrabListNo(null);
        setAltGrabListNo(null);
      }
    };
  };

  const onChangeProcttl = (event: ChangeEvent<HTMLInputElement>, listNo: number) => {
    if (event.target.value.length <= 10) {
      let changeList = taskList[listNo]
      changeList[0] = event.target.value;
      setTaskList(
        taskList.map((element, index) => (
          index === listNo ? changeList : element
        ))
      );
    }
  };

  const onChangeElement = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, listNo: number, taskNo: number, taskKey: string) => {
    let changeList: any = taskList[listNo]
    if (taskKey == 'title' && event.target.value.length <= 10) {
      changeList[taskNo][taskKey] = event.target.value;
    }
    if (taskKey == 'comment') {
      changeList[taskNo][taskKey] = event.target.value;
    }
    setTaskList(
      taskList.map((element, index) => (
        index === listNo ? changeList : element
      ))
    );
  };

  const onDeleteList = (listNo: number) => {
    let result = confirm('削除します。よろしいですか？');
    if (result) {
      let newTaskList = [...taskList]
      newTaskList.splice(listNo, 1)
      setTaskList(newTaskList)
    }
  };

  const onDeleteTask = (listNo: number, taskNo: number) => {
    let result = confirm('削除します。よろしいですか？');
    if (result) {
      let changeList = taskList[listNo]
      changeList.splice(taskNo, 1)
      setTaskList(
        taskList.map((element, index) => (
          index === listNo ? changeList : element
        ))
      );
      closeModal(listNo, taskNo);
    }
  };

  const closeModal = (listNo: number, taskNo: number) => {
    let node = document.getElementById(`modal__${listNo}${taskNo}`)
    if (node) {
      node.style.display = 'none';
    }
  }

  return (
    <ul className={style_procList.proc_list} id="ul">
      <li id="listInsertArea__0" className={`${style_procList.insertArea} ${grabListNo != null ? style_procList.insertArea_active : ''}`}>
      </li>
      {taskList.map((listElement, index) => {
        const listNo = index;
        return (
          <Fragment  key={index}>
            <ProcFrame index={index} grabListNo={grabListNo} grabTaskNo={grabTaskNo} listMouseDown={listMouseDown} trans={trans} key={index}>
              <dl>
                <ProcTitle index={index} onChangeProcttl={onChangeProcttl}
                  value={taskList[index][0]} key={index}>
                </ProcTitle>
                <DeleteIcon fontSize="small" className={style_procList.list_delete} onClick={() => onDeleteList(index)}></DeleteIcon>
                <TaskList listElement={listElement} index={index} listNo={listNo} grabTaskNo={grabTaskNo} altGrabListNo={altGrabListNo} taskMouseDown={taskMouseDown} onClickAddTask={onClickAddTask} trans={trans} onChangeElement={onChangeElement}
                  onDeleteTask={onDeleteTask} closeModal={closeModal} >
                </TaskList>
              </dl>
            </ProcFrame>
            <li id={`listInsertArea__${index + 1}`} className={`${style_procList.insertArea} ${grabListNo != null ? style_procList.insertArea_active : ''} `}>
            </li>
          </Fragment>
        )
      })}
      <li className={style_procList.list_last} style={{ visibility: taskList.length < 5 ? "visible" : "hidden" }}>
        < AddIcon fontSize="large" className={style_procList.addIcon} onClick={onClickAddProcess} ></ AddIcon>
      </li>
    </ul>
  )
}
