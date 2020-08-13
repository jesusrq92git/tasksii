import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";

const styles = {
  time : {
    fontSize: "11px",
    float: "right",
    paddingTop: "5px"
  },
  priorityContainer: {
    position:"absolute", 
    left:"15px", 
    top:"10px"
  },
  priorityText: {
    display:"inline-block",
    paddingTop:"10px",
    paddingLeft:"5px",
    fontSize: "13px",
    textTransform: "capitalize"
  }
}

const Homework = props => {
  return (
    <React.Fragment>
      {props.items.map((item, index) => (
        <Col className="subbox-board" key={index}>
          {item.title}
          <span style={styles.time}>11 mins ago</span>
          <Row>
            <Col>
              <div className={"pos-btn-board"}>
                <div style={styles.priorityContainer}>
                  <Spinner animation="grow" size="sm" variant={item.priority==="low"?"primary":(item.priority==="medium"?"dark":"danger")} />
                  <p style={styles.priorityText}>{item.priority}</p>
                </div>
                <p
                  className={"btn-board"}
                  onClick={() => props.handleEdit(item)}
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-pencil"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                    />
                  </svg>
                </p>
                <p
                  className={"btn-board"}
                  onClick={() => props.handleRemove(item)}
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-x-circle"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
                    />
                  </svg>
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      ))}
    </React.Fragment>
  );
};
export default Homework;
