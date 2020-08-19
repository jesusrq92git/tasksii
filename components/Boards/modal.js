import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

const ModalUpdate = props => {
  const { t } = useTranslation();

  const { showModal, setShowModal, values, handleChange, view, handleEditSubmit } = props;

  return (
    <Modal className={'mt-5'} show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>{t('title')}</Form.Label>
            <Form.Control
              type="text"
              name="title"
              maxLength="20"
              value={values.title}
              onChange={e => handleChange(e.target)}
              disabled={view ? true : false}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>{t('description')}</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="description"
              value={values.description}
              onChange={e => handleChange(e.target)}
              disabled={view ? true : false}
            />
          </Form.Group>

          {
            view ? "" : (
              <React.Fragment>
                <Form.Group>
                  <Form.Label>{t('priority')}</Form.Label>
                  <Form.Control
                    as="select"
                    name="priority"
                    value={values.priority}
                    onChange={e => handleChange(e.target)}
                  >
                    <option value="low">{t('priority-low')}</option>
                    <option value="medium">{t('priority-medium')}</option>
                    <option value="high">{t('priority-high')}</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>{t('board')}</Form.Label>
                  <Form.Control
                    as="select"
                    name="category"
                    value={values.category}
                    onChange={e => handleChange(e.target)}
                  >
                    <option value="one">{t('to-do')}</option>
                    <option value="two">{t('for-review')}</option>
                    <option value="three">{t('done')}</option>
                  </Form.Control>
                </Form.Group>
              </React.Fragment>
            )
          }

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className={"btn-grey"} onClick={() => setShowModal(false)}>
          {t('btn-close')}
        </Button>
        {
          view ? "" : (
            <Button className={"btn-blue"} onClick={() => handleEditSubmit()}>
              {t('btn-save')}
            </Button>
          )
        }
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUpdate;
