import styled from 'styled-components';

export const SkillsLayout = styled.div`
    height: 100%;
    margin: 2rem;
    text-align: center;
    border-radius: 1rem;
    
    h1 {
        padding: 2rem;
        color: var(--white);
    }
`;

export const SkillsContent = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 2rem;
    overflow-y: auto;
`;

export const Skill = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--brighter);
    border-radius: 1rem;
    padding: 1rem;

    img {
        width: 256px;
        border-radius: 1rem;
    }

    h2 {
        color: var(--black);
    }
`;