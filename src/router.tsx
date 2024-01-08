import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Shifts } from './views/Shifts/Shifts';
import { WaterSample } from './views/WaterSamples/WaterSample';

export const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="*" element={<Shifts />} />
            <Route path="/Watersamples" element={<WaterSample />} />
        </Routes>
    </Router>
);
