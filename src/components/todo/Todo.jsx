import './style.css';

const Todo = (props) => {
    return(
        <div className='list' key={props.i}>
            <div className='text'>
                <h3>{props.lists.title}</h3>
                <p>{props.lists.content}</p>
            </div>
            <div className='btn'>
                <button onClick={() => {props.deleteList(props.i)}}>삭제하기</button>
                <button onClick={() => {props.checkedList(props.lists.isDone, props.i)}}>{props.lists.isDone ? "취소하기" : "완료하기"}</button>
            </div>
        </div>
    )
}

export default Todo;