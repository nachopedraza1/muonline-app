import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { setGuides } from '../redux/slices';
import { useCustomDispatch } from '../hooks/useRedux';

import { guides } from './guides';


export const updateGuides = () => {

    const dispatch = useCustomDispatch();

    const { guideId } = useParams();

    const guide = guides.find(guide => guide.id === guideId) || guides[0];

    useEffect(() => {
        dispatch(setGuides(guide))
    }, [guideId])
}