import React from "react";
import PropTypes from "prop-types";

class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div>
        <div className="modal">
          {this.props.children}

          <div>
            <button onClick={this.props.onClose} className="modal-button">
              x
            </button>
          </div>
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
