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
        // cacheTime: 50000, // Duración de chache predeterminada 5min
        // refetchInterval: 30000 // Consulta automática (Polling)
        // staleTime: 50000 //Tiempo de caducidad (Fresh)
        // enabled: false // No actualiza automático
        // refetchOnMount: false, Se actualiza si los datos estan obsoletos
        // refetchOnWindowFocus: false  //No refresca aun sin ventana enfocada
            
    },  
  )
}
