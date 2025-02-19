import { Card, Col, Row } from 'antd';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: "Project 1",
            description: "Description of your amazing project",
            image: "/path/to/image",
            technologies: ["React", "Node.js", "MongoDB"],
            link: "https://project-link.com"
        }
        // Add more projects
    ];

    return (
        <Row gutter={[24, 24]}>
            {projects.map((project, index) => (
                <Col xs={24} sm={12} lg={8} key={index}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Card
                            hoverable
                            cover={<img alt={project.title} src={project.image} />}
                        >
                            <Card.Meta
                                title={project.title}
                                description={project.description}
                            />
                        </Card>
                    </motion.div>
                </Col>
            ))}
        </Row>
    );
};

export default Projects; 