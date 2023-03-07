import { useParams } from 'react-router-dom';
import { guideList } from '../helpers/guides';
import { GuideType } from '../interfaces/interfaces';

export const useFindMob = () => {

    const { guideId } = useParams();

    const guide = guideList.find(guide => guide.id === guideId) as GuideType;

    return {
        ...guide,
        ...guide.stats
    }
}