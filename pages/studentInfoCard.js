import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../styles/Home.module.css'

function StudentInfoCard(props) {
  const handleClose = () => {
    props.setModalFunc(false)
  };

  return (
    <>
      <Modal show={props.isModalSet} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Marked {props.studentName} present</p>
            <img src="../static/images/vikas.jpeg" className="img-fluid"/> 
        </Modal.Body>
        <Modal.Footer>
          <Button className={styles.button} variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StudentInfoCard;