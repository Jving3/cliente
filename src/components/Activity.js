import { useState, useContext } from 'react';
import ActivityContext from '../context/activity/activityContext';
import ChartActivity from '../layouts/ChartActivity';
import TableActivity from '../layouts/TableActivity';
import Sidebar from '../layouts/Sidebar';
import {MdOutlineFileUpload, MdOutlineFileDownload, MdEditCalendar, MdOutlineTableChart} from 'react-icons/md';
import { AiOutlineAreaChart, AiFillHome } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';


const Activity = () => {

    const { data, picking, putaway } = useContext(ActivityContext);
    const [boton, setBoton] = useState(true);


    return (
        <>  
                <aside>
                    <Sidebar />
                </aside>
                <div className='title'><h1>Actividad por Estaciones</h1></div>

                <div id='grid-container'>
                    <div className='grid-item one'>
                        <MdOutlineFileUpload style={{color: '#780000', fontSize: '6rem'}}/> <h3>{picking}</h3>
                    </div>
                    <div className='grid-item two'>
                        <MdOutlineFileDownload style={{color: '#2f3848', fontSize: '6rem'}}/> <h3>{putaway}</h3>
                    </div>
                    <div className='grid-item three'>
                        <MdEditCalendar style={{color: '#2f3848', fontSize: '4rem'}}/> <h4>{data.data[0].fecha}</h4>
                    </div>
                    <div className='grid-item four'>
                        <NavLink to='/'><button className='btn'><AiFillHome style={{color: '#2f3848', fontSize: '4rem'}}/><h5>Resumen</h5></button></NavLink>
                    </div>
                    <div className='grid-item five'>
                        {boton ? <button className='btn' onClick={() => setBoton(false)}><MdOutlineTableChart style={{color: '#2f3848', fontSize: '4rem'}}/><h5>Ver&nbsp;tabla</h5></button> : <button className='btn' onClick={() => setBoton(true)}><AiOutlineAreaChart style={{color: '#2f3848', fontSize: '4rem'}}/><h5>Ver&nbsp;gráfico</h5></button>}
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