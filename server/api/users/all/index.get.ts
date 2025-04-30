export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const response: any = await $fetch(`http://localhost:4000/users/all`, {
    method: "GET",
  });

  return response;
});
