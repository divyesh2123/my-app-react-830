import React, { useState } from 'react';
import t from './data';

export const Home = () => {

    alert("dddd");

     let [data,setData] =   useState(0);
    const inc = ()=>{

       

    setData(data+1);
    }

    

  return (
    <>

    {data}
    

    <button onClick={inc}>+</button>
    <table>
        
        <tbody>
        {
        
            t.map((v,index)=>{

                return (<tr key={index}>
                     <td>{v.userId}</td>
                    <td>{v.id}</td>
                    <td>{v.body}</td>
                    <td>{v.title}</td>
                    
                    </tr>)

            })
        
        }
        
        </tbody>
        </table>

        </>
  )
}
