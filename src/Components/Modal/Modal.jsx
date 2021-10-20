import React from "react";
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';



const modalRoot = document.querySelector('#modal-root');
class  Modal extends React.Component {

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
componentDidMount() {
  window.addEventListener('keydown', this.handleKeyDown);
}
componentWillUnmount() {
  window.removeEventListener('keydown', this.handleKeyDown);
}
handleBackdropClick = e => {
  if (e.currentTarget === e.target) {
    this.props.onClose();
  }
};
render(){
  return  createPortal (
    <div onClick={this.handleBackdropClick} className="Overlay">
      <div className="Modal">
        <img src={this.props.largeImageURL} alt="" />
      </div>
    </div>,
 
      modalRoot,
  );
}

 
};

export default Modal;


Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};