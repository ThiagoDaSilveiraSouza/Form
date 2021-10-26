export const getAllDistricts = () => {
  const apiUrl =
    "https://servicodados.ibge.gov.br/api/v1/localidades/distritos";
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((jsonResponse) => jsonResponse);
};

export const sortDistrictsByUF = (districts) => {
  return districts.reduce((districtsByUF, currentDistrict) => {
    const currentUf =
      currentDistrict?.municipio?.microrregiao?.mesorregiao?.UF?.nome;

    districtsByUF[currentUf] = districtsByUF[currentUf] || [];
    districtsByUF[currentUf].push(currentDistrict);

    return districtsByUF;
  }, {});
};

export const getDistrictNameListByUf = (distritctByUf, ufName) => {
  const districtList = distritctByUf[ufName];
  const distritcNameList = districtList.map(
    (currentDistrict) => currentDistrict?.nome
  );
  return distritcNameList.sort();
};

export const getUfNameList = (ufSortedByDistrict) =>
  Object.keys(ufSortedByDistrict).sort();
