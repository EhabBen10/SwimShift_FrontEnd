import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Shifts } from './views/Shifts/Shifts';

export const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="*" element={<Shifts />} />
        </Routes>
    </Router>
);
