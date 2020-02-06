<template>
  <div>
		<h1 class="pt-3 text-center">STAR WARS 5E</h1>
		<h2 class="text-center">TRADUZIDO</h2>
		<div>
			<v-simple-table>
				<template v-slot:default>
					<thead>
						<tr>
							<th class="text-left">Novidade</th>
							<th class="text-left">Data</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<router-link tag="span" to="/characters/classes" style="cursor:pointer">
								<v-icon class="green--text mr-3">fa fa-exclamation-circle</v-icon>
								<span class="green--text">Adicionada a classe Operativo. (Sem Arquétipos por enquanto)</span>
								</router-link>
							</td>
							<td><strong>02/02/2020</strong></td>
						</tr>
						<!-- OLD --><!-- OLD --><!-- OLD --><!-- OLD -->
						<tr>
							<td>
								<router-link tag="span" to="/characters/classes" style="cursor:pointer">
								<v-icon class="grey--text mr-3">fa fa-angle-right</v-icon>
								<span class="grey--text">Adicionada a classe Sentinela. (Sem Arquétipos por enquanto)</span>
								</router-link>
							</td>
							<td><strong>31/01/2020</strong></td>
						</tr>
						<tr>
							<td>
								<router-link tag="span" to="/characters/classes" style="cursor:pointer">
								<v-icon class="grey--text mr-3">fa fa-angle-right</v-icon>
								<span class="grey--text">Adicionada a classe Guardião. (Sem Arquétipos por enquanto)</span>
								</router-link>
							</td>
							<td><strong>31/01/2020</strong></td>
						</tr>
						<tr>
							<td>
								<router-link tag="span" to="/characters/classes" style="cursor:pointer">
								<v-icon class="grey--text mr-3">fa fa-angle-right</v-icon>
								<span class="grey--text">Adicionada a classe Guerreiro. (Sem Arquétipos por enquanto)</span>
								</router-link>
							</td>
							<td><strong>30/01/2020</strong></td>
						</tr>
					</tbody>
				</template>
			</v-simple-table>
		</div>
  </div>
</template>
