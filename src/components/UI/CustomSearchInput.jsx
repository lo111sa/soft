import React from "react";
import AsyncSelect from "react-select/async";
import { usePatientsStore } from "../../store/patientsStore";

const CustomSearchInput = () => {
  const styles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#f7fafc",
      width: "100%",
    }),
    option: (base) => ({
      ...base,
      color: "#2d3748",
      borderBottom: "1px solid lightGray",
      backgroundColor: "white",
    }),
  };

  const patientsStore = usePatientsStore();

  const loadOptions = async (inputValue, callback) => {
    await patientsStore.searchPatients(inputValue);
    const data = patientsStore.patients;

    // Format the data as options with 'label' and 'value' properties
    const options = data.map((item) => ({
      label: item.name,
      value: item.pn,
      patient: item,
    }));

    // Call the callback function with the options
    callback(options);
  };

  console.log(patientsStore.patientInfo);
  return (
    <div>
      <AsyncSelect
        styles={styles}
        loadOptions={loadOptions}
        cacheOptions // optional: enables caching of options
        defaultOptions // optional: loads default options on component mount
        isClearable
        onChange={(e) => patientsStore.setPatientInfo(e.patient)}
      />
    </div>
  );
};

export default CustomSearchInput;
