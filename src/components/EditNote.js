import { useState } from 'react';
import styled from 'styled-components';

function EditNote() {
    return (
        <>
            <NoteContainer>
                <Section>
                    Teste teste teste
                </Section>
            </NoteContainer>
        </>
    );
}

const NoteContainer = styled.div`
    width: 1200px;
    min-height: 600px;
    margin: 64px auto 0px auto;

    padding: 48px;
    display: flex;
    flex-direction: column;

    background-color: var(--seccolor);
    border-radius: 32px;
    box-shadow: 16px 16px 8px #181818;
`;

const Section = styled.div`
    width: 100%;
    margin: 16px 0px;

    padding: 16px;
    background-color: var(--seccolor);
    border-radius: 16px;
    filter: brightness(100%);
    transition: filter 0.3s;
    cursor: pointer;

    font-family: var(--scriptfont);
    font-size: 16px;
    color: var(--lightcolor);

    :hover {
        filter: var(--brightened);
    }
`;

export default EditNote;
