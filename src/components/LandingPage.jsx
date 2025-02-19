import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Space, Typography } from 'antd';
import { motion } from 'framer-motion';
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
                <div className="background-overlay"></div>
                <Row align="middle" justify="center" className="hero-content">
                    <Col xs={24} md={12} className="hero-text">
                        <motion.div variants={childVariants}>
                            <Typography.Title level={1}>
                                Hello, I'm Andre Havasi
                            </Typography.Title>
                            <Typography.Title level={2}>
                                Software Engineer at Jamf
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
                                    href="mailto:andre.havasi@andryte.com"
                                >
                                    Contact Me
                                </Button>
                            </Space>
                        </motion.div>
                    </Col>
                    <Col xs={24} md={12} className="hero-image">
                        <motion.div variants={childVariants}>
                            <img
                                src={"https://media.licdn.com/dms/image/v2/D5603AQE2A9JcdBW8lA/profile-displayphoto-shrink_400_400/B56ZUf4JNaGQAg-/0/1739996566692?e=1745452800&v=beta&t=xR6PqZiKEa4hIJHFPoWQ2Gd5E31SXgLflsrwG9-ndKA"}
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
                        <Col xs={24} md={12} lg={6}>
                            <motion.div variants={childVariants}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt="Andryte"
                                            src="andryte-logo.png"
                                            style={{ padding: '20px', background: '#f5f5f5' }}
                                        />
                                    }
                                >
                                    <Card.Meta
                                        title="Andryte"
                                        description="A Discord bot that provides various utilities and fun commands for server members."
                                    />
                                    <div className="card-actions">
                                        <Button
                                            type="primary"
                                            href="https://www.andryte.com"
                                            target="_blank"
                                        >
                                            Visit Site
                                        </Button>
                                    </div>
                                </Card>
                            </motion.div>
                        </Col>
                        <Col xs={24} md={12} lg={6}>
                            <motion.div variants={childVariants}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt="LiftLogic"
                                            src="liftlogic-logo.png"
                                            style={{ padding: '20px', background: '#f5f5f5' }}
                                        />
                                    }
                                >
                                    <Card.Meta
                                        title="LiftLogic"
                                        description="A fitness tracking application that helps users log and analyze their workouts."
                                    />
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
                        <Col xs={24} md={12} lg={6}>
                            <motion.div variants={childVariants}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt="Equine Logistics LLC"
                                            src="equine-logo.png"
                                            style={{ padding: '20px', background: '#f5f5f5' }}
                                        />
                                    }
                                >
                                    <Card.Meta
                                        title="Equine Logistics LLC"
                                        description="A website for a horse transportation company showcasing their services and facilitating customer inquiries."
                                    />
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
                        <Col xs={24} md={12} lg={6}>
                            <motion.div variants={childVariants}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt="Xclusive Labs"
                                            src="xclusive-logo.png"
                                            style={{ padding: '20px', background: '#f5f5f5' }}
                                        />
                                    }
                                >
                                    <Card.Meta
                                        title="Xclusive Labs"
                                        description="A website for a software development company specializing in custom solutions and digital experiences."
                                    />
                                    <div className="card-actions">
                                        <Button
                                            type="primary"
                                            href="https://www.xclusivesoftwarelabs.com"
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