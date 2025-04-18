import { MdCheck , MdDeleteForever } from "react-icons/md";
export const TodoList = ({data,checked,onHandleDeleteTodo,  onHandleCheckedTodo}) => {
    return (
        <li className="todo-items"> 
                   <span className= {checked ? "checkList" : "notCheckList "}>{data}</span>
                  <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
                    <MdCheck />
                  </button>
                  <button className="dlt-btn" 
                  onClick={() => onHandleDeleteTodo(data)}>
                    <MdDeleteForever/>
                  </button>
                </li>
    );
};