import React, { Component } from 'react';
import Layout from './Layout/Layout';
import { connect } from "react-redux";
import ContactList from './ContactList/ContactList'
import ContactForm from './ContactForm/ContactForm';
import ContactFilter from './ContactFilter/ContactFilter';
import "../stylesheets/animation.css";
import { ToastContainer } from "react-toastify";
import contactsOperations from "../redux/phoneBook/phoneBook-operations";

class App extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Layout >
        <ContactForm/>
        <ContactFilter/>
        <ToastContainer autoClose={2500} />
        {this.props.isLoadingContacts && <h1>Загружаю...</h1>}
        <ContactList />
      </Layout>
    );
  };
};

const mapStateToProps = state => ({
  isLoadingContacts: state.contacts.loading,
})

const mapDispatchToProps = dispatch => ({
fetchContacts: () => dispatch(contactsOperations.fetchContacts())
})

export default connect( mapStateToProps, mapDispatchToProps )(App);