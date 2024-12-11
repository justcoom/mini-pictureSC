import styled, {css} from "styled-components";

type BtnPropsType = {
    btnType: "primary" | "secondary"
}

export const StyledButton = styled.button<BtnPropsType>`
    width: 86px;
    //min-height: 30px;
    border-radius: 5px;
    padding: 4px 0 6px;
    margin-bottom: 22px;
    
    font-family: Inter;
    font-size: 10px;
    font-weight: 700;
    //line-height: 20px;
    
    cursor: pointer;
    
    ${props => props.btnType === "primary" && css<BtnPropsType> `
        background-color: rgba(78, 113, 254, 1);
        color: rgba(255, 255, 255, 1);
        margin-right: 12px;
        border: 2px solid rgba(78, 113, 254, 1);
    `}
    
    ${props => props.btnType === "secondary" && css<BtnPropsType> `
        border: 2px solid rgba(78, 113, 254, 1);
        background-color: rgba(255, 255, 255, 1);
        color: rgba(78, 113, 254, 1);
    `}
    
`