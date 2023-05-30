import { useState, useEffect } from 'react';
import works from './Works.module.css'
import { Slider } from '../molecules/Slider';

export function Works() {

  let [listNo, setlistNo] = useState(0);
  const [transLeft, settransLeft] = useState(false);
  const [transRight, settransRight] = useState(false);
  const [listNode, setlistNode] = useState([
    <>
      <li className={works.list__01}>0</li>
    </>,
    <>
      <li className={works.list__02}>1</li>
    </>,
    <>
      <li className={works.list__03}>2</li>
    </>
  ]);

  useEffect(() => {
    setlistNode([listNode[listNode.length - 2], listNode[listNode.length - 1], ...listNode]);
  }, []);

  const clickPrev = () => {
    (listNo >= listNode.length - 3 ?
      setlistNo(0) :
      setlistNo((n) => n + 1)
    );
    settransLeft(true);
    const sleep = new Promise(resolve => setTimeout(resolve, 1000));
    sleep.then(() => {
      listNode.push(listNode[2]);
      listNode.shift();
      setlistNode([...listNode]);
      settransLeft(false);
    });
  }

  const clickNext = () => {
    (listNo <= 0 ?
      setlistNo(listNode.length - 3) : setlistNo((n) => n - 1)
    );
    settransRight(true);
    const sleep = new Promise(resolve => setTimeout(resolve, 1000));
    sleep.then(() => {
      listNode.unshift(listNode[listNode.length - 3]);
      listNode.pop();
      setlistNode([...listNode]);
      settransRight(false);
    });
  }

  return (
    <>
      <section id='works'>
        <div className={works.inner}>
          <div className={works.box}>
            <ul className={`${works.list_container} ${transLeft ? works.trans_left : null} ${transRight ? works.trans_right : null}`}>
              {listNode}
            </ul>
          </div>

          <div onClick={clickPrev} className={works.left_btn}></div>
          <div onClick={clickNext} className={works.right_btn}></div>

          <div className={works.list_txt_container}>
            <ul>
              <li><div className={`${works.list_txt} ${works.list_txt__01} ${listNo === 0 ? works.list_txt_current : null}`}>
                <h1>0</h1>
              </div></li>

              <li><div className={`${works.list_txt} ${works.list_txt__02} ${listNo === 1 ? works.list_txt_current : null}`}>
                <h1>1</h1>
              </div></li>

              <li><div className={`${works.list_txt} ${works.list_txt__03} ${listNo === 2 ? works.list_txt_current : null}`}>
                <h1>2</h1>
              </div></li>
            </ul>
          </div>


        </div>
      </section>
    </>
  )
}