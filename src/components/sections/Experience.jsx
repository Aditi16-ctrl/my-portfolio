import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import { VerticalTimeline } from "react-vertical-timeline-component"; // Corrected import
import ExperienceCard from "../cards/ExperienceCard";
import "react-vertical-timeline-component/style.min.css";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    position:relative;
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

const Experience = () => {
    return (
        <Container id="Experience">
            <Wrapper>
                <Title>My Experience</Title>
                <Desc style={{ marginBottom: "40px" }}>
                    My work experience as a Software Engineer and work experience.
                </Desc>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} education={experience} /> // Added key prop
                    ))}
                </VerticalTimeline>
            </Wrapper>
        </Container>
    );
};

export default Experience;
