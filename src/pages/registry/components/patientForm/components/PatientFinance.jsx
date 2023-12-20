import React, { useEffect, useState } from "react";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import Select from "../../../../../components/UI/Select";
import Input from "../../../../../components/UI/Input";

const PatientFinance = ({ onFinanceChange }) => {
  const [financeInfo, setFinanceInfo] = useState({
    insuranceCompany: "",
    expenses: "",
    discountPercentage: "",
    referringDoctor: "",
  });

  const handleInputChange = (field, value) => {
    setFinanceInfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  useEffect(() => {
    onFinanceChange(financeInfo); // Notify the parent component about the change
  }, [financeInfo]);
  return (
    <>
      <div className="flex flex-col gap-2 w-full px-2">
        <p className="flex items-center gap-2 text-2xl">
          <PaymentOutlinedIcon /> ანაზღაურება
        </p>
        <div className="flex flex-col ">
          <span>სადაზღვევო კომპანია</span>
          <Select
            defaultText="აირჩიეთ კომპანია"
            options={[
              { value: "1", label: "მამრობითი" },
              { value: "2", label: "მდედრობითი" },
            ]}
            onChange={(e) =>
              handleInputChange("insuranceCompany", e.target.value)
            }
          />
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col">
            <Input
              label="ღირებულება"
              onChange={(e) => handleInputChange("expenses", e.target.value)}
              placeholder={"შეიყვანეთ ღირებულება"}
            />
          </div>

          <div className="flex flex-col">
            <Input
              label="დაზღვევის პროცენტი"
              className="flex flex-col"
              onChange={(e) =>
                handleInputChange("discountPercentage", e.target.value)
              }
              placeholder={"%"}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <Input
            label="გამომგზავნი ექიმი"
            onChange={(e) =>
              handleInputChange("referringDoctor", e.target.value)
            }
            placeholder={"შეიყვანეთ ექიმის სახელი და გვარი"}
          />
        </div>
      </div>
    </>
  );
};

export default PatientFinance;
