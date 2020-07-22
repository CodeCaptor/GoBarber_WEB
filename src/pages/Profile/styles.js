import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    height: 100%;
    max-width: 600px;
    margin: auto;
    padding-bottom: 50px;
    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px;
        }
        span {
            align-self: flex-start;
            color: #fb6f91;
            margin: 0 0 10px;
            font-weight: bold;
        }
        button {
            margin: 5px 0 0;
            height: 44px;
            background: #3b9eff;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: all 0.2s ease;
            &:hover {
                background: ${darken(0.05, '#3b9eff')};
            }
        }
        hr {
            border: 0;
            height: 1px;
            background: rgba(255, 255, 255, 0.2);
            margin: 10px 0 20px;
        }
        a {
            color: #fff;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;
            &:hover {
                opacity: 1;
            }
        }
    }
    > button {
        width: 100%;
        margin: 10px 0 0;
        height: 44px;
        background: #f64c75;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: all 0.2s ease;
        &:hover {
            background: ${darken(0.05, '#f64c75')};
        }
    }
`;
