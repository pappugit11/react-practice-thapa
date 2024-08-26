import React from "react";

const TodoForm = ({ handleForm, inputValue, handleInputChange }) => {
  return (
    <>
      <form onSubmit={handleForm}>
        <div className="input_group my-4">
          <input
            type="text"
            className="form-control input_fld"
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
          />
          <input
            type="submit"
            value="Add"
            className="btn btn-success submit_btn"
          />
        </div>
      </form>
    </>
  );
};

export default TodoForm;
