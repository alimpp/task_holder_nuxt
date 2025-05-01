export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const response = await $fetch(`http://localhost:4000/auth/login`, {
    method: "POST",
    body: body,
  });

  return response;
});
