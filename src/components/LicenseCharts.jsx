import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Info } from "lucide-react"; // Ícone opcional para indicar tooltip

// --- Gráfico 1: Comparação de Custo Mensal (Horizontal) ---
const monthlyCostData = {
  labels: ["Modelo Atual (Fragmentado)", "Modelo Proposto (M365 Unificado)"],
  datasets: [
    {
      label: "Custo Mensal Total (33 Usuários)",
      data: [3820.0, 2257.2],
      backgroundColor: ["rgba(220, 38, 38, 0.7)", "rgba(22, 163, 74, 0.7)"],
    },
  ],
};
const monthlyCostOptions = {
  indexAxis: "y",
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: "Custo Mensal: Atual vs. Proposto",
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
          }).format(context.parsed.x);
          return label;
        },
      },
    },
  },
  scales: {
    x: {
      ticks: { callback: (value) => `R$ ${value / 1000}k` },
      title: { display: true, text: "Custo Mensal Total (33 Usuários)" },
    },
    y: { ticks: { font: { size: 14 } } },
  },
};

// --- Gráfico 2: Economia Anual ---
const annualSavingsData = {
  labels: ["Economia Anual Mínima", "Custo Anual Proposto"],
  datasets: [
    {
      data: [18753.6, 27086.4],
      backgroundColor: ["#16a34a", "#a7f3d0"],
      hoverOffset: 4,
    },
  ],
};
const annualSavingsOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "Composição do Custo Anual",
      font: { size: 16 },
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          let label = context.label || "";
          if (label) {
            label += ": ";
          }
          label += new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(context.parsed);
          return label;
        },
      },
    },
  },
};

function LicenseCharts() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-theme-primary mb-4">
        Análise 3: Otimização de Licenças (SaaS Sprawl)
      </h2>

      {/* PARÁGRAFO ATUALIZADO COM TOOLTIP */}
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        O departamento sofre de{" "}
        <span className="relative group font-semibold text-theme-secondary border-b border-dashed border-theme-secondary cursor-help">
          "SaaS Sprawl"
          <Info
            size={14}
            className="inline-block ml-1 mb-1 opacity-70 group-hover:opacity-100"
          />
          {/* O Tooltip em si */}
          <span
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 
                       bg-gray-800 text-white text-sm rounded-lg shadow-lg p-3 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                       before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 
                       before:border-8 before:border-transparent before:border-t-gray-800"
            role="tooltip"
          >
            Refere-se à proliferação excessiva e descontrolada de aplicativos de
            software como serviço (SaaS) dentro de uma organização, muitas vezes
            resultando em redundâncias, custos desnecessários e complexidade de
            gerenciamento.
          </span>
        </span>
        , pagando por M365 e Google Workspace simultaneamente. O custo atual é
        superior a <span className="font-bold">R$ 3.820/mês</span>. Ao consolidar 33 usuários no plano M365
        Business Standard (R$ 68,40/usuário), o custo cai para <span className="font-bold">R$
        2.257,20/mês</span>, gerando uma economia anual mínima de <span className="font-bold">R$ 18.753,60</span>.
      </p>

      {/* Gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="chart-container">
          <Bar data={monthlyCostData} options={monthlyCostOptions} />
        </div>
        <div className="chart-container">
          <Doughnut data={annualSavingsData} options={annualSavingsOptions} />
        </div>
      </div>
    </div>
  );
}

export default LicenseCharts;
