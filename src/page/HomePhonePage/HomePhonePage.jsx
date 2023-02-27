import { useSelector } from "react-redux";

import { getHomePhones } from "components/redux/phones/phones-selectors";

import Message from "shared/component/Message/Message";

import css from "./homePhonePage.module.css";

const HomePhonePage = () => {
    const phones = useSelector(getHomePhones);



    const elements = phones.map(({ id, name, number }) => <li key={id} className={css.textItem}>
        <span className={css.listContacts}>{name}         {number}</span>
    </li>)
    return (
        <>
            <h1 className={css.titlePage}>HomePhone</h1>
            <ul className={css.blockContacts}>
                {elements}
                {!elements.length && <Message message="No person in HomePhones list" />}
            </ul>
        </>
    )
}

export default HomePhonePage;