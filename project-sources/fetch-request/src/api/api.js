export const ApiBaseUrl = "https://65eb73d143ce16418933df54.mockapi.io/api/v1";

export const getUsers = async () => {
  try {
    const result = await fetch(`${ApiBaseUrl}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return result.json();
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
