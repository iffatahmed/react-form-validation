import React from "react";
import PropTypes from "prop-types";

class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div>
        <div className="overlay"></div>
        <div className="modal">
          <div>
            <button onClick={this.props.onClose} className="modal-button">
              &times;
            </button>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
