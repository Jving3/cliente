import { useQuery } from "react-query";
import axios from "axios";

const fetchActivity = () => {
    return axios.get('http://localhost:4040/getProd')
}

export const useActivity = (onSuccess, onError) => {
    
  return useQuery(
    'kpi',
    fetchActivity,
    {
        onSuccess: onSuccess,
        onError: onError,
        // refetchInterval: 3000
        // staleTime: 5000
        // enabled:false       
    },  
  )
}
