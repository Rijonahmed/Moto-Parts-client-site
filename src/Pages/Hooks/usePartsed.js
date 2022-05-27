import { useEffect, useState } from "react";


const usePartsed = () => {
  const [partsed, setPartsed] = useState([]);


  useEffect(() => {
    fetch('https://powerful-eyrie-01032.herokuapp.com/parts')
      .then(res => res.json())
      .then(data => setPartsed(data))
  }, [])
  return [partsed, setPartsed,]
};

export default usePartsed;