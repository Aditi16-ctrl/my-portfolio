import React from "react";
import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Top = styled.div`
    width: 100%;
    display: flex;
    max-width: 100%;
    gap: 12px;
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const School = styled.div`
    font-size: 18px;
    font-weight: 600; // Corrected font-weight
    color: ${({ theme }) => theme.text_primary + 99};
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const Degree = styled.div`
    font-size: 14px;
    font-weight: 500; // Corrected font-weight
    color: ${({ theme }) => theme.text_primary + 99};
`;

const Date = styled.div`
    font-size: 12px;
    font-weight: 400; // Corrected font-weight
    color: ${({ theme }) => theme.text_primary + 80};
`;

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400; // Corrected font-weight
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px) { // Corrected media query syntax
        font-size: 12px;
    }
`;

const Span = styled.div`
    display: -webkit-box;
    max-width: 100%;
`;

const Grade = styled.div`
    display: flex;
    font-size: 14px;
    font-weight: 500; // Corrected font-weight
    color: ${({ theme }) => theme.text_primary + 99};
`;

const EducationCard = ({ education }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                background: "#1d1836",
                color: "#fff",
                boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
                backgroundColor: "rgba(17, 25, 40, 0.83)",
                border: "1px solid rgba(255, 255, 255, 0.125)",
                borderRadius: "6px",
            }}
            contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.125)", // Corrected here
            }}
            date={education?.date}
        >
            <Top>
                
                <Body>
                    <School>{education?.school}</School>
                    <Degree>{education?.degree}</Degree>
                    <Date>{education?.date}</Date>
                </Body>
            </Top>
            <Grade>
                <b>Grade:</b> {education?.grade}
            </Grade>
            <Description>
                {education?.desc && <Span>{education?.desc}</Span>}
            </Description>
        </VerticalTimelineElement>
    );
};

export default EducationCard;
