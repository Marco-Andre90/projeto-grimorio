<template>
    <v-container fluid>
        <div exact>
            <div>
                <v-btn text to="/characters/classes">
				<v-icon class="mr-2">fa fa-angle-left</v-icon>
				CLASSES
				</v-btn>
            </div>
			<h1>GUARDIÃO</h1>
            <span class="ma-2 classPortrait" style="float:right">
                <v-img class="img-circle" src="@/components/assets/guardian/guardian_01.png" height="350" width="350" contain />
            </span>
            <div>
                <p><i>Um humano de pele escura corre rapidamente pelo corredor, a armadura de metal sob seu manto cinza causando estrondos a cada passo. Ele vira a esquina para a prisão enquanto ainda há falta de luz e energia, avisando aos prisioneiros feridos para escaparem. Neste momento vários traficantes de escravos chegam e preparam seus blasters. O homem saca e acende um sabre de luz de lâmina branca, pronto para morrer pelos estranhos atrás dele.
                    </i></p>
                <p><i>Um sith puro-sangue, vestido da cabeça aos pés com armadura negra e vermelha, investe contra uma linha de soldados. Tiro atrás de tiro desviados pela sua armadura até que ele alcança sua presa, onde ele descarrega sua fúria em uma série de cortes devastadores com seu sabre de luz.
                    </i></p>
                <p><i>Um general zabrak salta dramaticamente para seu esquadrão que estava sendo derrotado, aterrissando com vários ataques de sabre de luz. Com a chegada deste poderoso Jedi, os atacantes recuam.
                    </i></p>
                <p><i>Guardiões são mestres da arte de combater com o sabre de luz. Eles focam em utilizar o poder sempre presente da Força para força para fazer ataques devastadores, às vezes virando a maré da batalha sozinhos.
                    </i></p>
                <h3>PROTETOR OU DESTRUIDOR</h3>
                <p>Um agente da força imparável, o guardião canaliza a poder para fluir pelas suas armas. Suas habilidades com o sabre de luz são incomparáveis. Subjugando seus inimigos e apoiando seus aliados, o guardião utiliza a força para controlar o que acontece em volta deles.
                </p>
                <h3>LÍDERES NATURAIS</h3>
                <p>O comando do guardião sobre a força da a eles uma presença poderosa. Seja através do medo e intimidação ou respeito e admiração, o guardião é um dos maiores generais no campo de batalha. Eles são símbolos de poder para seus seguidores.
                </p>
                <p>Enquanto cria um guardião, considere sua atração pela força e seus mais famosos praticantes - os Jedi e os Sith. Você é membro de uma das duas ordens, ou você trilha um caminho diferente? Você é um soldado descobrindo uma sensitividade latente com a Força? Você foi treinado com a força desde muito jovem, ou descobriu como adulto? Como você trata aqueles mais fracos que você? Como era a sua família? Você vê a Força como luz e trevas, ou como um rio imparcial de cinza?
                </p>
            </div>
            <h4>CONSTRUÇÃO RÁPIDA</h4>
            <p>Você pode fazer um guardião seguindo as seguintes sugestões. Primeiro, coloque seu valor de habilidade mais alto em Força, seguido de Constituição. Depois, escolha o antecedente Jedi ou Sith.
            </p>
            <div class="block ma-0">
                <h2>GUARDIÃO</h2>
                <table class="table text-center levelTable">
                    <thead>
                        <tr>
                            <th class="px-2">Nível</th>
                            <th class="px-2">Bônus de Proficiência</th>
                            <th class="px-2">Características</th>
                            <th class="px-2">Poderes da Força Conhecidos</th>
                            <th class="px-2">Pontos de Força</th>
                            <th class="px-2">Nível Máximo de Poder</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="rows">
                            <td class="px-2">1º</td>
                            <td class="px-2">+2</td>
                            <td class="px-2 text-left">Uso da Força, Canalizar a Força</td>
                            <td class="px-2">4</td>
                            <td class="px-2">2</td>
                            <td class="px-2">1º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">2º</td>
                            <td class="px-2">+2</td>
                            <td class="px-2 text-left">Golpes Fortalecidos pela Força, Aura do Guardião</td>
                            <td class="px-2">5</td>
                            <td class="px-2">4</td>
                            <td class="px-2">1º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">3º</td>
                            <td class="px-2">+2</td>
                            <td class="px-2 text-left">Foco do Guardião</td>
                            <td class="px-2">6</td>
                            <td class="px-2">6</td>
                            <td class="px-2">1º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">4º</td>
                            <td class="px-2">+2</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">7</td>
                            <td class="px-2">8</td>
                            <td class="px-2">1º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">5º</td>
                            <td class="px-2">+3</td>
                            <td class="px-2 text-left">Ataque Extra</td>
                            <td class="px-2">9</td>
                            <td class="px-2">10</td>
                            <td class="px-2">2º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">6º</td>
                            <td class="px-2">+3</td>
                            <td class="px-2 text-left">Purificado pela Força</td>
                            <td class="px-2">10</td>
                            <td class="px-2">12</td>
                            <td class="px-2">2º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">7º</td>
                            <td class="px-2">+3</td>
                            <td class="px-2 text-left">Característica do Foco</td>
                            <td class="px-2">11</td>
                            <td class="px-2">14</td>
                            <td class="px-2">2º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">8º</td>
                            <td class="px-2">+3</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">12</td>
                            <td class="px-2">16</td>
                            <td class="px-2">2º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">9º</td>
                            <td class="px-2">+4</td>
                            <td class="px-2 text-left">-</td>
                            <td class="px-2">14</td>
                            <td class="px-2">18</td>
                            <td class="px-2">3º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">10º</td>
                            <td class="px-2">+4</td>
                            <td class="px-2 text-left">Aura Adicional</td>
                            <td class="px-2">15</td>
                            <td class="px-2">20</td>
                            <td class="px-2">3º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">11º</td>
                            <td class="px-2">+4</td>
                            <td class="px-2 text-left">Golpes Fortalecidos pela Força Melhorados</td>
                            <td class="px-2">16</td>
                            <td class="px-2">22</td>
                            <td class="px-2">3º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">12º</td>
                            <td class="px-2">+4</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">17</td>
                            <td class="px-2">24</td>
                            <td class="px-2">3º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">13º</td>
                            <td class="px-2">+5</td>
                            <td class="px-2 text-left">-</td>
                            <td class="px-2">19</td>
                            <td class="px-2">26</td>
                            <td class="px-2">4º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">14º</td>
                            <td class="px-2">+5</td>
                            <td class="px-2 text-left">Toque Purificador</td>
                            <td class="px-2">20</td>
                            <td class="px-2">28</td>
                            <td class="px-2">4º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">15º</td>
                            <td class="px-2">+5</td>
                            <td class="px-2 text-left">Característica do Foco</td>
                            <td class="px-2">21</td>
                            <td class="px-2">30</td>
                            <td class="px-2">4º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">16º</td>
                            <td class="px-2">+5</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">22</td>
                            <td class="px-2">32</td>
                            <td class="px-2">4º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">17º</td>
                            <td class="px-2">+6</td>
                            <td class="px-2 text-left">-</td>
                            <td class="px-2">24</td>
                            <td class="px-2">34</td>
                            <td class="px-2">5º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">18º</td>
                            <td class="px-2">+6</td>
                            <td class="px-2 text-left">Melhoria de Aura</td>
                            <td class="px-2">25</td>
                            <td class="px-2">36</td>
                            <td class="px-2">5º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">19º</td>
                            <td class="px-2">+6</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">26</td>
                            <td class="px-2">38</td>
                            <td class="px-2">5º</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">20º</td>
                            <td class="px-2">+6</td>
                            <td class="px-2 text-left">Z</td>
                            <td class="px-2">27</td>
                            <td class="px-2">40</td>
                            <td class="px-2">5º</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <span class="mt-2 pr-2 classPortrait" style="float:right">
                <v-img class="img-circle" src="@/components/assets/guardian/guardian_02.jpg" height="650" width="360" float="right" />
            </span>
            <h2 class="pt-3">Características de Classe</h2>
            <p>Como um Guardião, você ganha as seguintes características de classe.</p>
            <h4>Pontos de Vida</h4>
            <div>
                <strong>Dado de Vida: </strong>
                1d10 por nível de CLASSE.
            </div>
            <div>
                <strong>Dado de Vida no 1º nível: </strong>
                10 + seu modificador de constituição.
            </div>
            <div class="mb-2">
                <strong>Pontos de Vida em Níveis Maiores: </strong>
                1d10 (ou 6) + seu modificador de constituição por nível de CLASSE após o 1º.
            </div>
            <h4>Proficiências</h4>
            <div><strong>Armadura: </strong>
            Armaduras leves, armaduras médias.</div>
            <div><strong>Armas: </strong>
            Todos os tipos de sabre de luz e Vibroarmas</div>
            <div class="mb-2"><strong>Ferramentas: </strong>
            Nenhuma.</div>
            <div><strong>Testes de Resistência </strong>
            Constituição, Carisma</div>
            <div class="mb-2"><strong>Perícias </strong>
            Escolha duas dentre Acrobacia, Atletismo, Enganação, Intuição, Intimidação, História, Percepção, Persuassão e Pilotar</div>
            <h4>Equipamentos</h4>
            <p>Você começa com o seguinte equipamento, além do
            equipamento concedido pelo seu antecedente:</p>
            <div>
                <ul>
                    <li>
                        <em>(a)</em> Um sabre de luz ou vibroarma e escudo leve ou médio ou <em>(b)</em> dois sabres de luz ou vibroarmas
                    </li>
                    <li>
                        <em>(a)</em> Traje de combate e escudo leve ou <em>(b)</em> armadura de batalha leve
                    <li>
                        <em>(a)</em> Pacote do sacerdote ou <em>(b)</em> pacote do explorador.
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
                    <div>Guardião</div>
                    <div class="text-right">1,000 + 5d4 x 100 cr</div>
                </div>
            </div>
            <br>
            <h3>USO DA FORÇA</h3>
            <p>Em suas meditações sobre a força, você aprendeu poderes, fragmentos de conhecimento que te imbuem com uma permanente habilidade na força. Veja o capítulo 10 para regras gerais de uso da força e capítulo 11 para uma lista de poderes da força.
            </p>
            <h4>PODERES DA FORÇA CONHECIDOS</h4>
            <p>Você aprende 4 poderes da força a sua escolha, e você aprende mais conforme subir de nível, como mostrado na coluna Poderes da Força Conhecidos na tabela de classe do guardião. Você pode não aprender um poder da força de um nível acima do seu Nível de Poder Máximo, e você só pode aprender poderes da força ao mesmo tempo que aprende seus pré-requisitos.
            </p>
            <h4>Pontos da Força</h4>
            <p>Você tem um número de pontos da força igual ao seu nível de guardião x 2, como mostrado na coluna de Pontos da Força na tabela da classe guardião, + seu modificador de carisma ou sabedoria (você escolhe). Você usa estes pontos da força para utilizar poderes da força. Você recupera todos os pontos gastos quando termina um descanso longo.
            </p>
            <h4>NÍVEL DE PODER MÁXIMO</h4>
            <p>Muitos poderes da força podem ser sobrecarregados, consumindo mais pontos de força para criar um efeito maior. Você pode sobrecarregar estas habilidades para um nível máximo, que aumenta conforme subir de nível, como mostrado na coluna Nível Máximo de Poder na tabela da classe guardião.
            </p>
            <p>Você pode utilizar poderes da força no 5º nível uma vez. Você recupera a habilidade de fazer isso após um descanso longo.
            </p>
            <h4>Habilidade de Uso da Força</h4>
            <p>A habilidade representante do seu uso da força depende da tendência dos poderes que você usa. Você usa Sabedoria para poderes do lado da luz, Carisma para poderes no lado negro, e Sabedoria ou Carisma para poderes universais (sua escolha). Você usa o modificador destas habilidades sempre que um poder de uso da força se referir a elas. Adicionalmente, você usa estes modificadores de habilidade para preparar o teste de resistência por um poder da força  que você utiliza e quando faz a rolagem de ataque com um.
            </p>
            <p><strong>CD de resistência a “Força” </strong>= 8 + sua proficiência bônus + seu modificador de habilidade referente a tendência do poder da força usado.
            </p>
            <p><strong>Modificador de ataque da “Força” </strong>= sua proficiência bônus + seu modificador de habilidade referente a tendência do poder da força usado.
            </p>
            <h3>CANALIZAR A FORÇA</h3>
            <p>Você sabe como canalizar a Força para criar um efeito único. Você começa escolhendo dentre estes dois efeitos: Causar Dor e Conceder Auxílio. No 3º nível, seu Foco de Guardião oferece um efeito adicional. Quando você usar Canalizar a Força, você escolhe qual efeito criar.
            </p>
            <p>Alguns efeitos de Canalizar a Força requerem testes de resistência. Quando você usa um efeito assim desta classe, seu CD é igual ao seu CD de teste de resistência a “Força” universal (8 + Proficiência Bônus + modificador de habilidade de Sabedoria ou Carisma a sua escolha).
            </p>
            <p>Você pode utilizar esta característica um número de vezes igual o seu modificador de Sabedoria ou Carisma (sua escolha, mínimo uma vez). Você recupera todos os usos gastos após um descanso curto ou longo.
            </p>
            <h4>CAUSAR DOR</h4>
            <p>Como uma ação, você pode gastar um uso do seu Canalizar a Força para extrair a vida de uma criatura hostil que você pode ver a 30 pés (10m). Essa criatura deve fazer um teste de resistência de Constituição. Em caso de falha, a criatura sofre dano necrótico igual o seu nível de guardião + seu modificador de Carisma (mínimo de um), ou metade disso se ele obtiver sucesso no teste.
            </p>
            <h4>CONCEDER AUXÍLIO</h4>
            <p>Como uma ação bônus, você pode gastar o uso de seu Canalizar a Força e tocar uma criatura a 5 pés (1,5m) de você. Essa criatura recupera pontos de vida igual seu nível de guardião + seu modificador de Sabedoria (mínimo de um). Alternativamente, se a criatura está envenenada ou doente, você pode neutralizar o veneno ou doença, se mais de um veneno ou doença aflige o alvo, você pode neutralizar um veneno ou doença que sabe estar presente, ou neutralizar uma aleatoriamente.
            </p>
            <h3>GOLPES FORTALECIDOS PELA FORÇA</h3>
            <p>A partir do 2º nível, quando você atinge uma criatura com um ataque corpo-a-corpo, você pode gastar pontos de força para causar dano adicional ao alvo. O dano extra é 2d8 para um espaço de força de primeiro nível, mais 1d8 para cada espaço maior que o primeiro nível, até o máximo de 5d8. O dano é do mesmo tipo que o dano da arma.
            </p>
            <p>Você não pode usar um espaço de força maior que o seu Nível de Poder Máximo.
            </p>
            <h3>AURA DO GUARDIÃO</h3>
            <p>Adicionalmente no 2º nível, você ganha uma aura a sua escolha, como descrito no fim da descrição de classe. Quando atingir o 10º nível, você pode selecionar uma segunda aura.
            </p>
            <h3>FOCO DO GUARDIÃO</h3>
            <p>Quando você atingir o 3º nível, você começa a focar seus estudos em um estilo específico de sabre de luz, que é detalhado no fim da descrição de classe. Seu foco oferece características no 3º nível, e de novo no 7º, 15º e 20º nível.
            </p>
            <h3>INCREMENTO NO VALOR DE HABILIDADE</h3>
            <p>Quando você atinge o 4° nível e novamente no 8°, 12°, 14°, 16° e 19° nível, você pode aumentar um valor de habilidade, à sua escolha, em 2 ou você pode aumentar dois valores de habilidade, à sua escolha, em 1. Como padrão, você não pode elevar um valor de habilidade acima de 20 com essa característica. Alternativamente você pode escolher um talento (veja o Capítulo 6 para ver a lista de talentos).
            </p>
            <h3>ATAQUE EXTRA</h3>
            <p>A partir do 5º nível, você pode atacar duas vezes, ao invés de uma, quando usar a ação Atacar durante o seu turno.
            </p>
            <h3>PURIFICADO PELA FORÇA</h3>
            <p>A partir do 6º nível, a força flui através de você o tornando imune a veneno ou doença.
            </p>
            <h3>GOLPES FORTALECIDOS PELA FORÇA MELHORADOS</h3>
            <p>No 11º nível, você está em sintonia com a Força e todos os ataques com sua arma corpo a corpo carregam o poder da Força com eles. Sempre que você atingir uma criatura com uma arma corpo-a-corpo, a criatura sofre um 1d8 extra. Se você também usar seus Golpes Fortalecidos pela Força com o ataque, você soma este dano ao dano extra do seu golpe fortalecido pela força. O dano é do mesmo tipo do dano da arma.
            </p>
            <h3>TOQUE PURIFICADOR</h3>
            <p>Começando no 14º nível, você pode usar sua ação e gastar um uso do seu Canalizar a Força para desfazer um poder dar força sobre você ou sobre uma criatura disposta que você tocar.
            </p>
            <h3>AURAS DO GUARDIÃO</h3>
            <p>Essas auras são apresentadas em ordem alfabética. Se múltiplos guardiões proverem a mesma aura, criaturas afetadas só poderão se beneficiar de uma por vez. Você precisa estar consciente para oferecer os benefícios das suas auras.
            </p>
            <span class="pr-2 classPortrait" style="float:left">
                <v-img class="img-circle" src="@/components/assets/guardian/guardian_03.jpg" height="560" width="360" />
            </span>
            <h4>AURA DA CONQUISTA</h4>
            <p>Sempre que uma criatura que está aterrorizada por você começar o turno a 5 pés (1,5m) de você, a velocidade da mesma será reduzida a zero e esta criatura sofre dano psíquico igual a metade do seu nível de guardião.
            </p>
            <p>No 10º nível, o área desta aura aumenta para 15 pés (5m), e no 18º nível, a área desta aura aumenta para 30 pés (10m).
            </p>
            <h4>Aura da Convicção</h4>
            <p>Você e as criaturas amigáveis dentro de 5 pés (1,5m) de você não podem ficar aterrorizadas.
            </p>
            <p>No 10º nível, o área desta aura aumenta para 15 pés (5m), e no 18º nível, a área desta aura aumenta para 30 pés (10m).
            </p>
            <h4>Aura da Devoção</h4>
            <p>Você e as criaturas amigáveis dentro de 5 pés (1,5m) de você não podem ser seduzidas.
            </p>
            <p>No 10º nível, o área desta aura aumenta para 15 pés (5m), e no 18º nível, a área desta aura aumenta para 30 pés (10m).
            </p>
            <h4>Aura de Ódio</h4>
            <p>Você e as criaturas amigáveis dentro de 5 pés (1,5m) de você ganham um bônus na primeira rolagem de dano de arma a cada round igual o seu modificador de carisma (mínimo de +1)
            </p>
            <p>No 10º nível, o área desta aura aumenta para 15 pés (5m), e no 18º nível, a área desta aura aumenta para 30 pés (10m).
            </p>
            <h4>Aura de Presença</h4>
            <p>Sempre que você e as criaturas amigáveis dentro de 5 pés (1,5m) de você tiverem que fazer um teste de resistência, a criatura ganha bônus para o teste de resistência igual seu modificador de Sabedoria (mínimo de 1)
            </p>
            <p>No 10º nível, o área desta aura aumenta para 15 pés (5m), e no 18º nível, a área desta aura aumenta para 30 pés (10m).
            </p>
            <h4>Aura de Proteção</h4>
            <p>Sempre que uma criatura a 5 pés (1,5m) de você sofrer dano, você pode usar sua reação para sofrer este dano ao invés da criatura. Essa característica não transfere qualquer outro efeito que possa acompanhar o dano, e este dano não pode ser reduzido de nenhuma maneira.
            </p>
            <p>No 10º nível, o área desta aura aumenta para 15 pés (5m), e no 18º nível, a área desta aura aumenta para 30 pés (10m).
            </p>
            <h4>Aura de Vigor</h4>
            <p>Sempre que uma criatura amigável começar o turno a 5 pés (1,5m) de você, esta criatura ganha pontos de vida temporários igual ao seu modificador de Sabedoria ou Carisma (A sua escolha, mínimo de um ponto).
            </p>
            <p>No 10º nível, o área desta aura aumenta para 15 pés (5m), e no 18º nível, a área desta aura aumenta para 30 pés (10m).
            </p>
            <h4>Aura de Vigilância</h4>
            <p>Você e criaturas amigáveis a 5 pés (1,5m) de você tem resistência a dano de poderes da força.
            </p>
            <p>No 10º nível, o área desta aura aumenta para 15 pés (5m), e no 18º nível, a área desta aura aumenta para 30 pés (10m).
            </p>
            <h3>FOCO DO GUARDIÃO</h3>
            <hr>
            <p class="red">SESSÃO EM CONSTRUÇÃO
            </p>
        </div>
    </v-container>
</template>