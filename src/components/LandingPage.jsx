import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Space, Typography } from 'antd';
import { motion } from 'framer-motion';
import equinelogo from '../assets/logos/equine-logo.png';
import liftlogiclogo from '../assets/logos/liftlogic-logo.png';
import resumeData from '../resumeData';
import './LandingPage.css';
import Navigation from './Navigation';

const LandingPage = ({ darkMode, toggleDarkMode }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="page-container">
            <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            {/* Hero Section */}
            <motion.section
                className="hero-section"
                id="hero"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Background Image */}
                <div
                    className="hero-background"
                    style={{ backgroundImage: 'url(/background.jpg)' }}
                />

                {/* Overlay */}
                <div className="background-overlay"></div>

                {/* Content */}
                <Row align="middle" justify="center" className="hero-content">
                    <Col xs={24} md={12} className="hero-text">
                        <motion.div variants={childVariants}>
                            <Typography.Title level={1}>
                                Hi! I'm Andre Havasi
                            </Typography.Title>
                            <Typography.Title level={2}>
                                Software Engineer
                            </Typography.Title>
                            <Space size="middle" className="social-links">
                                <Button
                                    type="primary"
                                    size="large"
                                    icon={<GithubOutlined />}
                                    href={resumeData.social.github}
                                    target="_blank"
                                >
                                    GitHub
                                </Button>
                                <Button
                                    type="primary"
                                    size="large"
                                    icon={<LinkedinOutlined />}
                                    href={resumeData.social.linkedin}
                                    target="_blank"
                                >
                                    LinkedIn
                                </Button>
                                <Button
                                    type="primary"
                                    size="large"
                                    icon={<MailOutlined />}
                                    href="mailto:andre.havasi@icloud.com"
                                >
                                    Contact Me
                                </Button>
                            </Space>
                        </motion.div>
                    </Col>
                    <Col xs={24} md={12} className="hero-image">
                        <motion.div variants={childVariants}>
                            <img
                                src="/andrehavasi.jpg"
                                alt="Andre Havasi"
                                className="profile-image"
                            />
                        </motion.div>
                    </Col>
                </Row>
            </motion.section>

            {/* About Section */}
            <motion.section
                className="about-section"
                id="about"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.div variants={childVariants} className="section-content">
                    <Typography.Title level={2}>About Me</Typography.Title>
                    <Typography.Paragraph>
                        {resumeData.profile}
                    </Typography.Paragraph>
                </motion.div>
            </motion.section>

            {/* Experience Section */}
            <motion.section
                className="experience-section"
                id="experience"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.div variants={childVariants} className="section-content">
                    <Typography.Title level={2}>Experience</Typography.Title>
                    {resumeData.experience.map((exp, index) => (
                        <div key={exp.id} className="experience-item">
                            <Typography.Title level={4}>{exp.title}</Typography.Title>
                            <Typography.Paragraph>{exp.desc}</Typography.Paragraph>
                        </div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Projects Section */}
            <motion.section
                className="projects-section"
                id="projects"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.div variants={childVariants} className="section-content">
                    <Typography.Title level={2}>Projects</Typography.Title>
                    <Row gutter={[32, 32]}>
                        <Col xs={24} md={12}>
                            <motion.div variants={childVariants}>
                                <Card hoverable className="project-card">
                                    <div className="project-card-header">
                                        <img
                                            alt="LiftLogic"
                                            src={liftlogiclogo}
                                            className="project-logo"
                                        />
                                        <div>
                                            <Typography.Title level={4}>LiftLogic</Typography.Title>
                                            <Typography.Text type="secondary">iOS Fitness Application</Typography.Text>
                                        </div>
                                    </div>
                                    <ul className="project-details">
                                        <li>Built an AI-assisted fitness platform with SwiftUI and Firebase backend, integrating Apple Watch verification and analytics dashboards</li>
                                        <li>Architected backend services for workout data logging, performance metrics, and dynamic exercise updates</li>
                                        <li>Managed end-to-end product development, UI/UX, and user growth strategy</li>
                                    </ul>
                                    <div className="card-actions">
                                        <Button
                                            type="primary"
                                            href="https://www.liftlogic.fit"
                                            target="_blank"
                                        >
                                            Visit Site
                                        </Button>
                                    </div>
                                </Card>
                            </motion.div>
                        </Col>
                        <Col xs={24} md={12}>
                            <motion.div variants={childVariants}>
                                <Card hoverable className="project-card">
                                    <div className="project-card-header">
                                        <img
                                            alt="Equine Logistics LLC"
                                            src={equinelogo}
                                            className="project-logo"
                                        />
                                        <div>
                                            <Typography.Title level={4}>Equine Logistics LLC</Typography.Title>
                                            <Typography.Text type="secondary">Company Web Platform</Typography.Text>
                                        </div>
                                    </div>
                                    <ul className="project-details">
                                        <li>Developed and maintain company web systems, including scheduling, data tracking, and client management tools</li>
                                        <li>Improved operational efficiency through dynamic interfaces and automated workflows</li>
                                    </ul>
                                    <div className="card-actions">
                                        <Button
                                            type="primary"
                                            href="https://www.equinelogisticsllc.com"
                                            target="_blank"
                                        >
                                            Visit Site
                                        </Button>
                                    </div>
                                </Card>
                            </motion.div>
                        </Col>
                    </Row>
                </motion.div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
                className="skills-section"
                id="skills"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.div variants={childVariants} className="section-content">
                    <Typography.Title level={2}>Skills</Typography.Title>
                    <Typography.Paragraph>{resumeData.skills}</Typography.Paragraph>
                </motion.div>
            </motion.section>
        </div>
    );
};

export default LandingPage; 