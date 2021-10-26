import styled from "styled-components";

export const ModalComponent = styled.section`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  visibility: ${({ modalStatus }) => (modalStatus ? "visible" : "hidden")};
  transition: visibility 0.4s;
`;

export const Background = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export const ModalCard = styled.section`
  position: absolute;
  padding: 20px;
  background: white;
  transform: translateY(${({ modalStatus }) => (modalStatus ? 0 : "-30%")});
  opacity: ${({ modalStatus }) => (modalStatus ? 1 : 0)};
  transition: transform 0.3s, opacity 0.3s;
  p {
    width: 100%;
  }
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  cursor: pointer;
  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background: gray;
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
  :hover {
    transform: scale(1.03);
    :before,
    :after {
      background: red;
    }
  }
`;
export const DescriptionContainer = styled.div`
  max-height: 160px;
  overflow-y: auto;
`;
export const ValuesLines = styled.p`
  display: flex;
  text-align: start;
  strong {
    width: 60px;
    text-transform: capitalize;
  }
`;
