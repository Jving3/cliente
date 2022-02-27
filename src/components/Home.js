import Sidebar from '../layouts/Sidebar';
import ChartActivity from '../layouts/ChartActivity';
import { ChartPerformance } from '../layouts/ChartPerformance';

const Home = () => {
    return (
        <>
            <aside>
                <Sidebar />
            </aside>
            <div className='page-container'>
                <section id="page">
                    <section id='section_a'>
                        <div>
                            <h1 id='home-title'>Paradas del Sistema</h1>
                            <div className='home-chart-one'>
                                <div className='home-chart-container-one'>
                                    <ChartPerformance />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id='section_b'>
                        <div>
                            <h1 id='home-title'>Estadísticas</h1>
                            <div className="home-chart">
                                <div className="home-chart-container">
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id='section_c'>
                        <div>
                            <h1 id='home-title'>Actividad por Estaciones</h1>
                            <div className="home-chart">
                                <div className="home-chart-container">
                                    <ChartActivity />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id='section_d'>
                        <div>
                            <h1 id='home-title'>Carga de Trabajo</h1>
                            <div className="home-chart">
                                <div className="home-chart-container">
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer className='footer'>
                        <p>Copyright &copy; 2022 FORUS S.A., todos los derechos reservados.</p>
                    </footer>
                </section>
            </div>
        </>
    );
}

export default Home;