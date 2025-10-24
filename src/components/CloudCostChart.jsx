import React from "react";
import { Bar } from "react-chartjs-2";

const gcpCostData = {
  labels: ["Custo Apenas da VM GCE", "Custo Total Serviços GCP"],
  datasets: [
    {
      label: "Projeção (Até Fim de 2025)",
      data: [13000.0, 28289.95],
      backgroundColor: "rgba(43, 102, 181, 0.7)", // Azul secundário
      borderColor: "rgba(43, 102, 181, 1)",
      borderWidth: 1,
    },
    {
      label: "Projeção Atualizada (Até Out 2026)",
      data: [37643.93, 71367.86],
      backgroundColor: "rgba(220, 38, 38, 0.7)", // Vermelho
      borderColor: "rgba(220, 38, 38, 1)",
      borderWidth: 1,
    },
  ],
};

const gcpCostOptions = {
  indexAxis: "y", // Gráfico de barras horizontal
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "Projeção de Custo Acumulado no GCP",
      font: { size: 16, family: "'Inter', sans-serif" },
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          let label = context.dataset.label || "";
          if (label) {
            label += ": ";
          }
          // Usar 'x' para valor no gráfico horizontal
          label += new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(context.parsed.x);
          return label;
        },
      },
    },
  },
  scales: {
    // Eixo X (valores)
    x: {
      ticks: {
        callback: (value) => `R$ ${value / 1000}k`, // Formato R$ k
      },
      title: {
        display: true,
        text: "Custo Acumulado (R$)",
      },
    },
    // Eixo Y (categorias)
    y: {
      ticks: {
        font: {
          size: 14,
        },
      },
    },
  },
};

function CloudCostChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-theme-primary mb-4">
        Análise 1: Custos da Nuvem (GCP)
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        O modelo atual de nuvem (OpEx) é insustentável para uma carga de
        trabalho estável como o JupyterHub. As projeções de faturamento do
        próprio Google mostram que o custo total deve mais que dobrar entre o
        final de 2025 (R$ 28.289,95) e outubro de 2026 (R$ 71.367,86).
      </p>
      {/* Container com altura corrigida */}
      <div className="chart-container">
        <Bar data={gcpCostData} options={gcpCostOptions} />
      </div>
    </div>
  );
}

export default CloudCostChart;
