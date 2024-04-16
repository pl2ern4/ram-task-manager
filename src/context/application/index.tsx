import { useContext } from 'react';

import { GlobalContext } from './ApplicationProvider';

export const useGlobalContext = () => useContext(GlobalContext);