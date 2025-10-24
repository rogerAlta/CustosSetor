import React from "react";
import { ShieldCheck, Network, Scaling } from "lucide-react";

function QualitativeBenefits() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-full">
      <h2 className="text-2xl font-bold text-theme-primary mb-6">
        Análise Qualitativa: Além das Finanças
      </h2>
      <ul className="space-y-6">
        <li className="flex items-start">
          <ShieldCheck className="w-10 h-10 mr-4 text-theme-primary flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">
              Soberania de Dados e Conformidade LGPD
            </h3>
            <p className="text-gray-600">
              A solução local oferece <span className="font-bold">soberania de dados absoluta</span>. A
              pergunta "Onde estão os meus dados?" tem uma resposta definitiva
              ("Nesta sala"), simplificando drasticamente a auditoria e
              conformidade com a LGPD em comparação com o "modelo de
              responsabilidade compartilhada" da nuvem.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <Network className="w-10 h-10 mr-4 text-theme-primary flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">
              Desempenho de Rede (LAN vs. WAN)
            </h3>
            <p className="text-gray-600">
              A transferência de grandes conjuntos de dados (comuns no
              JupyterHub) é <span className="font-bold">ordens de magnitude mais rápida</span> em uma rede
              local (LAN) do que pela internet para a nuvem. Isso reduz a
              latência e aumenta a produtividade.
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <Scaling className="w-10 h-10 mr-4 text-theme-primary flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">Escalabilidade Apropriada</h3>
            <p className="text-gray-600">
              A nuvem oferece "escalabilidade elástica" (para picos), que é paga
              mas não utilizada nesta carga de trabalho estável. A solução local
              oferece <span className="font-bold">"escalabilidade vertical planejada"</span> (ex: adicionar
              mais RAM), que é um CapEx pontual e muito mais econômico.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default QualitativeBenefits;
