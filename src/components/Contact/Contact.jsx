import PropTypes from 'prop-types';
import './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => (
  <li className="contact-item">
    <div className="contact-info">
      <span className="contact-icon">👤</span>
      <p>{name}</p>
    </div>
    <div className="contact-info">
      <span className="contact-icon">📞</span>
      <p>{number}</p>
    </div>
    <button className="delete-button" onClick={() => onDelete(id)}>
      Delete
    </button>
  </li>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
