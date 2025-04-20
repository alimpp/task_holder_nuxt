export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const response: any = await $fetch(`http://localhost:4000/auth/register`, {
    method: "POST",
    body: body,
  });

  return response;
});
