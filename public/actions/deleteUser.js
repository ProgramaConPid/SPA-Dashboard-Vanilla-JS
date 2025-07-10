export default async function deleteUser(userId) {
  try {
    const response = await fetch(`http://localhost:3000/users/${userId}`, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error("Error al intentar eliminar el usuario");
    }
  } catch (err) {
    alert(err.message);
  }
}
