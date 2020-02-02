<template>
    <v-container fluid>
        <div exact>
            <div>
                <v-btn text to="/characters/classes">
				<v-icon class="mr-2">fa fa-angle-left</v-icon>
				CLASSES
				</v-btn>
            </div>
			<h1>Guerreiro</h1>
            <span class="ma-2 classPortrait" style="float:right">
                <v-img class="img-circle" src="@/components/assets/fighter/fighter_01.png" height="350" width="350" contain />
            </span>
            <div>
                <p><i>Um Trandoshan corre freneticamente através dos telhados, constantemente olhando por cima do ombro.
                    Quando ele se prepara para mais um salto, um tiro de blaster o atinge nas costas o deixando inconsciente.
                    Sua visão turva mal consegue discernir a figura de uma mulher mascarada que se apróxima casualmente, pronta
                    para coletar sua recompensa</i></p>
                <p><i>Com seus braços musculosos bem abertos, um Wookie grisalho sorri para uma multidão sedenta de sangue.
                    Ele se vira para o seu oponente na arena bem a tempo de ver o Besalisk tentar um golpe. O wookie desvia,
                    para socar o rival de quatro braços bem na barriga. Dois ganchos depois e restava apenas ele de pé para manter
                    seu título de gladiador campeão</i></p>
                <p><i>Respirando fundo, o soldado da República observa a zona de guerra que se estende pela superfície
                    gelada de Ilum. Ele segura firme o seu rifle blaster e, acenando com a cabeça para as dezenas de companheiros
                    de esquadrão que estavam ao seu lado, ele investe rumo o campo de batalha.</i></p>
                <p><i>O Guerreiro combina disciplina com artes marciais para se tornar o melhor da galáxia. Guerreiros podem ser
                    defensores obstinados para aqueles que precisam, saqueadores cruéis ou bravos aventureiros. Eles podem estar lutando
                    por glória, honra, justiça, poder, fortuna, ou pelo simples prazer de lutar.</i></p>
                <h3>Tudo em um Dia de Trabalho</h3>
                <p>Muitos guerreiros vêem aventuras, saques em fortalezas inimigas, e missões perigosas como seus trabalhos.
                    Alguns querem proteger aqueles que não podem se defender sozinhos enquanto outros utilizam suas habilidades para
                    criar sua própria marca na galáxia. Guerreiros também podem ser guardas, campeões, caçadores de recompensas, vigilantes,
                    mercenários, lutadores rebeldes ou simplesmente exploradores armados.
                </p>
                <h3>Código Vermelho</h3>
                <p>A maioria dos guerreiros vem para esta profissão após receber ao menos alguma forma de treinamento, geralmente em organizações
                    militares. Alguns atendem academias formais, outros aprendem sozinhos em ambientes hostis. Um guerreiro pode ter pego sua arma
                    para escapar de uma vida mundana enquanto outro pode estar seguindo uma tradição familiar. Qualquer que seja suas origens,
                    guerreiros demonstram uma lealdade inabalável. Guerreiros seguem ordens com pouca hesitação, pois sabem que falhar significa a morte.
                </p>
                <p>Enquanto cria seu personagem guerreiro, considere onde está sua lealdade. Você pode fazer parte de uma organização militar formal, um
                    um de incontáveis troopers lutando por uma causa. Talvez você seja um mercenário, viajando a galáxia a procura do próximo
                    trabalho. Quais armas você prefere e irá se especializar? Por quem ou pelo o quê você luta? Você tem aspirações por uma vida
                    além do campo de batalha, ou você já está a tanto tempo na guerra que não conhece mais nada?
                </p>
            </div>
            <h4>Construção Rápida</h4>
            <p>Você pode fazer um guerreiro rapidamente seguindo estas sugestões. Primeiro, faça Força ou Destreza ter o seu maior modificador de habilidade,
                dependendo se você quer focar em combate corpo-a-corpo ou a distância (ou com armas com acuidade). Sua segunda maior habilidade deve ser constiuição.
                Depois, escolha o antecedente "soldado".
            </p>
            <div class="block ma-0">
                <h2>O Guerreiro</h2>
                <table class="table text-center levelTable">
                    <thead>
                        <tr>
                            <th class="px-2">Nível</th>
                            <th class="px-2">Bônus de Proficiência</th>
                            <th class="px-2">Características</th>
                            <th class="px-2">Dados Superioridade</th>
                            <th class="px-2">Manobras Conhecidas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="rows">
                            <td class="px-2">1º</td>
                            <td class="px-2">+2</td>
                            <td class="px-2 text-left">Estilo de Luta, Retomar o Fôlego</td>
                            <td class="px-2">-</td>
                            <td class="px-2">-</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">2º</td>
                            <td class="px-2">+2</td>
                            <td class="px-2 text-left">Surto de Ação(Um uso), Superioridade de Combate</td>
                            <td class="px-2">2</td>
                            <td class="px-2">2</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">3º</td>
                            <td class="px-2">+2</td>
                            <td class="px-2 text-left">Especialidade do Guerreiro</td>
                            <td class="px-2">2</td>
                            <td class="px-2">2</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">4º</td>
                            <td class="px-2">+2</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">2</td>
                            <td class="px-2">2</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">5º</td>
                            <td class="px-2">+3</td>
                            <td class="px-2 text-left">Ataque Extra</td>
                            <td class="px-2">2</td>
                            <td class="px-2">2</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">6º</td>
                            <td class="px-2">+3</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">2</td>
                            <td class="px-2">2</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">7º</td>
                            <td class="px-2">+3</td>
                            <td class="px-2 text-left">Característica da Especialidade do Guerreiro</td>
                            <td class="px-2">3</td>
                            <td class="px-2">3</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">8º</td>
                            <td class="px-2">+3</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">3</td>
                            <td class="px-2">3</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">9º</td>
                            <td class="px-2">+4</td>
                            <td class="px-2 text-left">Indomável</td>
                            <td class="px-2">3</td>
                            <td class="px-2">3</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">10º</td>
                            <td class="px-2">+4</td>
                            <td class="px-2 text-left">Característica da Especialidade do Guerreiro</td>
                            <td class="px-2">3</td>
                            <td class="px-2">3</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">11º</td>
                            <td class="px-2">+4</td>
                            <td class="px-2 text-left">Segundo Ataque Extra</td>
                            <td class="px-2">3</td>
                            <td class="px-2">4</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">12º</td>
                            <td class="px-2">+4</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">3</td>
                            <td class="px-2">4</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">13º</td>
                            <td class="px-2">+5</td>
                            <td class="px-2 text-left">Indomável (Dois usos)</td>
                            <td class="px-2">3</td>
                            <td class="px-2">4</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">14º</td>
                            <td class="px-2">+5</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">3</td>
                            <td class="px-2">4</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">15º</td>
                            <td class="px-2">+5</td>
                            <td class="px-2 text-left">Característica da Especialidade do Guerreiro</td>
                            <td class="px-2">4</td>
                            <td class="px-2">5</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">16º</td>
                            <td class="px-2">+5</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">4</td>
                            <td class="px-2">5</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">17º</td>
                            <td class="px-2">+6</td>
                            <td class="px-2 text-left">Surto de Ação (dois usos) Indomável (Três usos)</td>
                            <td class="px-2">4</td>
                            <td class="px-2">5</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">18º</td>
                            <td class="px-2">+6</td>
                            <td class="px-2 text-left">Característica da Especialidade do Guerreiro</td>
                            <td class="px-2">4</td>
                            <td class="px-2">5</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">19º</td>
                            <td class="px-2">+6</td>
                            <td class="px-2 text-left">Incremento no Valor de Habilidade</td>
                            <td class="px-2">4</td>
                            <td class="px-2">5</td>
                        </tr>
                        <tr class="rows">
                            <td class="px-2">20º</td>
                            <td class="px-2">+6</td>
                            <td class="px-2 text-left">Mestre do Combate</td>
                            <td class="px-2">4</td>
                            <td class="px-2">5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <span class="mt-2 pr-2 classPortrait" style="float:right">
                <v-img class="img-circle" src="@/components/assets/fighter/fighter_02.jpg" height="650" width="360" float="right" />
            </span>
            <h2 class="pt-3">Características de Classe</h2>
            <p>Como um guerreiro, você ganha as seguintes características de classe.</p>
            <h4>Pontos de Vida</h4>
            <div>
                <strong>Dado de Vida: </strong>
                1d10 por nível de Guerreiro.
            </div>
            <div>
                <strong>Dado de Vida no 1º nível: </strong>
                10 + seu modificador de constituição.
            </div>
            <div class="mb-2">
                <strong>Pontos de Vida em Níveis Maiores: </strong>
                1d10 (ou 6) + seu modificador de constituição por nível de guerreiro após o 1º.
            </div>
            <h4>Proficiências</h4>
            <div><strong>Armadura: </strong>
            Todos os tipos</div>
            <div><strong>Armas: </strong>
            Todos os tipos de Blasters e Vibroarmas</div>
            <div class="mb-2"><strong>Ferramentas: </strong>
            Nenhuma.</div>
            <div><strong>Testes de Resistência </strong>
            Força e Constituição</div>
            <div class="mb-2"><strong>Perícias </strong>
            Escolha duas dentre Acrobacia, Adestrar
            animais, Atletismo, História, Intuição, Intimidação,
            Percepção e Sobrevivência</div>
            <h4>Equipamentos</h4>
            <p>Você começa com o seguinte equipamento, além do
            equipamento concedido pelo seu antecedente:</p>
            <div>
                <ul>
                    <li>
                        <em>(a)</em> Armadura de batalha leve ou <em>(b)</em> traje de combate,
                        rifle blaster, e duas células de energia
                    </li>
                    <li>
                        <em>(a)</em> Vibroarma marcial e gerador de escudo leve ou médio ou <em>(b)</em> 
                        duas vibroarmas marciais
                    </li>
                    <li>
                        <em>(a)</em> Pistola blaster do tipo hold-out e uma célula de energia ou <em>(b)</em> 
                        duas vibroadagas
                    </li>
                    <li>
                        <em>(a)</em> Pacote do aventureiro ou <em>(b)</em> pacote do explorador.
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
                    <div>Guerreiro</div>
                    <div class="text-right">1,000 + 5d4 x 100 cr</div>
                </div>
            </div>
            <br>
            <h3>Estilo de Luta</h3>
            <p>Começando no 1º nível, você adota um estilo particular de luta. Escolha uma das opções de
                Estilo de Luta, detalhados no Capítulo 6. Você não pode escolher uma mesma opção novamente, mesmo que possa escolher depois.
            </p>
            <h3>Retomar Fôlego</h3>
            <p>Você possui uma reserva de estamina e pode usá-la para
                proteger a si mesmo contra danos. No seu turno, você
                pode usar uma ação bônus para recuperar pontos de vida
                igual a 1d10 + seu nível de guerreiro.</p>
            <p>Uma vez que você use essa característica, você precisa
                terminar um descanso curto ou longo para usá-la de novo</p>
            <h3>Surto de Ação</h3>
            <p>A partir do 2º nível, você pode forçar o seu limite para
                além do normal por um momento. Durante o seu turno,
                você pode realizar uma ação adicional juntamente com
                sua ação e possível ação bônus.</p>
            <p>Uma vez que você use essa característica, você precisa
                terminar um descanso curto ou longo para usá-la de novo.</p>
            <h3>Superioridade de Combate</h3>
            <p>Também no segundo nível, você pode aprender manobras que funcionam com o uso de um
                dado especial chamado dado de superioridade.</p>
            <h4>Manobras</h4>
            <p>Você pode aprender duas manobras a sua escolha, elas serão detalhadas na parte "Manobras" mais abaixo,
                e você adquire mais conforme sobe mais níveis, como mostrado na coluna "Manobras Conhecidas" da tabela
                da classe guerreiro. Muitas manobras melhoram o ataque de alguma maneira. Você pode usar apenas uma manobra
                por ataque, e você só pode usar cada manobra apenas uma vez por turno.
            </p>
            <p>Toda vez que você aprende novas manobras, você pode substituir uma manobra conhecida por outra diferente.</p>
            <h4>Dado de Superioridade</h4>
            <p>Você tem dois dados de Superioridade, que são <strong>d4s</strong>, você consegue mais conforme subir de nível,
            como mostrado na coluna "Dado de Superioridade" da tabela da classe guerreiro. Um dado de superioridade é gasto
            quando você o usa. Você recupera todos os dados de superioridade gastos quando terminar um descanso curto ou longo.</p>
            <h4>Testes de Resistência</h4>
            <p>Algumas de suas manobras requerem com que o alvo faça um teste de resistência para resistir aos efeitos da manobra.
                O CD do teste de resistência é calculado com a seguinte fórmula:</p>
            <hr>
            <p><strong>CD de resistência a Manobra</strong> = 8 + seu bônus de proficiência + 
            seu modificador de força ou destreza (você escolhe).</p>
            <hr>
            <h3>Manobras</h3>
            <p>As manobras são apresentadas em ordem alfabética.</p>
            <h4>APARAR</h4>
            <p>Quando outra criatura lhe causar dano em um ataque corpo-a-corpo, você pode usar sua reação e gastar um dado de superioridade para reduzir o dano pelo número da sua rolagem no dado de superioridade + o seu modificador de Destreza.
            </p>
            <h4>ATAQUE ABRANGENTE</h4>
            <p>Quando você atinge uma criatura com um ataque de arma corpo-a-corpo, você pode gastar um dado de superioridade para tentar causar dano a outra criatura com o mesmo ataque. Escolhe outra criatura dentro de 5 pés (1,5m) do alvo original e dentro do seu alcance. Se a rolagem de ataque original é suficiente para acertar a segunda criatura, ela sofre dano igual ao número que você rolar no dado de superioridade. O dano é do mesmo tipo causado pelo ataque original.
            </p>
            <h4>ATAQUE AMEAÇADOR</h4>
            <p>Quando você atingir uma criatura com um ataque de arma, você pode gastar um dado de superioridade para tentar aterrorizar o alvo. Você adiciona o dado de superioridade a rolagem de dano de ataque, e o alvo precisa fazer um teste de resistência de Sabedoria. Se falhar, ele teme você até o final do seu próximo turno.
            </p>
            <h4>ATAQUE COM PRESSÃO</h4>
            <p>Quando você atingir uma criatura com um ataque de arma, você pode gastar um dado de superioridade para tentar afastar o alvo para trás. Você adiciona o dado de superioridade a rolagem do dano de ataque, e se o alvo for maior ou menor, ele deve fazer um teste de resistência de Força. Em caso de falha, ele é puxado a até 15 pés (4,5m) para longe de você.
            </p>
            <h4>ATAQUE PRECISO</h4>
            <p>Quando você fizer uma rolagem de ataque de arma contra uma criatura, você pode gastar um dado de superioridade para adicioná-lo a rolagem. Você pode usar essa manobra antes ou depois de fazer a rolagem de ataque, mas antes que qualquer efeito do ataque seja aplicado.
            </p>
            <span class="pr-2 classPortrait" style="float:left">
                <v-img class="img-circle" src="@/components/assets/fighter/fighter_03.jpg" height="560" width="360" />
            </span>
            <h4>CHAMADA DO COMANDANTE</h4>
            <p>Quando você utilizar a ação de ataque no seu turno, você pode renunciar um dos seus ataques e usar
                uma ação bonus para direcionar um dos seus companheiros para o ataque. Quando o fizer, escolha uma
                criatura amigável que você pode ver ou ouvir e gaste um dado de superioridade. Esta criatura pode
                imediatamente utilizar sua reação para fazer um ataque com arma, adcionando o dado de superioridade
                a rolagem do dano de ataque.
            </p>
            <h4>CONTRA-ATAQUE</h4>
            <p>Quando uma criatura errar um ataque corpo-a-corpo contra você, você usa sua reação para gastar um dado de superioridade para fazer um ataque corpo-a-corpo contra a criatura. Se você atingir, você adiciona o dado de superioridade a rolagem de dano de ataque.
            </p>
            <h4>DESARMAR</h4>
            <p>Quando você atinge uma criatura com um ataque de arma, você pode gastar um dado de superioridade para
                tentar desarmar o alvo, forçando ele a derrubar um item a sua escolha que esteja segurando. Você adiciona
                o dado de superioridade a rolagem de dano de ataque, e o alvo precisa fazer um teste de resistência de
                Força. Se falhar o teste, ele larga o objeto que você escolher. O objeto cai nos pés dele.</p>
            <h4>DISTRAÇÃO</h4>
            <p>Quando você atingir uma criatura com um ataque de arma, você pode gastar um dado de superioridade para
                tentar distrair a criatura, dando uma abertura aos seus aliados. Você adiciona o dado de superioridade
                a rolagem de dano de ataque. A próxima rolagem de ataque contra o alvo por um atacante que não seja você
                terá vantagem se o ataque for feito antes do início do seu próximo turno.</p>
            <h4>ESTOCADA</h4>
            <p>Quando fizer um ataque com arma corpo-a-corpo no seu turno, você pode gastar um dado de superioridade
                para aumentar o alcance deste ataque em 5 pés (1,5m). Se você acertar, pode adicionar o dado de superioridade
                a rolagem de dano de ataque.</p>
            <h4>FINTAR</h4>
            <p>Você pode gastar um dado de superioridade e usar a ação bônus no seu turno para enganar e ludibriar seu
                adversário, escolha uma criatura que esteja a 5 pés (1,5m) de você para ser seu alvo. Você tem vantagem
                no seu próximo ataque contra esta criatura. Se o ataque atingir, adicione o dado de superioridade a rolagem
                de dano do ataque.</p>
            <h4>LEVANTAR MORAL</h4>
            <p>No seu turno, você pode utilizar uma ação bônus e gastar um dado de superioridade para reforçar a determinação de um de seus companheiros. Quando você fizer, escolha uma criatura amigável que pode lhe ver ou ouvir. Essa criatura ganha pontos de vida temporários igual a rolagem de dado de superioridade + seu modificador de Carisma.
            </p>
            <h4>MANOBRA DE ATAQUE</h4>
            <p>Quando você atingir uma criatura com um ataque de arma, você pode gastar um dado de superioridade para manobrar um de seus companheiros em uma posição mais vantajosa. Você adiciona o dado de superioridade para a rolagem de dano de ataque, e você escolhe uma criatura amigável que pode ver ou ouvir você.</p>
            <p>A criatura então pode usar sua reação para se movimentar até metade da sua velocidade sem provocar um ataque de oportunidade do alvo do seu ataque.
            </p>
            <h4>MOVIMENTAÇÃO EVASIVA</h4>
            <p>Quando se mover, você pode gastar um dado de superioridade, rolando o dado e adicionando o resultado
                a sua CA até que pare de se mover.</p>
            <h4>PROVOCAÇÃO</h4>
            <p>Quando você atinge uma criatura com uma ataque de arma, você pode gastar um dado de superioridade para tentar
                instigar o alvo para que ataque você. Você adiciona o dado de superioridade a rolagem de dano de ataque,
                e o alvo precisa fazer um teste de resistência de Sabedoria. Se falhar o teste, o alvo tem desvantagem em
                todas as rolagens de ataque contra alvos que não sejam você até o fim do seu próximo turno.</p>
            <h4>RASTEIRA</h4>
            <p>Quando você atingir uma criatura com um ataque de arma, você pode gastar um dado de superioridade para tentar derrubar o alvo no chão. Você adiciona um dado de superioridade a rolagem de dano do ataque, e se o alvo for maior ou menor, ele deve fazer um teste de resistência de força. Se o teste falhar, você derruba o alvo no chão.
            </p>
            <h3>ESPECIALIDADES DO GUERREIRO</h3>
            <p>No 3º nível, você escolhe um arquétipo o qual se esforçará para seguir as técnicas e estilos de combate dele, todos são detalhados ao fim da descrição de Classe. O arquétipo confere a você características especiais no 3º nível e de novo nos 7º, 10º, 15º e 18º nível.
            </p>
            <h3>INCREMENTO NO VALOR DE HABILIDADE</h3>
            <p>Quando você atinge o 4° nível e novamente no 6°, 8°, 12°, 14°, 16° e 19° nível, você pode aumentar um valor de habilidade, à sua escolha, em 2 ou você pode aumentar dois valores de habilidade, à sua escolha, em 1. Como padrão, você não pode elevar um valor de habilidade acima de 20 com essa característica.
