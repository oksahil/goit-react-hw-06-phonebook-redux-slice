import { useSelector, useDispatch } from "react-redux";

import { setFilter } from "./../../redux/filter/filter-slice";
import { getFilter } from "./../../redux/filter/filter-selectors";

import css from "./myPhoneFilter.module.css"

const MyPhoneFilter = () => {
const filter = useSelector(getFilter);

const dispatch = useDispatch();

    const handleFilter = ({ target }) => {
        dispatch(setFilter(target.value));
    }

    return (
        <div className={css.formInput}>
            <label className={css.labelText}>Find contacts by name</label>
            <input className={css.inputText}
                onChange={handleFilter}
                type="text"
                name="filter"
                value={filter}
             />
        </div>
    )
}

export default MyPhoneFilter;
