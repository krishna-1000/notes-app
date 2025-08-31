import React, { useContext } from 'react'
import { ModelContext } from '../contextApi/ModelContextApi';

export const useModal =()=>useContext(ModelContext);
