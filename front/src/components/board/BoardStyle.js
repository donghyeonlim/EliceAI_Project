import styled from 'styled-components';

export const BoardWrapper = styled.section`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;

    min-height: 100vh;
    min-width: 95vw;

    font-family: 'Nanum Gothic', sans-serif;

    /* background: black; */
`;

export const BoardSearchContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;

    min-width: 80rem;
    min-height: 10rem;

    margin-top: 10rem;

    font-family: 'Jeju Gothic', sans-serif;

    /* background: blue; */
`;

export const InputContainer = styled.div`
    display: flex;

    min-width: 60rem;
    height: 3.5rem;

    margin-top: 10rem;

    font-family: 'Jeju Gothic', sans-serif;

    /* background: blue; */
`;
export const ToggleButton = styled.img`
    /* margin-top: 0.6rem; */
    margin-right: 0.2rem;
    right: 34rem;
    width: 2rem;
    height: 2rem;
    /* position: absolute; */
    cursor: pointer;
`;

export const BoardSearchImg = styled.img`
    width: 2.3rem;
    height: 2.3rem;

    margin-left: 1rem;
    margin-top: 0.5rem;
    cursor: pointer;
`;

export const BoardContainer = styled.div`
    width: 85%;
    height: auto;

    background: #ffffff;
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
        0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01),
        0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
        0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
`;
