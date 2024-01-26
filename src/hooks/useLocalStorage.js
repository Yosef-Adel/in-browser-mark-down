import React from 'react';

const useLocalStorage = (initialState, key) => {
    const get = () => {
        const storage = localStorage.getItem(key);
        if (storage) return JSON.parse(storage).value;
        return initialState;
    }

    const [value, setValue] = React.useState(get());

    React.useEffect(() => {
        localStorage.setItem(key, JSON.stringify({ value }));
    }, [value, key]);

    return [value, setValue];

};

export default useLocalStorage;
