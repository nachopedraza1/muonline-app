import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { setDropGuide, setEventGuide, setMonsterGuide } from '../redux/slices';
import { useCustomDispatch } from '../hooks/useRedux';

import { monsters, events, droplist } from '../helpers';
import { DropList, Events, Monster } from '../interfaces/interfaces';

export const updateGuides = () => {

    const dispatch = useCustomDispatch();

    const { guideId } = useParams();

    const guides = [...monsters, ...events, droplist];

    const guide = guides.find(guide => guide.id === guideId) || guides[0];


    useEffect(() => {
        if (guide.type == "Droplist") {
            dispatch(setDropGuide(guide as DropList))
        } else if (guide.type == "Events") {
            dispatch(setEventGuide(guide as Events));
        } else {
            dispatch(setMonsterGuide(guide as Monster))
        }
    }, [guideId])
}