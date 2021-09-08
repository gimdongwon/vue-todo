# Todo

Todo with vue

cli 로 vue 만들어서 todolist 작성

다음은 vuex를 이용하여 만들고 그 다음은 cli없이 webpack으로 만들어볼 예정

## Vuex

state, getters, mutations, actions로 구성되어 사용한다.

mutation과 action의 차이점은 mutation 은 동기적 처리만 가능하고 action은 비동기적 처리가 가능하다. 동기적 처리만 가능한 이유는 다수의 변경이 일어났을 때 전과 후의 차이를 포착하기 어렵기 떄문이고 action이 비동기 처리가 가능한 이유는 mutation을 기반으로 동작하며 promise를 통해 callback을 처리하기 때문이다.
