import React, { useState, useEffect } from 'react';
import "./style.css";

// get the local storage data back
const getLocalData = () => {
    const lists = localStorage.getItem("myTodoList");

    if(lists) {
        return JSON.parse(lists)
    } else {
        return [];
    }
}

const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData()); 

    const [isEditItem, setIsEditItem] = useState(null);
    const [toggleButton, setToggleButton] = useState(false);


// add the item function

    const addItem = () => {
    if (!inputData) {
        alert("Please fill the data");
    } else if (inputData && toggleButton){
        setItems(
            items.map((curElem) => {
                if(curElem.id === isEditItem){
                    return {...curElem, name:inputData };
                }
                return curElem;
            })
        );
        setInputData("");
        setIsEditItem(null);
        setToggleButton(false);
    } 
    else {
        const myNewInputData = {
            id : new Date().getTime().toString(),
            name : inputData,
        }
        setItems([...items, myNewInputData]);
        setInputData("");
    }
};

// how to edit items

const editItem = (id) => {
    const itemToEdit = items.find((currElem) => {
        return currElem.id === id;
    });

    setInputData(itemToEdit.name);
    setIsEditItem(id);
    setToggleButton(true);
};                                                                              

// how to delete items
   
        const deleteItem = (index) => {
            const updatedItems = items.filter((currElem) => {
                return currElem.id !== index;
            });
            setItems(updatedItems);
        };

// Remove all 

const RemoveAll = () => {
    setItems([]);
}

// adding local storage

    useEffect(() => {
        localStorage.setItem("myTodoList", JSON.stringify(items));
    },[items])

  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
            <figure>
                <img src="./images/todo.png" alt="ToDoLoGo"/>
                <figcaption>Add Your List Here</figcaption>
            </figure>

            <div className='add-items'>
                <input type="text" 
                placeholder='✍️ Add Item'
                className='form-control'
                value={ inputData }
                onChange={ (event) => setInputData(event.target.value)}
                />
                {toggleButton ? (
                     <i className="fa-regular fa-pen-to-square add-btn" onClick={addItem}></i>
                     ) : (
                     <i className="fa-solid fa-plus add-btn" onClick={addItem}></i>
                     )}
                
            </div>

            <div className="show-items">
                { items.map((curr, index) => {
                    return (
                <div className='each-item' key={curr.id}>
                    <h3>{ curr.name }</h3>
                  <div className='todo-btn'>
                    <i className="fa-regular fa-pen-to-square"
                     onClick={()=> editItem(curr.id)}></i>
                    <i className="fa-solid fa-trash" 
                    onClick={() => deleteItem(curr.id)}></i>
                  </div>
                </div>
                    )}
                )}
             </div>

            <div className='show-item'>
                <button
                    className="effect04"
                    data-sm-link-text="REMOVE ALL"
                   onClick={RemoveAll}>
                     <span>CHECK LIST</span>
                </button>
            </div>

        </div>
      </div>
    </>
  )
}

export default Todo;