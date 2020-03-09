<template>
    <div>
        <h1 class="text-3xl font-bold text-teal-700 text-center mt-8">Laravel Synapse</h1>
        <div class="flex justify-center mt-8">
            <div class="bg-white p-4 shadow w-100 rounded w-1/4">
                <h1 class="font-bold text-xl m-0 text-center text-gray-700">Cadastrar</h1>
                <div class="p-4">
                    <div>
                        <label 
                            for="name"
                            class="font-bold text-sm text-gray-800"
                        >Nome:</label>
                        <input
                            id="name"
                            type="text"
                            v-model="name"
                            class="w-full focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
                            placeholder="Nome"
                        />
                    </div>
                    <div class="mt-4"> 
                        <label 
                            for="email"
                            class="font-bold text-sm text-gray-800"
                        >E-mail:</label>
                        <input
                            id="email"
                            type="text"
                            v-model="email"
                            class="w-full focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
                            placeholder="E-mail"
                        />
                    </div>
                    <div class="mt-4">
                        <label 
                            for="password"
                            class="font-bold text-sm text-gray-800"
                        >Senha:</label>
                        <input
                            id="password"
                            type="password"
                            v-model="password"
                            class="w-full focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
                            placeholder="Senha"
                        />
                    </div>
                    <div class="mt-4">
                        <label 
                            for="password_confirmation"
                            class="font-bold text-sm text-gray-800"
                        >Confirmar Senha:</label>
                        <input
                            id="password_confirmation"
                            type="password"
                            v-model="password_confirmation"
                            class="w-full focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
                            placeholder="Senha"
                        />
                    </div>
                    <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded block w-full mt-4">Cadastrar</button>
                    <router-link :to="{name: 'auth.login'}" class="text-center text-sm text-teal-800 mt-4 block">Já possui uma conta? Entrar</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    }
}
</script>

<style lang="scss" scoped>

</style>