import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePatientsStore } from "../../store/patientsStore";
import { useAmbulRecordsStore } from "../../store/ambulRecords";
import { useAuthStore } from "../../store/authStore";
import PatientInfo from "../registry/components/patientForm/components/PatientInfo";
import PatientStatus from "../registry/components/patientForm/components/PatientStatus";
import { useForm } from "react-hook-form";
import { formatDate } from "../../utils/functions";

const RegisterPatient = () => {
  const authStore = useAuthStore();
  const patientsStore = usePatientsStore();
  const ambulStore = useAmbulRecordsStore();
  const patientExists = patientsStore.patientInfo?.name;
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      createdBy: authStore.user?.id,
    },
  });

  const onSubmit = async (formData) => {
    // if patient not exists add patient and ambulvisit
    /*  if (!patientExists) {
        const res = await patientsStore.addPatient(formData);
        if (res.id) {
          await ambulStore.addVisit({
            doctorId: formData.doctorId,
            patientId: res.id,
            createdAt: res.createdAt,
            status: formData.status,
          });
        }
        //if patient exists add only ambul visit
      } else {
        await ambulStore.addVisit({
          doctorId: formData.doctorId,
          patientId: patientsStore.patientInfo?.id,
          createdAt: patientsStore.patientInfo?.createdAt,
          status: formData.status,
        });
      }
      reset();
      patientsStore.clearPatientInfo(); */
    console.log(formData);
  };

  useEffect(() => {
    patientsStore.clearPatientInfo();
  }, []);

  // Use useEffect to watch for changes in patientsStore.patientInfo
  useEffect(() => {
    setValue("pn", patientsStore.patientInfo.pn);
    setValue("name", patientsStore.patientInfo.name);
    setValue(
      "gender",
      patientsStore.patientInfo.gender === 1
        ? "მამრობითი"
        : patientsStore.patientInfo.gender === 2
        ? "მდედრობითი"
        : null
    );
    setValue(
      "birthDate",
      patientsStore.patientInfo.birthDate &&
        formatDate(patientsStore.patientInfo.birthDate)
    );
    setValue("tel", patientsStore.patientInfo.tel);
    setValue("tel1", patientsStore.patientInfo.tel1);
    setValue("email", patientsStore.patientInfo.email);
    setValue("address", patientsStore.patientInfo.address);
    setValue("city", patientsStore.patientInfo.city);
    setValue("doctorId", patientsStore.patientInfo.doctorId);
    setValue("insuranceCompany", patientsStore.patientInfo.insuranceCompany);
    setValue("expenses", patientsStore.patientInfo.expenses);
    setValue(
      "discountPercentage",
      patientsStore.patientInfo.discountPercentage
    );
    setValue("referringDoctor", patientsStore.patientInfo.referringDoctor);
  }, [patientsStore.patientInfo?.name]);

  return (
    <div className="h-[calc(100vh-65px)] bg-[#f1f3f6]">
      <div className="max-w-[1080px] mx-auto py-3">
        <div className="shadow bg-white rounded-xl p-3 mb-3">
          <Link to="/">მთავარი გვერდი</Link>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="flex flex-col shadow bg-white px-3 py-4 rounded-xl"
        >
          <div className="flex gap-2 w-full">
            <div className="flex flex-col gap-2 w-1/2">
              <PatientInfo
                register={register}
                errors={errors}
                watch={watch}
                control={control}
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <PatientStatus
                register={register}
                errors={errors}
                setValue={setValue}
                control={control}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPatient;
