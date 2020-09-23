import styled from 'styled-components';

export const SideBarList = styled.div`
    margin: 42px auto 0;
    list-style: none;

    li {
        list-style: none;

        &:not(:last-child) {
            margin: 0 0 36px;
        }

        a {
            border-radius: 10px;
            background-color: #fff;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            padding: 20px 25px;
            color: #303030;
            font-weight: bold;
            font-size: 22px;
            text-decoration: none;
            position: relative;
            -webkit-box-shadow: 0px 4px 15px rgba(0,0,0,0.1);
            box-shadow: 0px 4px 15px rgba(0,0,0,0.1);
            min-height: 120px;
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start;
            -webkit-transition: 300ms ease all;
            transition: 300ms ease all;

            &:hover {
                webkit-transform: scale(1.02);
                transform: scale(1.02);
            }
        }
    }

    

`;