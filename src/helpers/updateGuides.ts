import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { setEventGuide, setMonsterGuide } from '../redux/slices';
import { useCustomDispatch } from '../hooks/useRedux';

import { guides, events } from '../helpers';

export const updateGuides = () => {

    const dispatch = useCustomDispatch();

    const { guideId } = useParams();

    const guide = guides.find(guide => guide.id === guideId) || guides[0];
    const eventGuide = events.find(event => event.id === guideId) || events[0];

    useEffect(() => {
        if (guide.type != "Events") {
            dispatch(setMonsterGuide(guide))
        } else {
            dispatch(setEventGuide(eventGuide));
        }
    }, [guideId])
}