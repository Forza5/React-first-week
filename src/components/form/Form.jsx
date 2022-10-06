import React, { useRef } from 'react';
import './style.css';

const Form = (props) => {
    const titleInput = useRef();
    const contentInput = useRef();

  const addContent = () => {
    props.setValue([...props.value, {
      title: titleInput.current.value,
      content: contentInput.current.value,
      isDone: false,
    }]);

    titleInput = "";
    contentInput = "";

  }

  return(
    <div className='head2'>
        <ul className='top_cont'>
          <li>
            <label>제목</label>
            <input type='text' ref={titleInput}/>
          </li>
          <li>
            <label>내용</label>
            <input type='text' ref={contentInput}/>
          </li>
        </ul>
        <button onClick={addContent}>추가하기</button>
      </div>
    )
}

export default Form;