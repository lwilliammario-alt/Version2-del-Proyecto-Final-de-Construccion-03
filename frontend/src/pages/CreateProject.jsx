import { useState } from "react";
import InputField from "../components/InputField";
import FormMessage from "../components/FormMessage";
import { createProyecto } from "../services/proyectoService";
import "../App.css";

export default function CreateProject() {
  const [formData, setFormData] = useState({
    name: "",
    storeType: "",
    area: ""
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    const trimmedName = formData.name.trim();
    const trimmedStoreType = formData.storeType.trim();
    const parsedArea = parseFloat(formData.area);

    return (
      trimmedName.length > 0 &&
      trimmedStoreType.length > 0 &&
      !isNaN(parsedArea) &&
      parsedArea > 0
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFormValid()) {
      setMessageType("error");
      setMessage("Debe completar todos los campos. El área debe ser mayor a 0.");
      return;
    }

    try {
      setIsSubmitting(true);
      setMessage("");
      setMessageType("");

      const result = await createProyecto({
        name: formData.name.trim(),
        storeType: formData.storeType.trim(),
        area: parseFloat(formData.area)
      });

      setMessageType("success");
      setMessage(result || "Proyecto registrado correctamente.");
      setFormData({ name: "", storeType: "", area: "" });
    } catch (error) {
      setMessageType("error");
      setMessage(error.message || "No se pudo registrar. Revise la conexión con la API.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container-wrapper">
      <main className="form-container">
        <h2 className="form-title">SmartRetailDesigner</h2>
        <p className="form-subtitle">
          Complete la información técnica de su diseño de tienda. Los datos ingresados pasan por control de calidad para garantizar consistencia y usabilidad.
        </p>

        <FormMessage type={messageType} message={message} />

        <form onSubmit={handleSubmit} noValidate>
          <InputField
            label="Nombre del Proyecto"
            name="name"
            value={formData.name}
            placeholder="Ejemplo: Boutique de Ropa - Zona Centro"
            required={true}
            onChange={handleChange}
          />

          <InputField
            label="Tipo de Tienda"
            name="storeType"
            value={formData.storeType}
            placeholder="Ejemplo: Boutique, Supermercado, Minisuper"
            required={true}
            onChange={handleChange}
          />

          <InputField
            label="Área de Exhibición (m²)"
            name="area"
            type="number"
            step="0.1"
            value={formData.area}
            placeholder="Ejemplo: 120.5"
            required={true}
            onChange={handleChange}
            min="0.1"
          />

          <button className="form-button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registrando..." : "Guardar Proyecto"}
          </button>
        </form>
      </main>
    </div>
  );
}