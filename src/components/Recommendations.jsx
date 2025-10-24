import React from "react";
import { Server, PackageCheck, TrendingUp } from "lucide-react";

function Recommendations() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 border-t-8 border-theme-primary">
      <h2 className="text-3xl font-bold text-theme-primary mb-6 text-center">
        Recomendações Estratégicas e Impacto Final
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Recomendação 1 */}
        <div className="flex flex-col items-center text-center">
          <Server className="w-10 h-10 mb-3 text-theme-secondary" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            1. Migrar Infraestrutura
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Aprovar CapEx (R$ 4.150 - R$ 7.500) para servidor local e desativar
            a VM do Google Cloud[cite: 171, 172].
          </p>
        </div>

        {/* Recomendação 2 */}
        <div className="flex flex-col items-center text-center">
          <PackageCheck className="w-10 h-10 mb-3 text-theme-secondary" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            2. Consolidar Licenças
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Migrar todos os usuários do Google Workspace para o plano M365
            Business Standard[cite: 173, 174].
          </p>
        </div>

        {/* Impacto Financeiro Total */}
        <div className="flex flex-col items-center text-center p-4 rounded-lg bg-green-50 border border-green-200">
          <TrendingUp className="w-10 h-10 mb-3 text-green-700" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Economia Consolidada
          </h3>
          <p className="text-gray-700 leading-relaxed">
            A implementação das duas ações resultará em uma economia projetada
            de...
          </p>
          <p className="text-3xl font-bold text-green-700 mt-2">
            + R$ 115.000,00
          </p>
          <p className="text-sm text-gray-500">(nos próximos 5 anos)</p>
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
