import React, {useState,useEffect} from 'react';
import './Take.style.scss';

import {TextField ,Button,MenuItem,Select} from '@material-ui/core';

import {db} from '../firebase';


import {useStateValue} from '../StateProvider';



function Take({uid}) {
    const [{update,id}] = useStateValue();
    const [,dispatch] = useStateValue();


    const [take, setTake]= useState('');
    
    const [pri,setPri] = useState(2);
    
    useEffect(()=>{
        if(update){
            setPri(update.Priority);
            setTake(update.task);
        }
        
    },[update]);

    const handleChange = (e)=>{
        setPri(e.target.value);
        
    };
    const handleAdd = (e)=>{  
        e.preventDefault(); 
        db.collection('users').doc(uid).collection('tasks').add({
          task: take,
          Priority : pri,
         
        });
        setTake('');
    };
    const handleUpdate=(e)=>{
        e.preventDefault();
        db.collection('users').doc(uid).collection('tasks').doc(id)
        .set({
            task: take,
            Priority: pri,
        });
        dispatch({
            type:"SET_EDIT", 
            update:null,
            id:null
        })
        setTake('');
   

    }
    
    return (
        <div className='todoMain'>
             <div className='pri'>
                <div className='pri_title'>
                Priority

                </div>
                <div className='select'>
                    <Select 
                    value= {pri}
                    displayEmpty
                    onChange={handleChange}>
                        <MenuItem value={1} >High</MenuItem>
                        <MenuItem value={2}>Medium</MenuItem>
                        <MenuItem value={3}>Low</MenuItem>
                    </Select>

                </div>
                
            </div>
            <div>
           
                <TextField
                    className='todo'
                    id="outlined-secondary"
                    label="Your Task"
                    variant="outlined"
                    color="primary"
                    value={take}
                    onChange={(e)=>setTake(e.target.value)}
                />
            </div>
            <div>
                {
                    update ?
                    <Button disabled={!(uid && take)} className='todoBTN' 
                
                    onClick={handleUpdate}>
                        <b>Update</b>
                    </Button>:
                     <Button disabled={!(uid && take)} className='todoBTN' 
                
                     onClick={handleAdd}>
                         <b>Add</b>
                     </Button>

                }
               
            </div>
        </div>
    )
}

export default Take;
