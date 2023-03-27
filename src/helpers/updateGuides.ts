import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { setEventGuide, setMonsterGuide } from '../redux/slices';
import { useCustomDispatch } from '../hooks/useRedux';

import { monsters, events } from '../helpers';
import { Events, Monster } from '../interfaces/interfaces';

export const updateGuides = () => {

    const dispatch = useCustomDispatch();

    const { guideId } = useParams();

    const guides = [...monsters, ...events];

    const guide = guides.find(guide => guide.id === guideId) || guides[0];

    useEffect(() => {
        if (guide.type != "Events") {
            dispatch(setMonsterGuide(guide as Monster))
        } else {
            dispatch(setEventGuide(guide as Events));
        }
    }, [guideId])
}