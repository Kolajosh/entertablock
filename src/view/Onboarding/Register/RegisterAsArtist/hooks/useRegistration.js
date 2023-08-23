import React, { useState } from "react";
import useApiRequest from "../../../../../utils/hooks/useApiRequest";
import { userRegister } from "../../../../../utils/apiURLs/requests";

const useRegistration = () => {
  const [loading, setLoading] = useState(false);
  const [registerData, setRegisterData] = useState("");
  const makeRequest = useApiRequest();

  const handleRegister = async (datapayload) => {
    setLoading(true);
    const payload = { ...datapayload };
    try {
      const response = await makeRequest.post(userRegister, payload);
      console.log(response);
      setLoading(false);
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };
  return { handleRegister, loading };
};

export default useRegistration;
