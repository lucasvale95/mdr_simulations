import styled from "styled-components"

export const Simulation = styled.div`

    padding: 25px 35px 25px 25px;

    width: 50vw;
    max-width: 450px;
    min-width: 320px;
    height: 50vh;

    z-index: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: white;


    h2{
        color: #5b5b5b;
    }

    

    form{

        width: 280px;

        gap: 15px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        

        div{
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            width: 270px;

            .prefix{
                position: relative;
                top: 27px;
                left: 10px;
                color: #5b5b5b;

                margin-top: -21px;

                font-size: 1rem;

            }
        
            label{
                font-size: 1.2rem;
                color: #5b5b5b;
                margin-bottom: 5px;

            }

            input{
                width: 100%;
                height: 30px;

                border-radius: 5px;
                border: 2px solid #bcbcbc;
                

                font-size: 1rem;

                padding-left: 20px;

                &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
                }

                &:focus{
                outline: none;
                border: 2px solid #3d85c6;                
                }

            }

            .input-pref{
                width: 95%;
                height: 30px;

                border-radius: 5px;
                border: 2px solid #bcbcbc;

                font-size: 1rem;

                padding-left: 35px;

                &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
                }

                &:focus{
                outline: none;
                border: 2px solid #3d85c6;                
                }
            } 

            .max{
                font-size: 0.7rem;

                color: #5b5b5b;

                padding-left: 6px;
            }

            .error{
                position: relative;
                top: -1px;
                margin-bottom: -15px;
                left: 200px;

                font-size: 0.7rem;

                color: red;

            }
    }
    }

    .submit{
        width: 150px;
        height: 40px;

        font-size: 1rem;

        margin: 15px auto;
        margin-left: 85px;
        border: 1px solid white;
        border-radius: 6px;

        color: black;

        background-color: #9fc5e8;

        &:hover{
            cursor: pointer;
            background-color: #0b5394;
            color: white;
        }
    }
`
