//import styles from './NameLot.module.css';

import './InfoSumHelp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Form } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="modall-header__bottom">
        <Modal.Title id="contained-modal-title-vcenter">
          HONDA STEP WAGON 2018
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="name" placeholder="Ваше имя" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="tel" placeholder="Введите телефон" />
          </Form.Group>
          <Form.Label>Как с Вами связаться?</Form.Label>
          <div className="d-flex justify-content-between w-100">
            <Button
              variant="success"
              type="submit"
              className="btn-pos d-flex justify-content-center align-items-center gap-2"
            >
              <img src="/img/modal/whatsapp-svgrepo-com.svg" alt="" />
              WhatsApp
            </Button>
            <Button
              variant="danger"
              type="submit"
              className="text-uppercase btn-pos btn-tel d-flex justify-content-center align-items-center gap-1"
            >
              <img src="/img/modal/tel.svg" alt="" />
              перезвонить
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
function InfoSumHelp() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="info__sum-help">
      <Button
        variant="danger"
        className="w-100 text-uppercase"
        onClick={() => setModalShow(true)}
      >
        Оставить заявку
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
export default InfoSumHelp;
