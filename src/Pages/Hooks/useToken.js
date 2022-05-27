import { useEffect, useState } from "react";


const useToken = user => {
  const [token, setToken] = useState('')

  useEffect(() => {
    console.log('this is user', user)
    const email = user?.user?.email;
    const currentUser = { email: email };

    if (email) {
      fetch(`https://powerful-eyrie-01032.herokuapp.com/user/${email}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)

        })

    }

  }, [user])

  return token
};

export default useToken;