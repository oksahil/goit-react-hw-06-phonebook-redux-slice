// import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MyPhoneForm from "./MyPhoneForm/MyPhoneForm";
import ContactsList from "./ContactsList/ContactsList";
import MyPhoneFilter from "./MyPhoneFilter/MyPhoneFilter";

import Message from "./../../shared/component/Message/Message";
import { addContact, deleteContact } from "./../redux/phones/phones-slice";
import { setFilter } from "./../redux/filter/filter-slice";
import { getAllPhones, filterContacts } from "components/redux/phones/phones-selectors";
import { getFilter } from "components/redux/filter/filter-selectors";

import css from "./myPhone.module.css";

const MyPhone = () => {
    const phonesFilter = useSelector(filterContacts);
    const allPhones = useSelector(getAllPhones);
    const filter = useSelector(getFilter);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     localStorage.setItem("my-phonebook", JSON.stringify(phonesFilter));
    // }, [phonesFilter]);   

const isDublicate = (name, number)=> {
    const normName = name.toLowerCase();
    const normNumber = number.toLowerCase();
    const person = allPhones.find(({ name, number }) => {
        return (name.toLowerCase() === normName || number.toLowerCase() === normNumber)
    })
    return Boolean(person)
    }  

const onAddContact = ({name, number, home, work}) => {
        if (isDublicate(name, number)) {
            alert(`${name} or ${number} is already ixist`);
            return false;
    }

    const action = addContact({ name, number, home, work });
    dispatch(action);
    }

    const removeContact = (id) => {
        const action = deleteContact(id);
        dispatch(action);
    };

    const handleFilter = ({ target }) => {
        dispatch(setFilter(target.value));
    }

    const isPerson = Boolean(phonesFilter.length);
        return (
            <div>
                <h2 className={css.titlePage}>Contacts of worcers of caffe Expresso</h2>
                <div className={css.blockFilter}>
                    <MyPhoneFilter value={filter} handleChange={handleFilter} /> 
                </div>
                <div className={css.wrapper}>
                    <div className={css.block}>
                        <h3 className={css.title}>PhoneBook</h3>
                        <MyPhoneForm onSubmit={onAddContact}/>
                    </div>

                    <div className={css.blockContacts}>
                        <h3 className={css.title}>Contacts</h3>
                        
                        {isPerson && <ContactsList removeContact={removeContact} contacts={phonesFilter}/>}
                        {!isPerson && <Message message="No person in contacts list" />}
                            
                    </div>
                </div>
            </div>
        )
    }

export default MyPhone; 