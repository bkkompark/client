export const getData = async (obj, setData) => {
  const data = await (
    await fetch("/api/join", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: { "Content-Type": "application/json" },
    })
  ).json();

  return data;
};
