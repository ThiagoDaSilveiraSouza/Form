import { useState, useEffect, useCallback } from "react";

// services
import {
  getAllDistricts,
  getUfNameList,
  sortDistrictsByUF,
  getDistrictNameListByUf
} from "./services";

// style
import { FormElement, FormLabel } from "./style";

// components
import { Modal } from "./components";

export const Form = () => {
  const [formValues, setFormValues] = useState({});
  const [modalStatus, setModalStatus] = useState(false);
  const [allDistricts, setAllDistricts] = useState([]);
  const [ufNameList, setUfNameList] = useState([]);
  const [districtNameList, setDistrictNameList] = useState([]);
  const getFormValues = (formElement) => {
    const { name, phone, uf, city } = formElement;

    return {
      name: name.value,
      phone: phone.value,
      uf: uf.value,
      city: city.value
    };
  };

  const formSubmitEvent = (event) => {
    event.preventDefault();
    const formElement = event.target;
    const formValues = getFormValues(formElement);

    setModalStatus(true);
    setFormValues(formValues);
    event.target.reset();
  };
  const updateDistricts = useCallback(async () => {
    const districts = await getAllDistricts();
    setAllDistricts(districts);
  }, []);

  useEffect(() => {
    updateDistricts();
  }, [updateDistricts]);

  const updateUfNameList = useCallback((allDistricts) => {
    const ufSortedByDistrict = sortDistrictsByUF(allDistricts);
    const ufNameList = getUfNameList(ufSortedByDistrict);

    setUfNameList(ufNameList);
  }, []);

  useEffect(() => {
    updateUfNameList(allDistricts);
  }, [updateUfNameList, allDistricts]);

  const ufInputChange = (event) => {
    const currentUfName = event.target.value;
    const DistrictsByUF = sortDistrictsByUF(allDistricts);
    const currentDistrictNameList = getDistrictNameListByUf(
      DistrictsByUF,
      currentUfName
    );
    setDistrictNameList(currentDistrictNameList);
  };

  return (
    <FormElement onSubmit={formSubmitEvent}>
      <FormLabel>
        Nome
        <input type="text" name="name" />
      </FormLabel>
      <FormLabel>
        Telefone
        <input type="text" name="phone" />
      </FormLabel>
      <FormLabel>
        Estado
        <select type="text" name="uf" onChange={ufInputChange} defaultValue="">
          <option hidden disabled></option>
          {ufNameList.map((currentUfName, index) => {
            return (
              <option value={currentUfName} key={index}>
                {currentUfName}
              </option>
            );
          })}
        </select>
      </FormLabel>
      <FormLabel>
        Cidade
        <select type="text" name="city" defaultValue="">
          <option hidden disabled></option>
          {districtNameList.map((currenDistrictName, index) => {
            return (
              <option value={currenDistrictName} key={index}>
                {currenDistrictName}
              </option>
            );
          })}
        </select>
      </FormLabel>
      <button>Submit</button>
      <Modal
        formValues={formValues}
        modalState={[modalStatus, setModalStatus]}
      />
    </FormElement>
  );
};
