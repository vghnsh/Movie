import React, { useState } from 'react';
import './Mylist.style.scss';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {db} from '../firebase';

import {useStateValue} from '../StateProvider';

function Mylist({list}) {

    const [{user}] = useStateValue();
    const [,dispatch] = useStateValue();


    

    const edit=(e)=>{
        dispatch({
            type:"SET_EDIT", 
            update:list.task,
            id:list.id
        })
    };

    const deleteme=(e)=>{
        db.collection('users').doc(user.uid).collection('tasks').doc(list.id).delete()
    };

    
    return (
        <div className={'mylist center' +(
            list.task.Priority=== 1 ? ' high' : '' ||
            list.task.Priority=== 2 ? ' Med' : '' ||
            list.task.Priority=== 3 ? ' Low' : ''
        )} >
            <div className='task '>
                { list.task.Priority=== 1 ? <h3 >High</h3> : ''}
                { list.task.Priority=== 2 ? <h3 >Medium</h3> : ''}
                { list.task.Priority=== 3 ? <h3 >Low</h3> : ''}  
            </div>
            <div className='pri'>
                {list.task.task}
            </div>

            <div className='icons'>
                <div className='icon'>
                    <EditIcon onClick={edit}>

                    </EditIcon>
                    </div>
                    <div className="icon">
                    <DeleteIcon 
                        onClick={deleteme} 
                        variant="contained" >Delete Me
                    </DeleteIcon>                
                    </div>
            </div>
               

            </div>
    )
}

export default Mylist;
