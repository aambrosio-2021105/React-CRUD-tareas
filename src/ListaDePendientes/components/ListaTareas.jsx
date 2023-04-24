import React, { useEffect, useState } from "react";
import { Eliminar } from "./Eliminar";
import { Update } from "./Update";

export const ListaTareas = ({ onNewTarea,onEditar,onOldTarea }) => {
  const [tareasE, setTareasE] = useState([]);
  const [tareasA, setTareasA] = useState([]);
  const [list , setList] = useState([]);
  const agregarTarea = (NewTarea={}) => {
     
      if(Object.entries(NewTarea).length === 0){

        
      }else{
        setTareasA(NewTarea); 
      }
    
  };
  const editar = (editTarea)=>{
    
    if(Object.entries(editTarea).length === 0){
        
    }else{
      setTareasE(editTarea); 
      
      viewList();
    }
    
  }
  useEffect(() => {
    if (onNewTarea !== null) {
      onEditar(tareasE);
    }
  }, [tareasE]);


  const viewList = ()=>{
    setList(onNewTarea);
  }
  useEffect(() => {
    if (onNewTarea !== null) {
      onOldTarea(tareasA);
    }
  }, [tareasA]);

  useEffect(() => {
    onNewTarea === null ? [ ] : viewList();

  }, [onNewTarea])
  
 

  useEffect(() => {
    if (onNewTarea !== null) {
      setTareasA(onNewTarea);
    }
    
  }, [onNewTarea]);
  
 
  return (
    <>
   
      <div className="container">
        <h2>Lista de usuarios</h2>
        <table className="table table-hover">
          <thead>
            <tr className="table-primary">
              <th scope="col">Realizada</th>
              <th scope="col">#</th>
              <th scope="col">Nombre tarea</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Fecha inicio</th>
              <th scope="col">Fecha termina</th>
              <th scope="col">Estado</th>
              <th scope="col">Nombre Usuario</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {onNewTarea === null
              ? []
              : list.map((t) => {
                  return (
                    <tr key={t.id}>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </td>
                      <th scope="row">{t.id} </th>
                      <td>{t.nombreTarea} </td>
                      <td>{t.descripcion}</td>
                      <td>{t.fechaStart}</td>
                      <td>{t.fechaEnd} </td>
                      <td>{t.estado}</td>
                      <td>{t.nombrePersona}</td>
                      <td>
                        
                        <Update 
                          id={t.id}
                          onNewTarea={onNewTarea}
                          onOldTarea={(value) => {
                            editar(value);
                          }}
                          
                          
                        />
                          <Eliminar
                            id={t.id}
                            onNewTarea={onNewTarea}
                            onOldTarea={(value) => {
                              agregarTarea(value);
                            }}   
                          />
                        
                      </td>
                      <td></td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </>
  );
};
