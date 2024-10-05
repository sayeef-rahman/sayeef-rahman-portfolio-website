import { DETAILS } from '../../../constants/constants';
import { getObjectKeys } from '../../../utils/utils';

const Location = () => {
  const keys = getObjectKeys(DETAILS);
  return (
    <div className='flex flex-col space-y-1 pt-6'>
      {keys?.map((key, index) => {
        return (
          <div key={index} className='flex items-center justify-between'>
            <span className='text-Snow text-sm'>{key}</span>
            <span className='text-sm text-gray-200'>{DETAILS[key]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Location;
