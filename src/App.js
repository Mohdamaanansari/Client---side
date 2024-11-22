import React from 'react';
import Header from '../../client side/src/components/navbar';
import Hero from '../../client side/src/components/hero';
import Features from './components/home1';
import Footer from './components/footer';

const App = () => {
    return (
        <div>
            <Header />
            <Hero/>
            <Features /> {/* Render the Features component */}
            <Footer/>
            <main>
            </main>
        </div>
    );
};

export default App;
