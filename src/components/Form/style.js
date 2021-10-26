import styled from "styled-components";

export const FormElement = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 250px;
  margin: 0 auto;
`;

export const FormLabel = styled.label`
  flex: 1 1 100%;
  display: flex;
  flex-wrap: wrap;

  input,
  select {
    flex: 1 1 100%;
    padding: 0;
    margin: 0;
    padding: 5px;
  }
`;
