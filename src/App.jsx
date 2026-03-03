import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import LocationPage from './pages/LocationPage';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const locations = [
        { path: 'vasundhara', name: 'Vasundhara', image: '/images/girl9.jpeg' },
        { path: 'vaishali', name: 'Vaishali', image: '/images/girl10.jpeg' },
        { path: 'noida', name: 'Noida', image: '/images/girl11.jpeg' },
        { path: 'raj-nagar', name: 'Raj Nagar', image: '/images/girl12.jpeg' },
        { path: 'mohan-nagar', name: 'Mohan Nagar', image: '/images/girl13.jpeg' },
        { path: 'kaushambi', name: 'Kaushambi', image: '/images/girl15.jpeg' },
        { path: 'ghaziabad', name: 'Ghaziabad', image: '/images/girl15.jpeg' }
    ];

    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {locations.map((loc) => (
                            <Route
                                key={loc.path}
                                path={`/Escorts-in-${loc.path}`}
                                element={<LocationPage locationName={loc.name} heroImage={loc.image} />}
                            />
                        ))}
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:id" element={<BlogPost />} />
                        {/* Fallback route */}
                        <Route path="*" element={<Home />} />
                    </Routes>
                </main>
                <Footer />
                <FloatingButtons />
            </div>
        </Router>
    );
}

export default App;
