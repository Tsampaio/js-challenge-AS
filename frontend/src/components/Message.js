import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const Message = ({ variant, children }) => {
	return (
		<Alert variant={variant} className="mt-3">
			{children}
		</Alert>
	)
}

Message.defaultProps = {
	variant: 'info'
}

Message.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.string
};

export default Message;