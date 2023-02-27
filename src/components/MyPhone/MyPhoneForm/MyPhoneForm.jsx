import { useState } from "react";
import PropTypes from "prop-types";


// import useForm from "shared/hooks/useForm";
import Button from "./../../../shared/component/Button/Button";
import initialState from "./initialState";

import css from "./myPhoneForm.module.css";

const MyPhoneForm = ({ onSubmit }) => {
    // const [state, handleChange, handleSubmit] = useForm({initialState, onSubmit });
    const [state, setState] = useState({ ...initialState });
    // const [contact, setContacts] = useState({ name: '', number: '' });

const handleChange = ({target}) => {
    const { name, value, type, checked } = target;
    const newValue = type === "checkbox" ? checked : value;
    setState(prevState => {
        return { ...prevState, [name]: newValue };
       
    })
    
}

const handleSubmit = (e) => {
    e.preventDefault();
    
    const resultSubmit = onSubmit(({...state}));
        if(resultSubmit) {
            setState({ ...initialState });
           
    }
}

const { name, number, home, work } = state;
    
return (
         <form action="" onSubmit={handleSubmit} className={css.formData}>
            <div className={css.formInput}>
            <label className={css.labelText}>Name:</label>
< ion-icon  name = "heart-outline" > </ ion-icon >
                <input className={css.inputText}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Name Last name"    
                required
                />
            </div>
            <div className={css.formInput}>
                <label className={css.labelText}>Number:</label>
                <input className={css.inputText}
                    onChange={handleChange}
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    placeholder="+000-00-000-00-00"    
                    required
                />
        </div>
        <div className={css.formInput}>
                <label className={css.labelText}>Home:</label>
                <input  className={css.inputCheck}
                    onChange={handleChange}
                    type="checkbox"
                    name="home"
                    checked={home}
                    title="HomePhone"
                    
            />
            <label className={css.labelText}>Work:</label>
                <input
                    onChange={handleChange}
                    type="checkbox"
                    name="work"
                    checked={work}
                    title="WorkPhone"
                    
                />
            </div>
            <Button type="submit">Add contact</Button>
        </form>
        )
}

export default MyPhoneForm;

MyPhoneForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}