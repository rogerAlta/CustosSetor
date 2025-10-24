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
const gcpMonthlyCost2025 = 13000 / 12;
const customServerCost = 4150.0;
const enterpriseServerCost = 7500.0;

const breakEvenData = {
  labels: breakEvenLabels,
  datasets: [
    {
      label: "Custo Acumulado GCP (Ano 1)",
      data: breakEvenLabels.map((_, i) => gcpMonthlyCost2025 * (i * 2)),
      borderColor: "#dc2626", // Vermelho
      tension: 0.1,
    },
    {
      label: "Custo PC Customizado (CapEx Único)",
      data: Array(breakEvenLabels.length).fill(customServerCost),
      borderColor: "#16a34a", // Verde
      borderDash: [5, 5],
      tension: 0.1,
    },
    {
      label: "Custo Servidor Empresarial (CapEx Único)",
      data: Array(breakEvenLabels.length).fill(enterpriseServerCost),
      borderColor: "#2B66B5", // Azul secundário
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
      callbacks: {
        label: (context) => {
          let label = context.dataset.label || "";
          if (label) {
            label += ": ";
          }
          label += new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(context.parsed.y);
          return label;
        },
      },
    },
  },
  scales: {
    y: { ticks: { callback: (value) => `R$ ${value / 1000}k` } }, // Formato R$ k
  },
};

// --- DADOS DO GRÁFICO 2: TCO Realista de 5 Anos ---
const cost2025 = 13000;
const cost2026_VM_Only = 37643.93;
const costIncrease_2026 = cost2026_VM_Only - cost2025;
const monthlyCost2026 = costIncrease_2026 / 10;
const annualCost2026_onward = monthlyCost2026 * 12; // Aprox R$ 29.572,68

const gcpRealisticTCO = [
  cost2025, // Ano 1
  cost2025 + annualCost2026_onward, // Ano 2
  cost2025 + annualCost2026_onward * 2, // Ano 3
  cost2025 + annualCost2026_onward * 3, // Ano 4
  cost2025 + annualCost2026_onward * 4, // Ano 5 => ~R$ 131.290
];

const enterpriseTCO = [9268.13, 11036.26, 12804.39, 14572.52, 16340.65];
const customTCO = [5415.6, 6681.2, 7946.8, 9212.4, 10478.0];

const tcoData = {
  labels: ["Ano 1", "Ano 2", "Ano 3", "Ano 4", "Ano 5"],
  datasets: [
    {
      label: "GCP (VM) - TCO Realista",
      data: gcpRealisticTCO,
      borderColor: "#dc2626", // Vermelho
      backgroundColor: "rgba(220, 38, 38, 0.1)",
      fill: true,
      tension: 0.1,
    },
    {
      label: "Servidor Empresarial - TCO (c/ OpEx)",
      data: enterpriseTCO,
      borderColor: "#2B66B5", // Azul secundário
      tension: 0.1,
    },
    {
      label: "Servidor Customizado - TCO (c/ OpEx)",
      data: customTCO,
      borderColor: "#16a34a", // Verde
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
      /* ... callbacks como acima ... */
    },
  },
  scales: {
    y: { ticks: { callback: (value) => `R$ ${value / 1000}k` } }, // Formato R$ k
  },
};

// --- COMPONENTE PRINCIPAL ---

function TcoCharts() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-theme-primary mb-4">
        Análise 2: Custo Total de Propriedade (TCO)
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        A análise de TCO é dividida em duas partes. Primeiro, o <span className="font-bold">Ponto de
        Equilíbrio</span> mostra que o investimento inicial se paga em menos de 5
        meses. Segundo, a <span className="font-bold">Projeção Realista de 5 Anos</span> usa os custos
        acelerados de 2026 para mostrar uma economia total de mais de <span className="font-bold">R$
        120.000,00</span> (R$ 131k vs R$ 10k) ao escolher o servidor customizado.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* GRÁFICO 1: Ponto de Equilíbrio */}
        <div className="flex flex-col">
          {/* Usar container com altura corrigida */}
          <div className="chart-container">
            <Line data={breakEvenData} options={breakEvenOptions} />
          </div>
          <div className="flex items-center mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <Timer className="h-6 w-6 text-theme-primary mr-3 flex-shrink-0" />
            <p className="text-sm text-gray-700">
              O <span className="font-bold">Ponto de Equilíbrio</span> (linha verde abaixo da vermelha) ocorre
              antes do 5º mês.
            </p>
          </div>
        </div>
        {/* GRÁFICO 2: TCO Realista de 5 Anos */}
        <div className="flex flex-col">
          {/* Usar container com altura corrigida */}
          <div className="chart-container">
            <Line data={tcoData} options={tcoOptions} />
          </div>
          <div className="flex items-center mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-gray-700">
              A linha vermelha (GCP) acelera após o Ano 1, baseado nas projeções
              de 2026, enquanto as soluções locais (verde e azul) permanecem
              estáveis e muito mais baratas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TcoCharts;
