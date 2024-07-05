import {useEffect, useState} from 'react';

const MAX_MOBILE_SIZE = 992;

const useIsMobile = () => {
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      const {innerWidth: changedWidth} = window;
      setWidth(changedWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {isMobile: !!width && width < MAX_MOBILE_SIZE};
};

export default useIsMobile;
