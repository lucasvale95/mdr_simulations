import styled from "styled-components";


export const Infos = styled.div`
    padding: 25px;

    max-width: 250px;
    min-width: 200px;
    height: 50vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 20px;

    position: relative;

    background-color: #edf3f8;

    animation: go-back 1s alternate;

    @keyframes go-back {
        from {
            transform: translateX(-200px);
        }
        to {
            transform: translateX(0);
    }
    }

    h3 {
        height: 20px;
        font-style: italic;
        font-weight: 600;

        color: #2986cc;
    }

    h4{
        height: 20px;
        margin: 0;
        font-weight: 600;

        font-style: italic;

        color: #2986cc;
    }

    span {
        font-style: normal;
        font-weight: 700;
    }


`

export const List = styled.div`

`