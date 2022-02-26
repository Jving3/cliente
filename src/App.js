import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
                <Routes>
                  <Route path='/' element={<Home/>}/> 
                  <Route path='/activity' element={<Activity/>}/> 
                </Routes>
            </BrowserRouter>
            </ActivityProvider>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-rigth '/>
    </QueryClientProvider>
    
  )
}

export default App
