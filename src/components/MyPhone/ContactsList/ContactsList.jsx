import PropTypes from "prop-types";

import Button from "./../../../shared/component/Button/Button";

import css from "./contactsList.module.css"

const ContactsList = ({contacts, removeContact}) => {
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
    return (
        <ul className={css.listContact}>
            {phone}
        </ul>        
    )
}

export default ContactsList;

ContactsList.defaultPrors = {
    contacts: []
}

ContactsList.propTypes = {
    removeContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name:  PropTypes.string.isRequired,
        number:  PropTypes.string.isRequired,
    }))
}