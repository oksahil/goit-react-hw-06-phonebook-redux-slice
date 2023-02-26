import { useSelector } from "react-redux";

import { getHomePhones } from "components/redux/selectors";

const HomePhonePage = () => {
    const phones = useSelector(getHomePhones);



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