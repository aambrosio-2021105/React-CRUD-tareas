import React, { useState } from "react";

export const AgregarTarea = ({ onNewTarea }) => {

  const [inputValue, setInputValue] = useState({});
  const [ids, setId] = useState(1)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, ["id"]: ids,[name]: value });
  };
  const onSubmit = (event) => {
    setId(ids+1);
    setInputValue({
      ["id"]: "",
      ["nombreTarea"]: "",
      ["descripcion"]: "",
      ["fechaStart"]: "",
      ["fechaEnd"]: "",
      ["estado"]: "",
      ["nombrePersona"]: "",
    });
    onNewTarea(inputValue);
    event.preventDefault();
  };
 
  
  return (
    <>
      
      <div className="container">
      <h1>AgregarTarea</h1>
        <form aria-label="form">
          <div className="mb-3">
            <label className="form-label">ID</label>
            <input
              type="number"
              className="form-control"
              name="id"
              id="exampleInputPassword1"
              onChange={handleChange}
              value={ids}
             
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Nombre tarea</label>
            <input
              type="text"
              className="form-control"
              name="nombreTarea"
              id="exampleInputPassword1"
              onChange={handleChange}
              value={inputValue.nombreTarea}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">descripcion</label>
            <input
              type="text"
              name="descripcion"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChange}
              value={inputValue.descripcion}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">fechaStart</label>
            <input
              type="datetime-local"
              name="fechaStart"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChange}
              value={inputValue.fechaStart}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">fechaEnd</label>
            <input
              type="datetime-local"
              name="fechaEnd"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChange}
              value={inputValue.fechaEnd}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">estado</label>
            <input
              type="text"
              name="estado"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChange}
              value={inputValue.estado}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Nombre usuario</label>
            <input
              type="text"
              name="nombrePersona"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChange}
              value={inputValue.nombrePersona}
            />
          </div>
          <button  className="btn btn-success" onClick={onSubmit}>Agregar </button>
        </form>
      </div>
    </>
  );
};
