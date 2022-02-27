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
                    <header>
                        <div>
                            <h1 id='home-title'>Paradas del Sistema</h1>
                            <div className='home-chart-one'>
                                <div className='home-chart-container-one'>
                                    <ChartPerformance />
                                </div>
                            </div>
                        </div>
                    </header>
                    <nav>
                        <div>
                            <h1 id='home-title'>Estadísticas</h1>
                            <div className="home-chart">
                                <div className="home-chart-container">
                                </div>
                            </div>
                        </div>
                    </nav>
                    <main>
                        <div>
                            <h1 id='home-title'>Actividad por Estaciones</h1>
                            <div className="home-chart">
                                <div className="home-chart-container">
                                    <ChartActivity />
                                </div>
                            </div>
                        </div>

                    </main>
                    <footer>
                        <div>
                            <h1 id='home-title'>Carga de Trabajo</h1>
                            <div className="home-chart">
                                <div className="home-chart-container">
                                </div>
                            </div>
                        </div>
                    </footer>
                </section>
            </div>
            <footer className='footer'>
                <p>Copyright &copy; 2022 FORUS S.A., todos los derechos reservados.</p>
            </footer>
        </>
    );
}

export default Home;