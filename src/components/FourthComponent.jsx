export const FourthComponent = () => {
  const handleClicked = (e, name) => {
    alert("Has hecho click en el botón " + name);
  };

  const handleDoubleClick = () => {
    alert("Has hecho doble Clic!");
  };

  const handleMouseEnter = (e) => {
    alert("Has entrado a la caja ");
  };

  const handleMouseLeave = (e) => {
    alert("Has salido de la caja ");
  };

  const handleMouse = (e, action) => {
    alert(`Has ${action} la caja`)
  }

  const handleInsideInput = () => {
    console.log("Estás dentro del input, escribe tu nombre")
  }

  const handleOutsideInput = () => {
    console.log("Estás fuera del input, Adiós !!")
  }

  return (
    <div style={{ "display": "flex",
        "flexDirection":"column",
        "justifyContent": "center" }} >
      <h1>FourthComponent</h1>
      {/* evento clic */}
      <div>
        <button
          className="btn btn-danger"
          onClick={() => {
            alert("Hola, soy un evento click");
          }}
        >
          Haz clic
        </button>
      </div>
      <hr />
      <div>
        <button
          className="btn btn-success"
          onClick={(e) => handleClicked(e, "Inés")}
        >
          Has clic Aquí tambíen!
        </button>
      </div>
      <hr />
      <div>
        <button className="btn btn-info" onDoubleClick={handleDoubleClick}>
          Haz doble clic!!
        </button>
      </div>
      <hr />
      <div
        id="box" className="bg-info mt-4" style={{"border":"3px solid white","color":"black"}}
        onMouseEnter={(e) => handleMouseEnter(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
      >
        <p> Pasa el mouse por encima!!</p>
      </div>
      <hr />
      <div id="box2" className="mt-4" 
      onMouseEnter={(e) => handleMouse(e,"entrado a")}
      onMouseLeave={(e) => handleMouse(e,"salido de")}
      >
      </div>
      <hr />
      <div className="mt-4">
            <input type="text" onFocus={ (e)=> handleInsideInput(e)} onBlur={(e)=>handleOutsideInput(e)}/>
      </div>
    </div>
  );
};
