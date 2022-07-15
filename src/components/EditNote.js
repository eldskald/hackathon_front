import { useState } from 'react';
import styled from 'styled-components';

function EditNote() {

    const [sections, setSections] = useState([]);

    function Section() {
        const [text, setText] = useState('');
        const [selected, setSelected] = useState('');

        return (
            selected ? (
                <SectionSelected>
                    <textarea
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder='Write here...'
                    />
                </SectionSelected>
            ) : (
                <SectionUnselected>
                    {text}
                </SectionUnselected>
            )
        );
    }

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

const SectionUnselected = styled.div`
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

const SectionSelected = styled.div`
    width: 100%;
    margin: 16px 0px;

    padding: 16px;
    background-color: var(--seccolor);
    border-radius: 16px;
    filter: var(--brightened);
    transition: filter 0.3s;
    cursor: pointer;

    font-family: var(--scriptfont);
    font-size: 16px;
    color: var(--lightcolor);
`;

export default EditNote;
