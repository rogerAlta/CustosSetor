import React from "react";
import { Bar } from "react-chartjs-2";

const gcpCostData = {
  labels: ["Custo Apenas da VM GCE", "Custo Total Serviços GCP"],
  datasets: [
    {
      label: "Projeção (Até Fim de 2025)",
      data: [13000.0, 28289.95],
      backgroundColor: "rgba(43, 102, 181, 0.7)",
      borderColor: "rgba(43, 102, 181, 1)",
      borderWidth: 1,
    },
    {
      label: "Projeção Atualizada (Até Out 2026)",
      data: [37643.93, 71367.86],
      backgroundColor: "rgba(220, 38, 38, 0.7)",
      borderColor: "rgba(220, 38, 38, 1)",
      borderWidth: 1,
    },
  ],
};

const gcpCostOptions = {
  // CORREÇÃO: Gráfico de barras horizontal para legibilidade
  indexAxis: "y",
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "Projeção de Custo Acumulado no GCP",
      font: { size: 16, family: "'Inter', sans-serif" },
    },
    tooltip: {
      /* ... callbacks ... */
    },
  },
  scales: {
    // Eixo X (agora são os valores)
    x: {
      ticks: {
        callback: (value) => `R$ ${value / 1000}k`,
      },
    },
    // Eixo Y (agora são os rótulos)
    y: {
      ticks: {
        font: {
          size: 14, // Aumenta a fonte dos rótulos
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
        [cite_start]O modelo atual de nuvem (OpEx) é insustentável para uma
        carga de trabalho estável como o JupyterHub[cite: 5, 32]. As projeções
        de faturamento do próprio Google mostram que o custo total deve mais que
        dobrar [cite_start]entre o final de 2025 (R$ 28.289,95) e outubro de
        2026 (R$ 71.367,86)[cite: 33].
      </p>
      {/* O container agora usa a altura corrigida do index.css */}
      <div className="chart-container">
        <Bar data={gcpCostData} options={gcpCostOptions} />
      </div>
    </div>
  );
}

export default CloudCostChart;
