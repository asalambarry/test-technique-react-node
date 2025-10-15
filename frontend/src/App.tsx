
import { useState } from 'react';
import ChatModal from './components/ChatModal';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import UseCases from './components/UseCases';
import './styles.css';
export default function App() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Header onOpenChat={() => setOpen(true)} />
            <Hero onOpenChat={() => setOpen(true)} />
            <UseCases />
            <Stats />
            <Testimonials />
            <ChatModal open={open} onClose={() => setOpen(false)} />
            <Footer />
        </>
    );
}