async function postUser(data) {
   try {
      const response = await fetch(process.env.REACT_APP_URI_USERS, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
      });

      if (!response.ok) {
         throw new Error("Something went wrong");
      }

      const responseData = await response.json();
      return responseData;
   } catch (error) {
      console.error(error);
   }
}

export default postUser;
