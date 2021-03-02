import { createAction } from '@reduxjs/toolkit'

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

/*const addContact = createAction('contacts/add', ({ name, number }) => ({
        payload: {
                id: shortid.generate(),
                name,
                number,
        }
}
));*/

const deleteContact = createAction('contacts/delete')

const changeFilter = createAction('contacts/changeFilter')

export default {
        addContactRequest,
        addContactSuccess,
        addContactError,
        addContact,
        deleteContact,
        changeFilter
};
