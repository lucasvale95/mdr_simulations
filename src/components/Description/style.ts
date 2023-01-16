import styled from "styled-components";


export const InfoDescription = styled.section`
    padding: 25px 35px 25px 25px;

    width: 30vw;
    max-width: 450px;
    min-width: 320px;
    height: 50vh;

    z-index: 1;

    display: flex;
    flex-direction: column;

    background-color: white;

    h4 {
        font-size: 1.4rem;
        color:  #5b5b5b;
    }

    p {
        font-size: 1.1rem;
    }

    a {
        font-style: italic;
        text-decoration: none;
        color: #3d85c6;
        width: 90px;

        &:hover {
            font-weight: bold;
            font-size: 0.92rem;
        }
    }


`