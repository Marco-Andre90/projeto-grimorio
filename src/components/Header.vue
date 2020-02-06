<template>
    <v-app-bar app clipped-left>
        <v-toolbar-title class="headline text-uppercase mr-4" style="color:goldenrod">
            <router-link tag="span" to="/" style="cursor:pointer">
            O Grimório
            <span class="font-weight-light">Dourado</span></router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text to="/">Início</v-btn>
            <!-- REGRAS -->
            <!-- <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn text v-on="on" to="/rules">Regras
                        <v-icon class="ml-2">fa fa-caret-down</v-icon></v-btn>
                </template>
                <v-list>
                    <v-list-item to="/">
                        <v-list-item-title>Livro do Jogador (SW5e)</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="/">
                        <v-list-item-title>Escória e Vilania</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="/">
                        <v-list-item-title>Naves Espaciais da Galáxia</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="/">
                        <v-list-item-title>Gangues Miseráveis</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu> -->
            <!-- CHARACTERS -->
            <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn text v-on="on" to="/characters">Personagens
                        <v-icon class="ml-2">fa fa-caret-down</v-icon></v-btn>
                </template>
                <v-list>
                    <!-- <v-list-item to="/">
                        <v-list-item-title>Espécies</v-list-item-title>
                    </v-list-item> -->
                    <v-list-item to="/characters/classes">
                        <v-list-item-title>Classes</v-list-item-title>
                    </v-list-item>
                    <!-- <v-list-item to="/">
                        <v-list-item-title>Arquétipos</v-list-item-title>
                    </v-list-item> -->
                    <!-- <v-list-item to="/">
                        <v-list-item-title>Antecedentes</v-list-item-title>
                    </v-list-item> -->
                </v-list>
            </v-menu>
            <!-- LOOT -->
            <!-- <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn text v-on="on" to="/loot">Equipamentos
                        <v-icon class="ml-2">fa fa-caret-down</v-icon></v-btn>
                </template>
                <v-list>
                    <v-list-item to="/">
                        <v-list-item-title>Armaduras</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="/">
                        <v-list-item-title>Armas</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="/">
                        <v-list-item-title>Outros</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="/">
                        <v-list-item-title>Equipamento Aprimorado</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu> -->
        </v-toolbar-items>
        <v-toolbar-items class="hidden-md-and-up">
            <v-menu style="min-width: 48px; top: 56px; left: 270px; transform-origin: left top; z-index: 8; display: none;">
                <template v-slot:activator="{ on }">
                    <v-btn icon round v-on="on">
                        <v-icon style="color:goldenrod">fa fa-caret-square-down</v-icon></v-btn>
                </template>
                <v-list>
                    <v-list-item to="/">
                        <v-list-item-title>Início</v-list-item-title>
                    </v-list-item>
                    <!-- <v-list-item to="/rules">
                        <v-list-item-title>Regras</v-list-item-title>
                    </v-list-item> -->
                    <v-list-item to="/characters">
                        <v-list-item-title>Personagens</v-list-item-title>
                    </v-list-item>
                    <!-- <v-list-item to="/loot">
                        <v-list-item-title>Equipamentos</v-list-item-title>
                    </v-list-item> -->
                </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-app-bar>
</template>