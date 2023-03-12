import { useParams } from 'react-router-dom';
import { guideList } from '../helpers/guides';

export const useFindMob = () => {

    const { guideId } = useParams();

    const guides = guideList.filter(guide => guide.id === guideId)

    return {
        guides
    }
}