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
  display: flex;
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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  justify-items: center;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
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

  const filteredProjects =
    toggle === "all"
      ? projects
      : projects.filter((item) => item.category === toggle);

  const topProjects = filteredProjects.slice(0, 3);
  const bottomProjects = filteredProjects.slice(3, 5);

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
              ALL
            </ToggleButton>
            <Divider />
            <ToggleButton
              active={toggle === "Web Development"}
              onClick={() => setToggle("Web Development")}
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

          {/* Grid layout: 3 above + 2 below */}
          <GridContainer>
            {topProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </GridContainer>
          <GridContainer style={{ marginTop: "40px" }}>
            {bottomProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </GridContainer>
        </Title>
      </Wrapper>
    </Container>
  );
};

export default Projects;
