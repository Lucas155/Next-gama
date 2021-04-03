import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
    }

    body{
        background: #000;
        font-family: 'Lato', sans-serif;
        color: #fff;
        margin-left: 40%;
        margin-top: 5%;
    }

    button{
        background-color: white;
        width: 29%;
        height: 32px;
        border-color: red;
        font-weight: 800;
        margin-top: 10px;
    }

    p{
        margin-top: 10px;

    }


`