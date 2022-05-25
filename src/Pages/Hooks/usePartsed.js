import { useEffect, useState } from "react";


const usePartsed = () => {
  const [partsed, setPartsed] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5000/parts')
      .then(res => res.json())
      .then(data => setPartsed(data))
  }, [])
  return [partsed, setPartsed,]
};

export default usePartsed;