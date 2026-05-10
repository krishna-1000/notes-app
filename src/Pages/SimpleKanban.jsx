import React, { useEffect, useState } from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from 'react-toastify'
import localforage from "localforage";

const SimpleKanban = () => {
  const arr = ["To Do", "In Progress", "Done"]
  const [todolist, setToDoList] = useState([]);
  const [todo, setToDo] = useState({});
  const [saveFlag, setSaveFlag] = useState(false);

  useEffect(() => {
    const fetchKanban = async () => {
      const loadKanban = await localforage.getItem("kanban");

      if (loadKanban) {
        setToDoList(loadKanban);
      }
    }
    fetchKanban();
  }, [])


  const handleSetTodo = async (item) => {

    try {
      setToDoList(prev => [...prev, { content: todo.todoItem, status: item }]);

      const res = await localforage.setItem("kanban", [{ content: todo.todoItem, status: item }]

      );
      setToDo("");
    } catch (error) {
      console.error(error)
    }


  }
  const handleDeleteTodo = async (ind, id) => {

    const newList = todolist.filter((_, index) => index !== ind);
    setToDoList(newList);
    localforage.setItem("kanban", newList);

  }
  return (
    <div className='flex justify-evenly select-none'>
      {
        arr.map((item, index) => (
          <div className='h-[90vh]' key={index}>
            <div className='rounded-2xl bg-white w-90 h-[85vh] mt-5 ml-3 flex flex-col gap-1'>
              <header className='bg-white m-3 text-black text-center h-1/12 text-2xl font-bold'>{item}</header>
              <article className='overflow-auto shadow-md flex  items-center text-gray-400 m-3 border-1 border-gray-500 h-4/5'>
                {todolist.length < 0 ?
                  <p>Start Adding Task</p>
                  : <ul className=' self-start ml-2 w-full flex flex-col gap-2 text-'>
                    {
                      todolist.map((todoItem, todoIndex) => {
                        return todoItem.status === item &&
                          <li className=' bg-blue-300 flex justify-between items-center text-black font-bold pl-3 w-full h-full min-h-10 ' key={todoIndex}>
                            <span>{todoItem.content}</span>
                            <span onClick={() => handleDeleteTodo(todoIndex, todoItem.id)}><RiDeleteBinLine size={25} color='red' className='mr-3' /></span>

                          </li>
                      })
                    }
                  </ul>
                }

              </article>
              <footer className='shadow-md flex gap-2 h-1/12 m-3 rounded-md'>

                <input value={
                  item === todo.status ?
                    todo.todoItem : ""
                } onChange={(e) => setToDo(() => ({ todoItem: e.target.value, status: item }))} placeholder='Add a task' className=' text-black outline-none border-2 border-gray-400  h-full w-3/4 rounded-md'></input>
                <button onClick={() => handleSetTodo(item)} className='bg-blue-500 w-1/5 rounded-2xl'>Add</button>
              </footer>

            </div>

          </div>

        ))
      }
    </div>


  )
}

export default SimpleKanban
