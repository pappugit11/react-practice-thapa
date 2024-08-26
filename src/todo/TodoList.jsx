import React from "react";

const TodoList = ({ ind }) => {
  return (
    <>
      <li className="task_list_item" key={ind}>
        <span>{task_item}</span>
        <div className="task_list_btn_grp">
          <button className="btn_check">
            <IoMdCheckmark />
          </button>
          <button className="btn_dlt" onClick={() => deleteHandler(task_item)}>
            <FaRegTrashAlt />
          </button>
        </div>
      </li>
    </>
  );
};

export default TodoList;
