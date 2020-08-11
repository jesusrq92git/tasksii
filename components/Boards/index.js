import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Homework from "./homework";
import ModalUpdate from "./modal";
import { connect } from "react-redux";
import { ItemsUpdateAction } from "../../actions/boards.action";

const Boards = props => {
  const [showModal, setShowModal] = useState(false);
  const [itemToEdit, setItemToEdit] = useState({});
  const [values, setValues] = useState({});

  const items = props.BoardsReducers.items.filter((item, index) => {
    return item.user === props.LoginReducer.lastUser;
  });

  const filterItems = category => {
    return items.filter(item => {
      return item.category === category;
    });
  };

  const bgTitles = {
    bgRed: {
      backgroundColor: "#f9443c",
      color: "white"
    },
    bgBlue: {
      backgroundColor: "#e5ba29",
      color: "white"
    },
    bgOrange: {
      backgroundColor: "#5fa02f",
      color: "white"
    }
  };

  const handleChange = target => {
    const nameInput = target.name;
    const valueInput = target.value;

    let tmp = {
      ...values
    };
    tmp[nameInput] = valueInput;

    setValues(tmp);
  };

  const handleEdit = item => {
    setShowModal(true);
    setValues(item);
    setItemToEdit(item);
  };

  const handleEditSubmit = () => {
    const itemsRedux = props.BoardsReducers.items;
    const newItems = itemsRedux.map(el => {
      if (el.id === itemToEdit.id) {
        return {
          ...el,
          title: values.title,
          description: values.description,
          category: values.category
        };
      }
      return { ...el };
    });
    props.ItemsUpdateAction(newItems);
    setShowModal(false);
  };

  const handleRemove = item => {
    const newItems = props.BoardsReducers.items;
    const indexToDelete = newItems.findIndex(el => {
      return el.id === item.id;
    });
    newItems.splice(indexToDelete, 1);
    props.ItemsUpdateAction(newItems);
  };

  return (
    <Container>
      <ModalUpdate
        showModal={showModal}
        values={values}
        setShowModal={setShowModal}
        handleChange={handleChange}
        handleEditSubmit={handleEditSubmit}
      />

      <Row>
        <Col sm={12} md className={"mt-5"}>
          <Row>
            <Col className={"box-board"} style={bgTitles.bgRed}>
              <h5 className={"ml-2 mt-3 mb-3"}>To do</h5>
            </Col>
          </Row>
          <Row>
            <Col className={"box-board setting-box-board"}>
              <Homework
                items={filterItems("one")}
                handleEdit={handleEdit}
                handleRemove={handleRemove}
              />
            </Col>
          </Row>
        </Col>

        <Col sm={12} md className={"mt-5"}>
          <Row>
            <Col className={"box-board"} style={bgTitles.bgBlue}>
              <h5 className={"ml-2 mt-3 mb-3"}>For review</h5>
            </Col>
          </Row>
          <Row>
            <Col className={"box-board setting-box-board"}>
              <Homework
                items={filterItems("two")}
                handleEdit={handleEdit}
                handleRemove={handleRemove}
              />
            </Col>
          </Row>
        </Col>

        <Col sm={12} md className={"mt-5"}>
          <Row>
            <Col className={"box-board"} style={bgTitles.bgOrange}>
              <h5 className={"ml-2 mt-3 mb-3"}>Done</h5>
            </Col>
          </Row>
          <Row>
            <Col className={"box-board setting-box-board"}>
              <Homework
                items={filterItems("three")}
                handleEdit={handleEdit}
                handleRemove={handleRemove}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => ({
  BoardsReducers: state.BoardsReducers,
  LoginReducer: state.LoginReducer
});

const mapDispatchToProps = () => {
  return {
    ItemsUpdateAction
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(Boards);
