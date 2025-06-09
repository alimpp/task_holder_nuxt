export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const body = await readBody(event);

  const token = event.req.headers["authorization"];

  const headers = {
    Authorization: `${token}`,
    "Content-Type": "application/json",
  };

  const response = await $fetch(`http://localhost:4000/projects/${id}`, {
    method: "PUT",
    headers: headers,
    body: body,
  });

  return response;
});
