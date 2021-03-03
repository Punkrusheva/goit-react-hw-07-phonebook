import React from 'react';
import { connect } from "react-redux";
import contactsOperations from "../../redux/phoneBook/phoneBook-operations";
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import ContactListItem from "../ContactListItem/ContactListItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../stylesheets/animation.css";

function ContactList({ contacts, onRemoveContact }) {
  return (<>
    {contacts.length > 0 &&     
    <TransitionGroup component="ul" className={styles.contactList}>
      {contacts.map(({ name, id, number }) => (
        <CSSTransition key={id} timeout={250} classNames="item">
          <ContactListItem name={name} id={id} number={number} onClick={() => onRemoveContact(id)}>
          </ContactListItem>
        </CSSTransition>
        
        ))
      }
      </TransitionGroup>
    }
    </>
  );
}
  
ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number.isRequired
  }
  ))
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();
  
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
};

const mapStateToProps = ({contacts: {items, filter}}) => ({
    contacts: getVisibleContacts(items, filter)
}
);

const mapDispatchToProps = dispatch => ({
  onRemoveContact: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
