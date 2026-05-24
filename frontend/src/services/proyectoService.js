const API_URL = "http://localhost:5282/api/project";

export async function createProyecto(data) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json" 
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "No se pudo registrar el elemento.");
  }

  // Comprobar si la respuesta es JSON o texto plano
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return await response.json();
  }
  
  return await response.text();
}
