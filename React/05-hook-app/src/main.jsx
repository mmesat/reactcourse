import React from 'react'
import ReactDOM from 'react-dom/client'
//import './08-useReducer/intro-reducer'
import './index.css'
//import { CounterWithCustomHooks } from './CounterWithCustomHooks'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { FormWithCutomHook } from './02-useEffect/FormWithCustomHook'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { FocusScreen } from './hooks/04-UseRef/FocusScreen'
//import { Layaout } from './05-useLayoutEffect/Layaout'
//import { Memorize } from './06-memos/Memorize'
//import { MemoHook } from './06-memos/MemoHook'
//import { CallbackHook } from './06-memos/CallbackHook'
//import { Padre } from './07-tarea-memo/Padre'
import { TodoApp } from './08-useReducer/TodoApp'
//import { CounterApp } from './01-useState/CounterApp'
//import { HooksApp } from './HooksApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <TodoApp/>
  //</React.StrictMode>,
)
