import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { setGuide } from '../redux/slices';
import { useCustomDispatch } from '../hooks/useRedux';

import { monsters, events, droplist } from '../helpers';

export const updateGuides = () => {

    const dispatch = useCustomDispatch();

    const { guideId } = useParams();

    const guides = [...monsters, ...events, droplist];

    const guide = guides.find(guide => guide.id === guideId) || {};


    useEffect(() => {
        dispatch(setGuide(guide))
    }, [guideId])
}