export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await $fetch(`http://localhost:4000/files/${id}`, {
    method: "GET",
    headers: headers,
  });
  return response;
});
