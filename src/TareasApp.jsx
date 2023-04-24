import React, { useEffect, useState } from 'react'
import { ListaTareas } from './ListaDePendientes/components/ListaTareas'
import { AgregarTarea } from './ListaDePendientes/components/AgregarTarea'


export const TareasApp = () => {
  const [tareasA, setTareasA] = useState([]);
  
  const agregarTarea = (NewTarea) => {
    console.log(NewTarea)
    setTareasA([ ...tareasA,NewTarea]); 
   
  };
  const eliminar = (NewTarea)=>{
    console.log(NewTarea)
    setTareasA(NewTarea);
    console.log(tareasA)

  }
  const edit = (NewTarea)=>{
    console.log(NewTarea)
    setTareasA(NewTarea);
    console.log(tareasA)
  }
 
  return (
    <>
    
    <AgregarTarea
        onNewTarea={(value) => {
          agregarTarea(value)
        }}
      />

      {
        <ListaTareas
          onNewTarea={(tareasA).length === 0 ? null : tareasA}
          onEditar={(value) => {
            edit(value)
          }}
          onOldTarea={(value) => {
            eliminar(value)
          }}

          
        />
        
      }
    
      
      
      
    </>
  );
};
