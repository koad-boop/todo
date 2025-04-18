
import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./todolist";
import { DateTime } from "./dateTime";
import { getLocalStoregeData , settLocalStoregeData} from "./storege";
import "./Todo.css"



export const Todo = () => {
const [task , setTask] = useState(() => getLocalStoregeData());
    

 const handleFormSubmit = (inputValue) => {
     const {id , content , checked,} = inputValue;

    //to check if the input field is empty or not
     if (!content) return;

    // to check if the data is already existing or not
     //if(task.includes(inputValue)) return;
     const ifTodoContentMatched = task.find((curTask)=> curTask.content=== content);
     if(ifTodoContentMatched) return;
     setTask((prevTask) => [...prevTask,{id,content,checked},
      ]) ;
    };

 //add data to localStorege
settLocalStoregeData(task);
     
   
//  delete function
const handleDelete = (value) =>{
  const updatedTask = task.filter((curTask) => curTask.content !== value);
  setTask(updatedTask);
};
   
//clear all function
const handleClearBtn = () => {
  setTask([]);
};

//checkedtodo function
const handleChecked = (content) =>  {
  const updatedTask = task.map((curTask)=>{
    if(curTask.content===content){
      return {...curTask,checked:!curTask.checked};
    }else{
      return curTask;
    }
  });
  setTask(updatedTask);
};

    
 return (
      <section className="main-Container">
            <header>
              <h1>Todo List</h1>
              <DateTime />
            </header>
            <TodoForm  onAddTodo={handleFormSubmit}/>
              <section className="taskList">
          <ul>
            {
              task.map((curTask) => (
                <TodoList 
                  key={curTask.id}  
                  data={curTask.content} 
                  checked={curTask.checked}
                  onHandleCheckedTodo={handleChecked}
                  onHandleDeleteTodo={handleDelete} 
                />
              ))
             }
          </ul>

        </section>
        <section >
        <button className="clear-btn" onClick={handleClearBtn}>
          Clear All
        </button>
        </section>
      </section>
      
    );
  };
