import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";

// --- Gráfico 1: Comparação de Custo Mensal ---
const monthlyCostData = {
  labels: ["Custo Mensal Total (33 Usuários)"],
  datasets: [
    {
      label: "Modelo Atual (Fragmentado)",
      data: [3820.0], // Baseado em R$ 1.820 + >R$ 2.000 [cite: 138]
      backgroundColor: "rgba(220, 38, 38, 0.7)",
    },
    {
      label: "Modelo Proposto (M365 Unificado)",
      data: [2257.2], // 33 usuários x R$ 68,40 [cite: 155]
      backgroundColor: "rgba(22, 163, 74, 0.7)",
    },
  ],
};
const monthlyCostOptions = {
  /* ... opções de gráfico de barras ... */
};

// --- Gráfico 2: Economia Anual ---
const annualSavingsData = {
  labels: ["Economia Anual Mínima", "Custo Anual Proposto"],
  datasets: [
    {
      data: [18753.6, 27086.4], // [cite: 155]
      backgroundColor: ["#16a34a", "#a7f3d0"],
      hoverOffset: 4,
    },
  ],
};
const annualSavingsOptions = {
  /* ... opções de gráfico de rosca ... */
};

function LicenseCharts() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-theme-primary mb-4">
        Análise 3: Otimização de Licenças (SaaS Sprawl)
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        O departamento sofre de "SaaS Sprawl"[cite: 129], pagando por M365 e
        Google Workspace simultaneamente. O custo atual é superior a **R$
        3.820/mês**[cite: 138]. Ao consolidar 33 usuários no plano M365 Business
        Standard (R$ 68,40/usuário) [cite: 151, 152], o custo cai para **R$
        2.257,20/mês**, gerando uma economia anual mínima de **R$
        18.753,60**[cite: 155].
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="chart-container" style={{ height: "300px" }}>
          <h3 className="text-lg font-semibold text-center text-gray-700 mb-2">
            Custo Mensal: Atual vs. Proposto
          </h3>
          <Bar data={monthlyCostData} options={monthlyCostOptions} />
        </div>
        <div className="chart-container" style={{ height: "300px" }}>
          <h3 className="text-lg font-semibold text-center text-gray-700 mb-2">
            Composição do Custo Anual
          </h3>
          <Doughnut data={annualSavingsData} options={annualSavingsOptions} />
        </div>
      </div>
    </div>
  );
}

export default LicenseCharts;
