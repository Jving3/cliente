import { useState, useContext } from 'react';
import ActivityContext from '../context/activity/activityContext';
import ChartActivity from '../layouts/ChartActivity';
import TableActivity from '../layouts/TableActivity';
import Sidebar from '../layouts/Sidebar';
import {MdOutlineFileUpload, MdOutlineFileDownload, MdEditCalendar, MdRefresh, MdOutlineTableChart} from 'react-icons/md';
import { AiOutlineAreaChart } from 'react-icons/ai';

const Activity = () => {

    const { data, refetch, picking, putaway } = useContext(ActivityContext);
    const [boton, setBoton] = useState(true);


    return (
        <>  
                <aside>
                    <Sidebar />
                </aside>
                <p><h1>Actividad por Estaciones</h1></p>

                <div id='grid-container'>
                    <div className='grid-item one'>
                        <MdOutlineFileUpload style={{color: '#780000', fontSize: '6rem'}}/> <h3>{picking}</h3>
                    </div>
                    <div className='grid-item two'>
                        <MdOutlineFileDownload style={{color: '#2f3848', fontSize: '6rem'}}/> <h3>{putaway}</h3>
                    </div>
                    <div className='grid-item three'>
                        <MdEditCalendar style={{color: '#2f3848', fontSize: '5rem'}}/> <h3>{data.data[0].fecha}</h3>
                    </div>
                    <div className='grid-item four'>
                        <button className='btn' onClick={() => refetch}><MdRefresh style={{color: '#2f3848', fontSize: '4rem'}}/>Actualizar</button>
                    </div>
                    <div className='grid-item five'>
                        {boton ? <button className='btn' onClick={() => setBoton(false)}><MdOutlineTableChart style={{color: '#2f3848', fontSize: '4rem'}}/>Ver&nbsp;tabla</button> : <button className='btn' onClick={() => setBoton(true)}><AiOutlineAreaChart style={{color: '#2f3848', fontSize: '4rem'}}/>Ver&nbsp;gráfico</button>}
                    </div>
                </div>

                {boton ? (
                    <ChartActivity />
                )
                    :
                    (
                        <TableActivity />
                    )}
            <footer className='footer'>
            <p>Copyright &copy; 2022 FORUS S.A., todos los derechos reservados.</p>
            </footer>
        </>
    );
}

export default Activity;