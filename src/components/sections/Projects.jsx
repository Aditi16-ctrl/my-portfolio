import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants"; 
import ProjectCard from "../cards/ProjectCard";
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    padding: 0 16px;
    position: relative;
    align-items: center;
    margin-top: 50px;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 960px) {
        font-size: 16px;
    }
`;

const ToggleButtonGroup = styled.div`
    display: flex; // Fixed the typo here
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
    display: flex; // Fixed the typo here
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;

const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
        background: ${({ theme }) => theme.primary + 20};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
    ${({ active, theme }) =>
        active &&
        `
        background: ${theme.primary + 20};
    `}
`;

const Projects = () => {
    const [toggle, setToggle] = useState("all"); 
    return (
        <Container id="Projects">
            <Wrapper>
                <Title>
                    Projects
                    <Desc style={{ marginBottom: "40px" }}>
                        I have worked on a few projects. Here are some of my projects.
                    </Desc>
                    <ToggleButtonGroup>
                        <ToggleButton
                            active={toggle === "all"}
                            onClick={() => setToggle("all")}
                        >
                            All
                        </ToggleButton>
                        <Divider />
                        <ToggleButton
                            active={toggle === "web app"}
                            onClick={() => setToggle("web app")}
                        >
                            WEBSITE
                        </ToggleButton>
                        <Divider />
                        <ToggleButton
                            active={toggle === "Machine Learning"}
                            onClick={() => setToggle("Machine Learning")}
                        >
                            MACHINE LEARNING
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <CardContainer>
                        {toggle === "all" && 
                            projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))
                        }
                        {projects
                            .filter((item) => item.category === toggle)
                            .map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))
                        }
                    </CardContainer>

                </Title>
            </Wrapper>
        </Container>
    );
};

export default Projects;
