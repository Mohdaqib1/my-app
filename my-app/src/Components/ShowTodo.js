import React from 'react';
import logo1 from './delete.png';

import logo2 from './edit.png';

const ShowTodo = ({text,todo, todos, setTodos }) => {
    const deleteHandler = ()=>{
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }    
            return item;
        }));
    };
    return(
        
        <div className="inp">
              
              <table className="t1">
                   <tr>
                        <td>  <li className={`todo-item ${todo.completed? "completed" : ""}`}>  {text}
                          <button  onClick={completeHandler} className="b2e" >   <img src={logo2} className="b2ed"/>  </button> 
                           <button  onClick={deleteHandler} className="b2d">    <img src={logo1}  className="b2ed"/> </button> 
                           </li>       </td>
                    </tr>
               </table>
            </div>   
       /* <div>
            <li className={`todo-item ${todo.completed? "completed" : ""}`}></li>
            
            <button onClick={completeHandler} className="b2e"> <img src={logo2} className="b2ed"/></button>
            <button onClick={deleteHandler} className="b2d"> <img src={logo2}  className="b2ed"/></button>
        </div>*/
    );
}
export default ShowTodo;


