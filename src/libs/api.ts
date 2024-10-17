interface User {
  name?: string; // Nombre opcional para el registro
  email: string;
  password: string;
}
interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
}

export async function getBars() {
  const response = await fetch("https://api.openbrewerydb.org/v1/breweries");
  return response.json();
}

export async function getBarsByState(state: string) {
  const response = await fetch(
    `https://api.openbrewerydb.org/v1/breweries?by_state=${state}`
  );
  return response.json();
}

export async function getBarById(id: string) {
  const response = await fetch(
    `https://api.openbrewerydb.org/v1/breweries?by_ids=${id}`
  );
  if (!response.ok) {
    throw new Error("Error fetching bar data");
  }
  return response.json();
}

export async function createNewUser(user: User): Promise<ApiResponse<any>> {
  const response = await fetch("http://localhost:3004/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message || "Error creating new user");
  }

  const data = await response.json();
  return {
    success: true,
    data,
  };
}

export async function loginUser(user: User): Promise<ApiResponse<any>> {
  try {
    const response = await fetch("http://localhost:3004/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Error logging in");
    }

    const data = await response.json();

    // Aquí guardamos el token en localStorage si el login es exitoso
    if (data.token) {
      localStorage.setItem("token", data.token); // Almacenar el token JWT
    }

    return {
      success: true,
      data,
    };
  } catch (error: unknown | any) {
    console.error("Error logging in:", error);
    return {
      success: false,
      data: null,
    };
  }
}
