import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { ItemsAction } from "../../actions/boards.action";
import { v4 as uuidv4 } from 'uuid';

const AddBoard = props => {
  const [values, setValues] = useState({});
  const refInputTitle = useRef(null);
  const refInputDescription = useRef(null);
  const refInputPriority = useRef(null);

  const handleChange = target => {
    const nameInput = target.name;
    const valueInput = target.value;

    let tmp = {
      ...values,
      priority: nameInput === "priority" && valueInput !== "low" ? valueInput : "low",
      category: "one",
      date: Date(),
      id: uuidv4()
    };
    tmp[nameInput] = valueInput;

    setValues(tmp);
  };

  const handleAdd = e => {
    e.preventDefault();
    setValues({});
    refInputTitle.current.value = "";
    refInputDescription.current.value = "";
    refInputPriority.current.value = "low";
    props.ItemsAction(values, props.LoginReducer.lastUser);
  };

  return (
    <Container>
      <Row className={"mt-5"}>
        <Col xs={12} sm={2}></Col>
        <Col xs={12} sm={8}>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                ref={refInputTitle}
                name="title"
                maxLength="50"
                onChange={e => handleChange(e.target)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                ref={refInputDescription}
                name="description"
                onChange={e => handleChange(e.target)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Priority</Form.Label>
              <Form.Control
                as="select"
                ref={refInputPriority}
                name="priority"
                onChange={e => handleChange(e.target)}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>It will add in board *To do*</Form.Label>
            </Form.Group>

            <Button
              className={"btn-blue"}
              type="submit"
              onClick={e => handleAdd(e)}
              disabled={!!values.title && !!values.description ? false : true}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => ({
  LoginReducer: state.LoginReducer
});

const mapDispatchToProps = () => {
  return {
    ItemsAction
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(AddBoard);
