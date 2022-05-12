import styled from 'styled-components';

export const SkillsLayout = styled.div`
    height: 100%;
    text-align: center;
    
    h1 {
        padding: 2rem;
        color: var(--brighter);
    }
`;

export const SkillsContent = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 0 4rem;
`;

export const Skill = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 256px;
    }
`;