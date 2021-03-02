import axios from "axios";
import actions from "./phoneBook-actions";

axios.defaults.baseURL = 'http://localhost:4040';

const addContact = ({ name, number }) => dispatch => {
        const contact = {
                name, number
        };

        dispatch(actions.addContactRequest());

        axios
                .post('/contacts', contact)
                .then(({ data }) =>
                    dispatch(actions.addContactSuccess(data)),
                )
                .catch(error =>
                        dispatch(actions.addContactError(error)));
};

export default { addContact, };