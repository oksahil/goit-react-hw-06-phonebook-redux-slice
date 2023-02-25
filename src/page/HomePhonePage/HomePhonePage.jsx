import { useSelector } from "react-redux";

const HomePhonePage = () => {
    const phones = useSelector(store => {
        const homePhones = store.phones.filter(({ home }) => home);
        return homePhones; 
        });



    const elements = phones.map(({ id, name, number }) => <li key={id}>
        {name}         {number}
    </li>)
    return (
        <>
            <h1>HomePhonePage</h1>
            <ul>
                {elements}
            </ul>
        </>
    )
}

export default HomePhonePage;