import Todo from '../todo/Todo'
import './style.css'

const List = (props) => {
    const deleteList = (index) => {
        const filterArray = props.value.filter((todoItem, todoIndex) => {
          return todoIndex !== index;
        });
        props.setValue(filterArray);
    };
    
      const checkedList = (isDone, index) =>{
        const filterArray = props.value.map((values, arrayIndex) => {
           if(arrayIndex === index){
            return isDone? {...values, isDone: false} :{...values, isDone: true}
           }else return values
        });  
        props.setValue(filterArray);
    }

    return(
        <>
            <h1>Working</h1>
            <div className='list_all'>
                {
                    props.value.map((lists, i) => {
                        return(      
                        <>   
                            {lists.isDone ? null : 
                                <Todo 
                                    lists = {lists}
                                    checkedList = {checkedList}
                                    deleteList = {deleteList}
                                    i = {i}
                                />
                            }
                        </>
                        )
                    })
                }
            </div>  

            <h1>Done</h1>
            <div className='list_all'>
                {
                    props.value.map((lists, i) => {
                        return(      
                        <>   
                            {! lists.isDone ? null : 
                                <Todo 
                                    lists = {lists}
                                    checkedList = {checkedList}
                                    deleteList = {deleteList}
                                    i = {i}
                                />
                            }
                        </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default List;