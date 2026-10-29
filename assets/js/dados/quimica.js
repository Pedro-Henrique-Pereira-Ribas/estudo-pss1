window.PSS_DADOS = window.PSS_DADOS || {};
window.PSS_DADOS.quimica = {
  id: "quimica",
  nome: "Química",
  sigla: "QUI",
  cor: "#a06b3f",
  ordem: 7,
  descricao: "Matéria, estrutura atômica, ligações, reações, soluções e transformações de energia.",
  topicos: [
    {
      id: "quimica-2-1-1",
      grupo: "2.1 Estudo da matéria",
      numero: "2.1.1",
      titulo: "Propriedades, estados e mudanças da matéria",
      resumo: [
        "Matéria é tudo que tem massa e ocupa lugar no espaço. Suas propriedades podem ser gerais, como massa e volume, ou específicas, como densidade, ponto de fusão, ponto de ebulição e solubilidade. Propriedades intensivas não dependem da quantidade, enquanto as extensivas dependem.",
        "A matéria pode apresentar-se nos estados sólido, líquido e gasoso, além do plasma. No sólido, as partículas estão próximas e organizadas; no líquido, têm mobilidade relativa; no gás, estão afastadas e se movem livremente. As mudanças de estado envolvem energia: fusão, vaporização e sublimação absorvem calor; solidificação, condensação e ressublimação liberam calor.",
        "Transformações físicas não alteram a composição da substância, como mudar de estado ou dissolver sal em água. Transformações químicas formam novas substâncias, como combustão, ferrugem e digestão. A distinção nem sempre é óbvia: dissolver pode ser físico, e a dissolução com reação pode ser química."
      ],
      pontos: [
        "Propriedades gerais: massa, volume e inércia.",
        "Propriedades específicas: densidade, pontos de fusão e ebulição, solubilidade.",
        "Mudanças de estado são transformações físicas.",
        "Fusão, vaporização e sublimação são endotérmicas.",
        "Solidificação, condensação e ressublimação são exotérmicas.",
        "Transformação química forma novas substâncias."
      ],
      pegadinhas: [
        "Densidade é propriedade específica e intensiva; não depende do tamanho da amostra.",
        "Evaporação e ebulição são formas de vaporização, mas a ebulição ocorre a uma temperatura definida sob dada pressão."
      ],
      termos: [
        { termo: "Densidade", definicao: "Razão entre massa e volume de uma amostra." },
        { termo: "Sublimação", definicao: "Passagem direta do estado sólido para o gasoso." },
        { termo: "Propriedade intensiva", definicao: "Propriedade que não depende da quantidade de matéria." }
      ]
    },
    {
      id: "quimica-2-1-2",
      grupo: "2.1 Estudo da matéria",
      numero: "2.1.2",
      titulo: "Substâncias, misturas e separação",
      resumo: [
        "Substância pura tem composição fixa e propriedades constantes; pode ser simples, formada por um único elemento, ou composta, formada por elementos diferentes. Misturas contêm duas ou mais substâncias e podem ser homogêneas, com uma única fase, ou heterogêneas, com duas ou mais fases.",
        "A separação depende das propriedades dos componentes. Filtração retém sólidos; decantação sedimenta fases; centrifugação acelera a separação; destilação separa líquidos por ponto de ebulição; evaporação remove o solvente; cristalização purifica; cromatografia separa por afinidade; imã remove materiais ferromagnéticos.",
        "Misturas homogêneas podem ser separadas por destilação fracionada, como o petróleo, ou por evaporação. Misturas heterogêneas admitem filtração, decantação, flotação e peneiração. A escolha do método depende do estado físico, da solubilidade e das propriedades térmicas."
      ],
      pontos: [
        "Substância simples: um elemento; composta: mais de um elemento.",
        "Mistura homogênea: uma fase; heterogênea: mais de uma fase.",
        "Filtração e decantação separam fases.",
        "Destilação separa líquidos por volatilidade.",
        "Cromatografia separa por afinidade com a fase estacionária.",
        "Petróleo é separado por destilação fracionada."
      ],
      pegadinhas: [
        "Água potável e ar são misturas homogêneas, não substâncias puras.",
        "Uma mistura homogênea não é necessariamente uma substância composta; ela pode conter várias substâncias."
      ],
      termos: [
        { termo: "Fase", definicao: "Porção visualmente uniforme de um sistema." },
        { termo: "Destilação fracionada", definicao: "Separação de líquidos com pontos de ebulição diferentes." },
        { termo: "Cromatografia", definicao: "Técnica de separação baseada na diferente afinidade dos componentes por duas fases." }
      ]
    },
    {
      id: "quimica-2-2-1",
      grupo: "2.2 Leis ponderais e notação química",
      numero: "2.2.1",
      titulo: "Símbolos, fórmulas e equações químicas",
      resumo: [
        "Símbolos químicos representam elementos; fórmulas mostram a composição das substâncias. A fórmula molecular indica o número de átomos, a fórmula estrutural mostra as ligações e a fórmula mínima mostra a menor proporção entre os elementos. Subscritos indicam quantidades de átomos, e coeficientes indicam quantidades de moléculas ou mols.",
        "Uma equação química representa reagentes e produtos, com seta indicando o sentido da reação. Os estados físicos podem aparecer entre parênteses: (s), (l), (g) e (aq). A equação deve estar balanceada para conservar átomos e carga.",
        "Reações reversíveis usam seta dupla, e condições experimentais podem ser indicadas sobre a seta. A interpretação em mols é fundamental para cálculos estequiométricos."
      ],
      pontos: [
        "Símbolo: elemento; fórmula: composição da substância.",
        "Subscritos: átomos na molécula; coeficientes: proporção de mols.",
        "Reagentes à esquerda; produtos à direita.",
        "Estados físicos: (s), (l), (g), (aq).",
        "Equação balanceada conserva átomos e cargas."
      ],
      pegadinhas: [
        "Não se alteram subscritos para balancear uma equação; alteram-se coeficientes.",
        "H2O representa uma molécula de água; 2 H2O representa duas moléculas ou dois mols de água."
      ],
      termos: [
        { termo: "Fórmula molecular", definicao: "Fórmula que indica o número real de átomos de cada elemento na molécula." },
        { termo: "Coeficiente", definicao: "Número colocado antes da fórmula para indicar a proporção de mols." },
        { termo: "Equação química", definicao: "Representação simbólica de uma reação, com reagentes e produtos." }
      ]
    },
    {
      id: "quimica-2-2-2",
      grupo: "2.2 Leis ponderais e notação química",
      numero: "2.2.2",
      titulo: "Balanceamento, massa atômica e massa molar",
      resumo: [
        "Balancear é ajustar os coeficientes para que o número de átomos de cada elemento seja igual nos dois lados da equação. O método por tentativa funciona para muitas equações; para redox, pode-se usar a variação do número de oxidação. A conservação da massa e a conservação da carga devem ser respeitadas.",
        "A massa atômica é a média ponderada das massas dos isótopos de um elemento, expressa em unidade de massa atômica (u). A massa molar é a massa de um mol de entidades, em g/mol, numericamente igual à massa atômica ou molecular.",
        "A constante de Avogadro, aproximadamente 6,022 × 10²³, relaciona quantidade de matéria e número de partículas. A massa molar permite converter massa em mols e mols em número de partículas."
      ],
      pontos: [
        "Balanceamento: coeficientes ajustam a conservação dos átomos.",
        "Massa atômica é média ponderada dos isótopos.",
        "Massa molar: massa de 1 mol, em g/mol.",
        "1 mol contém 6,022 × 10²³ entidades.",
        "Balancear não é mudar subscritos.",
        "Em redox, o método do NOX ajuda no balanceamento."
      ],
      pegadinhas: [
        "Massa molecular e massa molar têm o mesmo valor numérico, mas unidades diferentes: u e g/mol.",
        "A massa atômica de um elemento não é a massa de um átomo específico; é uma média ponderada."
      ],
      termos: [
        { termo: "Mol", definicao: "Quantidade de matéria que contém 6,022 × 10²³ entidades." },
        { termo: "Massa molar", definicao: "Massa de um mol de uma substância, expressa em g/mol." },
        { termo: "Balanceamento", definicao: "Ajuste dos coeficientes de uma equação para conservar átomos." }
      ]
    },
    {
      id: "quimica-2-2-3",
      grupo: "2.2 Leis ponderais e notação química",
      numero: "2.2.3",
      titulo: "Leis ponderais",
      resumo: [
        "A Lei de Lavoisier, ou conservação da massa, afirma que em um sistema fechado a massa total dos reagentes é igual à massa total dos produtos. A Lei de Proust, ou proporções definidas, estabelece que uma substância composta tem proporção fixa em massa entre seus elementos.",
        "A Lei de Dalton, ou proporções múltiplas, observa que, quando dois elementos formam mais de um composto, as massas de um que se combinam com massa fixa do outro mantêm uma relação de números inteiros pequenos.",
        "Essas leis sustentam a ideia de átomos e permitem cálculos estequiométricos. Em sistemas abertos, a massa aparente pode variar pela entrada ou saída de gases, mas a matéria não desaparece."
      ],
      pontos: [
        "Lavoisier: massa se conserva em sistema fechado.",
        "Proust: proporção fixa em massa nas substâncias compostas.",
        "Dalton: proporções múltiplas entre compostos diferentes.",
        "As leis ponderais fundamentam a estequiometria.",
        "Em sistema aberto, gases podem escapar e alterar a massa medida."
      ],
      pegadinhas: [
        "A Lei de Lavoisier vale para sistemas fechados; em um copo aberto, a massa pode parecer mudar.",
        "Proporções definidas não significam que toda mistura tenha proporção fixa; a lei vale para substâncias compostas."
      ],
      termos: [
        { termo: "Lei de Lavoisier", definicao: "Em sistema fechado, a massa dos reagentes é igual à dos produtos." },
        { termo: "Lei de Proust", definicao: "Uma substância composta tem proporções fixas em massa." },
        { termo: "Lei de Dalton", definicao: "Quando dois elementos formam vários compostos, as massas combinadas seguem proporções inteiras." }
      ]
    },
    {
      id: "quimica-2-3-1",
      grupo: "2.3 Estrutura atômica",
      numero: "2.3.1",
      titulo: "Modelos atômicos",
      resumo: [
        "Dalton propôs o átomo como esfera maciça, indivisível e indestrutível. Thomson, ao descobrir o elétron, propôs um modelo de massa positiva com elétrons incrustados, conhecido como pudim de passas. Rutherford, com o experimento da lâmina de ouro, concluiu que o átomo tem um núcleo pequeno, denso e positivo, com elétrons ao redor.",
        "Bohr acrescentou níveis de energia quantizados: os elétrons circulam em órbitas permitidas e emitem ou absorvem energia ao saltar entre elas. O modelo quântico substituiu as órbitas por orbitais, regiões de probabilidade de encontrar o elétron.",
        "Cada modelo não foi simplesmente descartado: ele foi superado em seu alcance explicativo e incorporado como aproximação. Prótons, nêutrons e elétrons são partículas subatômicas; o número de prótons define o elemento."
      ],
      pontos: [
        "Dalton: átomo maciço e indivisível.",
        "Thomson: elétrons em uma massa positiva.",
        "Rutherford: núcleo positivo e eletrosfera.",
        "Bohr: níveis de energia quantizados.",
        "Modelo quântico: orbitais e probabilidade.",
        "O número de prótons define o elemento químico."
      ],
      pegadinhas: [
        "O experimento de Rutherford não descobriu o elétron; ele mostrou o núcleo atômico.",
        "Órbita de Bohr e orbital quântico não são sinônimos: orbital é uma região de probabilidade."
      ],
      termos: [
        { termo: "Núcleo atômico", definicao: "Região central do átomo, com prótons e nêutrons." },
        { termo: "Nível de energia", definicao: "Estado energético permitido para os elétrons em um átomo." },
        { termo: "Orbital", definicao: "Região do espaço com alta probabilidade de encontrar um elétron." }
      ]
    },
    {
      id: "quimica-2-3-2",
      grupo: "2.3 Estrutura atômica",
      numero: "2.3.2",
      titulo: "Número atômico, massa e isótopos",
      resumo: [
        "O número atômico (Z) é a quantidade de prótons e define o elemento. O número de massa (A) é a soma de prótons e nêutrons. Em um átomo neutro, o número de elétrons é igual ao de prótons; em íons, há diferença pela perda ou ganho de elétrons.",
        "Isótopos têm o mesmo Z e diferentes A, pois variam em nêutrons. Isóbaros têm o mesmo A e diferentes Z; isótonos têm o mesmo número de nêutrons; isoeletrônicos têm o mesmo número de elétrons.",
        "A notação A/Z X ou X-A resume esses dados. A massa atômica de um elemento é a média ponderada pelas abundâncias dos isótopos naturais."
      ],
      pontos: [
        "Z = prótons; define o elemento.",
        "A = prótons + nêutrons.",
        "Átomo neutro: elétrons = prótons.",
        "Isótopos: mesmo Z, diferente número de nêutrons.",
        "Isóbaros: mesmo A; isótonos: mesmo número de nêutrons.",
        "Isoeletrônicos: mesmo número de elétrons."
      ],
      pegadinhas: [
        "Isótopos têm propriedades químicas semelhantes, mas massas diferentes.",
        "Mudar o número de nêutrons não muda o elemento, mas mudar o número de prótons muda."
      ],
      termos: [
        { termo: "Número atômico", definicao: "Número de prótons de um átomo, simbolizado por Z." },
        { termo: "Número de massa", definicao: "Soma de prótons e nêutrons, simbolizada por A." },
        { termo: "Isótopo", definicao: "Átomo com o mesmo número de prótons e diferente número de nêutrons." }
      ]
    },
    {
      id: "quimica-2-3-3",
      grupo: "2.3 Estrutura atômica",
      numero: "2.3.3",
      titulo: "Bohr, números quânticos e distribuição eletrônica",
      resumo: [
        "Bohr propôs que os elétrons ocupam níveis de energia quantizados e que a emissão de luz ocorre quando um elétron retorna a um nível menor. O modelo quântico descreve os elétrons por números quânticos: principal (n), secundário (l), magnético (m) e spin (s).",
        "A distribuição eletrônica segue o diagrama de Pauling, o princípio de Aufbau, a exclusão de Pauli e a regra de Hund. Os elétrons preenchem subníveis em ordem crescente de energia, com no máximo dois elétrons por orbital e spins opostos.",
        "A configuração pode ser abreviada pelo gás nobre anterior. Ela explica propriedades periódicas, ligações e o comportamento dos íons. Nos íons, elétrons são adicionados ou removidos conforme a carga."
      ],
      pontos: [
        "Números quânticos: n, l, m e s.",
        "Diagrama de Pauling orienta o preenchimento dos subníveis.",
        "Pauli: no máximo dois elétrons por orbital, com spins opostos.",
        "Hund: orbitais de mesma energia recebem elétrons desemparelhados primeiro.",
        "Configuração abreviada usa o gás nobre anterior.",
        "Íons ganham ou perdem elétrons, não prótons."
      ],
      pegadinhas: [
        "O número quântico principal indica o nível, não o número de elétrons do átomo.",
        "Ao formar um cátion, o elétron sai primeiro do subnível de maior energia, não necessariamente do último da configuração."
      ],
      termos: [
        { termo: "Princípio de Aufbau", definicao: "Preenchimento dos orbitais em ordem crescente de energia." },
        { termo: "Princípio de Pauli", definicao: "Dois elétrons de um mesmo orbital não podem ter os quatro números quânticos iguais." },
        { termo: "Regra de Hund", definicao: "Em orbitais degenerados, os elétrons se distribuem desemparelhados primeiro." }
      ]
    },
    {
      id: "quimica-2-3-4",
      grupo: "2.3 Estrutura atômica",
      numero: "2.3.4",
      titulo: "Formação de íons",
      resumo: [
        "Íons são átomos ou grupos com carga elétrica por perda ou ganho de elétrons. Cátions são positivos e resultam da perda de elétrons; ânions são negativos e resultam do ganho. O número de prótons não muda na formação do íon.",
        "A tendência é buscar estabilidade eletrônica, frequentemente com oito elétrons na camada de valência. Metais alcalinos perdem um elétron e formam cátions +1; alcalinoterrosos perdem dois e formam +2; halogênios ganham um e formam −1; calcogênios ganham dois e formam −2.",
        "A carga de íons de metais de transição pode variar, como Fe²⁺ e Fe³⁺. A formação de íons é central para ligações iônicas e para a condutividade elétrica de soluções."
      ],
      pontos: [
        "Cátion: perde elétron, carga positiva.",
        "Ânion: ganha elétron, carga negativa.",
        "Prótons não mudam na ionização.",
        "Metais alcalinos tendem a +1; halogênios a −1.",
        "A camada de valência explica a tendência.",
        "Metais de transição podem ter cargas variáveis."
      ],
      pegadinhas: [
        "O íon sódio Na⁺ tem 11 prótons e 10 elétrons; não perdeu prótons.",
        "Ganhar elétrons aumenta o raio iônico de um ânion, enquanto perder elétrons diminui o raio de um cátion."
      ],
      termos: [
        { termo: "Cátion", definicao: "Íon positivo formado pela perda de elétrons." },
        { termo: "Ânion", definicao: "Íon negativo formado pelo ganho de elétrons." },
        { termo: "Camada de valência", definicao: "Camada eletrônica mais externa, que participa das ligações." }
      ]
    },
    {
      id: "quimica-2-4-1",
      grupo: "2.4 Classificação periódica dos elementos",
      numero: "2.4.1",
      titulo: "Tabela periódica: grupos e períodos",
      resumo: [
        "A tabela periódica organiza os elementos por número atômico crescente. As colunas são grupos ou famílias, com propriedades químicas semelhantes; as linhas são períodos, que indicam o número de camadas eletrônicas. Os elementos são classificados em metais, não metais, semimetais e gases nobres.",
        "Famílias importantes: alcalinos (grupo 1), alcalinoterrosos (2), halogênios (17) e gases nobres (18). Os metais de transição ocupam os grupos 3 a 12. A posição está relacionada à configuração eletrônica e ao número de elétrons de valência.",
        "Mendeleev organizou os elementos por massa atômica e previu propriedades de elementos ainda desconhecidos. Moseley estabeleceu o critério do número atômico. A tabela atual também é dividida em blocos s, p, d e f."
      ],
      pontos: [
        "Grupos: colunas; períodos: linhas.",
        "Período indica o número de camadas.",
        "Grupo indica elétrons de valência e propriedades semelhantes.",
        "Alcalinos: grupo 1; halogênios: 17; gases nobres: 18.",
        "Metais de transição: grupos 3 a 12.",
        "Moseley usou o número atômico para ordenar."
      ],
      pegadinhas: [
        "O hidrogênio não é um metal alcalino típico, apesar de estar no grupo 1.",
        "Semimetais têm propriedades intermediárias; não são simplesmente metais impuros."
      ],
      termos: [
        { termo: "Grupo", definicao: "Coluna da tabela periódica com elementos de propriedades semelhantes." },
        { termo: "Período", definicao: "Linha da tabela periódica; indica o número de camadas eletrônicas." },
        { termo: "Gás nobre", definicao: "Elemento do grupo 18, com camada de valência completa em condições usuais." }
      ]
    },
    {
      id: "quimica-2-4-2",
      grupo: "2.4 Classificação periódica dos elementos",
      numero: "2.4.2",
      titulo: "Propriedades periódicas",
      resumo: [
        "O raio atômico tende a crescer para baixo em um grupo e a diminuir para a direita em um período. A energia de ionização e a afinidade eletrônica geralmente aumentam para a direita e para cima. A eletronegatividade segue tendência semelhante, com o flúor como elemento mais eletronegativo.",
        "Essas tendências se explicam pela carga nuclear efetiva e pela distância dos elétrons ao núcleo. Quanto maior a atração do núcleo sobre os elétrons de valência, maior a energia de ionização e a eletronegatividade, e menor o raio.",
        "A densidade não segue uma tendência simples em toda a tabela, mas em geral aumenta nos metais de transição. Propriedades como caráter metálico, ponto de fusão e solubilidade também variam e devem ser analisadas com o contexto."
      ],
      pontos: [
        "Raio atômico aumenta para baixo e diminui para a direita.",
        "Energia de ionização aumenta para a direita e para cima.",
        "Eletronegatividade aumenta para a direita e para cima.",
        "Flúor é o elemento mais eletronegativo.",
        "Carga nuclear efetiva explica as tendências.",
        "Caráter metálico aumenta para baixo e para a esquerda."
      ],
      pegadinhas: [
        "Afinidade eletrônica e eletronegatividade não são a mesma propriedade, embora sigam tendências parecidas.",
        "Gases nobres têm baixa afinidade eletrônica e alta energia de ionização por já terem camada estável."
      ],
      termos: [
        { termo: "Eletronegatividade", definicao: "Tendência de um átomo em atrair elétrons em uma ligação química." },
        { termo: "Energia de ionização", definicao: "Energia necessária para remover um elétron de um átomo gasoso." },
        { termo: "Raio atômico", definicao: "Medida da extensão da eletrosfera de um átomo." }
      ]
    },
    {
      id: "quimica-2-5-1",
      grupo: "2.5 Ligações químicas",
      numero: "2.5.1",
      titulo: "Ligação iônica",
      resumo: [
        "A ligação iônica ocorre pela transferência de elétrons entre um metal e um não metal, formando cátions e ânions que se atraem eletrostaticamente. O composto iônico organiza-se em um retículo cristalino, não em moléculas isoladas.",
        "Compostos iônicos geralmente têm altos pontos de fusão e ebulição, são sólidos à temperatura ambiente, quebradiços e conduzem eletricidade quando fundidos ou dissolvidos em água. Exemplos incluem NaCl, MgO e CaCO3.",
        "A proporção dos íons depende das cargas: o composto deve ser eletricamente neutro. O NaCl tem Na⁺ e Cl⁻ em proporção 1:1; o CaCl2 tem Ca²⁺ e dois Cl⁻. A energia de rede influencia a dureza e a solubilidade."
      ],
      pontos: [
        "Transferência de elétrons entre metal e não metal.",
        "Forma cátions e ânions em retículo cristalino.",
        "Altos pontos de fusão e ebulição.",
        "Conduz corrente quando fundido ou dissolvido.",
        "A proporção iônica garante neutralidade.",
        "Não forma moléculas discretas."
      ],
      pegadinhas: [
        "Um composto iônico não é formado por moléculas de NaCl; o retículo contém íons em proporção definida.",
        "Sólidos iônicos não conduzem bem corrente, pois os íons estão fixos no retículo."
      ],
      termos: [
        { termo: "Retículo cristalino", definicao: "Arranjo ordenado e repetitivo de íons ou átomos em um sólido." },
        { termo: "Cátion", definicao: "Íon positivo formado pela perda de elétrons." },
        { termo: "Ânion", definicao: "Íon negativo formado pelo ganho de elétrons." }
      ]
    },
    {
      id: "quimica-2-5-2",
      grupo: "2.5 Ligações químicas",
      numero: "2.5.2",
      titulo: "Ligação covalente e polaridade",
      resumo: [
        "Na ligação covalente, átomos compartilham elétrons, geralmente entre não metais. Pode ser simples, dupla ou tripla, conforme o número de pares compartilhados. Compostos covalentes podem formar moléculas discretas ou redes covalentes, como o diamante e o quartzo.",
        "A polaridade depende da diferença de eletronegatividade e da geometria molecular. Ligações polares podem gerar moléculas polares ou apolares. A água é polar e angular; o CO2 tem ligações polares, mas é linear e apolar porque os vetores se anulam. O CH4 é tetraédrico e apolar.",
        "Compostos covalentes geralmente têm pontos de fusão e ebulição menores que os iônicos, pois as forças entre moléculas são mais fracas. Redes covalentes são exceção e apresentam altíssima dureza e pontos de fusão."
      ],
      pontos: [
        "Compartilhamento de elétrons entre não metais.",
        "Ligações simples, duplas ou triplas.",
        "Polaridade depende de eletronegatividade e geometria.",
        "H2O: polar; CO2: apolar; CH4: apolar.",
        "Moléculas covalentes geralmente têm baixos pontos de fusão.",
        "Diamante e quartzo são redes covalentes."
      ],
      pegadinhas: [
        "Ligação polar não garante molécula polar: o CO2 tem ligações polares e é apolar.",
        "Geometria molecular é decisiva para a polaridade; não basta olhar a diferença de eletronegatividade."
      ],
      termos: [
        { termo: "Ligação covalente", definicao: "Ligação em que átomos compartilham pares de elétrons." },
        { termo: "Polaridade", definicao: "Distribuição assimétrica de carga em uma ligação ou molécula." },
        { termo: "Geometria molecular", definicao: "Arranjo espacial dos átomos em uma molécula." }
      ]
    },
    {
      id: "quimica-2-5-3",
      grupo: "2.5 Ligações químicas",
      numero: "2.5.3",
      titulo: "Ligação metálica e forças intermoleculares",
      resumo: [
        "Na ligação metálica, os cátions ocupam posições fixas e os elétrons de valência formam um mar de elétrons deslocalizados. Isso explica a condutividade elétrica e térmica, a maleabilidade e a ductilidade dos metais. Ligas metálicas misturam elementos para melhorar propriedades.",
        "As forças intermoleculares mantêm moléculas unidas. As forças de London são dipolo instantâneo-induzido e ocorrem em todas as moléculas; as dipolo-dipolo ocorrem entre moléculas polares; as ligações de hidrogênio são interações fortes entre H ligado a N, O ou F e um par de elétrons vizinho.",
        "A intensidade dessas forças influencia pontos de fusão e ebulição, viscosidade e solubilidade. A água tem ligações de hidrogênio, o que explica seu alto ponto de ebulição e sua capacidade de dissolver substâncias polares."
      ],
      pontos: [
        "Mar de elétrons explica condutividade e maleabilidade.",
        "Metais formam ligas com propriedades ajustadas.",
        "London: forças universais e mais fracas.",
        "Dipolo-dipolo: moléculas polares.",
        "Ligação de hidrogênio: H com N, O ou F.",
        "Forças intermoleculares afetam propriedades físicas."
      ],
      pegadinhas: [
        "Ligação de hidrogênio é intermolecular, não a ligação covalente O-H dentro da água.",
        "Metais não conduzem por íons livres; conduzem por elétrons deslocalizados."
      ],
      termos: [
        { termo: "Mar de elétrons", definicao: "Modelo em que elétrons de valência se movem livremente entre cátions metálicos." },
        { termo: "Forças de London", definicao: "Forças intermoleculares entre dipolos instantâneos e induzidos." },
        { termo: "Ligação de hidrogênio", definicao: "Interação forte entre hidrogênio ligado a N, O ou F e um átomo eletronegativo vizinho." }
      ]
    },
    {
      id: "quimica-2-6-1",
      grupo: "2.6 Compostos inorgânicos",
      numero: "2.6.1",
      titulo: "Teoria ácido-base de Arrhenius e pH",
      resumo: [
        "Para Arrhenius, ácido é substância que libera íons H⁺ em água, e base é a que libera OH⁻. Essa definição funciona bem para ácidos e bases inorgânicos comuns, mas é limitada para substâncias que não se dissociam dessa forma. Depois surgiram definições mais amplas, como a de Brønsted-Lowry.",
        "O pH mede a acidez de uma solução: pH = −log[H⁺]. Quanto menor o pH, mais ácida a solução. A escala vai de 0 a 14 em condições usuais; pH 7 é neutro, abaixo é ácido e acima é básico. O pOH = −log[OH⁻] e, a 25 °C, pH + pOH = 14.",
        "Indicadores mudam de cor conforme o pH, como a fenolftaleína e o papel de tornassol. Ácidos e bases fortes se ionizam quase completamente; fracos se ionizam parcialmente. O pH é importante em processos biológicos, ambientais e industriais."
      ],
      pontos: [
        "Arrhenius: ácido libera H⁺; base libera OH⁻ em água.",
        "pH = −log[H⁺].",
        "pH < 7 ácido; pH = 7 neutro; pH > 7 básico.",
        "pH + pOH = 14 a 25 °C.",
        "Indicadores mudam de cor conforme o pH.",
        "Ácidos fortes ionizam quase totalmente."
      ],
      pegadinhas: [
        "pH não é a concentração de H⁺; é o negativo do logaritmo dessa concentração.",
        "Uma solução com pH 3 é dez vezes mais ácida que uma com pH 4, não o dobro."
      ],
      termos: [
        { termo: "pH", definicao: "Medida da acidez definida como −log[H⁺]." },
        { termo: "Indicador", definicao: "Substância que muda de cor em função do pH." },
        { termo: "Ácido forte", definicao: "Ácido que se ioniza praticamente por completo em água." }
      ]
    },
    {
      id: "quimica-2-6-2",
      grupo: "2.6 Compostos inorgânicos",
      numero: "2.6.2",
      titulo: "Classificação e propriedades de ácidos, bases, sais e óxidos",
      resumo: [
        "Ácidos têm sabor azedo, conduzem corrente em solução, neutralizam bases e tornam o tornassol vermelho. Bases têm sabor amargo, são escorregadias ao tato, neutralizam ácidos e tornam o tornassol azul. Sais resultam de neutralização e são formados por cátion de base e ânion de ácido.",
        "Óxidos são compostos binários com oxigênio. Óxidos ácidos reagem com água ou base formando ácido ou sal; óxidos básicos reagem com ácidos; óxidos anfóteros reagem com ambos; óxidos neutros não reagem com ácidos ou bases comuns. Exemplos: CO2, CaO, Al2O3 e CO.",
        "A força de ácidos e bases depende da ionização e da estabilidade dos íons. O caráter ácido ou básico de óxidos varia com o elemento ligado ao oxigênio. Reações de neutralização produzem sal e água."
      ],
      pontos: [
        "Ácidos: azedos, corroem metais, tornam tornassol vermelho.",
        "Bases: amargas, escorregadias, tornam tornassol azul.",
        "Sais: formados por cátion e ânion, obtidos em neutralizações.",
        "Óxidos ácidos, básicos, anfóteros e neutros.",
        "CO2 é óxido ácido; CaO é óxido básico.",
        "Neutralização: ácido + base → sal + água."
      ],
      pegadinhas: [
        "Nem todo óxido é ácido; o caráter depende do elemento e do contexto.",
        "Sal não é necessariamente neutro: soluções de sais podem ser ácidas ou básicas por hidrólise."
      ],
      termos: [
        { termo: "Neutralização", definicao: "Reação entre ácido e base que produz sal e água." },
        { termo: "Óxido anfótero", definicao: "Óxido que reage tanto com ácidos quanto com bases." },
        { termo: "Sal", definicao: "Composto iônico formado por cátions e ânions diferentes de H⁺ e OH⁻." }
      ]
    },
    {
      id: "quimica-2-6-3",
      grupo: "2.6 Compostos inorgânicos",
      numero: "2.6.3",
      titulo: "Nomenclatura inorgânica",
      resumo: [
        "Ácidos sem oxigênio recebem o sufixo -ídrico: HCl é ácido clorídrico, H2S é ácido sulfídrico. Ácidos com oxigênio usam -ico ou -oso conforme o NOX do elemento: H2SO4 é ácido sulfúrico, H2SO3 é ácido sulfuroso, HNO3 é ácido nítrico e HNO2 é ácido nitroso.",
        "Bases recebem o nome do cátion seguido de hidróxido: NaOH é hidróxido de sódio; Ca(OH)2 é hidróxido de cálcio. Sais derivam do ácido e da base, com terminação -eto, -ato ou -ito: NaCl é cloreto de sódio; CaCO3 é carbonato de cálcio; KNO2 é nitrito de potássio.",
        "Óxidos são nomeados como óxido de elemento: CO2 é dióxido de carbono; Fe2O3 é óxido de ferro(III); FeO é óxido de ferro(II). Prefixos e algarismos romanos indicam quantidade ou NOX quando necessário."
      ],
      pontos: [
        "HCl: ácido clorídrico; H2S: ácido sulfídrico.",
        "H2SO4: sulfúrico; H2SO3: sulfuroso.",
        "HNO3: nítrico; HNO2: nitroso.",
        "Bases: hidróxido de + cátion.",
        "Sais: cloreto, sulfato, nitrato, carbonato etc.",
        "Óxidos: óxido de + elemento, com prefixos se preciso."
      ],
      pegadinhas: [
        "Sufixo -oso indica menor NOX que -ico para o mesmo elemento.",
        "Não confunda ácido nítrico (HNO3) com ácido nitroso (HNO2), nem nitrato com nitrito."
      ],
      termos: [
        { termo: "Nomenclatura", definicao: "Conjunto de regras para nomear compostos químicos." },
        { termo: "NOX", definicao: "Número de oxidação, carga formal atribuída a um átomo em um composto." },
        { termo: "Hidróxido", definicao: "Composto básico formado por cátion e OH⁻." }
      ]
    },
    {
      id: "quimica-2-7-1",
      grupo: "2.7 Reações químicas",
      numero: "2.7.1",
      titulo: "Tipos de reação",
      resumo: [
        "Nas reações de síntese, duas ou mais substâncias formam um produto: A + B → AB. Nas de decomposição, um composto se rompe em substâncias menores: AB → A + B. Nas de deslocamento simples, um elemento desloca outro de um composto: A + BC → AC + B.",
        "Nas reações de dupla-troca, dois compostos trocam íons: AB + CD → AD + CB. A neutralização é um caso de dupla-troca entre ácido e base, produzindo sal e água. Reações de combustão envolvem um combustível e oxigênio, liberando energia, CO2 e água quando a combustão é completa.",
        "Classificar uma reação ajuda a prever produtos e a balancear. Muitas reações se encaixam em mais de uma descrição, e o contexto experimental define o fenômeno principal."
      ],
      pontos: [
        "Síntese: A + B → AB.",
        "Decomposição: AB → A + B.",
        "Deslocamento simples: A + BC → AC + B.",
        "Dupla-troca: AB + CD → AD + CB.",
        "Neutralização: ácido + base → sal + água.",
        "Combustão completa produz CO2 e H2O."
      ],
      pegadinhas: [
        "Nem toda reação com oxigênio é combustão; oxidação de metal, por exemplo, não é combustão completa.",
        "Em dupla-troca, os íons trocam de parceiro, mas as cargas precisam ser respeitadas nas fórmulas."
      ],
      termos: [
        { termo: "Síntese", definicao: "Reação em que substâncias se combinam para formar um produto." },
        { termo: "Decomposição", definicao: "Reação em que um composto se divide em substâncias mais simples." },
        { termo: "Combustão", definicao: "Reação exotérmica entre combustível e oxidante, geralmente oxigênio." }
      ]
    },
    {
      id: "quimica-2-7-2",
      grupo: "2.7 Reações químicas",
      numero: "2.7.2",
      titulo: "Oxirredução e número de oxidação",
      resumo: [
        "Número de oxidação (NOX) é a carga que um átomo teria se as ligações fossem iônicas. Em substâncias simples, o NOX é zero. Em íons monoatômicos, é igual à carga. O oxigênio costuma ter NOX −2, e o hidrogênio +1, com exceções em hidretos metálicos.",
        "Na oxidação, o NOX aumenta e há perda de elétrons; na redução, o NOX diminui e há ganho de elétrons. O agente oxidante sofre redução; o agente redutor sofre oxidação. Esses processos ocorrem simultaneamente.",
        "O balanceamento redox pode ser feito pela variação de NOX: a variação total de oxidação deve igualar a de redução. Exemplos incluem a formação de ferrugem, a combustão e a corrosão de metais."
      ],
      pontos: [
        "Substância simples: NOX 0.",
        "Oxigênio: geralmente −2; hidrogênio: geralmente +1.",
        "Oxidação: aumenta NOX, perde elétrons.",
        "Redução: diminui NOX, ganha elétrons.",
        "Agente oxidante reduz; agente redutor oxida.",
        "Balanceamento redox iguala as variações de NOX."
      ],
      pegadinhas: [
        "O agente oxidante não é o que sofre oxidação; ele provoca a oxidação do outro e sofre redução.",
        "NOX é uma carga formal, não necessariamente a carga real do átomo em uma ligação covalente."
      ],
      termos: [
        { termo: "Oxidação", definicao: "Processo com aumento do número de oxidação e perda de elétrons." },
        { termo: "Redução", definicao: "Processo com diminuição do número de oxidação e ganho de elétrons." },
        { termo: "Agente redutor", definicao: "Espécie que doa elétrons e sofre oxidação." }
      ]
    },
    {
      id: "quimica-2-8-1",
      grupo: "2.8 Cálculos químicos",
      numero: "2.8.1",
      titulo: "Mol, massa molar e constante de Avogadro",
      resumo: [
        "O mol é a unidade de quantidade de matéria e contém 6,022 × 10²³ entidades. A massa molar é a massa de um mol, em g/mol. Para a água, H2O, a massa molar é 18 g/mol: 2 × 1 + 16.",
        "As conversões fundamentais são: massa ↔ mol, usando a massa molar; mol ↔ partículas, usando a constante de Avogadro; mol ↔ volume de gás, usando 22,4 L/mol nas condições normais de temperatura e pressão (CNTP).",
        "Esses cálculos são a base da estequiometria e da análise quantitativa. É importante identificar a entidade: átomos, moléculas, íons ou fórmulas unitárias."
      ],
      pontos: [
        "1 mol = 6,022 × 10²³ entidades.",
        "Massa molar em g/mol.",
        "Massa = mol × massa molar.",
        "Volume molar nas CNTP: 22,4 L/mol.",
        "Identifique se a entidade é átomo, molécula ou íon.",
        "A constante de Avogadro conecta mol e número de partículas."
      ],
      pegadinhas: [
        "1 mol de H2 tem 6,022 × 10²³ moléculas, mas 2 × 6,022 × 10²³ átomos de hidrogênio.",
        "22,4 L/mol é uma aproximação para gases ideais nas CNTP; não vale para qualquer condição."
      ],
      termos: [
        { termo: "Mol", definicao: "Quantidade de matéria com 6,022 × 10²³ entidades." },
        { termo: "Massa molar", definicao: "Massa de um mol de determinada entidade, em g/mol." },
        { termo: "Constante de Avogadro", definicao: "Número de entidades em um mol: aproximadamente 6,022 × 10²³." }
      ]
    },
    {
      id: "quimica-2-8-2",
      grupo: "2.8 Cálculos químicos",
      numero: "2.8.2",
      titulo: "Estequiometria",
      resumo: [
        "A estequiometria usa as proporções molares da equação balanceada para calcular massas, volumes ou quantidades de substâncias. Os coeficientes indicam a proporção em mols, não em massa. O primeiro passo é sempre balancear a equação.",
        "O cálculo típico segue: massa de A → mol de A → mol de B, pela proporção → massa de B. Também é possível trabalhar com volume de gases e concentração de soluções, convertendo para mols.",
        "Quando há reagente limitante, a quantidade de produto depende dele. O reagente em excesso sobra após a reação. O rendimento relaciona a quantidade real obtida com a teórica, e a pureza considera a fração de substância ativa na amostra."
      ],
      pontos: [
        "Balanceie a equação antes de calcular.",
        "Coeficientes são proporções em mols.",
        "Sequência: massa → mol → proporção → massa.",
        "Reagente limitante determina o máximo de produto.",
        "Rendimento = real/teórico × 100%.",
        "Pureza = massa ativa/massa total × 100%."
      ],
      pegadinhas: [
        "Não se compara massa diretamente com massa usando coeficientes; é preciso passar por mols.",
        "O reagente em excesso não é o que limita a reação; o limitante é o que se esgota primeiro."
      ],
      termos: [
        { termo: "Estequiometria", definicao: "Cálculo das proporções entre reagentes e produtos de uma reação." },
        { termo: "Reagente limitante", definicao: "Reagente que se esgota primeiro e limita a quantidade de produto." },
        { termo: "Rendimento", definicao: "Razão percentual entre a quantidade real obtida e a teórica." }
      ]
    },
    {
      id: "quimica-2-8-3",
      grupo: "2.8 Cálculos químicos",
      numero: "2.8.3",
      titulo: "Pureza, rendimento e reagente em excesso",
      resumo: [
        "A pureza indica a porcentagem da substância de interesse em uma amostra. Se uma amostra de 100 g tem 80% de pureza, apenas 80 g participam da reação. O cálculo deve usar a massa efetiva da substância ativa.",
        "O rendimento compara a massa obtida experimentalmente com a massa teórica calculada pela estequiometria. Perdas em filtração, evaporação e reações laterais explicam rendimentos menores que 100%.",
        "O reagente limitante é consumido por completo; o excesso permanece. Para descobrir o limitante, calcula-se quanto produto cada reagente formaria e escolhe-se o menor valor. Esses conceitos aparecem em problemas industriais e ambientais."
      ],
      pontos: [
        "Pureza: fração da amostra que é substância ativa.",
        "Use a massa pura nos cálculos.",
        "Rendimento = massa real/massa teórica × 100%.",
        "Limitante: produz menos produto.",
        "Excesso: sobra ao final da reação.",
        "Perdas experimentais reduzem o rendimento."
      ],
      pegadinhas: [
        "Rendimento acima de 100% indica erro experimental ou impureza no produto, não ganho de matéria.",
        "A massa da amostra bruta não é a massa do reagente puro; aplique a pureza antes."
      ],
      termos: [
        { termo: "Pureza", definicao: "Porcentagem de substância ativa em uma amostra." },
        { termo: "Rendimento teórico", definicao: "Quantidade máxima de produto prevista pela estequiometria." },
        { termo: "Excesso", definicao: "Quantidade de reagente que permanece após a reação." }
      ]
    },
    {
      id: "quimica-2-9-1",
      grupo: "2.9 Soluções",
      numero: "2.9.1",
      titulo: "Soluções: conceito, classificação e solubilidade",
      resumo: [
        "Solução é uma mistura homogênea de soluto e solvente. O solvente é o componente em maior quantidade ou que dissolve; o soluto é a substância dissolvida. Soluções podem ser sólidas, líquidas ou gasosas, e o soluto pode ser eletrólito ou não eletrólito.",
        "Quanto à saturação, uma solução insaturada dissolve mais soluto; saturada está no limite de solubilidade; supersaturada contém mais soluto do que o equilíbrio permite, geralmente de forma instável. A solubilidade depende de temperatura, pressão e natureza das substâncias.",
        "A regra geral é que semelhante dissolve semelhante: solventes polares dissolvem solutos polares, e solventes apolares dissolvem solutos apolares. A temperatura aumenta a solubilidade de muitos sólidos, mas pode diminuir a de gases."
      ],
      pontos: [
        "Solução: mistura homogênea de soluto e solvente.",
        "Insaturada, saturada e supersaturada.",
        "Solubilidade depende de temperatura e pressão.",
        "Semelhante dissolve semelhante.",
        "Eletrólitos conduzem corrente em solução.",
        "A concentração expressa a quantidade de soluto."
      ],
      pegadinhas: [
        "Solução saturada não é necessariamente concentrada; depende da solubilidade da substância.",
        "Aumentar a temperatura nem sempre aumenta a solubilidade; para gases, geralmente diminui."
      ],
      termos: [
        { termo: "Soluto", definicao: "Substância dissolvida em uma solução." },
        { termo: "Solvente", definicao: "Componente que dissolve o soluto e geralmente está em maior quantidade." },
        { termo: "Solução saturada", definicao: "Solução que contém a máxima quantidade de soluto dissolvido em dada condição." }
      ]
    },
    {
      id: "quimica-2-9-2",
      grupo: "2.9 Soluções",
      numero: "2.9.2",
      titulo: "Unidades de concentração",
      resumo: [
        "A concentração comum é massa de soluto por volume de solução, em g/L. A porcentagem em massa relaciona massa de soluto e massa total, e a porcentagem em volume relaciona volumes. Partes por milhão (ppm) é usada para concentrações muito pequenas.",
        "A concentração em quantidade de matéria, ou molaridade, é mol de soluto por litro de solução, em mol/L. A densidade da solução relaciona massa e volume e pode ajudar a converter unidades.",
        "É essencial distinguir solução de solvente: o volume usado é o da solução final, não o volume de água adicionado. A concentração também pode ser expressa em molalidade, mas essa não é a unidade mais comum em provas de vestibular."
      ],
      pontos: [
        "Concentração comum: g/L.",
        "Molaridade: mol/L.",
        "Porcentagem em massa: m soluto/m solução × 100%.",
        "ppm: partes por milhão.",
        "Densidade liga massa e volume.",
        "Use o volume final da solução."
      ],
      pegadinhas: [
        "Molaridade usa mol por litro de solução, não por litro de solvente.",
        "Misturar 1 L de água com 1 L de álcool não gera exatamente 2 L de solução; os volumes podem não ser aditivos."
      ],
      termos: [
        { termo: "Molaridade", definicao: "Concentração em mols de soluto por litro de solução." },
        { termo: "Concentração comum", definicao: "Massa de soluto por volume de solução, geralmente em g/L." },
        { termo: "ppm", definicao: "Partes por milhão, unidade para concentrações muito baixas." }
      ]
    },
    {
      id: "quimica-2-9-3",
      grupo: "2.9 Soluções",
      numero: "2.9.3",
      titulo: "Diluição e mistura de soluções",
      resumo: [
        "Na diluição, adiciona-se solvente a uma solução, aumentando o volume e diminuindo a concentração, sem alterar a quantidade de soluto. A relação é M1 × V1 = M2 × V2 para molaridade, ou C1 × V1 = C2 × V2 para concentração comum.",
        "Na mistura de soluções do mesmo soluto, soma-se a quantidade de soluto e o volume final, desde que não haja reação. Se as soluções reagem, é preciso calcular o reagente limitante e a concentração final das espécies.",
        "A diluição é usada em laboratórios, na preparação de medicamentos e no tratamento de água. Sempre se adiciona ácido à água, e não o contrário, para controlar a liberação de calor."
      ],
      pontos: [
        "Diluição: quantidade de soluto constante.",
        "M1V1 = M2V2.",
        "C1V1 = C2V2 para concentração comum.",
        "Mistura sem reação: somam-se solutos e volumes.",
        "Com reação: determine o limitante.",
        "Ácido na água, nunca água no ácido concentrado."
      ],
      pegadinhas: [
        "Diluir não altera o número de mols do soluto; apenas o volume e a concentração.",
        "Na mistura de soluções com reação, a concentração final não é a média das concentrações iniciais."
      ],
      termos: [
        { termo: "Diluição", definicao: "Adição de solvente para reduzir a concentração de uma solução." },
        { termo: "Molaridade final", definicao: "Concentração após diluição ou mistura, considerando o volume total." },
        { termo: "Mistura de soluções", definicao: "União de duas ou mais soluções, com ou sem reação química." }
      ]
    },
    {
      id: "quimica-3-1-1",
      grupo: "3.1 Termoquímica e cinética",
      numero: "3.1.1",
      titulo: "Termoquímica: entalpia e Lei de Hess",
      resumo: [
        "Termoquímica estuda as trocas de energia em reações químicas. A entalpia (H) representa o conteúdo energético do sistema. A variação de entalpia, ΔH, é negativa em reações exotérmicas, que liberam calor, e positiva em endotérmicas, que absorvem calor.",
        "A entalpia padrão de formação, de combustão e de ligação permite calcular ΔH. A Lei de Hess afirma que a variação de entalpia depende apenas dos estados inicial e final, não do caminho, permitindo somar equações e entalpias parciais.",
        "Gráficos de energia mostram a diferença entre reagentes e produtos. A energia de ativação é a barreira cinética, enquanto ΔH é a diferença energética entre os estados. Catalisadores reduzem a energia de ativação, mas não alteram ΔH."
      ],
      pontos: [
        "Exotérmica: ΔH < 0, libera calor.",
        "Endotérmica: ΔH > 0, absorve calor.",
        "Lei de Hess: ΔH depende só dos estados inicial e final.",
        "Entalpia de formação e combustão são usadas em cálculos.",
        "Catalisador não altera ΔH.",
        "Gráficos mostram energia dos reagentes e produtos."
      ],
      pegadinhas: [
        "ΔH negativo não significa reação rápida; velocidade e termodinâmica são aspectos diferentes.",
        "A Lei de Hess permite inverter equações, mas ao inverter, o sinal de ΔH também inverte."
      ],
      termos: [
        { termo: "Entalpia", definicao: "Grandeza que representa o conteúdo energético de um sistema a pressão constante." },
        { termo: "Reação exotérmica", definicao: "Reação que libera energia na forma de calor, com ΔH negativo." },
        { termo: "Lei de Hess", definicao: "A variação de entalpia de uma reação depende apenas dos estados inicial e final." }
      ]
    },
    {
      id: "quimica-3-1-2",
      grupo: "3.1 Termoquímica e cinética",
      numero: "3.1.2",
      titulo: "Cinética química: velocidade e fatores",
      resumo: [
        "Cinética química estuda a velocidade das reações e os fatores que a alteram. A velocidade média é a variação da concentração de um reagente ou produto dividida pelo intervalo de tempo. A velocidade pode ser expressa em mol/L·s.",
        "Aumentar concentração, temperatura, superfície de contato e pressão de gases geralmente aumenta a frequência e a energia das colisões, acelerando a reação. Catalisadores oferecem um caminho de menor energia de ativação. Inibidores diminuem a velocidade.",
        "A teoria das colisões explica que nem toda colisão é eficaz: é preciso energia suficiente e orientação adequada. A equação da velocidade relaciona a velocidade com as concentrações dos reagentes e constantes de velocidade, dependendo da ordem da reação."
      ],
      pontos: [
        "Velocidade média: Δconcentração/Δt.",
        "Concentração e temperatura aumentam a velocidade.",
        "Superfície de contato acelera reações heterogêneas.",
        "Catalisador reduz a energia de ativação.",
        "Colisões eficazes exigem energia e orientação.",
        "A ordem da reação é determinada experimentalmente."
      ],
      pegadinhas: [
        "Aumentar a temperatura aumenta a velocidade, mas não necessariamente o rendimento; o equilíbrio pode se deslocar.",
        "Catalisador não é consumido de forma permanente e não altera a constante de equilíbrio."
      ],
      termos: [
        { termo: "Energia de ativação", definicao: "Energia mínima necessária para que as colisões iniciem a reação." },
        { termo: "Catalisador", definicao: "Substância que acelera a reação por um caminho de menor energia de ativação." },
        { termo: "Velocidade média", definicao: "Variação de concentração de uma espécie por unidade de tempo." }
      ]
    },
    {
      id: "quimica-3-1-3",
      grupo: "3.1 Termoquímica e cinética",
      numero: "3.1.3",
      titulo: "Energia de ativação, catalisadores e equação da velocidade",
      resumo: [
        "A energia de ativação é a barreira energética que os reagentes precisam superar para formar o complexo ativado. Quanto menor essa barreira, mais rápida tende a ser a reação em dada temperatura. O gráfico de energia mostra um pico entre reagentes e produtos.",
        "Catalisadores diminuem a energia de ativação sem serem consumidos. A catálise pode ser homogênea, quando o catalisador está na mesma fase dos reagentes, heterogênea, quando está em fase diferente, ou enzimática, com biocatalisadores. Catalisadores não alteram ΔH nem o equilíbrio termodinâmico.",
        "A equação da velocidade, como v = k[A]^m[B]^n, expressa a dependência experimental da velocidade em relação às concentrações. A constante k depende da temperatura e da energia de ativação, conforme a equação de Arrhenius."
      ],
      pontos: [
        "Energia de ativação: barreira para a reação.",
        "Catalisador abaixa a barreira e acelera.",
        "Catálise homogênea, heterogênea e enzimática.",
        "Catalisador não muda ΔH.",
        "Equação da velocidade é determinada experimentalmente.",
        "k depende da temperatura."
      ],
      pegadinhas: [
        "Catalisador não aumenta a quantidade de produto de uma reação em equilíbrio; apenas ajuda a atingir o equilíbrio mais rápido.",
        "Os expoentes da equação da velocidade não são simplesmente os coeficientes da equação balanceada."
      ],
      termos: [
        { termo: "Complexo ativado", definicao: "Estado de transição de alta energia formado durante a colisão eficaz." },
        { termo: "Catálise heterogênea", definicao: "Catálise em que o catalisador está em fase diferente dos reagentes." },
        { termo: "Equação de Arrhenius", definicao: "Relação entre constante de velocidade, temperatura e energia de ativação." }
      ]
    }
  ],
  flashcards: [
    { f: "Qual é a fórmula do pH?", v: "pH = −log[H⁺]. A 25 °C, pH + pOH = 14." },
    { f: "O que são isótopos?", v: "Átomos com o mesmo número de prótons e diferentes números de nêutrons." },
    { f: "Ligação iônica versus covalente?", v: "Iônica: transferência de elétrons, geralmente metal e não metal. Covalente: compartilhamento de elétrons, geralmente entre não metais." },
    { f: "Quanto vale 1 mol?", v: "6,022 × 10²³ entidades, a constante de Avogadro." },
    { f: "Como balancear uma equação?", v: "Ajustando os coeficientes para igualar o número de átomos de cada elemento nos dois lados, sem alterar os subscritos." },
    { f: "O que diz a Lei de Hess?", v: "A variação de entalpia depende apenas dos estados inicial e final, não do caminho da reação." },
    { f: "Como diluir uma solução?", v: "Adicionando solvente: M1V1 = M2V2, mantendo a quantidade de soluto constante." },
    { f: "O que é NOX?", v: "Número de oxidação: carga formal atribuída a um átomo em uma ligação, útil para identificar oxidação e redução." },
    { f: "Tendência do raio atômico?", v: "Aumenta para baixo nos grupos e diminui para a direita nos períodos." },
    { f: "Ácido forte versus fraco?", v: "Forte ioniza quase completamente em água; fraco ioniza parcialmente." },
    { f: "O que é reagente limitante?", v: "O reagente que se esgota primeiro e determina a quantidade máxima de produto." },
    { f: "Catalisador altera ΔH?", v: "Não. Ele diminui a energia de ativação e acelera a reação, mas não altera a entalpia dos reagentes ou produtos." }
  ],
  questoes: [
    {
      id: "quimica-q01",
      enunciado: "Para separar areia de água em uma mistura heterogênea, o método mais direto é:",
      alternativas: ["Destilação fracionada.", "Filtração.", "Cromatografia.", "Sublimação.", "Centrifugação com solvente orgânico."],
      correta: 1,
      explicacao: "A filtração retém a areia, que é sólida e insolúvel, e deixa passar a água. A destilação separaria líquidos voláteis; a cromatografia é para componentes com afinidades diferentes.",
      topicoId: "quimica-2-1-2"
    },
    {
      id: "quimica-q02",
      enunciado: "Qual mudança de estado é endotérmica?",
      alternativas: ["Condensação.", "Solidificação.", "Fusão.", "Ressublimação.", "Liquefação."],
      correta: 2,
      explicacao: "A fusão absorve calor para romper as interações do sólido. Condensação, solidificação e ressublimação liberam calor.",
      topicoId: "quimica-2-1-1"
    },
    {
      id: "quimica-q03",
      enunciado: "Dois átomos têm o mesmo número atômico, mas números de massa diferentes. Eles são:",
      alternativas: ["Isóbaros.", "Isótonos.", "Isótopos.", "Isoeletrônicos.", "Alótropos."],
      correta: 2,
      explicacao: "Isótopos têm o mesmo número de prótons e diferem no número de nêutrons, o que altera o número de massa.",
      topicoId: "quimica-2-3-2"
    },
    {
      id: "quimica-q04",
      enunciado: "A configuração eletrônica do cloro (Z = 17) no estado fundamental é:",
      alternativas: ["1s² 2s² 2p⁶ 3s² 3p⁵", "1s² 2s² 2p⁶ 3s¹ 3p⁶", "1s² 2s² 2p⁵ 3s² 3p⁶", "1s² 2s² 2p⁶ 3s² 3p⁶", "1s² 2s² 2p⁶ 3s² 3p⁴"],
      correta: 0,
      explicacao: "O cloro tem 17 elétrons: 2 + 2 + 6 + 2 + 5 = 17, terminando em 3p⁵. A configuração com 3p⁶ corresponderia ao ânion Cl⁻.",
      topicoId: "quimica-2-3-3"
    },
    {
      id: "quimica-q05",
      enunciado: "Em um mesmo período da tabela periódica, ao avançar da esquerda para a direita, geralmente ocorre:",
      alternativas: ["Aumento do raio atômico e da eletronegatividade.", "Diminuição do raio atômico e aumento da eletronegatividade.", "Aumento do raio atômico e diminuição da energia de ionização.", "Diminuição da eletronegatividade e aumento do raio.", "Aumento do caráter metálico."],
      correta: 1,
      explicacao: "A carga nuclear efetiva aumenta ao longo do período, atraindo mais os elétrons: o raio diminui e a eletronegatividade e a energia de ionização aumentam.",
      topicoId: "quimica-2-4-2"
    },
    {
      id: "quimica-q06",
      enunciado: "Uma substância sólida, solúvel em água, conduz eletricidade quando dissolvida, mas não quando sólida. Esse comportamento é típico de:",
      alternativas: ["Metais.", "Compostos iônicos.", "Gases nobres.", "Compostos covalentes apolares.", "Materiais plásticos."],
      correta: 1,
      explicacao: "Compostos iônicos conduzem quando fundidos ou dissolvidos, pois os íons ficam livres. No sólido, os íons estão fixos no retículo e não conduzem bem.",
      topicoId: "quimica-2-5-1"
    },
    {
      id: "quimica-q07",
      enunciado: "Qual das moléculas a seguir é polar, apesar de ter ligações covalentes?",
      alternativas: ["CO2.", "CH4.", "H2O.", "CCl4.", "BF3."],
      correta: 2,
      explicacao: "A água é angular e os dipolos das ligações O-H não se anulam, resultando em molécula polar. CO2, CH4, CCl4 e BF3 têm geometrias que cancelam os dipolos.",
      topicoId: "quimica-2-5-2"
    },
    {
      id: "quimica-q08",
      enunciado: "Uma solução apresenta [H⁺] = 1 × 10⁻³ mol/L. Seu pH é:",
      alternativas: ["3, e a solução é ácida.", "3, e a solução é básica.", "11, e a solução é básica.", "11, e a solução é ácida.", "7, e a solução é neutra."],
      correta: 0,
      explicacao: "pH = −log(10⁻³) = 3. Como pH < 7, a solução é ácida. O pOH seria 11.",
      topicoId: "quimica-2-6-1"
    },
    {
      id: "quimica-q09",
      enunciado: "A reação entre HCl e NaOH, formando NaCl e água, é classificada como:",
      alternativas: ["Síntese.", "Decomposição.", "Neutralização.", "Combustão.", "Deslocamento simples."],
      correta: 2,
      explicacao: "Ácido + base → sal + água é uma neutralização, um caso de dupla-troca. O HCl e o NaOH trocam íons e formam NaCl e H2O.",
      topicoId: "quimica-2-7-1"
    },
    {
      id: "quimica-q10",
      enunciado: "A fórmula H2SO4 corresponde ao ácido:",
      alternativas: ["Sulfuroso.", "Sulfídrico.", "Sulfúrico.", "Nítrico.", "Carbônico."],
      correta: 2,
      explicacao: "H2SO4 é o ácido sulfúrico, com enxofre em NOX +6. H2SO3 é o sulfuroso; H2S é o sulfídrico.",
      topicoId: "quimica-2-6-3"
    },
    {
      id: "quimica-q11",
      enunciado: "Na reação 2 Fe + 3 Cl2 → 2 FeCl3, o ferro sofre:",
      alternativas: ["Redução, pois ganha elétrons.", "Oxidação, pois seu NOX aumenta de 0 para +3.", "Redução, pois seu NOX diminui.", "Nenhuma alteração de NOX.", "Oxidação, pois ganha prótons."],
      correta: 1,
      explicacao: "O ferro metálico tem NOX 0 e passa a +3 no FeCl3, perdendo elétrons. Oxidação é aumento de NOX.",
      topicoId: "quimica-2-7-2"
    },
    {
      id: "quimica-q12",
      enunciado: "Quantas moléculas há em 18 g de água (H2O, massa molar 18 g/mol)?",
      alternativas: ["6,022 × 10²³ moléculas.", "3,011 × 10²³ moléculas.", "18 moléculas.", "1,204 × 10²⁴ moléculas.", "6,022 × 10²² moléculas."],
      correta: 0,
      explicacao: "18 g correspondem a 1 mol de água. Um mol contém 6,022 × 10²³ moléculas.",
      topicoId: "quimica-2-8-1"
    },
    {
      id: "quimica-q13",
      enunciado: "Na reação 2 H2 + O2 → 2 H2O, quantos mols de água são formados a partir de 4 mols de H2, com excesso de O2?",
      alternativas: ["2 mols.", "4 mols.", "8 mols.", "1 mol.", "16 mols."],
      correta: 1,
      explicacao: "A proporção é 2 mols de H2 para 2 mols de H2O, ou 1:1. Assim, 4 mols de H2 formam 4 mols de água.",
      topicoId: "quimica-2-8-2"
    },
    {
      id: "quimica-q14",
      enunciado: "Em uma reação, 10 g de A reagem com 10 g de B. A proporção estequiométrica é 1 mol de A para 1 mol de B, e as massas molares são 10 g/mol e 20 g/mol, respectivamente. O reagente limitante é:",
      alternativas: ["A, pois há menos mols.", "B, pois há menos mols.", "Não há limitante.", "Os dois se esgotam ao mesmo tempo.", "Não é possível determinar."],
      correta: 1,
      explicacao: "10 g de A = 1 mol; 10 g de B = 0,5 mol. Como a proporção é 1:1, B se esgota primeiro e é o limitante.",
      topicoId: "quimica-2-8-3"
    },
    {
      id: "quimica-q15",
      enunciado: "Foram diluídos 100 mL de uma solução 1,0 mol/L para um volume final de 500 mL. A nova concentração é:",
      alternativas: ["0,1 mol/L.", "0,2 mol/L.", "0,5 mol/L.", "1,0 mol/L.", "5,0 mol/L."],
      correta: 1,
      explicacao: "M1V1 = M2V2 → 1,0 × 100 = M2 × 500 → M2 = 0,2 mol/L. A quantidade de soluto permanece a mesma.",
      topicoId: "quimica-2-9-3"
    },
    {
      id: "quimica-q16",
      enunciado: "Uma reação apresenta ΔH = −150 kJ/mol. Isso significa que a reação:",
      alternativas: ["Absorve 150 kJ por mol e é endotérmica.", "Libera 150 kJ por mol e é exotérmica.", "Não troca energia com o ambiente.", "Tem energia de ativação nula.", "É sempre instantânea."],
      correta: 1,
      explicacao: "ΔH negativo indica liberação de energia: reação exotérmica. O valor não informa a velocidade nem a energia de ativação.",
      topicoId: "quimica-3-1-1"
    },
    {
      id: "quimica-q17",
      enunciado: "A Lei de Hess permite calcular a variação de entalpia de uma reação porque:",
      alternativas: ["A entalpia depende do caminho da reação.", "A entalpia é uma função de estado, dependendo apenas dos estados inicial e final.", "A massa dos produtos é sempre maior.", "O catalisador altera a entalpia.", "A reação precisa ser reversível."],
      correta: 1,
      explicacao: "A entalpia é função de estado. Por isso, a soma das etapas de um caminho alternativo resulta no mesmo ΔH da reação global.",
      topicoId: "quimica-3-1-1"
    },
    {
      id: "quimica-q18",
      enunciado: "Um catalisador aumenta a velocidade de uma reação porque:",
      alternativas: ["Aumenta a energia de ativação.", "Diminui a energia de ativação, sem alterar ΔH.", "Aumenta a entalpia dos produtos.", "Altera a constante de equilíbrio.", "É consumido na reação."],
      correta: 1,
      explicacao: "O catalisador oferece um caminho reacional com menor energia de ativação. Ele não altera a entalpia dos reagentes ou produtos nem a constante de equilíbrio.",
      topicoId: "quimica-3-1-3"
    }
  ]
};
