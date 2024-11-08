import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/home';
import Phototheque from '../../pages/phototheque/phototheque';
import Videotheque from '../../pages/videotheque/videotheque';
import About from '../../pages/about/about';

const content = () => {
    return (
        <div>
            <Routes>
                <Route path='*' element={<Home />} />
                <Route path='phototheque' element={<Phototheque />} />
                <Route path='videotheque' element={<Videotheque />} />
                <Route path='about' element={<About />} />
            </Routes>
        </div>
    );
};

export default content;