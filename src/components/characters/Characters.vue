<template>
	<v-container fluid>
		<div exact>
		<h1 class="text-center">Personagens</h1>
			<div>
				<div>
					<h3 class="mt-3"></h3>
					<v-container fluid>
						<v-row class="justify-center">
							<v-col sm="6" md="3" cols="12">
								<v-btn block>Raças</v-btn>
							</v-col>
							<v-col sm="6" md="3" cols="12">
								<v-btn block to="/characters/classes">Classes</v-btn>
							</v-col>
							<v-col sm="6" md="3" cols="12">
								<v-btn block>Arquétipos</v-btn>
							</v-col>
							<v-col sm="6" md="3" cols="12">
								<v-btn block>Antepassados</v-btn>
							</v-col>
						</v-row>
					</v-container>
				</div>
			</div>
		</div>
	</v-container>
</template>