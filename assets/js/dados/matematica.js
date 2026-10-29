window.PSS_DADOS = window.PSS_DADOS || {};
window.PSS_DADOS.matematica = {
  id: "matematica",
  nome: "Matemática",
  sigla: "MAT",
  cor: "#4c6a9a",
  ordem: 8,
  descricao: "Números, funções, geometria, trigonometria, finanças e estatística para o PSS 1.",
  topicos: [
    {
      id: "matematica-1-1-1",
      grupo: "1.1 Números reais",
      numero: "1.1.1",
      titulo: "Conjuntos numéricos e operações",
      resumo: [
        "Os conjuntos numéricos se ampliam: naturais (ℕ), inteiros (ℤ), racionais (ℚ), irracionais (𝕀) e reais (ℝ). Todo número natural é inteiro, todo inteiro é racional, mas nem todo real é racional. Números irracionais têm representação decimal infinita e não periódica, como √2 e π.",
        "As operações com reais seguem a ordem convencional: parênteses, potências e raízes, multiplicação e divisão, adição e subtração. Sinais iguais na multiplicação ou divisão resultam em positivo; sinais diferentes, em negativo. A subtração equivale a somar o oposto, e a divisão por zero não é definida.",
        "Frações podem ser simplificadas, comparadas e convertidas em decimais. A reta real associa cada número a um ponto, e a distância entre dois pontos é o módulo da diferença entre eles. Intervalos representam conjuntos de números entre limites."
      ],
      pontos: [
        "ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ; os irracionais completam os reais.",
        "Ordem das operações: parênteses, potências, multiplicação/divisão, soma/subtração.",
        "Produto ou quociente de sinais iguais é positivo.",
        "Fração a/b representa a divisão de a por b, com b ≠ 0.",
        "A distância entre a e b na reta é |a − b|.",
        "Intervalos podem ser abertos, fechados ou mistos."
      ],
      pegadinhas: [
        "Todo número inteiro é racional, mas nem todo racional é inteiro.",
        "√4 é racional (2), enquanto √2 é irracional; não basta ter raiz para ser irracional."
      ],
      termos: [
        { termo: "Número racional", definicao: "Número que pode ser escrito como fração de dois inteiros, com denominador não nulo." },
        { termo: "Número irracional", definicao: "Número real que não pode ser escrito como fração de inteiros; decimal infinito não periódico." },
        { termo: "Módulo", definicao: "Distância de um número à origem na reta real; sempre não negativo." }
      ]
    },
    {
      id: "matematica-1-1-2",
      grupo: "1.1 Números reais",
      numero: "1.1.2",
      titulo: "Potências, intervalos e distâncias na reta",
      resumo: [
        "Potências de expoente inteiro seguem propriedades: aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; (ab)ⁿ = aⁿbⁿ; a⁰ = 1 para a ≠ 0; e a⁻ⁿ = 1/aⁿ. Cuidado com bases negativas e parênteses: (−2)² = 4, mas −2² = −4.",
        "Na reta real, intervalos podem ser fechados [a, b], abertos (a, b) ou semiabertos. A distância entre dois pontos a e b é |a − b|. O ponto médio é (a + b)/2.",
        "Essas noções aparecem em problemas de escala, módulo, desigualdades e gráficos. Resolver uma inequação modular, por exemplo, pode gerar dois intervalos."
      ],
      pontos: [
        "aᵐ × aⁿ = aᵐ⁺ⁿ.",
        "(aᵐ)ⁿ = aᵐⁿ.",
        "a⁻ⁿ = 1/aⁿ, com a ≠ 0.",
        "(−2)² = 4; −2² = −4.",
        "Distância: |a − b|.",
        "Ponto médio: (a + b)/2."
      ],
      pegadinhas: [
        "O expoente negativo não torna a base negativa; ele inverte a base.",
        "A raiz de um número negativo não é real quando o índice é par."
      ],
      termos: [
        { termo: "Potência", definicao: "Produto de fatores iguais, representado por base e expoente." },
        { termo: "Intervalo", definicao: "Subconjunto da reta real entre dois extremos." },
        { termo: "Ponto médio", definicao: "Ponto que divide um segmento em duas partes iguais." }
      ]
    },
    {
      id: "matematica-1-2-1",
      grupo: "1.2 Medidas",
      numero: "1.2.1",
      titulo: "Regra de três simples e composta",
      resumo: [
        "A regra de três simples relaciona duas grandezas proporcionais. Se forem diretamente proporcionais, multiplica-se em cruz; se forem inversamente proporcionais, inverte-se uma das razões antes de multiplicar. A pergunta deve ser sempre: quando uma grandeza aumenta, a outra aumenta ou diminui?",
        "Na regra de três composta, há três ou mais grandezas. O método mais seguro é organizar os dados, identificar o tipo de proporção de cada grandeza com a incógnita e montar a equação com as razões invertidas quando necessário.",
        "Exemplo: se 4 máquinas produzem 200 peças em 5 dias, 8 máquinas produzirão 800 peças em quantos dias? A relação com máquinas é inversa e com peças é direta. Monta-se a proporção e resolve-se."
      ],
      pontos: [
        "Grandezas diretamente proporcionais: aumentam juntas.",
        "Grandezas inversamente proporcionais: uma aumenta e a outra diminui.",
        "Na composta, analise cada grandeza separadamente.",
        "Inverta apenas as razões inversamente proporcionais.",
        "Mantenha unidades compatíveis.",
        "Confira se o resultado faz sentido."
      ],
      pegadinhas: [
        "Não inverta todas as razões por padrão; analise a relação de cada grandeza com a incógnita.",
        "Tempo e número de trabalhadores costumam ser inversamente proporcionais; distância e tempo, diretamente."
      ],
      termos: [
        { termo: "Grandeza diretamente proporcional", definicao: "Grandeza que cresce na mesma razão que outra." },
        { termo: "Grandeza inversamente proporcional", definicao: "Grandeza que decresce quando outra cresce, mantendo o produto constante." },
        { termo: "Regra de três composta", definicao: "Método para resolver problemas com três ou mais grandezas proporcionais." }
      ]
    },
    {
      id: "matematica-1-2-2",
      grupo: "1.2 Medidas",
      numero: "1.2.2",
      titulo: "Sistema Internacional, notação científica e unidades",
      resumo: [
        "O Sistema Internacional de Unidades (SI) padroniza grandezas como comprimento (metro), massa (quilograma), tempo (segundo), corrente elétrica (ampère), temperatura (kelvin), quantidade de matéria (mol) e intensidade luminosa (candela). Prefixos indicam múltiplos e submúltiplos, como quilo (10³), centi (10⁻²) e mili (10⁻³).",
        "A notação científica escreve números como a × 10ⁿ, com 1 ≤ |a| < 10 e n inteiro. Para converter, desloca-se a vírgula e ajusta-se o expoente. Multiplicar potências de mesma base exige somar expoentes; dividir, subtrair.",
        "Unidades de área variam ao quadrado e as de volume ao cubo: 1 m² = 10.000 cm² e 1 m³ = 1.000.000 cm³. Unidades agrárias incluem o hectare (10.000 m²); dados digitais usam bytes e seus múltiplos; densidade demográfica é habitantes por área."
      ],
      pontos: [
        "Notação científica: a × 10ⁿ, com 1 ≤ |a| < 10.",
        "1 km = 1.000 m; 1 m = 100 cm; 1 cm = 10 mm.",
        "Área: 1 m² = 10.000 cm².",
        "Volume: 1 m³ = 1.000 L.",
        "1 hectare = 10.000 m².",
        "Densidade demográfica: habitantes/km²."
      ],
      pegadinhas: [
        "1 km² não é 1.000 m²; é 1.000.000 m².",
        "Em notação científica, o coeficiente deve estar entre 1 e 10; 15 × 10³ não está na forma padrão."
      ],
      termos: [
        { termo: "Notação científica", definicao: "Representação de um número como a × 10ⁿ, com 1 ≤ |a| < 10." },
        { termo: "Hectare", definicao: "Unidade de área equivalente a 10.000 m²." },
        { termo: "Densidade demográfica", definicao: "Razão entre população e área, geralmente em hab/km²." }
      ]
    },
    {
      id: "matematica-1-2-3",
      grupo: "1.2 Medidas",
      numero: "1.2.3",
      titulo: "Algarismos significativos",
      resumo: [
        "Algarismos significativos são os que carregam informação sobre a precisão de uma medida. Todos os algarismos diferentes de zero são significativos; zeros entre números diferentes de zero também são; zeros à esquerda não são; zeros à direita, após a vírgula, são significativos. Em números sem vírgula, zeros à direita podem ser ambíguos.",
        "Nas operações, a soma e a subtração conservam o número de casas decimais do termo com menos casas; a multiplicação e a divisão conservam o menor número de algarismos significativos. Arredondamentos devem ser feitos ao final, evitando erros acumulados.",
        "A notação científica elimina ambiguidades: 2,50 × 10³ tem três algarismos significativos; 2,5 × 10³ tem dois. Algarismos duvidosos são o último dígito estimado de uma medida."
      ],
      pontos: [
        "Zeros à esquerda não são significativos.",
        "Zeros entre dígitos são significativos.",
        "Zeros à direita após a vírgula são significativos.",
        "Soma/subtração: menos casas decimais.",
        "Multiplicação/divisão: menos algarismos significativos.",
        "Notação científica remove ambiguidades."
      ],
      pegadinhas: [
        "0,00420 tem três algarismos significativos, não cinco.",
        "Arredondar antes do fim dos cálculos pode alterar o resultado; espere a etapa final."
      ],
      termos: [
        { termo: "Algarismo significativo", definicao: "Dígito que expressa a precisão de uma medida." },
        { termo: "Algarismo duvidoso", definicao: "Último dígito estimado de uma medição." },
        { termo: "Arredondamento", definicao: "Ajuste do número para expressar a precisão adequada." }
      ]
    },
    {
      id: "matematica-1-3-1",
      grupo: "1.3 Funções reais",
      numero: "1.3.1",
      titulo: "Plano cartesiano, perímetro e área",
      resumo: [
        "O plano cartesiano é formado por dois eixos perpendiculares: abscissa (x) e ordenada (y). Um ponto é representado por (x, y). A distância entre dois pontos pode ser calculada pelo teorema de Pitágoras: d = √((x₂ − x₁)² + (y₂ − y₁)²).",
        "O perímetro é a soma dos lados de uma figura; a área é a medida da superfície. Fórmulas frequentes: retângulo A = b × h; triângulo A = (b × h)/2; círculo A = πr² e C = 2πr; trapézio A = ((B + b) × h)/2.",
        "No plano cartesiano, também é possível calcular a área de polígonos decompondo em triângulos e retângulos ou usando determinantes. A leitura de gráficos exige identificar escalas e unidades dos eixos."
      ],
      pontos: [
        "Ponto: (x, y).",
        "Distância: d = √((Δx)² + (Δy)²).",
        "Retângulo: A = base × altura.",
        "Triângulo: A = base × altura ÷ 2.",
        "Círculo: A = πr²; C = 2πr.",
        "Perímetro é soma de comprimentos; área é superfície."
      ],
      pegadinhas: [
        "Perímetro e área não são a mesma coisa e não variam necessariamente na mesma proporção.",
        "Ao dobrar as dimensões de uma figura, a área quadruplica e o perímetro dobra."
      ],
      termos: [
        { termo: "Abscissa", definicao: "Coordenada horizontal de um ponto no plano cartesiano." },
        { termo: "Perímetro", definicao: "Soma das medidas dos lados de uma figura plana." },
        { termo: "Área", definicao: "Medida da superfície ocupada por uma figura." }
      ]
    },
    {
      id: "matematica-1-3-2",
      grupo: "1.3 Funções reais",
      numero: "1.3.2",
      titulo: "Definição de função, domínio, imagem e gráfico",
      resumo: [
        "Uma função relaciona cada elemento de um conjunto domínio a exatamente um elemento do contradomínio. O conjunto imagem é o conjunto dos valores efetivamente assumidos. A notação f(x) representa o valor da função em x.",
        "O domínio deve ser analisado: denominadores não podem ser zero, radicais de índice par exigem radicando não negativo e logaritmos exigem argumento positivo. O gráfico é o conjunto de pontos (x, f(x)) no plano cartesiano.",
        "O teste da reta vertical indica se um gráfico representa função: se uma reta vertical cruza o gráfico mais de uma vez, há mais de um valor de y para o mesmo x. Funções podem ser crescentes, decrescentes ou constantes em intervalos."
      ],
      pontos: [
        "Cada x do domínio tem um único f(x).",
        "Imagem: valores de y efetivamente atingidos.",
        "Denominador não pode ser zero.",
        "Radical par exige radicando ≥ 0.",
        "Teste da reta vertical identifica funções.",
        "Crescimento e decrescimento são analisados por intervalos."
      ],
      pegadinhas: [
        "Contradomínio e imagem não são sinônimos: a imagem é subconjunto do contradomínio.",
        "Uma relação pode não ser função se um mesmo x tiver dois y diferentes."
      ],
      termos: [
        { termo: "Domínio", definicao: "Conjunto de valores de x para os quais a função está definida." },
        { termo: "Imagem", definicao: "Conjunto de valores de y efetivamente obtidos pela função." },
        { termo: "Função crescente", definicao: "Função em que, para x₁ < x₂, tem-se f(x₁) < f(x₂) no intervalo considerado." }
      ]
    },
    {
      id: "matematica-1-3-3",
      grupo: "1.3 Funções reais",
      numero: "1.3.3",
      titulo: "Função afim",
      resumo: [
        "A função afim tem a forma f(x) = ax + b, com a ≠ 0. O coeficiente a é a taxa de variação ou inclinação: se a > 0, a função é crescente; se a < 0, é decrescente. O coeficiente b é o valor de f(0), onde o gráfico corta o eixo y.",
        "O zero da função é o valor de x que torna f(x) = 0: x = −b/a. O gráfico é uma reta. Duas retas são paralelas quando têm o mesmo coeficiente angular e concorrentes quando os coeficientes são diferentes.",
        "A função afim modela situações com variação constante, como custo fixo mais custo por unidade, velocidade constante e conversão entre escalas. A taxa de variação é Δy/Δx entre dois pontos."
      ],
      pontos: [
        "f(x) = ax + b, a ≠ 0.",
        "a > 0: crescente; a < 0: decrescente.",
        "b é o valor inicial, f(0).",
        "Zero: x = −b/a.",
        "Gráfico é uma reta.",
        "Taxa de variação: Δy/Δx."
      ],
      pegadinhas: [
        "O coeficiente b não é a taxa de variação; ele é o valor inicial.",
        "Uma reta vertical não é gráfico de função afim, pois não passaria no teste da reta vertical."
      ],
      termos: [
        { termo: "Coeficiente angular", definicao: "Valor a em f(x) = ax + b, que mede a inclinação da reta." },
        { termo: "Coeficiente linear", definicao: "Valor b em f(x) = ax + b, que indica o ponto de corte no eixo y." },
        { termo: "Zero da função", definicao: "Valor de x que torna f(x) = 0." }
      ]
    },
    {
      id: "matematica-1-3-4",
      grupo: "1.3 Funções reais",
      numero: "1.3.4",
      titulo: "Função quadrática",
      resumo: [
        "A função quadrática tem a forma f(x) = ax² + bx + c, com a ≠ 0. Seu gráfico é uma parábola. Se a > 0, a concavidade é para cima e existe ponto de mínimo; se a < 0, a concavidade é para baixo e existe ponto de máximo.",
        "As raízes são obtidas pela fórmula de Bhaskara: x = (−b ± √Δ)/(2a), com Δ = b² − 4ac. O vértice tem coordenadas xᵥ = −b/(2a) e yᵥ = −Δ/(4a). O eixo de simetria passa pelo vértice.",
        "O discriminante indica o número de raízes reais: Δ > 0, duas raízes distintas; Δ = 0, uma raiz dupla; Δ < 0, nenhuma raiz real. A parábola corta o eixo y em (0, c)."
      ],
      pontos: [
        "f(x) = ax² + bx + c, a ≠ 0.",
        "a > 0: parábola para cima, mínimo.",
        "a < 0: parábola para baixo, máximo.",
        "Δ = b² − 4ac.",
        "Vértice: xᵥ = −b/2a; yᵥ = −Δ/4a.",
        "Δ < 0: sem raízes reais."
      ],
      pegadinhas: [
        "O vértice não é sempre o ponto de máximo; depende do sinal de a.",
        "Δ negativo não significa que a função não exista, apenas que não cruza o eixo x em valores reais."
      ],
      termos: [
        { termo: "Parábola", definicao: "Curva que representa graficamente uma função quadrática." },
        { termo: "Discriminante", definicao: "Δ = b² − 4ac, que indica o número de raízes reais." },
        { termo: "Vértice", definicao: "Ponto de máximo ou mínimo da parábola." }
      ]
    },
    {
      id: "matematica-1-3-5",
      grupo: "1.3 Funções reais",
      numero: "1.3.5",
      titulo: "Equações e problemas de 1º e 2º grau",
      resumo: [
        "Uma equação do 1º grau tem a forma ax + b = 0, com a ≠ 0, e solução x = −b/a. A resolução envolve isolar a incógnita, aplicando as mesmas operações aos dois lados. Problemas costumam exigir tradução do enunciado para uma equação.",
        "Equações do 2º grau podem ser resolvidas por fatoração, completamento de quadrado ou Bhaskara. Em problemas, é importante verificar se as raízes fazem sentido no contexto, descartando valores negativos de comprimento, tempo ou quantidade.",
        "Sistemas de equações podem ser resolvidos por substituição ou adição. Problemas de otimização usam o vértice da parábola; problemas de interseção igualam as funções."
      ],
      pontos: [
        "1º grau: ax + b = 0 → x = −b/a.",
        "2º grau: Bhaskara ou fatoração.",
        "Verifique as raízes no contexto.",
        "Sistemas: substituição ou adição.",
        "Interseção de gráficos: igualar funções.",
        "Otimização: vértice da parábola."
      ],
      pegadinhas: [
        "Nem toda solução algébrica é válida no contexto; comprimentos e quantidades não podem ser negativos.",
        "Ao elevar os dois lados ao quadrado, podem surgir soluções estranhas; confira na equação original."
      ],
      termos: [
        { termo: "Raiz da equação", definicao: "Valor da incógnita que torna a igualdade verdadeira." },
        { termo: "Sistema de equações", definicao: "Conjunto de equações que devem ser satisfeitas simultaneamente." },
        { termo: "Fatoração", definicao: "Escrita de uma expressão como produto de fatores mais simples." }
      ]
    },
    {
      id: "matematica-1-4-1",
      grupo: "1.4 Matemática financeira",
      numero: "1.4.1",
      titulo: "Porcentagem e juros simples",
      resumo: [
        "Porcentagem é uma razão com denominador 100. Aumentos e descontos podem ser calculados por fatores multiplicativos: aumentar 20% equivale a multiplicar por 1,20; descontar 20%, por 0,80. Aumentos e descontos sucessivos não se somam simplesmente.",
        "Nos juros simples, a taxa incide sempre sobre o capital inicial: J = C × i × t, e o montante é M = C + J = C(1 + i t). A taxa e o tempo devem estar na mesma unidade.",
        "Juros simples aparecem em situações de curto prazo e em alguns financiamentos. É importante distinguir taxa nominal, taxa efetiva e taxa proporcional, além de identificar se a taxa é ao mês, ao ano etc."
      ],
      pontos: [
        "x% = x/100.",
        "Aumento de x%: fator 1 + x/100.",
        "Desconto de x%: fator 1 − x/100.",
        "Juros simples: J = C i t.",
        "Montante: M = C(1 + i t).",
        "Taxa e tempo na mesma unidade."
      ],
      pegadinhas: [
        "Aumentar 10% e depois descontar 10% não volta ao valor original; o fator final é 1,1 × 0,9 = 0,99.",
        "Na capitalização simples, a taxa mensal de 2% equivale a 24% ao ano em juros simples, mas não em juros compostos."
      ],
      termos: [
        { termo: "Capital", definicao: "Valor inicial aplicado ou emprestado." },
        { termo: "Montante", definicao: "Capital mais os juros acumulados." },
        { termo: "Taxa de juros", definicao: "Percentual cobrado ou recebido pelo uso do capital em certo período." }
      ]
    },
    {
      id: "matematica-1-4-2",
      grupo: "1.4 Matemática financeira",
      numero: "1.4.2",
      titulo: "Juros compostos, financiamentos e investimentos",
      resumo: [
        "Nos juros compostos, a taxa incide sobre o montante acumulado: M = C(1 + i)ᵗ. Os juros crescem exponencialmente, e o montante depende do tempo no expoente. Essa é a forma mais comum em investimentos e financiamentos.",
        "Para comparar alternativas, é preciso olhar a taxa efetiva, os custos adicionais, o prazo e a periodicidade da capitalização. Em financiamentos, parcelas podem incluir amortização e juros; sistemas como SAC e Price distribuem esses componentes de formas diferentes.",
        "Investimentos envolvem risco, liquidez e rentabilidade. A educação financeira ajuda a evitar dívidas caras, como o rotativo do cartão, e a planejar objetivos. Juros compostos também explicam o efeito dos juros sobre dívidas ao longo do tempo."
      ],
      pontos: [
        "Juros compostos: M = C(1 + i)ᵗ.",
        "Capitalização periódica altera o montante.",
        "Compare taxas efetivas, não apenas nominais.",
        "Financiamentos: amortização + juros.",
        "Risco, liquidez e rentabilidade devem ser comparados.",
        "Dívidas no rotativo têm custo elevado."
      ],
      pegadinhas: [
        "Uma taxa de 1% ao mês não equivale a 12% ao ano em juros compostos; o valor é maior.",
        "Montante maior não significa melhor investimento se o risco ou a inflação forem altos."
      ],
      termos: [
        { termo: "Juros compostos", definicao: "Juros calculados sobre o montante acumulado a cada período." },
        { termo: "Taxa efetiva", definicao: "Taxa que considera o efeito real da capitalização no período." },
        { termo: "Amortização", definicao: "Parte da parcela que reduz o saldo devedor." }
      ]
    },
    {
      id: "matematica-1-5-1",
      grupo: "1.5 Geometria plana",
      numero: "1.5.1",
      titulo: "Semelhança e congruência",
      resumo: [
        "Figuras congruentes têm a mesma forma e o mesmo tamanho; figuras semelhantes têm a mesma forma, mas podem ter tamanhos diferentes. Em triângulos semelhantes, os ângulos correspondentes são iguais e os lados correspondentes são proporcionais.",
        "Casos de congruência de triângulos: LLL (lado, lado, lado), LAL (lado, ângulo, lado), ALA (ângulo, lado, ângulo) e o caso especial do triângulo retângulo. Casos de semelhança: AA (dois ângulos), LLL (lados proporcionais) e LAL (dois lados proporcionais e ângulo entre eles).",
        "A razão de semelhança k relaciona comprimentos; áreas variam com k² e volumes com k³. Isso é útil em mapas, maquetes e ampliações."
      ],
      pontos: [
        "Congruente: mesma forma e tamanho.",
        "Semelhante: mesma forma, tamanhos proporcionais.",
        "Semelhança: ângulos iguais e lados proporcionais.",
        "Casos: AA, LLL e LAL.",
        "Razão k para comprimentos; k² para áreas; k³ para volumes.",
        "Triângulos equiláteros são sempre semelhantes."
      ],
      pegadinhas: [
        "Dois triângulos com lados proporcionais são semelhantes, mas dois polígonos quaisquer com lados proporcionais não necessariamente são.",
        "Áreas de figuras semelhantes não variam na mesma razão dos lados, e sim no quadrado da razão."
      ],
      termos: [
        { termo: "Congruência", definicao: "Relação entre figuras de mesma forma e mesmas medidas." },
        { termo: "Semelhança", definicao: "Relação entre figuras de mesma forma, com lados proporcionais." },
        { termo: "Razão de semelhança", definicao: "Fator k que relaciona comprimentos correspondentes de figuras semelhantes." }
      ]
    },
    {
      id: "matematica-1-5-2",
      grupo: "1.5 Geometria plana",
      numero: "1.5.2",
      titulo: "Paralelas, transversais e Teorema de Tales",
      resumo: [
        "Quando duas retas paralelas são cortadas por uma transversal, formam-se ângulos correspondentes, alternos internos, alternos externos e colaterais. Ângulos correspondentes e alternos internos são congruentes; colaterais internos são suplementares.",
        "O Teorema de Tales afirma que um feixe de retas paralelas determina segmentos proporcionais sobre duas ou mais transversais. Se as paralelas cortam as transversais em segmentos a, b e c, d, então a/b = c/d.",
        "O teorema é usado em problemas de mapas, sombras, rampas e divisão de segmentos. A recíproca também é válida: se os segmentos são proporcionais, as retas são paralelas."
      ],
      pontos: [
        "Correspondentes: congruentes.",
        "Alternos internos: congruentes.",
        "Colaterais internos: suplementares.",
        "Tales: segmentos proporcionais entre transversais.",
        "A recíproca identifica paralelismo.",
        "Use unidades consistentes."
      ],
      pegadinhas: [
        "Nem todo par de ângulos formado por transversal é congruente; colaterais somam 180°.",
        "O Teorema de Tales exige retas paralelas; sem paralelismo, a proporção não é garantida."
      ],
      termos: [
        { termo: "Retas paralelas", definicao: "Retas de um mesmo plano que não se intersectam." },
        { termo: "Transversal", definicao: "Reta que corta duas ou mais retas." },
        { termo: "Ângulos alternos internos", definicao: "Ângulos em lados opostos da transversal, entre as paralelas, congruentes entre si." }
      ]
    },
    {
      id: "matematica-1-5-3",
      grupo: "1.5 Geometria plana",
      numero: "1.5.3",
      titulo: "Teorema de Pitágoras e relações métricas",
      resumo: [
        "Em um triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos cateto: a² = b² + c². A hipotenusa é o lado oposto ao ângulo de 90° e é o maior lado.",
        "As relações métricas envolvem altura relativa à hipotenusa: h² = m × n; b² = a × m; c² = a × n; e a × h = b × c. Aqui, m e n são as projeções dos catetos sobre a hipotenusa.",
        "O teorema é usado para calcular distâncias, diagonais e alturas. Ternos pitagóricos, como 3-4-5, 6-8-10 e 5-12-13, aparecem com frequência em provas."
      ],
      pontos: [
        "a² = b² + c², com a hipotenusa.",
        "Hipotenusa é o maior lado.",
        "h² = m × n.",
        "b² = a × m; c² = a × n.",
        "a × h = b × c.",
        "Ternos pitagóricos facilitam cálculos."
      ],
      pegadinhas: [
        "O teorema de Pitágoras vale para triângulos retângulos, não para qualquer triângulo.",
        "A hipotenusa não é necessariamente o lado “de baixo”; é o lado oposto ao ângulo reto."
      ],
      termos: [
        { termo: "Hipotenusa", definicao: "Lado oposto ao ângulo reto em um triângulo retângulo." },
        { termo: "Cateto", definicao: "Cada um dos lados que formam o ângulo reto." },
        { termo: "Projeção", definicao: "Segmento determinado pela altura sobre a hipotenusa." }
      ]
    },
    {
      id: "matematica-1-6-1",
      grupo: "1.6 Trigonometria",
      numero: "1.6.1",
      titulo: "Razões trigonométricas no triângulo retângulo",
      resumo: [
        "Em um triângulo retângulo, seno é cateto oposto sobre hipotenusa; cosseno é cateto adjacente sobre hipotenusa; tangente é cateto oposto sobre cateto adjacente. As razões dependem do ângulo, não do tamanho do triângulo.",
        "Ângulos notáveis têm valores conhecidos: 30° (sen 1/2, cos √3/2, tg √3/3), 45° (sen √2/2, cos √2/2, tg 1) e 60° (sen √3/2, cos 1/2, tg √3). A relação fundamental é sen²θ + cos²θ = 1.",
        "A trigonometria resolve problemas de alturas inacessíveis, distâncias e inclinações, usando ângulos de elevação e depressão. A calculadora deve estar no modo correto (graus ou radianos)."
      ],
      pontos: [
        "sen θ = oposto/hipotenusa.",
        "cos θ = adjacente/hipotenusa.",
        "tg θ = oposto/adjacente.",
        "30°, 45° e 60° têm valores notáveis.",
        "sen²θ + cos²θ = 1.",
        "Razões não dependem do tamanho do triângulo."
      ],
      pegadinhas: [
        "Seno e cosseno não podem ser maiores que 1 em um triângulo retângulo.",
        "A tangente pode ser maior que 1; não confunda com seno e cosseno."
      ],
      termos: [
        { termo: "Seno", definicao: "Razão entre cateto oposto e hipotenusa." },
        { termo: "Cosseno", definicao: "Razão entre cateto adjacente e hipotenusa." },
        { termo: "Tangente", definicao: "Razão entre cateto oposto e cateto adjacente." }
      ]
    },
    {
      id: "matematica-1-7-1",
      grupo: "1.7 Estatística",
      numero: "1.7.1",
      titulo: "Conceitos, população, amostra e variáveis",
      resumo: [
        "Estatística coleta, organiza, analisa e interpreta dados. População é o conjunto completo de elementos de interesse; amostra é uma parte selecionada para estudo. Uma amostra representativa permite inferir características da população, mas sempre há margem de erro.",
        "Variáveis qualitativas expressam categorias (sexo, cor, opinião); quantitativas expressam números e podem ser discretas (contagens) ou contínuas (medidas). A classificação orienta os gráficos e as medidas adequadas.",
        "A coleta pode ser censitária, quando toda a população é investigada, ou amostral. Viés ocorre quando a seleção ou a formulação das perguntas distorce os resultados. Ética e privacidade são essenciais na pesquisa."
      ],
      pontos: [
        "População: todos os elementos de interesse.",
        "Amostra: subconjunto da população.",
        "Variável qualitativa: categorias.",
        "Variável quantitativa: discreta ou contínua.",
        "Censo investiga toda a população.",
        "Amostra deve ser representativa para evitar viés."
      ],
      pegadinhas: [
        "Amostra grande não garante ausência de viés; o método de seleção importa.",
        "Variável discreta pode assumir valores contáveis, enquanto a contínua pode assumir qualquer valor em um intervalo."
      ],
      termos: [
        { termo: "População", definicao: "Conjunto completo de elementos sobre os quais se deseja obter informação." },
        { termo: "Amostra", definicao: "Subconjunto selecionado de uma população para estudo." },
        { termo: "Variável", definicao: "Característica que pode assumir diferentes valores ou categorias." }
      ]
    },
    {
      id: "matematica-1-7-2",
      grupo: "1.7 Estatística",
      numero: "1.7.2",
      titulo: "Distribuição de frequências e gráficos",
      resumo: [
        "A tabela de frequências organiza os dados em classes ou categorias, com frequência absoluta (contagem), frequência relativa (proporção) e frequência acumulada. A frequência relativa pode ser expressa em porcentagem.",
        "Gráficos de barras comparam categorias; histogramas representam dados agrupados em classes; gráficos de setores mostram partes de um todo; gráficos de linha mostram evolução temporal. A escolha depende do tipo de variável e da mensagem.",
        "A leitura crítica exige observar escalas, legendas, unidades, o zero do eixo e possíveis omissões. Um gráfico pode ser tecnicamente correto e ainda assim enganoso se a escala for truncada ou a comparação for inadequada."
      ],
      pontos: [
        "Frequência absoluta: contagem.",
        "Frequência relativa: proporção do total.",
        "Frequência acumulada: soma das anteriores.",
        "Histograma: classes numéricas.",
        "Setores: partes de um todo.",
        "Observe escalas e legendas na leitura."
      ],
      pegadinhas: [
        "Gráfico de setores só faz sentido quando as partes somam um todo.",
        "Barras com escalas truncadas podem exagerar diferenças."
      ],
      termos: [
        { termo: "Frequência relativa", definicao: "Razão entre a frequência absoluta e o total de observações." },
        { termo: "Histograma", definicao: "Gráfico de barras para dados quantitativos agrupados em classes." },
        { termo: "Frequência acumulada", definicao: "Soma das frequências até determinada classe ou categoria." }
      ]
    },
    {
      id: "matematica-1-7-3",
      grupo: "1.7 Estatística",
      numero: "1.7.3",
      titulo: "Medidas de tendência central",
      resumo: [
        "A média aritmética é a soma dos valores dividida pela quantidade. A mediana é o valor central dos dados ordenados; com número par de observações, é a média dos dois centrais. A moda é o valor mais frequente e pode não existir ou ser múltipla.",
        "A média é sensível a valores extremos; a mediana é mais robusta. Em distribuições assimétricas, as três medidas podem ser diferentes. A escolha depende do objetivo e da natureza dos dados.",
        "Para dados agrupados em classes, a média pode ser calculada usando os pontos médios das classes como representantes. A mediana e a moda exigem procedimentos específicos para dados agrupados."
      ],
      pontos: [
        "Média: soma dividida pelo número de dados.",
        "Mediana: valor central após ordenar.",
        "Moda: valor mais frequente.",
        "A média é afetada por valores extremos.",
        "A mediana resiste melhor a outliers.",
        "Em dados agrupados, use pontos médios das classes."
      ],
      pegadinhas: [
        "Em um conjunto com valores extremos, a média pode não representar típicamente os dados.",
        "A moda pode não existir em um conjunto com todos os valores diferentes."
      ],
      termos: [
        { termo: "Média", definicao: "Soma dos valores dividida pela quantidade de observações." },
        { termo: "Mediana", definicao: "Valor que separa a metade inferior da metade superior dos dados ordenados." },
        { termo: "Moda", definicao: "Valor mais frequente em um conjunto de dados." }
      ]
    },
    {
      id: "matematica-1-7-4",
      grupo: "1.7 Estatística",
      numero: "1.7.4",
      titulo: "Medidas de dispersão e quartis",
      resumo: [
        "As medidas de dispersão indicam o quanto os dados se afastam da média. A amplitude é a diferença entre o maior e o menor valor. O desvio médio é a média dos módulos dos desvios. A variância é a média dos quadrados dos desvios; o desvio padrão é a raiz quadrada da variância.",
        "Quartis dividem os dados ordenados em quatro partes: Q1, Q2 (mediana) e Q3. O intervalo interquartil, Q3 − Q1, mede a dispersão central e é usado para identificar outliers. O boxplot representa esses valores.",
        "Quanto maior o desvio padrão, mais dispersos os dados. Duas séries podem ter a mesma média e dispersões muito diferentes; por isso, medidas de tendência central devem ser lidas junto com medidas de dispersão."
      ],
      pontos: [
        "Amplitude: máximo − mínimo.",
        "Variância: média dos quadrados dos desvios.",
        "Desvio padrão: raiz da variância.",
        "Q2 é a mediana.",
        "Intervalo interquartil: Q3 − Q1.",
        "Desvio padrão maior indica maior dispersão."
      ],
      pegadinhas: [
        "A variância está em unidade ao quadrado; o desvio padrão volta à unidade original.",
        "Um outlier pode aumentar muito a amplitude e a variância, mas afetar pouco a mediana."
      ],
      termos: [
        { termo: "Variância", definicao: "Média dos quadrados das diferenças entre cada valor e a média." },
        { termo: "Desvio padrão", definicao: "Raiz quadrada da variância, na mesma unidade dos dados." },
        { termo: "Quartil", definicao: "Valor que divide os dados ordenados em quatro partes iguais." }
      ]
    },
    {
      id: "matematica-1-7-5",
      grupo: "1.7 Estatística",
      numero: "1.7.5",
      titulo: "Probabilidade e interpretação de dados",
      resumo: [
        "Probabilidade mede a chance de um evento ocorrer. Em espaços equiprováveis, P(A) = número de casos favoráveis / número de casos possíveis. A probabilidade varia de 0 a 1, ou de 0% a 100%.",
        "A probabilidade do complemento é P(A') = 1 − P(A). Para eventos independentes, P(A e B) = P(A) × P(B). Para eventos mutuamente exclusivos, P(A ou B) = P(A) + P(B). Quando não são exclusivos, subtrai-se a interseção.",
        "Dados estatísticos permitem estimar probabilidades e tomar decisões, mas não garantem resultados individuais. Correlação não implica causalidade, e amostras pequenas ou enviesadas podem produzir conclusões equivocadas."
      ],
      pontos: [
        "P(A) = favoráveis/possíveis em espaços equiprováveis.",
        "0 ≤ P(A) ≤ 1.",
        "Complemento: 1 − P(A).",
        "Independentes: multiplica probabilidades.",
        "Mutuamente exclusivos: soma.",
        "Correlação não prova causalidade."
      ],
      pegadinhas: [
        "Dois eventos com probabilidades que somam 100% não são necessariamente complementares, a menos que cubram todo o espaço amostral.",
        "Uma sequência de resultados anteriores não altera a probabilidade de um próximo sorteio independente."
      ],
      termos: [
        { termo: "Probabilidade", definicao: "Medida da chance de ocorrência de um evento, entre 0 e 1." },
        { termo: "Evento complementar", definicao: "Evento que ocorre quando o evento original não ocorre." },
        { termo: "Eventos independentes", definicao: "Eventos cuja ocorrência de um não altera a probabilidade do outro." }
      ]
    }
  ],
  flashcards: [
    { f: "Ordem das operações?", v: "Parênteses e colchetes, potências e raízes, multiplicação e divisão, adição e subtração." },
    { f: "Como converter 0,00045 para notação científica?", v: "4,5 × 10⁻⁴: desloca-se a vírgula quatro casas para a direita e o expoente fica negativo." },
    { f: "Fórmula da função afim?", v: "f(x) = ax + b. a é a taxa de variação; b é o valor inicial f(0)." },
    { f: "Fórmula de Bhaskara?", v: "x = (−b ± √Δ)/(2a), com Δ = b² − 4ac." },
    { f: "Coordenadas do vértice da parábola?", v: "xᵥ = −b/(2a) e yᵥ = −Δ/(4a)." },
    { f: "Juros simples e compostos?", v: "Simples: M = C(1 + it). Compostos: M = C(1 + i)ᵗ." },
    { f: "Teorema de Pitágoras?", v: "Em triângulo retângulo: a² = b² + c², com a sendo a hipotenusa." },
    { f: "Razões trigonométricas?", v: "sen = oposto/hipotenusa; cos = adjacente/hipotenusa; tg = oposto/adjacente." },
    { f: "O que é mediana?", v: "Valor central dos dados ordenados. Com quantidade par, é a média dos dois valores centrais." },
    { f: "O que é desvio padrão?", v: "Raiz quadrada da variância; indica o quanto os dados se afastam da média." },
    { f: "Probabilidade do complemento?", v: "P(A') = 1 − P(A)." },
    { f: "Semelhança: como áreas e volumes variam?", v: "Se a razão de semelhança é k, áreas variam por k² e volumes por k³." }
  ],
  questoes: [
    {
      id: "matematica-q01",
      enunciado: "O valor de (2³)² é:",
      alternativas: ["32", "64", "128", "256", "512"],
      correta: 1,
      explicacao: "Aplicando a propriedade de potência de potência: (2³)² = 2⁶ = 64.",
      topicoId: "matematica-1-1-2"
    },
    {
      id: "matematica-q02",
      enunciado: "O número 0,00045 em notação científica é:",
      alternativas: ["4,5 × 10⁻⁴", "4,5 × 10⁻³", "45 × 10⁻⁵", "0,45 × 10⁻³", "4,5 × 10⁴"],
      correta: 0,
      explicacao: "Deslocando a vírgula quatro casas para a direita, obtém-se 4,5. Como o número original é menor que 1, o expoente é negativo: 4,5 × 10⁻⁴.",
      topicoId: "matematica-1-2-2"
    },
    {
      id: "matematica-q03",
      enunciado: "Se 5 máquinas produzem certa quantidade de peças em 12 dias, quantos dias 10 máquinas, com o mesmo ritmo, levarão para produzir a mesma quantidade?",
      alternativas: ["24 dias", "12 dias", "6 dias", "3 dias", "2 dias"],
      correta: 2,
      explicacao: "Máquinas e tempo são inversamente proporcionais: 5 × 12 = 10 × t → t = 6 dias. Dobrar o número de máquinas reduz o tempo pela metade.",
      topicoId: "matematica-1-2-1"
    },
    {
      id: "matematica-q04",
      enunciado: "Se f(x) = 2x − 3, então f(4) é:",
      alternativas: ["1", "3", "5", "7", "11"],
      correta: 2,
      explicacao: "Substituindo x por 4: f(4) = 2 × 4 − 3 = 8 − 3 = 5.",
      topicoId: "matematica-1-3-3"
    },
    {
      id: "matematica-q05",
      enunciado: "As raízes da equação x² − 5x + 6 = 0 são:",
      alternativas: ["1 e 6", "2 e 3", "−2 e −3", "0 e 5", "−1 e 6"],
      correta: 1,
      explicacao: "Fatorando: (x − 2)(x − 3) = 0, logo x = 2 ou x = 3. Também se obtém por Bhaskara com Δ = 25 − 24 = 1.",
      topicoId: "matematica-1-3-4"
    },
    {
      id: "matematica-q06",
      enunciado: "O vértice da parábola f(x) = x² − 4x + 3 é:",
      alternativas: ["(2, −1)", "(−2, 15)", "(4, 3)", "(2, 1)", "(1, 0)"],
      correta: 0,
      explicacao: "xᵥ = −b/(2a) = 4/2 = 2. f(2) = 4 − 8 + 3 = −1. Portanto, o vértice é (2, −1).",
      topicoId: "matematica-1-3-4"
    },
    {
      id: "matematica-q07",
      enunciado: "Um capital de R$ 1.000,00 é aplicado a juros simples de 2% ao mês durante 5 meses. O montante ao final é:",
      alternativas: ["R$ 1.020,00", "R$ 1.100,00", "R$ 1.200,00", "R$ 1.104,00", "R$ 1.500,00"],
      correta: 1,
      explicacao: "J = C i t = 1.000 × 0,02 × 5 = 100. Montante = 1.000 + 100 = R$ 1.100,00.",
      topicoId: "matematica-1-4-1"
    },
    {
      id: "matematica-q08",
      enunciado: "Um capital de R$ 1.000,00 é aplicado a juros compostos de 10% ao ano durante 2 anos. O montante é aproximadamente:",
      alternativas: ["R$ 1.100,00", "R$ 1.200,00", "R$ 1.210,00", "R$ 1.220,00", "R$ 1.300,00"],
      correta: 2,
      explicacao: "M = C(1 + i)ᵗ = 1.000 × (1,10)² = 1.000 × 1,21 = R$ 1.210,00. Os juros do segundo ano incidem sobre o montante do primeiro.",
      topicoId: "matematica-1-4-2"
    },
    {
      id: "matematica-q09",
      enunciado: "Dois triângulos são semelhantes com razão de semelhança 2. Se a área do menor é 10 cm², a área do maior é:",
      alternativas: ["20 cm²", "30 cm²", "40 cm²", "80 cm²", "100 cm²"],
      correta: 2,
      explicacao: "A razão entre áreas é o quadrado da razão de semelhança: 2² = 4. Logo, a área maior é 10 × 4 = 40 cm².",
      topicoId: "matematica-1-5-1"
    },
    {
      id: "matematica-q10",
      enunciado: "Duas retas paralelas são cortadas por uma transversal. Dois ângulos alternos internos medem 3x + 10° e 5x − 30°. O valor de x é:",
      alternativas: ["10°", "15°", "20°", "25°", "30°"],
      correta: 2,
      explicacao: "Ângulos alternos internos são congruentes: 3x + 10 = 5x − 30 → 40 = 2x → x = 20°.",
      topicoId: "matematica-1-5-2"
    },
    {
      id: "matematica-q11",
      enunciado: "Em um triângulo retângulo, os catetos medem 6 cm e 8 cm. A hipotenusa mede:",
      alternativas: ["10 cm", "12 cm", "14 cm", "48 cm", "100 cm"],
      correta: 0,
      explicacao: "Pelo teorema de Pitágoras: a² = 6² + 8² = 36 + 64 = 100, então a = 10 cm. É o terno pitagórico 6-8-10.",
      topicoId: "matematica-1-5-3"
    },
    {
      id: "matematica-q12",
      enunciado: "Em um triângulo retângulo, a hipotenusa mede 10 cm e um ângulo agudo mede 30°. O cateto oposto a esse ângulo mede:",
      alternativas: ["5 cm", "5√3 cm", "10√3 cm", "10 cm", "20 cm"],
      correta: 0,
      explicacao: "sen 30° = oposto/hipotenusa = 1/2. Assim, oposto = 10 × 1/2 = 5 cm. O outro cateto mediria 5√3 cm.",
      topicoId: "matematica-1-6-1"
    },
    {
      id: "matematica-q13",
      enunciado: "As notas de um aluno foram 6, 7, 8, 9 e 10. A média aritmética e a mediana são, respectivamente:",
      alternativas: ["8 e 8", "7 e 8", "8 e 9", "9 e 8", "7,5 e 7"],
      correta: 0,
      explicacao: "Média = (6 + 7 + 8 + 9 + 10)/5 = 40/5 = 8. A mediana, com cinco valores ordenados, é o terceiro: 8.",
      topicoId: "matematica-1-7-3"
    },
    {
      id: "matematica-q14",
      enunciado: "Em uma turma, 20 alunos tiraram nota 5 e 10 alunos tiraram nota 10. A média da turma é:",
      alternativas: ["5", "6", "6,67", "7,5", "10"],
      correta: 2,
      explicacao: "Média ponderada: (20 × 5 + 10 × 10)/30 = (100 + 100)/30 = 200/30 ≈ 6,67. A maior frequência de notas 5 puxa a média para baixo.",
      topicoId: "matematica-1-7-3"
    },
    {
      id: "matematica-q15",
      enunciado: "Ao lançar um dado comum de seis faces, qual é a probabilidade de sair um número par?",
      alternativas: ["1/6", "1/3", "1/2", "2/3", "5/6"],
      correta: 2,
      explicacao: "Os casos favoráveis são 2, 4 e 6: três em seis possibilidades. P = 3/6 = 1/2.",
      topicoId: "matematica-1-7-5"
    },
    {
      id: "matematica-q16",
      enunciado: "Em uma turma, a nota média é 7 e o desvio padrão é 0,5. Em outra turma, a média também é 7 e o desvio padrão é 2,0. É correto afirmar que:",
      alternativas: ["As duas turmas têm a mesma dispersão.", "A segunda turma é mais homogênea.", "A primeira turma tem notas mais concentradas próximas da média.", "A média da segunda turma é maior.", "O desvio padrão não mede dispersão."],
      correta: 2,
      explicacao: "O desvio padrão mede a dispersão em torno da média. O menor valor (0,5) indica notas mais concentradas; o maior (2,0), maior variação.",
      topicoId: "matematica-1-7-4"
    },
    {
      id: "matematica-q17",
      enunciado: "Um terreno retangular tem 30 m de frente e 40 m de profundidade. Sua área e seu perímetro são, respectivamente:",
      alternativas: ["1.200 m² e 140 m", "1.200 m² e 70 m", "70 m² e 1.200 m", "140 m² e 1.200 m", "600 m² e 140 m"],
      correta: 0,
      explicacao: "Área = 30 × 40 = 1.200 m². Perímetro = 2 × (30 + 40) = 140 m. Área e perímetro têm unidades e significados diferentes.",
      topicoId: "matematica-1-3-1"
    },
    {
      id: "matematica-q18",
      enunciado: "O ponto médio do segmento de extremidades A(2, 3) e B(8, 7) é:",
      alternativas: ["(5, 5)", "(6, 4)", "(10, 10)", "(3, 2)", "(4, 6)"],
      correta: 0,
      explicacao: "O ponto médio é ((2 + 8)/2, (3 + 7)/2) = (5, 5).",
      topicoId: "matematica-1-3-1"
    }
  ]
};
