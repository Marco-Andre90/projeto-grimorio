<template>
    <v-container fluid>
        <div exact>
            <div>
                <v-btn text to="/characters/classes">
				<v-icon class="mr-2">fa fa-angle-left</v-icon>
				CLASSES
				</v-btn>
            </div>
            <span class="ma-0 classPortrait" style="float:right">
                <v-img class="img-circle" src="@/components/assets/sentinel/sentinel_03.jpg" height="350" width="350" />
            </span>
			<h1>SENTINELA</h1>
            <div>
                <p><i>Vestido em roupas negras, o rattataki puxa o capuz cobrindo seu rosto e caminha pela alcova sombria, logo ressurgindo no final do salão. Conforme sua vítima passa caminhando, ele pressiona o cabo do seu sabre de luz em sua nuca, rapidamente ligando e desligando. Ele desaparece antes que o corpo toca o chão.
                    </i></p>
                <p><i>A togruta corre pelo campo de batalha, sabre de luz duplo desviando os tiros de blaster para o chão. Ela puxa sua padawan ferida para seus pés, e a guia para fora da zona de guerra.
                    </i></p>
                <p><i>A lâmina verde do sabre de luz se torna um borrão, a cathar pressiona o ataque ferozmente. A cada golpe, ela guia seu oponente mais perto da borda da ravina. Uma série de ataques seguido por um rápido empurrão com a força e seu oponente se desequilibra e cai para o seu fim.
                    </i></p>
                <p><i>Sentinelas são mestres em misturar os poderes da força com os ataques de sua arma. Eles tecem os dois estilos de maneira tão perfeito que seus inimigos têm problemas para prever o que farão a seguir.
                    </i></p>
                <h3>O MEIO TERMO</h3>
                <p>O sentinela usa furtividade e subterfúgio para realizar a vontade da Força. Onde o consular foca em masterizar a Força e o guardião foca em masterizar o sabre de luz, o sentinela foca em misturar os dois.
                </p>
                <h3>AÇÃO SOLITÁRIA</h3>
                <p>Sentinelas são notoriamente independentes, mais confortáveis agindo sozinhos em sem cobertura; onde outros usam sua equipe para cobrir suas fraquezas, o sentinela usa a Força para superar as dele. Enquanto alguns seguem essa independência ao extrema, eles normalmente ainda reconhecem autoridades e seguem ordens, desde que tenham a liberta de fazer as coisas à sua maneira.
                </p>
                <p>Quando criar seu sentinela, considere sua filosofia pessoal referente a Força e seus praticantes mais famosos - os Jedi e os Sith. Você é membro de uma das duas ordens, ou você trilha um caminho diferente? Você é um espião ou investigador descobrindo uma sensitividade latente com a Força? Você foi treinado com a força desde muito jovem, ou descobriu como adulto? Como você trata aqueles mais fracos que você? Como era a sua família? Você vê a Força como luz e trevas, ou como um rio imparcial de cinza?
                </p>
            </div>
            <h4>CONSTRUÇÃO RÁPIDA</h4>
            <p>Você pode fazer um sentinela rapidamente seguindo estas sugestões. Primeiro, faça Destreza sua maior habilidade, seguido de Sabedoria ou Carisma. Segundo, escolha Jedi ou Sith como seu antecedente.
            </p>
            <div class="block ma-0">
                <h2>SENTINELA</h2>
                <table class="table text-center levelTable">
                    <thead>
                        <tr>
                            <th class="px-2">Nível</th>
                            <th class="px-2">Bônus de Proficiência</th>
                            <th class="px-2">Características</th>
                            <th class="px-2">Dado de Dano de Combate Cinético</th>
                            <th class="px-2">Poderes da Força Conhecidos</th>
                            <th class="px-2">Pontos de Força</th>
                            <th class="px-2">Nível Máximo de Poder</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="rows">
                            <td class="px-2">1º</td>
                            <td class="px-2">+2</td>
                            <td class="px-2 text-left">Uso da Força, Combate Cinético</td>
                            <td class="px-2">d4</td>
                            <td class="px-2">6</td>
                            <td class="px-2">3</td>
                            <td class="px-2">1º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">2º</td>
                            <td class="px-2">+2</td>
                            <td class="px-2 text-left">Fortalecido pela Força, Ideais do Sentinela</td>
                            <td class="px-2">d4</td>
                            <td class="px-2">7</td>
                            <td class="px-2">6</td>
                            <td class="px-2">1º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">3º</td>
                            <td class="px-2">+2</td>
                            <td class="px-2 text-left">Chamado do Sentinela</td>
                            <td class="px-2">d4</td>
                            <td class="px-2">9</td>
                            <td class="px-2">9</td>
                            <td class="px-2">2º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">4º</td>
                            <td class="px-2">+2</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">d4</td>
                            <td class="px-2">10</td>
                            <td class="px-2">12</td>
                            <td class="px-2">2º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">5º</td>
                            <td class="px-2">+3</td>
                            <td class="px-2 text-left">Ataque Extra</td>
                            <td class="px-2">d6</td>
                            <td class="px-2">11</td>
                            <td class="px-2">15</td>
                            <td class="px-2">2º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">6º</td>
                            <td class="px-2">+3</td>
                            <td class="px-2 text-left">-</td>
                            <td class="px-2">d6</td>
                            <td class="px-2">13</td>
                            <td class="px-2">28</td>
                            <td class="px-2">3º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">7º</td>
                            <td class="px-2">+3</td>
                            <td class="px-2 text-left">Característica do Chamado</td>
                            <td class="px-2">d6</td>
                            <td class="px-2">14</td>
                            <td class="px-2">21</td>
                            <td class="px-2">3º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">8º</td>
                            <td class="px-2">+3</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">d6</td>
                            <td class="px-2">15</td>
                            <td class="px-2">24</td>
                            <td class="px-2">3º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">9º</td>
                            <td class="px-2">+4</td>
                            <td class="px-2 text-left">-</td>
                            <td class="px-2">d6</td>
                            <td class="px-2">17</td>
                            <td class="px-2">27</td>
                            <td class="px-2">4º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">10º</td>
                            <td class="px-2">+4</td>
                            <td class="px-2 text-left">Prontidão para a Batalha</td>
                            <td class="px-2">d6</td>
                            <td class="px-2">18</td>
                            <td class="px-2">30</td>
                            <td class="px-2">4º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">11º</td>
                            <td class="px-2">+4</td>
                            <td class="px-2 text-left">-</td>
                            <td class="px-2">d8</td>
                            <td class="px-2">20</td>
                            <td class="px-2">33</td>
                            <td class="px-2">5º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">12º</td>
                            <td class="px-2">+4</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">d8</td>
                            <td class="px-2">21</td>
                            <td class="px-2">36</td>
                            <td class="px-2">5º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">13º</td>
                            <td class="px-2">+5</td>
                            <td class="px-2 text-left">Característica do Chamado</td>
                            <td class="px-2">d8</td>
                            <td class="px-2">22</td>
                            <td class="px-2">39</td>
                            <td class="px-2">5º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">14º</td>
                            <td class="px-2">+5</td>
                            <td class="px-2 text-left">-</td>
                            <td class="px-2">d8</td>
                            <td class="px-2">24</td>
                            <td class="px-2">42</td>
                            <td class="px-2">6º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">15º</td>
                            <td class="px-2">+5</td>
                            <td class="px-2 text-left">Evasão Iluminada</td>
                            <td class="px-2">d8</td>
                            <td class="px-2">25</td>
                            <td class="px-2">45</td>
                            <td class="px-2">6º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">16º</td>
                            <td class="px-2">+5</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">d8</td>
                            <td class="px-2">26</td>
                            <td class="px-2">48</td>
                            <td class="px-2">6º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">17º</td>
                            <td class="px-2">+6</td>
                            <td class="px-2 text-left">-</td>
                            <td class="px-2">d10</td>
                            <td class="px-2">28</td>
                            <td class="px-2">51</td>
                            <td class="px-2">7º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">18º</td>
                            <td class="px-2">+6</td>
                            <td class="px-2 text-left">Característica do Chamado</td>
                            <td class="px-2">d10</td>
                            <td class="px-2">29</td>
                            <td class="px-2">54</td>
                            <td class="px-2">7º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">19º</td>
                            <td class="px-2">+6</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">d10</td>
                            <td class="px-2">30</td>
                            <td class="px-2">57</td>
                            <td class="px-2">7º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">20º</td>
                            <td class="px-2">+6</td>
                            <td class="px-2 text-left">Centro da Força</td>
                            <td class="px-2">d10</td>
                            <td class="px-2">30</td>
                            <td class="px-2">60</td>
                            <td class="px-2">7º</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <span class="mt-4 pr-2 classPortrait" style="float:right">
                <v-img class="img-circle" src="@/components/assets/sentinel/sentinel_01.jpg" height="650" width="420" float="right" />
            </span>
            <h2 class="pt-3">Características de Classe</h2>
            <p>Como um Sentinela, você ganha as seguintes características de classe.</p>
            <h4>Pontos de Vida</h4>
            <div>
                <strong>Dado de Vida: </strong>
                1d8 por nível de Sentinela.
            </div>
            <div>
                <strong>Dado de Vida no 1º nível: </strong>
                8 + seu modificador de constituição.
            </div>
            <div class="mb-2">
                <strong>Pontos de Vida em Níveis Maiores: </strong>
                1d8 (ou 5) + seu modificador de constituição por nível de sentinela após o 1º.
            </div>
            <h4>Proficiências</h4>
            <div><strong>Armadura: </strong>
            Armadura Leve</div>
            <div><strong>Armas: </strong>
            Vibroarmas simples, armas de luz simples, chakram, sabre de luz duplo, shoto de luz duplo, espada dupla, lâmina oculta, florete de luz, anel de luz, chicote de luz, vibroflorete, vibrochicote</div>
            <div class="mb-2"><strong>Ferramentas: </strong>
            Escolha kit de demolidor, kit de segurança ou kit de slicer</div>
            <div><strong>Testes de Resistência </strong>
            Destreza, Carisma</div>
            <div class="mb-2"><strong>Perícias </strong>
            Escolha duas dentre Acrobacia, Adestrar Animais, Intuição, Percepção, Persuassão, Pilotar, Furtividade e Tecnologia.</div>
            <h4>Equipamentos</h4>
            <p>Você começa com o seguinte equipamento, além do
            equipamento concedido pelo seu antecedente:</p>
            <div>
                <ul>
                    <li>
                        <em>(a)</em> duas armas de luz simples ou vibroarmas <em>(b)</em> uma arma de luz marcial ou vibroarma que você tenha proficiência
                    </li>
                    <li>
                        <em>(a)</em> Pacote do aventureiro ou <em>(b)</em> pacote do explorador.
                    </li>
                    <li>
                        <em>(a)</em> kit de demolidor, <em>(b)</em> kit de segurança ou <em>(c)</em> kit de slicer
                    </li>
                    <li>
                        <em>(a)</em> traje de combate e um gerador de escudo leve
                    </li>
                </ul>
            </div>
            <h4 class="mt-2">Variante: Riqueza Inicial</h4>
            <p>Ao invés do equipamento concedido pela sua classe e antecedente, você pode escolher comprar seu equipamento inicial.
                Se escolher esta variante, você não recebe equipamento de classe ou antecedente, e ao invés disso rola para descobrir
                sua riqueza inicial seguindo o critério abaixo
            </p>
            <div class="classDetail_variantHealth">
                <div class="d-flex justify-space-between">
                    <strong>Classe</strong>
                    <strong class="text-right">Fundos</strong>
                </div>
                <div class="d-flex justify-space-between classDetail_funds">
                    <div>Sentinela</div>
                    <div class="text-right">1,000 + 3d4 x 100 cr</div>
                </div>
            </div>
            <br>
            <h3>USO DA FORÇA</h3>
            <p>Em suas meditações sobre a força, você aprendeu poderes, fragmentos de conhecimento que te imbuem com uma permanente habilidade na força. Veja o capítulo 10 para regras gerais de uso da força e capítulo 11 para uma lista de poderes da força.
            </p>
            <span class="ma-0 pa-0 classPortrait" style="float:left">
                <v-img class="img-circle" src="@/components/assets/sentinel/sentinel_00.png" height="350" width="350" />
            </span>
            <h4>PODERES DA FORÇA CONHECIDOS</h4>
            <p>Você aprende 6 poderes da força a sua escolha, e você aprende mais conforme subir de nível, como mostrado na coluna Poderes da Força Conhecidos na tabela de classe do sentinela. Você pode não aprender um poder da força de um nível acima do seu Nível de Poder Máximo, e você só pode aprender poderes da força ao mesmo tempo que aprende seus pré-requisitos.
            </p>
            <h4>PONTOS DA FORÇA</h4>
            <p>Você tem um número de pontos da força igual ao seu nível de sentinela x 3, como mostrado na coluna de Pontos da Força na tabela da classe sentinela, + seu modificador de carisma ou sabedoria (você escolhe). Você usa estes pontos da força para utilizar poderes da força. Você recupera todos os pontos gastos quando termina um descanso longo.
            </p>
            <h4>NÍVEL DE PODER MÁXIMO</h4>
            <p>Muitos poderes da força podem ser sobrecarregados, consumindo mais pontos de força para criar um efeito maior. Você pode sobrecarregar estas habilidades para um nível máximo, que aumenta conforme subir de nível, como mostrado na coluna Nível Máximo de Poder na tabela da classe guardião.
            </p>
            <p>Você pode utilizar poderes da força no 5º, 6º e 7º nível uma vez. Você recupera a habilidade de fazer isso após um descanso longo.
            </p>
            <h4>HABILIDADE DO USO DA FORÇA</h4>
            <p>A habilidade representante do seu uso da força depende da tendência dos poderes que você usa. Você usa Sabedoria para poderes do lado da luz, Carisma para poderes no lado negro, e Sabedoria ou Carisma para poderes universais (sua escolha). Você usa o modificador destas habilidades sempre que um poder de uso da força se referir a elas. Adicionalmente, você usa estes modificadores de habilidade para preparar o teste de resistência por um poder da força  que você utiliza e quando faz a rolagem de ataque com um.
            </p>
            <p><strong>CD de resistência a “Força” </strong>= 8 + sua proficiência bônus + seu modificador de habilidade referente a tendência do poder da força usado.
            </p>
            <p><strong>Modificador de ataque da “Força” </strong>= sua proficiência bônus + seu modificador de habilidade referente a tendência do poder da força usado.
            </p>
            <h3>COMBATE CINÉTICO</h3>
            <p>No 1º nível, você é uma implacável turbilhão de ataques. Quando você usa a ação de ataque no seu turno, você pode fazer um ataque desarmado ou um ataque de arma corpo-a-corpo como uma ação bônus. Esse ataque causa dano igual ao seu Dado de Dano de Combate Cinético. Esse dado muda conforme você sobe de nível como sentinela, como mostrado na colina de Dado de Dano de Combate Cinético na tabela de classe de sentinela.
            </p>
            <p>Adicionalmente, quando você faz esse ataque de ação bônus, sua velocidade de movimento aumenta em 10 pés (3m) até o fim do seu turno.
            </p>
            <h3>FORTALECIDO PELA FORÇA</h3>
            <p>Começando no 2º nível, seu treinamento permite você controlar a energia mística da Força pelo seu corpo. Quando você atingir um alvo com o seu ataque de Combate Cinético, você pode gastar um ponto de força para usar um efeito de Fortalecido pela Força. Você começa com três destes efeitos: Defletir, Investida Dupla, e Tempo Lento. Você pode usar apenas um efeito por turno.
            </p>
            <h4>DEFLETIR</h4>
            <p>Você pode rolar um Dado de Combate Cinético e adicionar o resultado a sua CA contra um ataque antes do início do seu próximo turno.
            </p>
            <h4>INVESTIDA DUPLA</h4>
            <p>Você causa dano adicional ao alvo igual ao seu Dado de Dano de Combate Cinético
            </p>
            <h4>TEMPO LENTO</h4>
            <p>Sua velocidade aumenta por um valor igual a 5 x seu Dado de Dano de Combate Cinético até o fim do seu turno.
            </p>
            <h3>IDEAIS DO SENTINELA</h3>
            <p>No 2º nível, você adota um ideal que exemplifica sua ligação com a Força. Você adota um ideal a sua escolha, que será detalhado no final da descrição de classe. Você adota um ideal adicional no 6º e 11º níveis. Quando você manifesta seus Ideais de Sentinela, você escolhe qual efeito criar.
            </p>
            <p>Você pode manifestar seus ideais duas vezes, ganhando um uso adicional no 11º nível. Você recupera todos o usos quando termina um descanso longo.
            </p>
            <h3>CHAMADO DO SENTINELA</h3>
            <p>Quando atingir o 3º nível, você escolhe um chamado do sentinela, que será detalhado no fim da descrição de classe. Seu chamado oferece características no 3º nível, e novamente no 7º, 13º e 18º nível.
            </p>
            <h3>INCREMENTO NO VALOR DE HABILIDADE</h3>
            <p>Quando você atinge o 4° nível e novamente no 8°, 12°, 14°, 16° e 19° nível, você pode aumentar um valor de habilidade, à sua escolha, em 2 ou você pode aumentar dois valores de habilidade, à sua escolha, em 1. Como padrão, você não pode elevar um valor de habilidade acima de 20 com essa característica. Alternativamente você pode escolher um talento (veja o Capítulo 6 para ver a lista de talentos).
            </p>
            <h3>ATAQUE EXTRA</h3>
            <p>A partir do 5º nível, você pode atacar duas vezes, ao invés de uma, quando usar a ação Atacar durante o seu turno.
            </p>
            <h3>PRONTIDÃO PARA A BATALHA</h3>
            <p>A partir do 10º nível, você aprendeu completamente como fundir seu eu físico com a Força. Quando você utiliza ações de Desviar ou Desengajar, ou usar sua ação para utilizar um poder da força, você pode usar sua característica de Combate Cinético.
            </p>
            <h3>EVASÃO ILUMINADA</h3>
            <p>A partir do 15º nível, quando você for sujeito a um efeito que causa dano e força você a fazer um teste de resistência, você pode gastar 2 pontos de força para adicionar ao seu modificador de Sabedoria ou Carisma (Sua escolha, mínimo de um) para o teste de resistência se já não incluir este modificador. Se você o fizer, você não sofrerá dano se obtiver sucesso no teste, e apenas metade do dano se falhar. Você pode esperar até depois de rolar o d20 para usar esta característica, mas precisa decidir antes que o Mestre diga se a rolagem tem sucesso ou falha.
            </p>
            <h3>CENTRO DA FORÇA</h3>
            <p>No 20º nível, você está perfeitamente centralizado com a Força. Sua pontuação de Destreza e Sabedoria ou Carisma (sua escolha) sobem em 2 pontos. O valor máximo para estas habilidades sobe em 2.
            </p>
            <p>Adicionalmente, uma vez por turno, quando você rolar um Dado de Dano de Combate Cinético, você pode ao invés disso escolher tirar o valor máximo.
            </p>
            <h3>IDEAIS DE SENTINELA</h3>
            <p>Estes ideais são apresentados em ordem alfabética. Você não pode se beneficiar de uma opção mais que uma vez, mesmo que você possa escolher novamente depois.
            </p>
            <span class="pr-2 classPortrait" style="float:left">
                <v-img class="img-circle" src="@/components/assets/sentinel/sentinel_02.jpg" height="500" width="390" />
            </span>
            <h4>IDEAL DO ÁGIL</h4>
            <p>Você ganha uma velocidade de natação e escalada igual a sua velocidade de caminhada. Quando você faz um pulo longo, você pode cobrir um número de pés igual ao dobro da sua Sabedoria ou Carisma (sua escolha). Quando você faz um pulo alto, você pode saltar um número de pés para o ar igual a 3 + o dobro do seu modificador de Sabedoria ou Carisma (Sua escolha).
            </p>
            <p>Adicionalmente, como uma ação bônus, você pode manifestar esse ideal em uma breve onda de energia. Pelo próximo minuto, ataques de oportunidade contra você são feitos com desvantagem.
            </p>
            <h4>IDEAL DO ARTESÃO</h4>
            <p>Escolha uma de suas proficiências de perícia ou ferramenta. Quando você faz um teste de habilidade com a ferramenta ou perícia escolhida, você pode adicionar metade do seu modificador de Sabedoria ou Carisma (sua escolha, mínimo de um) para qualquer teste que você fizer e já não inclua estes modificadores.
            </p>
            <p>Adicionalmente, como uma ação, você pode manifestar este ideal em uma breve onda de energia. Pelos próximos 10 minutos, o bônus aumenta para seu modificador de Sabedoria e Carisma, e você pode escolher uma segunda perícia ou ferramenta para aproveitar esta característica.
            </p>
            <h4>IDEAL DO CAÇADOR</h4>
            <p>Você ganha visão no escuro a até 60 pés (20m). Se você já tem visão no escuro, este ideal aumenta a distância da visão em mais 30 pés.
            </p>
            <p>Adicionalmente, como uma ação, você pode manifestar este ideal em uma breve onda de energia. Pelo próximo minuto, você pode ver normalmente em escuridão aprimorada, e visão cega a até 10 pés (3m).
            </p>
            <h4>IDEAL DO COMPETIDOR</h4>
            <p>Você pode utilizar Destreza ao invés de Força para o ataque e rolagem de dado dos seus ataques desarmados, e seus ataques desarmados dão dano igual ao seu Dado de Dano de Combate Cinético.
            </p>
            <p>Adicionalmente, como uma ação, você pode manifestar este ideal em uma breve onda de energia. Pelo próximo minuto, seus ataques desarmados contam como aprimorados com o propósito de superarem resistência e imunidade a ataques e dano aprimorado, e você pode usar seu modificador de Sabedoria ou Carisma (sua escolha) ao invés de Força para testes feitos para agarrar o alvo ou escapar de agarramento.
            </p>
            <h4>IDEAL DO INABALÁVEL</h4>
            <p>Quando você faz uma rolagem de ataque corpo-a-corpo, você pode ao invés disso forçar o alvo a fazer um teste de resistência de Destreza (DC = 8 + proficiência bônus + seu modificador de Força e Destreza + qualquer bônus em rolagem de ataque de arma corpo-a-corpo). Se você estava com vantagem na sua rolagem de ataque, a criatura terá desvantagem no teste de resistência. Em caso de falha, o alvo sofre dano de arma normal e está sujeita a qualquer efeito adicional que ocorreria em um acerto.
            </p>
            <p>Adicionalmente, como uma ação, você pode manifestar este ideal em uma breve onda de energia. Pelo próximo minuto, quando uma criatura obtiver sucesso em um teste de resistência, ela sofre metade do dano normal de arma, e quando a criatura rola 1 no teste, elas sofrem dano como se fosse um acerto crítico.
            </p>
            <span class="pr-2 classPortrait" style="float:right">
                <v-img class="img-circle" src="@/components/assets/sentinel/sentinel_04.jpg" height="500" width="390" />
            </span>
            <h4>IDEAL DO TITAN</h4>
            <p>Você ganha proficiência em armadura média.
            </p>
            <p>Adicionalmente, como uma ação, você pode manifestar este ideal em uma breve onda de energia. Pelo próximo minuto, você tem vantagem em testes de habilidade e rolagens de ataque que moveriam outra criatura a força, e a distância que ela fosse movida fosse maior que 5 pés (1,5m).
            </p>
            <h4>IDEAL DO TRANQUILO</h4>
            <p>Quando você terminar um descanso curto ou longo, você ganha um número de pontos de força temporários igual ao seu modificador de Sabedoria ou Carisma (sua escolha, mínimo de um). Quando você tiver que gastar pontos de força, os temporários devem ser gastos primeiro. Todos os pontos de força temporário são perdidos ao fim do seu próximo descanso curto ou longo.
            </p>
            <p>Adicionalmente, como uma ação, você pode manifestar este ideal em uma breve onda de energia. Você recupera um número de pontos de força igual ao seu modificador de Sabedoria ou Carisma (sua escolha, mínimo de um).
            </p>
            <h4>IDEAL DO VIGOROSO</h4>
            <p>Quando você rola um Dado de Vida para recuperar pontos de vida, você pode usar seu modificador de Sabedoria ou Carisma no lugar do seu modificador de Constituição para determinar o número dos pontos de vida que você recupera.
            </p>
            <p>Adicionalmente, como uma ação, você pode manifestar este ideal em uma breve onda de energia. Você ganha um número de pontos de vida temporários igual a metade do seu nível de sentinela (arredondado para baixo) + o seu modificador de Sabedoria ou Carisma (sua escolha, mínimo de um).
            </p>
            <h3>SOBRE ARQUETIPO</h3>
            <hr>
            <p class="red">SESSÃO EM CONSTRUÇÃO
            </p>
        </div>
    </v-container>
</template>