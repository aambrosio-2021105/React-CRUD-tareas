import React, { useState, useEffect } from "react";

export const Update = ({ id, onNewTarea, onOldTarea }) => {
  const [editado, setEditado] = useState({});
  const [inputValue, setInputValue] = useState({});


  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const onSubmit = (event) => {
    let indice = onNewTarea.findIndex((t) => t.id === id);

    if (indice !== -1) {
      onNewTarea[indice].nombreTarea = inputValue.nombreTarea;
      onNewTarea[indice].descripcion = inputValue.descripcion;
      onNewTarea[indice].estado = inputValue.estado;
      onNewTarea[indice].fechaStart = inputValue.fechaStart;
      onNewTarea[indice].fechaEnd = inputValue.fechaEnd;
      onNewTarea[indice].nombrePersona = inputValue.nombrePersona;
    }
    setEditado(onNewTarea);

    onOldTarea(editado);

   
  };


  return (
    <>
      <form id="form1" aria-label="form" name="PasswordField" 
        >
        <div>
          <label className="form-label">ID</label>
          <input
            type="number"
            className="form-control"
            name="id"
            onChange={handleChange}
          />
          <label className="form-label">Nombre tarea</label>
          <input
            type="text"
            className="form-control"
            name="nombreTarea"
            onChange={handleChange}
          />
          <label className="form-label">descripcion</label>
          <input
            type="text"
            name="descripcion"
            className="form-control"
            onChange={handleChange}
          />
          <label className="form-label">fechaStart</label>
          <input
            type="datetime-local"
            name="fechaStart"
            className="form-control"
            onChange={handleChange}
          />
          <label className="form-label">fechaEnd</label>
          <input
            type="datetime-local"
            name="fechaEnd"
            className="form-control"
            onChange={handleChange}
          />
          <label className="form-label">estado</label>
          <input
            type="text"
            name="estado"
            className="form-control"
            onChange={handleChange}
          />
          <label className="form-label">Nombre usuario</label>
          <input
            type="text"
            name="nombrePersona"
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </form>
      <button
        type="button"
        
        onClick={()=> onSubmit()}
        aria-label="Close"
        className="btn btn-warning"
      >
        Aztualizar
      </button>
    </>
  );
};
