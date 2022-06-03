import styled from 'styled-components';


export const LoginForm = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
    margin: 20%;
    paddingLeft: 10%;
`;

export const LoginInput = styled.input`
    background-color: #ffffff;
    padding: .78em;
    width: 47%;
    border: none;
`;

export const LoginButton = styled.button`
    background-color: crimson;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 15px;
    font-weight: bold;
`;
