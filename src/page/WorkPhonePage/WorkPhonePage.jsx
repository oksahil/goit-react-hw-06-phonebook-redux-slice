import { useSelector } from "react-redux";

const WorkPhonePage = () => {
    const phones = useSelector(store => {
        const workPhones = store.phones.filter(({ work }) => work);
        return workPhones;
    });

    const elements = phones.map(({ id, name, number }) => <li key={id}>
        {name}         {number}
    </li>)
    return (
        <>
            <h1>WorkPhonePage</h1>
            <ul>
                {elements}
            </ul>
        </>
    )
}

export default WorkPhonePage;