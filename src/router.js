import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Rules from './components/rules/Rules'
import Characters from './components/characters/Characters'
import Classes from './components/characters/Classes'
import Fighter from './components/characters/classes/Fighter'
import Guardian from './components/characters/classes/Guardian'
import Operative from './components/characters/classes/Operative'
import Sentinel from './components/characters/classes/Sentinel'
import Loot from './components/loot/Loot'

Vue.use(Router)

export default new Router ({
  mode: 'history',
  routes: [
      { path: '/', component: Home },
      { path: '/rules', component: Rules },
      { path: '/characters', component: Characters },
      { path: '/characters/classes', component: Classes },
      { path: '/characters/classes/fighter', component: Fighter },
      { path: '/characters/classes/guardian', component: Guardian },
      { path: '/characters/classes/operative', component: Operative },
      { path: '/characters/classes/sentinel', component: Sentinel },
      { path: '/loot', component: Loot },
  ]
})