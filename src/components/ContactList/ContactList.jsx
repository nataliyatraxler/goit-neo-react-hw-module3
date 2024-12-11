import PropTypes from 'prop-types';
import styles from './ContactList.module.css'; // Переконайтесь, що шлях правильний

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className={styles.contactsContainer}>
      {contacts.map(({ id, name, number }) => (
        <div key={id} className={styles.contactCard}>
          <p>
            <span role="img" aria-label="user">
              👤
            </span>{' '}
            {name}
          </p>
          <p>
            <span role="img" aria-label="phone">
              📞
            </span>{' '}
            {number}
          </p>
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
