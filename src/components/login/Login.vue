<template lang="html">
    <div id="login">
        <h1>{{msg}}</h1>
        <button v-on:click="addLogin()">Add</button>

        <button v-on:click="getLogin()">Get</button>

        <p>{{result}}</p>
    </div>
</template>

<script>
    import Store from '../../vuex/store';

    export default {
        name: 'login',
        data() {
            return {
                msg: 'Componente de login',
                result: ''
            }
        },

        methods: {
            addLogin: function () {
                let user = {
                    user: {
                        name: 'usuario',
                        email: 'teste@email.com',
                        password: '123'
                    }
                }
                Store.commit('increment', user);
            },

            getLogin: function () {
                this.result = Store.state.user;
            }
        }
    }
</script>

<style>

</style>