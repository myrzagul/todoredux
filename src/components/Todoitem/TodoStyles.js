import styled from "styled-components"

 export const TodoItemWrapper = styled.div`
 margin: 10px 0;
 width: 100%;
 height: 45px;
 background: ${(props) => props.bg || "green"};
 display: flex;
 justify-content: space-between;
 align-items:center;
 color: white;
 padding: 0 10px;

 .btnWrapper{
     display: flex;
     grid-gap: 5px;
 }
`;