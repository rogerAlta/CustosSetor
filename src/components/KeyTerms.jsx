import React from "react";
import { DollarSign, Repeat } from "lucide-react";

function KeyTerms() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-theme-primary mb-4">
        Entendendo os Termos: CapEx vs. OpEx
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Definição de CapEx */}
        <div className="flex items-start">
          <DollarSign className="w-10 h-10 mr-4 text-green-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">
              CapEx (Despesa de Capital)
            </h3>
            <p className="text-gray-600">
              É um <span className="font-bold">investimento inicial único</span>. Você compra um ativo (como um
              servidor) que terá valor ao longo de vários anos.
              <br />
              <strong>Exemplo:</strong> Comprar um servidor de R$ 4.150,00.
            </p>
          </div>
        </div>

        {/* Definição de OpEx */}
        <div className="flex items-start">
          <Repeat className="w-10 h-10 mr-4 text-red-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">
              OpEx (Despesa Operacional)
            </h3>
            <p className="text-gray-600">
              É um <span className="font-bold">custo recorrente</span> (mensal ou anual) para manter algo
              funcionando.
              <br />
              <strong>Exemplo:</strong> Pagar a fatura mensal do Google Cloud.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyTerms;
