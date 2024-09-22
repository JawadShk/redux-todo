import { Container, Row, Col } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import "./todo.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeAllTodo } from "./redux/actions/action";
import { FaTrashAlt } from "react-icons/fa";
import { todoReducer } from "./redux/reducer/TodoReducer";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();

  return (
    <>
      <section style={{ background: "#382164" }}>
        <Container>
          <Row
            className="justify-content-center align-items-center text-center"
            style={{ height: "100vh" }}
          >
            <Col lg={6}>
              <figure>
                <figcaption className="text-white lead">
                  {" "}
                  Add Your List Here ✌️
                </figcaption>
              </figure>

              <div className="addItems">
                <input
                  type="text"
                  placeholder="✍️ Add Items.."
                  value={inputData}
                  onChange={(e) => setInputData(e.target.value)}
                />
                <FaPlus
                  className="add-btn"
                  onClick={() => {
                    if (inputData.trim()) {
                      dispatch(addTodo(inputData));
                      setInputData(""); // Clear the input field after adding the item
                    } else {
                      alert("Please enter a valid item.");
                    }
                  }}
                />
              </div>

              <div className="showItems mt-3">
                {list.map((elem) => {
                  return (
                    <div className="eachItem mb-2" key={elem.id}>
                      <h3>{elem.data}</h3>
                      <div className="todo-btn">
                        <FaTrashAlt
                          className="del-btn"
                          title="Delete Item"
                          onClick={() => dispatch(deleteTodo(elem.id))}
                        />
                      </div>
                    </div>
                  );
                })}

                {list.length > 0 && (
                  <button
                    className="btn btn-remove mt-3"
                    onClick={() => dispatch(removeAllTodo())}
                  >
                    Remove All
                  </button>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Todo;
