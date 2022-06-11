import { InputTodo } from './InputTodo';

export const Form = () => {
  return (
    <form className="form" id="form">
      <InputTodo />
      <div className="listTodo">
        <div id="list-todo"></div>
        <div className="container-text">
          <div className="number-items">
            <p>5 items left</p>
          </div>
          <div className="options-items">
            <button className="option-buttons">All</button>
            <button
              className="option-buttons"
              id="showActived">
              Show Active
            </button>
            <button
              className="option-buttons"
              id="showCompleted">
              Completed
            </button>
            <button>Clear Completed</button>
          </div>
        </div>
      </div>
    </form>
  );
};
