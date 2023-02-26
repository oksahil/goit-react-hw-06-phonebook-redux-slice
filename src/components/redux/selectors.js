export const getAllPhones = store => store.phones;

export const getHomePhones = store => {
    const homePhones = store.phones.filter(({ home }) => home);
    return homePhones;
};

export const getWorkPhones = store => {
    const workPhones = store.phones.filter(({ work }) => work);
    return workPhones;
};

export const getFilteredPhones = ({ phones, filter }) => {
if (!filter) {
        return phones;
    }
    const normFilter = filter.toLowerCase();
    const result = phones.filter(({ name, number }) => {
        return (name.toLowerCase().includes(normFilter) || number.toLowerCase().includes(normFilter))
    })
    return result;    
}

export const getFilter = ({ filter }) => filter;