import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState, useCallback, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = useCallback((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navHeight = document.querySelector('nav')?.getBoundingClientRect().height ?? 90;
            const elementPosition = element.offsetTop - navHeight - 8;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
            setActiveSection(sectionId);
        }
    }, []);

    const handleNavClick = async (e, sectionId) => {
        e.preventDefault();
        // Delay + ease animation effect
        await new Promise(resolve => setTimeout(resolve, 100));
        scrollToSection(sectionId);
        setIsMenuOpen(false);
    };

    // Active section indicator
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'About', 'Skills', 'projects', 'Footer'];
            let current = 'home';
            for (let section of sections) {
                const el = document.getElementById(section);
                if (el && el.offsetTop < window.scrollY + 150) {
                    current = section;
                }
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="flex items-center justify-between text-white px-4 sm:px-6 md:px-8 lg:px-20 py-3 md:py-4 bg-[#0e1946]/95 backdrop-blur-md fixed w-full top-0 z-50 shadow-2xl border-b border-white/20 transition-all duration-500 ease-out" style={{ height: '90px' }}>
            <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide flex-shrink-0">Portfolio</div>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-1 sm:gap-2 lg:gap-4 font-semibold">
                {[
                    { id: 'home', label: 'Home' },
                    { id: 'About', label: 'About' },
                    { id: 'Skills', label: 'Skills' },
                    { id: 'projects', label: 'Projects' },
                    { id: 'Footer', label: 'Contact' }
                ].map(({ id, label }) => (
                    <li 
                        key={id}
                        className={`px-3 py-2 rounded-xl transition-all duration-700 ease-out cursor-pointer relative group hover:delay-150 ${
                            activeSection === id 
                                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-2xl scale-110 ring-4 ring-indigo-400/30 animate-pulse' 
                                : 'hover:bg-gradient-to-r hover:from-indigo-500/80 hover:to-purple-600/80 hover:text-white hover:shadow-2xl hover:scale-110 hover:-translate-y-1'
                        }`}
                        onClick={(e) => handleNavClick(e, id)}
                    >
                        <span className="relative z-10">{label}</span>
                        {activeSection === id && (
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4/5 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full shadow-lg animate-bounce-slow" />
                        )}
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden p-2.5 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <RiCloseLine size={26} /> : <RiMenu2Line size={26} />}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <ul className="absolute top-full left-0 right-0 mt-1 p-3 sm:p-4 bg-[#0e1946]/98 backdrop-blur-xl rounded-b-3xl shadow-2xl border-t border-white/20 md:hidden animate-slideDownDelay">
                    {[
                        { id: 'home', label: 'Home' },
                        { id: 'About', label: 'About' },
                        { id: 'Skills', label: 'Skills' },
                        { id: 'projects', label: 'Projects' },
                        { id: 'Footer', label: 'Contact' }
                    ].map(({ id, label }) => (
                        <li 
                            key={id}
                            className={`py-3 px-4 my-1 rounded-2xl transition-all duration-700 ease-out cursor-pointer text-base sm:text-lg border-l-4 shadow-lg hover:shadow-2xl hover:scale-105 ${
                                activeSection === id 
                                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 border-indigo-400 text-white animate-pulse scale-105' 
                                    : 'border-transparent hover:bg-gradient-to-r hover:from-indigo-500/70 hover:to-purple-600/70 hover:border-indigo-400 hover:text-white'
                            }`}
                            onClick={(e) => handleNavClick(e, id)}
                        >
                            {label}
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;

