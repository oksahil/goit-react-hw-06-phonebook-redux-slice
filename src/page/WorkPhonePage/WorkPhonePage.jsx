import { useSelector } from "react-redux";

import { getWorkPhones } from "components/redux/phones/phones-selectors";

import Message from "shared/component/Message/Message";

import css from "./workPhonePage.module.css"

const WorkPhonePage = () => {
    const phones = useSelector(getWorkPhones);

    const elements = phones.map(({ id, name, number }) => <li key={id} className={css.textItem}>
        <span className={css.listContacts}>{name}         {number}</span>
    </li>)
    return (
        <>
            <h1 className={css.titlePage}>WorkPhone</h1>
            <ul className={css.blockContacts}>
                {elements}
                {!elements.length && <Message message="No person in WorkPhones list" />}
            </ul>
        </>
    )
}

export default WorkPhonePage;