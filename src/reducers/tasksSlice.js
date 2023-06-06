import { createSlice } from "@reduxjs/toolkit";

import tasksData from '../data/tasks.json'

//declare variable

export const initialState=[...tasksData]  //initial states of objects
//creating reducers or defining all reducers  
const tasksSlice= createSlice({
    name:'tasks',
    initialState,
    reducers:{
        addTasks:(action)=>{// multiple task
            return action.payload  //what ever your filling that dat is present in payload
        },
        addTask:(state,action)=>{  //single tasks
            return [...state,action.payload]
        },
        deleteTask:(state,action)=>{  //single tasks
            return state.filter(task=>task.id!==action.payload)  //we have to filter which task need to delete 
        },
        updateTask:(state,action)=>{
            return state
            .map(task=>task.id===action.payload.id?{...task,...action.payload}
                :task)   //here we are updating states based on user input given
        }
    }

})


//need to export all reducers so you can access anywhere
export const{ addTask,updateTask,deleteTask,addTasks}=tasksSlice.actions
export default tasksSlice.reducer