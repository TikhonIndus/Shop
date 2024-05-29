import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter.js'

const App = () => {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}

export default App