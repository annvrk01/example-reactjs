import React, { useCallback, useContext, useEffect, useReducer, useRef, useState, useMemo } from "react";
import { Context } from '../../../context/ContextHelper'
import { useSelector, useDispatch } from "react-redux"
import { ADD_TODO } from "../../../constants"
import axios from 'axios';

import { addPost } from './../../../redux/reducer/todoSlice';

function Home (props) {
    const [count, setCount] = useState(0);
    const value = useContext(Context);
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todos);

    useEffect(() => {
        console.log('useEffect AAAAAAAAAAAAA')
       const action=   addPost({ id : 1, title:"Nguyen Van"})
       dispatch(action)

        axios.get(`http://localhost:3000/users`)
            .then(res => {
                console.log('res', res)
            })
            .catch(error => console.log(error));

    }, []);


    console.log('11 todo', todos)
    function reducer (state, action) {
        switch (action.type) {
            case "":
                console.log("start");
                return { ...state, isRunning: true };
            case "stop":
                console.log("stop");
                return { ...state, isRunning: false };
            case "reset":
                return { isRunning: false, time: 0 };
            case "tick":
                return { ...state, time: state.time + 1 };
            default:
                throw new Error();
        }
    }

    const initialState = {
        isRunning: false,
        time: 0,
    };

    const [state, dispatch11] = useReducer(reducer, initialState);
    const idRef = useRef(0);

    // useEffect(() => {
    //     if (!state.isRunning) {
    //         return;
    //     }
    //     idRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);
    //     return () => {
    //         clearInterval(idRef.current);
    //         idRef.current = 0;
    //     };
    // }, [state.isRunning]);

    function addCount () {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("useEffect 1");
    });

  

    useEffect(() => {
        console.log("useEffect 3");
    }, [count]);

    const handelCallback = useCallback(() => {
        console.log("countCallback " + count);
    }, [count]);

    // const renderTest = () => {
    //     return (
    //         <div>
    //             <h1> Home:  {value}</h1>

    //             <button onClick={handelCallback}> handelCallback</button>
    //             <button onClick={addCount}> Add Count</button>
    //             count : {count}
    //             <br />
    //             <button onClick={() => dispatch({ type: "start" })}>Start</button>
    //             <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
    //             {state.time} s
    //         </div>
    //     );
    // }

    //  const RENDER_MEMO = useMemo(() => renderTest(),  [count ]);

    return (
        <div>

<ul>
      {todoList.map((todo, idx) => (
        <li key={todo.id} >
          {todo.title}
        </li>
      ))}
    </ul>

            <h1> Home:  {value}</h1>
            <button onClick={handelCallback}> handelCallback</button>
            <button onClick={addCount}> Add Count</button>
            count : {count}
            <br />
            <button onClick={() => dispatch({ type: "start" })}>Start</button>
            <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
            {state.time} s

            <br></br>
            <button onClick={() => dispatch({
                type: ADD_TODO,
                payload: {
                    id: 2,
                    name: 'Nguyen Van B '
                }
            })} >Add</button>
            <button >Update</button>

            <table className="tg">
                <thead>
                    <tr>
                        <th className="tg-0lax">ID</th>
                        <th className="tg-0lax">Name</th>
                        <th className="tg-0lax">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos?.map((item) => (
                        <tr>
                            <td className="tg-0lax">{item.id}</td>
                            <td className="tg-0lax">{item.name}</td>

                            <td>
                                <button onClick={() => dispatch({
                                    type: 'DELETE_TODO',
                                    payload: {
                                        id: item.id,
                                    }
                                })} >
                                    DELETE
                                </button>
                            </td>
                            <td>
                                <button onClick={() => dispatch({
                                    type: 'UPDATE_TODO',
                                    payload: {
                                        id: item.id,
                                        name: 'new name',
                                    }
                                })} >
                                    UPDATE
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );

    //  return <>{RENDER_MEMO}</>;
}


export default Home;
