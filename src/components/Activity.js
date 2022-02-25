import { useState, useContext } from 'react';
import ActivityContext from '../context/activity/activityContext';
import ChartActivity from '../layouts/ChartActivity';
import TableActivity from '../layouts/TableActivity';


const Activity = () => {

    const { data, refetch, picking, putaway } = useContext(ActivityContext);
    const [boton, setBoton] = useState(true);


    return (
        <>
            <div className="title">
                <h1>PRODUCCIÓN FORUS BEE</h1>
            </div>

            <div className="head">
                <div>
                    <h3>Total Picking: {picking} | Total Putaway: {putaway}</h3>
                </div>
                <div>
                    <h3>{data.data[0].fecha}</h3>
                </div>

                <div>
                    <h3><button onClick={() => refetch}>Actualizar</button></h3>
                    {boton ? <h3><button onClick={() => setBoton(false)}>Ver tabla</button></h3> : <h3><button onClick={() => setBoton(true)}>Ver gráfico</button></h3>}
                    
                </div>
            </div>

            {boton ? (
                <ChartActivity/>
            )
            :
            (
                <TableActivity/>
            )}


        </>
    );
}

export default Activity;