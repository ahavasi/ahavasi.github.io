import { BulbOutlined, CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Button, Menu, Switch } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Navigation = ({ darkMode, toggleDarkMode }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add('mobile-menu-open');
        } else {
            document.body.classList.remove('mobile-menu-open');
        }

        return () => {
            document.body.classList.remove('mobile-menu-open');
        };
    }, [isMobileMenuOpen]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu after navigation
        if (isMobile) {
            setIsMobileMenuOpen(false);
        }
    };

    const menuItems = [
        {
            key: 'home',
            label: 'Home',
            onClick: () => scrollToSection('hero')
        },
        {
            key: 'about',
            label: 'About',
            onClick: () => scrollToSection('about')
        },
        {
            key: 'experience',
            label: 'Experience',
            onClick: () => scrollToSection('experience')
        },
        {
            key: 'projects',
            label: 'Projects',
            onClick: () => scrollToSection('projects')
        },
        {
            key: 'skills',
            label: 'Skills',
            onClick: () => scrollToSection('skills')
        }
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <motion.div
            className="navigation-container"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            <div className="navigation-wrapper">
                {/* Desktop Navigation */}
                {!isMobile && (
                    <Menu
                        mode="horizontal"
                        className="navigation-menu"
                        theme={darkMode ? "dark" : "light"}
                        items={menuItems}
                    />
                )}

                {/* Mobile Menu Button */}
                {isMobile && (
                    <Button
                        type="text"
                        icon={isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                        onClick={toggleMobileMenu}
                        className="mobile-menu-button"
                    />
                )}

                {/* Dark Mode Toggle */}
                <div className="dark-mode-toggle">
                    <Switch
                        checked={darkMode}
                        onChange={toggleDarkMode}
                        checkedChildren={<BulbOutlined />}
                        unCheckedChildren={<BulbOutlined />}
                    />
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobile && isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <motion.div
                            className="mobile-menu"
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Menu
                                mode="vertical"
                                className="mobile-navigation-menu"
                                theme={darkMode ? "dark" : "light"}
                                items={menuItems}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Navigation; 