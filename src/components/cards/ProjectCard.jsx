import React from "react";
import styled from "styled-components"; // Ensure the correct import
import Projects from "../sections/Projects";
const Card = styled.div`
    border-radius: 10px;
    width: 330px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    height: 490px;
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
        filter: brightness(1.1);
    }
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 2px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Date = styled.div`
    font-size: 12px;
    color: ${({ theme }) => theme.text_secondary + 80};
    margin-left: 2px;
    font-weight: 400;
    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const Description = styled.div`
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Button = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    font-weight: 200;
    font-size: 20px;
    text-align: center;
`;

// ProjectCard component
const ProjectCard = ({ project }) => {
    
    return (
        <Card>
            
            
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            
            <Button href={project.github} target="_blank">
                View Code
            </Button>
        </Card>
    );
};

export default ProjectCard;
