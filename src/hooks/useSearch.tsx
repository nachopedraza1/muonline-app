import { ChangeEvent, useState, FormEvent } from 'react';

import { guides } from '../helpers/guides';
import { setMonsterGuide } from '../redux/slices';
import { useCustomDispatch } from './useRedux';

export const useSearch = () => {

    const dispatch = useCustomDispatch();

    const [searchValue, setSearchValue] = useState<string>("");

    const onInputchange = ({ target }: ChangeEvent<HTMLInputElement>) => {

        const { value } = target;
        setSearchValue(value);
    }

    const onSearch = (event: FormEvent) => {
        event.preventDefault();
        const guide = guides.filter(guide => guide.name.toLowerCase().includes(searchValue));
        if (guide.length >= 1) {
            dispatch(setMonsterGuide(guide[0]))
        } else {
            console.log("no hay guias");
        }
    }

    return {
        onInputchange,
        searchValue,
        onSearch,
    }
}
