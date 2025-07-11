// Modify a specific user function
export default async function modifyUser(id, name, email, phone, enrollNumber, date) {
  
  try {

    const userModified = {
      id: id.toString(),
      name,
      email,
      phone,
      enrollNumber,
      dateOfAdmission: date
    }

    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userModified)
    })

    if (!response.ok) {
      throw new Error("Error al conectar con el servidor")
    }

    const data = await response.json()
    return data
  } catch(err) {
    alert(err)
  }

}