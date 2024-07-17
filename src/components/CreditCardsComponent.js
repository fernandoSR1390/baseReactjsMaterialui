import * as React from "react";
import Cards from "react-credit-cards-2";
import { useState } from "react";
import 'react-credit-cards-2/dist/es/styles-compiled.css';

export default function CreditCardsComponent() {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocusChange = (e) => {
    setState({
      ...state,
      focus: e.target.name,
    });
  };

  const processPayment = () => {
    console.log("number => ", state.number);
    console.log("name => ", state.name);
    console.log("expiry => ", state.expiry);
    console.log("cvc => ", state.cvc);
    console.log(JSON.stringify(state));
  };

  return (
    <div>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form>
        <div className="form-group">
          <label htmlFor="number">Número de la tarjeta</label>
          <input
            type="text"
            name="number"
            id="number"
            maxLength="16"
            className="form-control"
            onChange={handleInputChange}
            onFocus={handleFocusChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            maxLength="30"
            className="form-control"
            onChange={handleInputChange}
            onFocus={handleFocusChange}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="expiry">Fecha de expiración</label>
            <input
              type="text"
              name="expiry"
              id="expiry"
              maxLength="4"
              className="form-control"
              onChange={handleInputChange}
              onFocus={handleFocusChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="cvc">CVC</label>
            <input
              type="text"
              name="cvc"
              id="cvc"
              maxLength="4"
              className="form-control"
              onChange={handleInputChange}
              onFocus={handleFocusChange}
            />
          </div>
        </div>
        <button
          onClick={processPayment}
          type="button"
          className="btn btn-success btn-block btn-lg"
        >
          Pagar
        </button>
      </form>
    </div>
  );
}
