'use client';
import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    pesoActual: '',
    horasEjercicio: '',
    objetivo: '',
    pesoIdeal: '',
    compromiso: '',
  });

  const [plan, setPlan] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const caloriasNecesarias = calcularCaloriasNecesarias(formData);
    const planAlimenticio = seleccionarPlanAlimenticio(caloriasNecesarias);
    setPlan(planAlimenticio);
  };

  const calcularCaloriasNecesarias = ({ pesoActual, horasEjercicio, objetivo, pesoIdeal }) => {
    const peso = parseFloat(pesoActual);
    const horas = parseFloat(horasEjercicio);
    let calorias;

    if (objetivo === 'esteticos') {
      calorias = (peso * 24) * (1.2 + horas * 0.1) - 500;
    } else {
      calorias = (peso * 24) * (1.2 + horas * 0.1);
    }

    return calorias;
  };

  const seleccionarPlanAlimenticio = (calorias) => {
    if (calorias < 1500) {
      return 'bajo';
    } else if (calorias < 2000) {
      return 'moderado';
    } else {
      return 'alto';
    }
  };

  const PlanBajo = () => (
    <div>
      <h3>Plan Bajo en Calorías</h3>
      <p>Día 1:</p>
      <p>Desayuno: Yogur con frutas y avena (300 kcal)</p>
      <p>Almuerzo: Ensalada de pollo con verduras (400 kcal)</p>
      <p>Cena: Pescado a la parrilla con brócoli (350 kcal)</p>

      <p>Día 2:</p>
      <p>Desayuno: Batido de proteínas con frutas (300 kcal)</p>
      <p>Almuerzo: Sopa de verduras y pechuga de pollo (400 kcal)</p>
      <p>Cena: Tofu salteado con espinacas (350 kcal)</p>

      <p>Día 3:</p>
      <p>Desayuno: Tortilla de claras de huevo con espinacas (300 kcal)</p>
      <p>Almuerzo: Ensalada de atún con aguacate (400 kcal)</p>
      <p>Cena: Filete de salmón con espárragos (350 kcal)</p>

      <p>Día 4:</p>
      <p>Desayuno: Smoothie verde con espirulina (300 kcal)</p>
      <p>Almuerzo: Pechuga de pavo con quinoa y vegetales (400 kcal)</p>
      <p>Cena: Bacalao al horno con col rizada (350 kcal)</p>

      <p>Día 5:</p>
      <p>Desayuno: Avena con leche de almendra y frutas (300 kcal)</p>
      <p>Almuerzo: Ensalada de garbanzos con verduras (400 kcal)</p>
      <p>Cena: Pollo asado con calabacín (350 kcal)</p>

      <p>Día 6:</p>
      <p>Desayuno: Yogur griego con nueces y miel (300 kcal)</p>
      <p>Almuerzo: Wrap de pavo con vegetales (400 kcal)</p>
      <p>Cena: Tilapia al vapor con coles de Bruselas (350 kcal)</p>

      <p>Día 7:</p>
      <p>Desayuno: Omelet de verduras con queso bajo en grasa (300 kcal)</p>
      <p>Almuerzo: Ensalada de lentejas con espinacas (400 kcal)</p>
      <p>Cena: Gambas a la plancha con ensalada verde (350 kcal)</p>
    </div>
  );

  const PlanModerado = () => (
    <div>
      <h3>Plan Moderado en Calorías</h3>
      <p>Día 1:</p>
      <p>Desayuno: Tostadas integrales con aguacate y huevo (400 kcal)</p>
      <p>Almuerzo: Pollo a la plancha con arroz integral y verduras (600 kcal)</p>
      <p>Cena: Pasta integral con salsa de tomate y albóndigas de pavo (500 kcal)</p>

      <p>Día 2:</p>
      <p>Desayuno: Smoothie de plátano y mantequilla de almendras (400 kcal)</p>
      <p>Almuerzo: Ensalada de salmón con quinua y aguacate (600 kcal)</p>
      <p>Cena: Lasaña de verduras con queso bajo en grasa (500 kcal)</p>

      <p>Día 3:</p>
      <p>Desayuno: Avena cocida con frutas y miel (400 kcal)</p>
      <p>Almuerzo: Tacos de pescado con ensalada de col (600 kcal)</p>
      <p>Cena: Pollo al curry con arroz basmati (500 kcal)</p>

      <p>Día 4:</p>
      <p>Desayuno: Yogur con granola y frutas (400 kcal)</p>
      <p>Almuerzo: Sándwich de pavo con hummus y verduras (600 kcal)</p>
      <p>Cena: Estofado de ternera con patatas y zanahorias (500 kcal)</p>

      <p>Día 5:</p>
      <p>Desayuno: Tortilla de espinacas con queso feta (400 kcal)</p>
      <p>Almuerzo: Ensalada de pollo con frijoles negros y maíz (600 kcal)</p>
      <p>Cena: Pizza de masa integral con verduras (500 kcal)</p>

      <p>Día 6:</p>
      <p>Desayuno: Batido de proteínas con avena y frutas (400 kcal)</p>
      <p>Almuerzo: Poke bowl de atún con arroz y edamame (600 kcal)</p>
      <p>Cena: Pollo tikka masala con arroz (500 kcal)</p>

      <p>Día 7:</p>
      <p>Desayuno: Panqueques de avena con frutas y sirope de arce (400 kcal)</p>
      <p>Almuerzo: Ensalada de gambas con aguacate y quinoa (600 kcal)</p>
      <p>Cena: Filete de ternera con ensalada mixta (500 kcal)</p>
    </div>
  );

  const PlanAlto = () => (
    <div>
      <h3>Plan Alto en Calorías</h3>
      <p>Día 1:</p>
      <p>Desayuno: Huevos revueltos con jamón y queso, pan integral (500 kcal)</p>
      <p>Almuerzo: Hamburguesa de ternera con batata frita (700 kcal)</p>
      <p>Cena: Espaguetis con albóndigas y salsa marinara (600 kcal)</p>

      <p>Día 2:</p>
      <p>Desayuno: Smoothie de proteínas con mantequilla de maní y avena (500 kcal)</p>
      <p>Almuerzo: Ensalada César con pollo a la parrilla (700 kcal)</p>
      <p>Cena: Salmón a la parrilla con quinoa y brócoli (600 kcal)</p>

      <p>Día 3:</p>
      <p>Desayuno: Tostadas francesas con frutas y miel (500 kcal)</p>
      <p>Almuerzo: Burrito de carne con arroz y frijoles (700 kcal)</p>
      <p>Cena: Pollo Alfredo con pasta (600 kcal)</p>

      <p>Día 4:</p>
      <p>Desayuno: Avena cocida con plátano y nueces (500 kcal)</p>
      <p>Almuerzo: Wrap de pollo con vegetales y hummus (700 kcal)</p>
      <p>Cena: Chuletas de cerdo con puré de patatas (600 kcal)</p>

      <p>Día 5:</p>
      <p>Desayuno: Yogur griego con granola y frutas (500 kcal)</p>
      <p>Almuerzo: Ensalada de atún con pasta y vegetales (700 kcal)</p>
      <p>Cena: Pizza casera con pollo y vegetales (600 kcal)</p>

      <p>Día 6:</p>
      <p>Desayuno: Omelet de jamón y queso con tostadas (500 kcal)</p>
      <p>Almuerzo: Tacos de carne con guacamole y salsa (700 kcal)</p>
      <p>Cena: Risotto de mariscos (600 kcal)</p>

      <p>Día 7:</p>
      <p>Desayuno: Smoothie bowl con frutas y semillas (500 kcal)</p>
      <p>Almuerzo: Sándwich de pavo con aguacate y queso (700 kcal)</p>
      <p>Cena: Filete de ternera con patatas y espárragos (600 kcal)</p>
    </div>
  );

  const renderPlan = () => {
    if (plan === 'bajo') return <PlanBajo />;
    if (plan === 'moderado') return <PlanModerado />;
    if (plan === 'alto') return <PlanAlto />;
    return null;
  };

  return (
    <div className="flex flex-row items-center justify-center min-h-screen bg-gray-100 p-6 gap-10">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700">¿Cuál es tu peso actual?</label>
          <input
            type="number"
            name="pesoActual"
            value={formData.pesoActual}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">¿Cuántas horas haces ejercicio al día?</label>
          <input
            type="number"
            name="horasEjercicio"
            value={formData.horasEjercicio}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">¿Con este tratamiento buscas resultados estéticos o de salud?</label>
          <select
            name="objetivo"
            value={formData.objetivo}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Selecciona una opción</option>
            <option value="esteticos">Estéticos</option>
            <option value="salud">Salud</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">¿Cuál sería tu peso ideal en kilos?</label>
          <input
            type="number"
            name="pesoIdeal"
            value={formData.pesoIdeal}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">¿Estás dispuesto a comprometerte para conseguir tus objetivos?</label>
          <select
            name="compromiso"
            value={formData.compromiso}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Selecciona una opción</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Obtener Dieta
        </button>
      </form>

      {plan && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-lg font-semibold mb-4">Plan Alimenticio Recomendado</h2>
          {renderPlan()}
        </div>
      )}
    </div>
  );
};