import React from "react";
import { Line } from "react-chartjs-2";
import { Timer } from "lucide-react";

// --- DADOS DO GRÁFICO 1: Ponto de Equilíbrio (12 Meses) ---
const breakEvenLabels = [
  "Início",
  "Mês 2",
  "Mês 4",
  "Mês 6",
  "Mês 8",
  "Mês 10",
  "Mês 12",
];
const gcpMonthlyCost2025 = 13000 / 12; // Aprox R$ 1.083,33/mês [cite: 26]
const customServerCost = 4150.0; //
const enterpriseServerCost = 7500.0; //

const breakEvenData = {
  labels: breakEvenLabels,
  datasets: [
    {
      label: "Custo Acumulado GCP (Ano 1)",
      data: breakEvenLabels.map((_, i) => gcpMonthlyCost2025 * (i * 2)),
      borderColor: "#dc2626",
      tension: 0.1,
    },
    {
      label: "Custo PC Customizado (CapEx Único)",
      data: Array(breakEvenLabels.length).fill(customServerCost),
      borderColor: "#16a34a",
      borderDash: [5, 5],
      tension: 0.1,
    },
    {
      label: "Custo Servidor Empresarial (CapEx Único)",
      data: Array(breakEvenLabels.length).fill(enterpriseServerCost),
      borderColor: "#2B66B5",
      borderDash: [5, 5],
      tension: 0.1,
    },
  ],
};

const breakEvenOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "Análise de Ponto de Equilíbrio (Primeiro Ano)",
      font: { size: 16 },
    },
    tooltip: {
      /* ... callbacks ... */
    },
  },
  scales: {
    y: { ticks: { callback: (value) => `R$ ${value / 1000}k` } },
  },
};

// --- DADOS DO GRÁFICO 2: TCO Realista de 5 Anos ---
// Usa a projeção de custo acelerada de 2026
const cost2025 = 13000; //
const cost2026_VM_Only = 37643.93; //
const costIncrease_2026 = cost2026_VM_Only - cost2025; // Custo dos ~10 meses de 2026
const monthlyCost2026 = costIncrease_2026 / 10; // Aprox R$ 2.464,39/mês
const annualCost2026_onward = monthlyCost2026 * 12; // R$ 29.572,68

const gcpRealisticTCO = [
  cost2025, // Ano 1
  cost2025 + annualCost2026_onward, // Ano 2
  cost2025 + annualCost2026_onward * 2, // Ano 3
  cost2025 + annualCost2026_onward * 3, // Ano 4
  cost2025 + annualCost2026_onward * 4, // Ano 5
]; // Resultado: [13000, 42572, 72145, 101718, 131290]

const tcoData = {
  labels: ["Ano 1", "Ano 2", "Ano 3", "Ano 4", "Ano 5"],
  datasets: [
    {
      label: "GCP (VM) - TCO Realista",
      data: gcpRealisticTCO,
      borderColor: "#dc2626",
      backgroundColor: "rgba(220, 38, 38, 0.1)",
      fill: true,
      tension: 0.1,
    },
    {
      label: "Servidor Empresarial - TCO (c/ OpEx)",
      data: [9268.13, 11036.26, 12804.39, 14572.52, 16340.65], // [cite: 93, 94]
      borderColor: "#2B66B5",
      tension: 0.1,
    },
    {
      label: "Servidor Customizado - TCO (c/ OpEx)",
      data: [5415.6, 6681.2, 7946.8, 9212.4, 10478.0], // [cite: 93, 94]
      borderColor: "#16a34a",
      tension: 0.1,
    },
  ],
};

const tcoOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "Projeção Realista de TCO de 5 Anos",
      font: { size: 16 },
    },
    tooltip: {
      /* ... callbacks ... */
    },
  },
  scales: {
    y: { ticks: { callback: (value) => `R$ ${value / 1000}k` } },
  },
};

// --- COMPONENTE PRINCIPAL ---

function TcoCharts() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-theme-primary mb-4">
        Análise 2: Custo Total de Propriedade (TCO)
      </h2>

      {/* CORREÇÃO: Texto introdutório ajustado */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        A análise de TCO é dividida em duas partes. Primeiro, o **Ponto de
        Equilíbrio** mostra que o investimento inicial se paga em menos de 5
        meses. Segundo, a **Projeção Realista de 5 Anos** usa os custos
        acelerados de 2026 para mostrar uma economia total de mais de **R$
        120.000,00** ao escolher o servidor customizado.
      </p>

      {/* Container de Grid para os dois gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* GRÁFICO 1: Ponto de Equilíbrio */}
        <div className="flex flex-col">
          <div className="chart-container" style={{ height: "350px" }}>
            <Line data={breakEvenData} options={breakEvenOptions} />
          </div>
          <div className="flex items-center mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <Timer className="h-6 w-6 text-theme-primary mr-3 flex-shrink-0" />
            <p className="text-sm text-gray-700">
              O **Ponto de Equilíbrio** (linha verde abaixo da vermelha) ocorre
              antes do 5º mês.
            </p>
          </div>
        </div>

        {/* GRÁFICO 2: TCO Realista de 5 Anos */}
        <div className="flex flex-col">
          <div className="chart-container" style={{ height: "350px" }}>
            <Line data={tcoData} options={tcoOptions} />
          </div>
          <div className="flex items-center mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-gray-700">
              A linha vermelha (GCP) acelera após o Ano 1, baseado nas projeções
              de 2026, enquanto as soluções locais (verde e azul) permanecem
              estáveis e muito mais baratas[cite: 93, 94].
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TcoChart;
