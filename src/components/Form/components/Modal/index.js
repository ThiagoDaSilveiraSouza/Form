// style
import {
  ModalComponent,
  Background,
  ModalCard,
  CloseButton,
  DescriptionContainer,
  ValuesLines
} from "./style";

const ModalLine = (currentKey, formValues, index) => {
  return (
    <ValuesLines key={index}>
      <strong>{currentKey}:</strong>
      {formValues[currentKey] || "Vazio"}
    </ValuesLines>
  );
};

export const Modal = ({ formValues = {}, modalState }) => {
  const [modalStatus, setModalStatus] = modalState;
  const formKeys = Object.keys(formValues);

  const closeModal = () => setModalStatus(false);

  return (
    <ModalComponent modalStatus={modalStatus}>
      <Background onClick={closeModal} />
      <ModalCard modalStatus={modalStatus}>
        <CloseButton onClick={closeModal} />
        <h2>Valores do Formulário</h2>
        <DescriptionContainer>
          {formKeys.map((currentKey, index) =>
            ModalLine(currentKey, formValues, index)
          )}
        </DescriptionContainer>
      </ModalCard>
    </ModalComponent>
  );
};
