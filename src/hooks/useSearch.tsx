import { ChangeEvent, useState, FormEvent } from 'react';

import { useCustomDispatch } from './useRedux';
import { globalGuides } from '../helpers/globalGuides';
import { setGuide } from '../redux/slices';

export const useSearch = () => {

    const dispatch = useCustomDispatch();

    const [searchValue, setSearchValue] = useState<string>("");

    const onInputchange = ({ target }: ChangeEvent<HTMLInputElement>) => {

        const { value } = target;
        setSearchValue(value);
    }

    const onSearch = (event: FormEvent) => {
        event.preventDefault();
        const guide = globalGuides.find(guide => guide.name.toLowerCase().includes(searchValue));
        if (guide) {
            dispatch(setGuide(guide));
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
