import { ChangeEvent, useState, FormEvent } from 'react';
import { monsters, events } from '../helpers';

import { useCustomDispatch } from './useRedux';
import { setEventGuide, setMonsterGuide } from '../redux/slices';

export const useSearch = () => {

    const dispatch = useCustomDispatch();

    const [searchValue, setSearchValue] = useState<string>("");

    const onInputchange = ({ target }: ChangeEvent<HTMLInputElement>) => {

        const { value } = target;
        setSearchValue(value);
    }

    const onSearch = (event: FormEvent) => {
        event.preventDefault();
        const monsterGuide = monsters.filter(guide => guide.name.toLowerCase().includes(searchValue));
        const eventGuide = events.filter(event => event.name.toLocaleLowerCase().includes(searchValue));
        if (monsterGuide.length >= 1) {
            dispatch(setMonsterGuide(monsterGuide[0]));
        } else if (eventGuide.length >= 1) {
            dispatch(setEventGuide(eventGuide[0]));
        }
    }

    return {
        onInputchange,
        searchValue,
        onSearch,
    }
}
