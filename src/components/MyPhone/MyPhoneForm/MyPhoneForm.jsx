import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllPhones } from "./../../redux/phones/phones-selectors";
import { addContact } from "./../../redux/phones/phones-slice";
import initialState from "./initialState";

import Button from "./../../../shared/component/Button/Button";

import css from "./myPhoneForm.module.css";

const MyPhoneForm = () => {
    const [state, setState] = useState({ ...initialState });
    const allPhones = useSelector(getAllPhones);
    const dispatch = useDispatch();
    
const isDublicate = (name, number)=> {
    const normName = name.toLowerCase();
    const normNumber = number.toLowerCase();
    const person = allPhones.find(({ name, number }) => {
        return (name.toLowerCase() === normName || number.toLowerCase() === normNumber)
    })
    return Boolean(person)
    }  

const handleChange = ({target}) => {
    const { name, value, type, checked } = target;
    const newValue = type === "checkbox" ? checked : value;
    setState(prevState => {
        return { ...prevState, [name]: newValue };
    })
}
    
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDublicate(name, number)) {
      return alert(`${name} or ${number} is already ixist`);
    } else {
      dispatch(addContact({ name, number, home, work }));
      
      };
      setState(initialState);
  };    

const { name, number, home, work } = state;
    
return (
         <form action="" onSubmit={handleSubmit} className={css.formData}>
            <div className={css.formInput}>
            <label className={css.labelText}>Name:</label>
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