import { BulbOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import { motion } from 'framer-motion';

const Navigation = ({ darkMode, toggleDarkMode }) => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

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
                >
                    <Menu.Item key="home" onClick={() => scrollToSection('hero')}>
                        Home
                    </Menu.Item>
                    <Menu.Item key="about" onClick={() => scrollToSection('about')}>
                        About
                    </Menu.Item>
                    <Menu.Item key="experience" onClick={() => scrollToSection('experience')}>
                        Experience
                    </Menu.Item>
                    <Menu.Item key="projects" onClick={() => scrollToSection('projects')}>
                        Projects
                    </Menu.Item>
                    <Menu.Item key="skills" onClick={() => scrollToSection('skills')}>
                        Skills
                    </Menu.Item>
                </Menu>
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