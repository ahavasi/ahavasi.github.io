import { BulbOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import { motion } from 'framer-motion';

const Navigation = ({ darkMode, toggleDarkMode }) => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
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

    return (
        <motion.div
            className="navigation-container"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            <div className="navigation-wrapper">
                <Menu
                    mode="horizontal"
                    className="navigation-menu"
                    theme={darkMode ? "dark" : "light"}
                    items={menuItems}
                />
                <div className="dark-mode-toggle">
                    <Switch
                        checked={darkMode}
                        onChange={toggleDarkMode}
                        checkedChildren={<BulbOutlined />}
                        unCheckedChildren={<BulbOutlined />}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Navigation; 