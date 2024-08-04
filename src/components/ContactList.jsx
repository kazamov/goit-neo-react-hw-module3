import Contact from './Contact';
import classes from './ContactList.module.css';

function ContactList({ contacts, onContactDelete }) {
  return (
    <ul className={classes['contact-list']}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={onContactDelete} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
