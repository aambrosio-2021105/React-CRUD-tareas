import React, { useState, useEffect } from "react";

export const Eliminar = ({ id, onNewTarea, onOldTarea}) => {

  const [inputValue, setInputValue] = useState({});
  
  const eliminarTarea = () => {
    const nuevasTareas = onNewTarea.filter((tarea) => tarea.id !== id);
    setInputValue(nuevasTareas);
    
  };

  if(onNewTarea !== null){
    useEffect(() => {
        onOldTarea(inputValue);
      }, [inputValue]);
  }
  
  return (
    <>
      <button className="btn btn-danger ms-2" onClick={() => eliminarTarea()}>
        Eliminar
      </button>
    </>
  );
};
