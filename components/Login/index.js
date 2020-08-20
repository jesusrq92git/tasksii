import React, { useState } from "react";
import { connect } from "react-redux";
import {
  LoginAction,
  isOnlineAction,
  lastUserAction
} from "../../actions/login.action";
import { Redirect } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import SimpleCrypto from "simple-crypto-js";
import { useTranslation } from 'react-i18next';

const Register = props => {
  const secretKey = "some-unique-key";
  const simpleCrypto = new SimpleCrypto(secretKey);
  const { t } = useTranslation();

  const [values, setValues] = useState({});
  const [register, setRegister] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    show: false,
    text: ""
  });

  const handleChange = target => {
    const nameInput = target.name;
    const valueInput = target.value;
    let tmp = {
      ...values
    };
    tmp[nameInput] = valueInput;

    setValues(tmp);
  };

  const handleRegister = e => {
    e.preventDefault();
    if (values.password !== values.repassword) {
      setErrorMsg({
        show: true,
        text: t('error-login-1')
      });
    } else {
      setErrorMsg({
        show: false,
        text: ""
      });
      const valuesEncrypt = {
        ...values,
        password: simpleCrypto.encrypt(values.password).toString()
      }
      props.LoginAction(valuesEncrypt);
      props.isOnlineAction(true);
      props.lastUserAction(valuesEncrypt.email);
    }
  };

  const handleLogin = e => {
    e.preventDefault();
    const res = props.LoginReducer.users.find(item => {
      return item.email === values.email && simpleCrypto.decrypt(item.password).toString() === values.password;
    });
    if (!!res) {
      setErrorMsg({
        show: false,
        text: ""
      });
      props.isOnlineAction(true);
      props.lastUserAction(values.email);
    } else {
      setErrorMsg({
        show: true,
        text: t('error-login-2')
      });
    }
  };

  const { LoginReducer } = props;

  return (
    <Container>
      { LoginReducer.online ? (
        <Redirect to="/add-boards" />
      ) : (
        <div className={"center"}>
          {errorMsg.show ? (
            <Alert variant="danger" className={"mt-5"}>
              {errorMsg.text}
            </Alert>
          ) : (
            ""
          )}
          <div className={"login-box"}>
            <Row>
              <Col>
                <h2>{register ? t('register'): t('login')}</h2>
              </Col>
            </Row>
            <Row className={"mt-5"}>
              <Col>
                <Form>
                  <Form.Group>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder={t('email-address')}
                      onChange={e => handleChange(e.target)}
                      required={true}
                    />
                    <Form.Text className={'f-text'}>
                      {t('legend-email')}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className={"mt-4"}>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder={t('password')}
                      onChange={e => handleChange(e.target)}
                      required={true}
                    />
                    <Form.Text className={'f-text'}>
                      {t('legend-pass')}
                    </Form.Text>
                  </Form.Group>

                  {register ? (
                    <Form.Group className={"mt-4"}>
                      <Form.Control
                        type="password"
                        name="repassword"
                        placeholder={t('confirm-pwd')}
                        onChange={e => handleChange(e.target)}
                        required={true}
                      />
                      <Form.Text className={'f-text'}>
                        {t('legend-pass')}
                      </Form.Text>
                    </Form.Group>
                  ) : (
                    ""
                  )}

                  <p
                    className={"btn-login-register"}
                    onClick={() => setRegister(!register)}
                  >
                    {register ? `-> ${t('login')}`  : `-> ${t('register')}` }
                  </p>
                  <Button
                    className={"btn-blue"}
                    type="submit"
                    onClick={
                      register ? e => handleRegister(e) : e => handleLogin(e)
                    }
                    disabled={
                      !!values.email &&
                      !!values.password &&
                      !!values.repassword &&
                      values.password.length > 9 &&
                      values.repassword.length > 9 &&
                      register
                        ? false
                        : !!values.email &&
                          !!values.password &&
                          values.email.length > 9 &&
                          values.password.length > 9 &&
                          register === false
                        ? false
                        : true
                    }
                  >
                    {t('submit')}
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  LoginReducer: state.LoginReducer
});

const mapDispatchToProps = () => {
  return {
    LoginAction,
    isOnlineAction,
    lastUserAction
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(Register);
