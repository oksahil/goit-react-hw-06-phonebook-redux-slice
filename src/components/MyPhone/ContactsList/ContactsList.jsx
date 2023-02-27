import { useSelector, useDispatch} from "react-redux";

import { filterContacts } from "./../../redux/phones/phones-selectors";
import { deleteContact } from "components/redux/phones/phones-slice";

import Button from "./../../../shared/component/Button/Button";
import Message from "shared/component/Message/Message";


import css from "./contactsList.module.css"

const ContactsList = () => {
    const contacts = useSelector(filterContacts);
    const dispatch = useDispatch();

    const phone = contacts.map(({ id, name, number, home, work }) =>
        <li key={id} className={css.textItem}>
        <div>    {home ?
                <span className={css.textContact}><span className={css.pictH}>H</span> {name}    {number}</span> :
                <span className={css.textContact}>{name} {number}</span> &&
                    work ? 
                <span className={css.textContact}><span className={css.pictW}>W</span> {name}    {number}</span> :
                <span className={css.textContact}>{name} {number}</span>    
            }
            </div>
            <div>
                <Button onClick={() => removeContact(id)} type="button">delete</Button>
                </div>
        </li>);
    
        const removeContact = (id) => {
        const action = deleteContact(id);
        dispatch(action);
    };
    const phonesFilter = useSelector(filterContacts);
    const isPerson = Boolean(phonesFilter.length);
    return (
        <ul className={css.listContact}>
                                 {isPerson && phone}
                        {!isPerson && <Message message="No person in contacts list" />}

           
        </ul>        
    )
}

export default ContactsList;

ContactsList.defaultPrors = {
    contacts: []
}