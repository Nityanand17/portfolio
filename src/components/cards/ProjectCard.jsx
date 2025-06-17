import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  min-height: 490px;
  height: auto;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px ${({ theme }) => theme.primary + '20'};
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px ${({ theme }) => theme.primary + '30'};
    filter: brightness(1.1);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px ${({ theme }) => theme.primary + '20'};
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: ${({ expanded }) => (expanded ? 'block' : '-webkit-box')};
  max-width: 100%;
  -webkit-line-clamp: ${({ expanded }) => (expanded ? 'unset' : '3')};
  -webkit-box-orient: vertical;
  text-overflow: ${({ expanded }) => (expanded ? 'unset' : 'ellipsis')};
`;
const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  margin-top: 8px;
  align-self: flex-start;
  padding: 0;
  
  &:hover {
    text-decoration: underline;
  }
`;
const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-top: auto;
`;
const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  background-color: ${({ theme }) => theme.bgLight};
  border-radius: 8px;
  padding: 8px 0;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: #ffffff;
  }
`;
const TagItem = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + '15'};
  padding: 4px 8px;
  border-radius: 8px;
`;

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <Image src={project.image} />
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description expanded={expanded}>{project.description}</Description>
        <ReadMoreButton onClick={toggleExpanded}>
          {expanded ? "Show Less" : "Read More"}
        </ReadMoreButton>
      </Details>
      
      {project.tags && project.tags.length > 0 && (
        <Tags>
          {project.tags.map((tag, index) => (
            <TagItem key={index}>{tag}</TagItem>
          ))}
        </Tags>
      )}
      
      {project.member && project.member.length > 0 && (
        <Members>
          {project.member.map((member, index) => (
            <Avatar key={index} src={member.img} />
          ))}
        </Members>
      )}
      
      <ButtonContainer>
        {project.github && (
          <Button href={project.github} target="_blank">
            View Project
          </Button>
        )}
        {project.webapp && (
          <Button href={project.webapp} target="_blank">
            View App
          </Button>
        )}
      </ButtonContainer>
    </Card>
  );
};

export default ProjectCard;
