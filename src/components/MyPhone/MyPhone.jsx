import MyPhoneForm from "./MyPhoneForm/MyPhoneForm";
import ContactsList from "./ContactsList/ContactsList";
import MyPhoneFilter from "./MyPhoneFilter/MyPhoneFilter";

import css from "./myPhone.module.css";

const MyPhone = () => {

        return (
            <div>
                <h2 className={css.titlePage}>Contacts of worcers of caffe Expresso</h2>
                <div className={css.blockFilter}>
                    <MyPhoneFilter/> 
                </div>
                
                <div className={css.wrapper}>
                    <div className={css.block}>
                        <h3 className={css.title}>PhoneBook</h3>
                        <MyPhoneForm />
                    </div>
                    <div className={css.blockContacts}>
                        <h3 className={css.title}>Contacts</h3>
                        <ContactsList/>                         
                    </div>
                </div>
            </div>
        )
    }

export default MyPhone; 