Alternativamente você pode escolher um talento (veja o Capítulo 6 para ver a lista de talentos).
            </p>
            <h3>ATAQUE EXTRA</h3>
            <p>A partir do 5º nível, você pode atacar duas vezes, ao invés de uma, quando usar a ação Atacar durante o seu turno.
            </p>
            <h3>INDOMÁVEL</h3>
            <p>A partir do 9º nível, você pode jogar de novo um teste de resistência que falhou. Se o fizer, você deve usar o novo valor e não pode usar essa característica de novo antes de terminar um descanso longo. 
            </p>
            <p>Você pode usar esta característica duas vezes entre descansos longos quando chegar no 13º nível e três vezes entre descansos longos quando chegar no 17º nível
            </p>
            <h3>ATAQUE EXTRA MAIOR</h3>
            <p>A partir do 11º nível, você pode atacar três vezes, ao invés de uma vez, quando usar a ação Atacar durante o seu turno.
            </p>
            <p>Adicionalmente, quando você usar uma ação bônus para atacar em lutas com duas armas, você pode fazer dois ataques ao invés de um.
            </p>
            <h3>MESTRE DO COMBATE</h3>
            <p>No 20º nível, você é o mestre do combate. Sua Força ou Destreza aumenta em 2, sua constituição aumenta em 2. Seu valor máximo para estes atributos aumenta em 2.
            </p>
            <p>Adicionalmente, você pode atacar quatro vezes, ao invés de uma vez, quando usar a ação Atacar durante o seu turno.
            </p>
            <h3>ESPECIALIDADES DO GUERREIRO</h3>
            <hr>
            <p class="red">SESSÃO EM CONSTRUÇÃO
            </p>
        </div>
    </v-container>
</template>