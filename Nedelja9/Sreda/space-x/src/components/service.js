import axios from 'axios';

export const getLaunches = () => axios.get('https://api.spacexdata.com/v4/launches/past');
export const getCompany = () => axios.get('https://api.spacexdata.com/v4/company');