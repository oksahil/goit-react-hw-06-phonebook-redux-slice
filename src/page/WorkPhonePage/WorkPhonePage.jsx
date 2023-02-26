import { useSelector } from "react-redux";

import { getWorkPhones } from "components/redux/phones/phones-selectors";

const WorkPhonePage = () => {
    const phones = useSelector(getWorkPhones);

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