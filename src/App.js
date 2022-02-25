import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ActivityProvider from './context/activity/activityState';
import Home from './components/Home';
import Activity from './components/Activity';
import './index.css';



const queryClient = new QueryClient()

function App() {
  return (
    
    <QueryClientProvider client={queryClient}>
      <ActivityProvider>
            <BrowserRouter>
              <div className='bar'>
                <nav>
                  <ul>
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                    <li>
                      <Link to='/activity'>Actividad</Link>
                    </li>
                  </ul>
                </nav>
                <Routes>
                  <Route path='/' element={<Home/>}/> 
                  <Route path='/activity' element={<Activity/>}/> 
                </Routes>
              </div>
            </BrowserRouter>
            </ActivityProvider>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-rigth '/>
    </QueryClientProvider>
    
  )
}

export default App
