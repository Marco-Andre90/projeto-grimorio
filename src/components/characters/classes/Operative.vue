<template>
    <v-container fluid>
        <div exact>
            <div>
                <v-btn text to="/characters/classes">
				<v-icon class="mr-2">fa fa-angle-left</v-icon>
				CLASSES
				</v-btn>
            </div>
			<h1>OPERATIVO</h1>
            <span class="ma-2 classPortrait" style="float:right">
                <v-img class="img-circle" src="@/components/assets/operative/operative_01.png" height="350" width="350" contain />
            </span>
            <div>
                <p><i>Uma espiã bothan leva um momento ajustando seu visor infravermelho. Agilmente desviando da grade de lasers na sala, ela desliza para o computador no final. Contando os segundos na cabeça dela, ela invade o sistema. Vinte segundos. Dez segundos. Um grupo de soldados surgem apressados na sala, mas ela já havia desaparecido com os dados em mãos.
                    </i></p>
                <p><i>Com um olhar cuidadoso para a porta, um duros mal arrumado joga pazaak em uma cantina decadente. Quando dois guardas da cidade surgem na saída, ele sorri e vai para baixo da mesa. Antes que eles entrassem, o contrabandista vira a mesa e abre fogo. A multidão se dispersa no pânico, dando a ele cobertura suficiente para escapar.
                    </i></p>
                <p><i>Uma deslumbrante jovem humana dança para um senador embriagado em um salão. Ela pisca provocante pelo seu cabelos loiros dourados conforme se aproxima. Ao se inclinar para um beijo, o Senador é então surpreso pelo cano de uma pistola blaster sendo enfiado dentro de sua boca. Ele não teve nem tempo de gritar antes que a assassina puxasse o gatilho.
                    </i></p>
                <p><i>Operativos, tanto bons, maus, ou neutros, são aqueles que focam em uma prática específica e a utilizam para ter a vantagem. Eles podem vir de qualquer mundo ou região da galáxia, com origens desde o mais baixo patife até alguém que já foi parte da elite social.
                    </i></p>
                <h3>FUGINDO DO PERIGO</h3>
                <p>Operativos tem um talento para escapar de problemas. Eles têm um instinto de autopreservação que os mantém vivos, mas é usualmente temperado com uma necessidade de experimentar as emoções que a profissão tem a oferecer, e muitos operativos aventureiros também estão selados com um senso de honra que às vezes fazem eles irem contra suas inclinações naturais. Não importa quais sejam suas preocupações imediatas, sobrevivência é o nome do jogo.
                </p>
                <h3>ALÉM DA LEI</h3>
                <p>Operativos não começam procurando desafiar autoridade e quebrar a lei. Alguns são jogados na profissão como uma forma de rebelião. Outros caem no lado errado da lei seja por má sorte, decisões ruins, ou circunstâncias além de seu controle. As habilidades que vão aprendendo nesse meio tempo fazem deles grandes membros de equipe para todo tipo de missão.
                </p>
                <p>Enquanto cria um operativo, considere o que o fez entrar neste caminho. Talvez você tenha crescido nas ruas e se tornou criminoso como uma maneira de sobrevivência. Você pode ser um simples mercador que decidiu se virar contra o Império Sith quando eles usurparam seu negócio. Qual você diria que é suas principais habilidades? Qual é o seu centro, sua verdadeira essência que o mantém focado? Porque a sociedade o trataria como um criminoso, e ainda assim seus aliados o tratam como um companheiro leal?
                </p>
            </div>
            <h4>CONSTRUÇÃO RÁPIDA</h4>
            <p>Você pode fazer um operativo rapidamente seguindo as seguintes sugestões. Primeiro, faça Destreza sua maior habilidade, seguido de Inteligência e Carisma. Segundo, escolha o antecedente apostador.
            </p>
            <div class="block ma-0">
                <h2>Operativo</h2>
                <table class="table text-center levelTable">
                    <thead>
                        <tr>
                            <th class="px-2">Nível</th>
                            <th class="px-2">Bônus de Proficiência</th>
                            <th class="px-2">Características</th>
                            <th class="px-2">Dados Superioridade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="rows">
                            <td class="px-2">1º</td>
                            <td class="px-2">+2</td>
                            <td class="px-2 text-left">Expertise, Ataque Furtivo</td>
                            <td class="px-2">1d6</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">2º</td>
                            <td class="px-2">+2</td>
                            <td class="px-2 text-left">Mau Pressentimento, Ação Ardilosa</td>
                            <td class="px-2">1d6</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">3º</td>
                            <td class="px-2">+2</td>
                            <td class="px-2 text-left">Prática do Operativo</td>
                            <td class="px-2">2d6</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">4º</td>
                            <td class="px-2">+2</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">2d6</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">5º</td>
                            <td class="px-2">+3</td>
                            <td class="px-2 text-left">Esquiva Sobrenatural</td>
                            <td class="px-2">3d6</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">6º</td>
                            <td class="px-2">+3</td>
                            <td class="px-2 text-left">Expertise</td>
                            <td class="px-2">3d6</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">7º</td>
                            <td class="px-2">+3</td>
                            <td class="px-2 text-left">Evasão</td>
                            <td class="px-2">4d6</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">8º</td>
                            <td class="px-2">+3</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">4d6</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">9º</td>
                            <td class="px-2">+4</td>
                            <td class="px-2 text-left">Característica da Prática</td>
                            <td class="px-2">5d6</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">10º</td>
                            <td class="px-2">+4</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">5d6</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">11º</td>
                            <td class="px-2">+4</td>
                            <td class="px-2 text-left">Talento Confiável</td>
                            <td class="px-2">6d6</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">12º</td>
                            <td class="px-2">+4</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">6d6</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">13º</td>
                            <td class="px-2">+5</td>
                            <td class="px-2 text-left">Característica da Prática</td>
                            <td class="px-2">7d6</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">14º</td>
                            <td class="px-2">+5</td>
                            <td class="px-2 text-left">Sentido Cego</td>
                            <td class="px-2">7d6</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">15º</td>
                            <td class="px-2">+5</td>
                            <td class="px-2 text-left">Mente Escorregadia</td>
                            <td class="px-2">8d6</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">16º</td>
                            <td class="px-2">+5</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">8d6</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">17º</td>
                            <td class="px-2">+6</td>
                            <td class="px-2 text-left">Característica da Prática</td>
                            <td class="px-2">9d6</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">18º</td>
                            <td class="px-2">+6</td>
                            <td class="px-2 text-left">Elusivo</td>
                            <td class="px-2">9d6</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">19º</td>
                            <td class="px-2">+6</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">10d6</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">20º</td>
                            <td class="px-2">+6</td>
                            <td class="px-2 text-left">Golpe de Sorte</td>
                            <td class="px-2">10d6</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <span class="mt-4 pr-2 classPortrait" style="float:right">
                <v-img class="img-circle" src="@/components/assets/operative/operative_02.jpg" height="750" width="420" float="right" />
            </span>
            <span class="mt-2 pr-2 classPortrait" style="float:right">
                <v-img class="img-circle" src="" height="650" width="360" float="right" />
            </span>
            <h2 class="pt-3">Características de Classe</h2>
            <p>Como um Operativo, você ganha as seguintes características de classe.</p>
            <h4>Pontos de Vida</h4>
            <div>
                <strong>Dado de Vida: </strong>
                1d8 por nível de Operativo.
            </div>
            <div>
                <strong>Dado de Vida no 1º nível: </strong>
                8 + seu modificador de constituição.
            </div>
            <div class="mb-2">
                <strong>Pontos de Vida em Níveis Maiores: </strong>
                1d8 (ou 5) + seu modificador de constituição por nível de operativo após o 1º.
            </div>
            <h4>Proficiências</h4>
            <div><strong>Armadura: </strong>
            Armadura Leve</div>
            <div><strong>Armas: </strong>
           Vibroarmas simples, blasters simples, pistola blaster, vibrorapia, technolâmina, lâmina escondida</div>
            <div class="mb-2"><strong>Ferramentas: </strong>
            Escolha entre kit de demolição, kit de disfarce, kit de falsificação, kit de venenos, kit de segurança, kit de slicer.</div>
            <div><strong>Testes de Resistência </strong>
            Destreza, Inteligência</div>
            <div class="mb-2"><strong>Perícias </strong>
            Escolha duas dentre Acrobacias, Atletismo, Enganação, Intuição, Intimidação, Investigação, Percepção, Perfomance, Persuassão, Pilotar, Prestidigitação, Furtividade e Tecnologia.</div>
            <h4>Equipamentos</h4>
            <p>Você começa com o seguinte equipamento, além do
            equipamento concedido pelo seu antecedente:</p>
            <div>
                <ul>
                    <li>
                        <em>(a)</em> vibroflorete <em>(b)</em> uma lâmina escondida, <em>(c)</em> um blaster simples e celúla de energia, ou <em>(d)</em> uma vibroarma simples
                    </li>
                    <li>
                        <em>(a)</em> um blaster simples e duas células de energia ou <em>(b)</em> uma vibroarma simples e um escudo de luz
                    </li>
                    <li>
                        <em>(a)</em> pacote do ladrão, <em>(b)</em> pacote do aventureiro ou <em>(c)</em> um pacote do explorador
                    </li>
                    <li>
                        Uma ferramenta ao qual você é proficiente
                    </li>
                    <li>
                        Um traje de combate e uma vibroadaga
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
                    <div>Operativo</div>
                    <div class="text-right">1,000 + 4d4 x 100 cr</div>
                </div>
            </div>
            <br>
            <h3>EXPERTISE</h3>
            <p>No 1º nível, escolha duas de suas proficiências em habilidades, ou uma de suas proficiências em habilidades e uma de suas proficiências em ferramentas, ou duas de suas proficiências em ferramentas. Você ganha expertise nessas habilidades ou ferramentas.
            </p>
            <p>No 6º nível, você pode escolher mais duas de suas proficiências (em habilidades ou ferramentas) para ganhar este benefício.
            </p>
            <h3>ATAQUE FURTIVO</h3>
            <p>A partir do 1º nível, você sabe como atacar de maneira sutil e explorar a distração de seu oponente. Uma vez por turno, você pode causar um dano extra de 1d6 a uma criatura que você atingir com um ataque se você tiver vantagem na rolagem de ataque. O ataque precisa utilizar uma arma adaptável ou a distância.
            </p>
            <p>Você não precisa de vantagem na rolagem de ataque se outro inimigo do alvo estiver a cinco pés do mesmo, e este inimigo não está incapacitado, e você não tem desvantagem na rolagem de ataque.
            </p>
            <p>A quantidade de dano causado aumenta conforme você sobe de nível nesta classe, conforme mostrado na coluna “Ataque Furtivo” da tabela de classe do operativo.
            </p>
            <h3>MAU PRESSENTIMENTO</h3>
            <p>A partir do 2º nível, você tem um olhar mais atento, quase ao ponto de ser paranoia. Quando você rolar por iniciativa, você se mover até o máximo de sua velocidade. Esse movimento acontece antes que a ordem iniciativa é determinada.
            </p>
            <p>Uma vez que você tenha usado esta característica, você não pode usá-la novamente até terminar um descanso longo.
            </p>
            <h3>AÇÃO ARDILOSA</h3>
            <p>A partir do 2º nível, seu pensamento rápido e agilidade faz você se mover e agir rapidamente. Você pode usar uma ação bônus durante cada um de seus turnos em combate. Esta ação pode ser usada somente para Disparada, Desengajar ou Esconder.
            </p>
            <h3>PRÁTICA DO OPERATIVO</h3>
            <p>No 3º nível, você pode escolher uma prática que você aplica no exercício das suas habilidades como operativo, que serão detalhados ao fim da sua descrição de classe. A prática que você escolher irá lhe dar novas características no 3º nível e então novamente no 9º, 13º e 17º níveis.
            </p>
            <h3>INCREMENTO NO VALOR DE HABILIDADE</h3>
            <p>Quando você atinge o 4° nível e novamente no 8°, 10°, 12°, 16° e 19° nível, você pode aumentar um valor de habilidade, à sua escolha, em 2 ou você pode aumentar dois valores de habilidade, à sua escolha, em 1. Como padrão, você não pode elevar um valor de habilidade acima de 20 com essa característica. Alternativamente você pode escolher uma perícia. (veja capítulo 6)
            </p>
            <h3>ESQUIVA SOBRENATURAL</h3>
            <p>A partir do 5º nível, quando um inimigo que você possa ver o acerta com um ataque, você pode usar sua reação para reduzir pela metade o dano sofrido.
            </p>
            <h3>EVASÃO</h3>
            <p>A partir do 7º nível, você pode esquivar-se agilmente de certos efeitos em área, como uma tempestade de Força de um consular ou a explosão de um engenheiro. Quando você for alvo de um efeito que exige um teste de resistência de Destreza para sofrer metade do dano, você não sofre dano algum se passar, e somente metade do dano se falhar.
            </p>
            <h3>TALENTO CONFIÁVEL</h3>
            <p>No 11º nível, você refinou suas perícias beirando à perfeição. Toda vez que você fizer um teste de habilidade no qual possa adicionar seu bônus de proficiência, você trata um resultado no d20 de 9 ou menor como um 10. 
            </p>
            <h3>SENTIDO CEGO</h3>
            <p>No 14º nível, se você for capaz de ouvir, você está ciente da localização de qualquer criatura escondida ou invisível a até 10 pés (3m) de você.
            </p>
            <h3>MENTE ESCORREGADIA</h3>
            <p>No 15º nível, você adquire uma grande força de vontade, adquirindo proficiência nos testes de resistência de Sabedoria.
            </p>
            <h3>ELUSIVO</h3>
            <p>A partir do 18º nível, você se torna tão sagaz que raramente alguém encosta a mão em você. Nenhuma jogada de ataque tem vantagem contra você, desde que você não esteja incapacitado.
            </p>
            <h3>GOLPE DE SORTE</h3>
            <span class="pt-1 pr-1 classPortrait" style="float:left">
                <v-img class="img-circle" src="@/components/assets/operative/operative_03.jpg" height="350" width="350" />
            </span>
            <p>No 20º nível, você adquire um dom incrível para ter sucesso nos momentos em que mais precisa. Sua pontuação de Destreza e Inteligência aumenta em 2, e o limite máximo destas habilidades também aumentam em 2. Adicionalmente, se o seu ataque errar um alvo dentro do alcance, você pode transformar o erro em acerto. Alternativamente, se você falhar um teste de habilidade, você pode tratar a rolagem de um d20 como um 20.
            </p>
            <p>Uma vez usada esta característica, você não pode usá-la novamente até terminar um descanso curto ou longo.
            </p>
            <h3>PRÁTICAS DO OPERATIVO</h3>
            <hr>
            <p class="red">SESSÃO EM CONSTRUÇÃO
            </p>
        </div>
    </v-container>
</template>