import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useCustomDispatch } from '../hooks/useRedux';
import { globalGuides } from './globalGuides';
import { setGuide } from '../redux/slices';
import { Guide } from '../interfaces/interfaces';

export const updateGuides = () => {

    const dispatch = useCustomDispatch();

    const { guideId } = useParams();

    const guide = globalGuides.find(guide => guide.id === guideId) || {};

    useEffect(() => {
        dispatch(setGuide(guide as Guide))
    }, [guideId])
}