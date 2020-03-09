<template>
    <div>
        <h1 class="text-3xl font-bold text-teal-700 text-center mt-8">Laravel Synapse</h1>
        <div class="flex justify-center mt-8">
            <div class="bg-white p-4 shadow w-100 rounded w-1/4">
                <h1 class="font-bold text-xl m-0 text-center text-gray-700">Recuperar Senha</h1>
                <div class="p-4">
                    <div>
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
                    <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded block w-full mt-4">Enviar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            email: '',
            password: ''
        }
    }
}
</script>

<style lang="scss" scoped>

</style>