export const getAllPhones = store => store.phones;

export const getHomePhones = ({phones}) => {
    const homePhones = phones.filter(({ home }) => home);
    return homePhones;
};

export const getWorkPhones = ({phones}) => {
    const workPhones = phones.filter(({ work }) => work);
    return workPhones;
};

export const filterContacts = ({ phones, filter }) => {
if (!filter) {
        return phones;
    }
    const normFilter = filter.toLowerCase();
    const result = phones.filter(({ name, number }) => {
        return (name.toLowerCase().includes(normFilter) || number.toLowerCase().includes(normFilter))
    })
    return result;    
}
