import { useEffect, useState } from "react";


const usePartsed = () => {
  const [partsed, setPartsed] = useState([]);


  useEffect(() => {
    fetch('https://moto-parts-server-api.onrender.com/parts')
      .then(res => res.json())
      .then(data => setPartsed(data))
  }, [])
  return [partsed, setPartsed,]
};

export default usePartsed;