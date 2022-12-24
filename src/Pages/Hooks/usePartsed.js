import { useEffect, useState } from "react";


const usePartsed = () => {
  const [partsed, setPartsed] = useState([]);


  useEffect(() => {
    fetch('https://moto-parts-server-site.vercel.app/parts')
      .then(res => res.json())
      .then(data => setPartsed(data))
  }, [])
  return [partsed, setPartsed,]
};

export default usePartsed;