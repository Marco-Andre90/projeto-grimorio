<template>
	<v-container fluid>
		<div exact>
			<div>
				<v-btn text to="/characters">
					<v-icon class="mr-2">fa fa-angle-left</v-icon>
					Personagens
				</v-btn>
			</div>
			<h1 class="text-center">CLASSES</h1>
			<v-container fluid>
				<v-row class="justify-center">
					<v-col sm="6" md="4" lg="3" cols="12">
						<v-card hover to="/characters/classes/guardian" style="height:100%">
							<v-card-text>
								<h3 class="text-center">Guardião</h3>
								<div>
									<p>Usuário da Força especializado em combate corpo-a-corpo e afetar oponentes e aliados a sua volta</p>
									<p class="ma-0"><strong>Dado de Vida:</strong> 1d10</p>
									<p class="ma-0"><strong>Atributo Primário:</strong> Força</p>
									<p class="ma-0"><strong>Testes de Resistência:</strong> Constituição e Carisma</p>
								</div>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col sm="6" md="4" lg="3" cols="12">
						<v-card hover to="/characters/classes/fighter" style="height:100%">
							<v-card-text>
								<h3 class="text-center">Guerreiro</h3>
								<div>
									<p>Combatente versátil que se destaca tanto no combate corpo-a-corpo quanto no combate a distância.</p>
									<p class="ma-0"><strong>Dado de Vida:</strong> 1d10</p>
									<p class="ma-0"><strong>Atributo Primário:</strong> Força</p>
									<p class="ma-0"><strong>Testes de Resistência:</strong> Força e Constituição</p>
								</div>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col sm="6" md="4" lg="3" cols="12">
						<v-card hover to="/characters/classes/operative" style="height:100%">
							<v-card-text>
								<h3 class="text-center">Operativo</h3>
								<div>
									<p>Controlador que foca em furtividade e técnicas ardilosas para sobreviver e cumprir suas missões.</p>
									<p class="ma-0"><strong>Dado de Vida:</strong> 1d8</p>
									<p class="ma-0"><strong>Atributo Primário:</strong> Destreza</p>
									<p class="ma-0"><strong>Testes de Resistência:</strong> Destreza e Inteligência</p>
								</div>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col sm="6" md="4" lg="3" cols="12">
						<v-card hover to="/characters/classes/sentinel" style="height:100%">
							<v-card-text>
								<h3 class="text-center">Sentinela</h3>
								<div>
									<p>Ágil usuário da Força que mistura combate corpo-a-corpo com o poder da Força.</p>
									<p class="ma-0"><strong>Dado de Vida:</strong> 1d8</p>
									<p class="ma-0"><strong>Atributo Primário:</strong> Destreza</p>
									<p class="ma-0"><strong>Testes de Resistência:</strong> Destreza e Carisma</p>
								</div>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</div>
	</v-container>
</template>

<script>
export default {

}
</script>

<style>
</style>