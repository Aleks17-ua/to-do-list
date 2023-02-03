import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck, faTrashCan} from '@fortawesome/free-solid-svg-icons';


const Todo = ({toDo, markDone, deleteTask}) => {
    return (
        <>
            {toDo && toDo
                .sort((a,b) => a.id > b.id ? 1 : -1)
                .map((task, index) => {
                    return(
                        <React.Fragment>
                            <div className="col task__background">
                                <div className={task.status ? 'done' : ''}>
                                    <span className="task__number">{index + 1}</span>
                                    <span className="task__text">{task.title}</span>
                                </div>
                                <div className="icons__wrap">
                                    <span title="Completed / Not Completed"
                                    onClick={(e) => markDone(task.id)}
                                    >
                                        <FontAwesomeIcon icon={faCircleCheck}/>
                                    </span>
                                   <span title="Delete"
                                         key={index}
                                   onClick={() => deleteTask(task.id)}
                                   >
                                       <FontAwesomeIcon icon={faTrashCan}/>
                                   </span>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </>
    );
};

export default Todo;