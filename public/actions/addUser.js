export default async function addUser(name, email, phone, date) {
    
    try {

        const usersRes = await fetch("http://localhost:3000/users")
        const users = await usersRes.json()

        const maxId = users.length > 0 ? Math.max(...users.map(u => u.id)) : 0;
        const newId = maxId + 1

        const newUser = {
            id: newId,
            name, 
            email, 
            phone, 
            enrollNumber: "2266990022",
            dateOfAdmission: date
        }

        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })

        return await response.json()

    } catch(err) {
        alert(err)
    }

}