import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalUpdate = props => {
  return (
    <Modal className={'mt-5'} show={props.showModal} onHide={() => props.setShowModal(false)}>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              maxLength="20"
              value={props.values.title}
              onChange={e => props.handleChange(e.target)}
              disabled={props.view ? true : false}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="description"
              value={props.values.description}
              onChange={e => props.handleChange(e.target)}
              disabled={props.view ? true : false}
            />
          </Form.Group>

          {
            props.view ? "" : (
              <React.Fragment>
                <Form.Group>
                  <Form.Label>Priority</Form.Label>
                  <Form.Control
                    as="select"
                    name="priority"
                    value={props.values.priority}
                    onChange={e => props.handleChange(e.target)}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Board</Form.Label>
                  <Form.Control
                    as="select"
                    name="category"
                    value={props.values.category}
                    onChange={e => props.handleChange(e.target)}
                  >
                    <option value="one">To do</option>
                    <option value="two">For review</option>
                    <option value="three">Done</option>
                  </Form.Control>
                </Form.Group>
              </React.Fragment>
            )
          }

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className={"btn-grey"} onClick={() => props.setShowModal(false)}>
          Close
        </Button>
        {
          props.view ? "" : (
            <Button className={"btn-blue"} onClick={() => props.handleEditSubmit()}>
              Save Changes
            </Button>
          )
        }
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUpdate;
