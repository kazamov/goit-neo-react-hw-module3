import { FaUser, FaPhoneAlt } from 'react-icons/fa';

import classes from './Contact.module.css';

function Contact({ contact, onDelete }) {
  return (
    <div className={classes['contact']}>
      <div className={classes['contact-info']}>
        <FaUser />
        <span className={classes['contact-name']}>{contact.name}</span>
        <FaPhoneAlt />
        <span className={classes['contact-number']}>{contact.number}</span>
      </div>
      <button onClick={() => onDelete(contact)} className={classes['delete-button']} type="button">
        Delete
      </button>
    </div>
  );
}

export default Contact;
