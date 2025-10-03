<template>
    <div>
        <div class="lg:grid lg:grid-cols-2 bg-white">

            <div class="h-screen p-5 max-lg:hidden">
                <div class="bg-[url('https://img.freepik.com/premium-photo/coins-background-chart-finance-concept_367038-1804.jpg?w=1480')] bg-cover bg-top-left bg-no-repeat flex h-full flex-col justify-between rounded-2xl p-8">
                    <div class="max-w-[400px]">
                        <CommonAppLogo :variant="'white'" :size="'48'" class="max-lg:hidden mb-8"/>
                        <p class="text-4xl text-white font-medium capitalize">
                            Get investments quickly and safety
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex h-screen flex-col items-center justify-center space-y-6">
                <div class="flex w-full flex-col space-y-6 max-sm:px-10 sm:max-w-md">

                    <CommonAppLogo :variant="'black'" :size="'64'" class="lg:hidden -mx-4!"/>
                    <div>
                        <h3 class="text-3xl mb-1.5 text-xl font-medium">Welcome back</h3>
                        <p class="text-base-content/80 text-sm">Login now to explore all the features of our plateform</p>
                    </div>

                    <form @submit.prevent="submitLoginForm" class="mb-4 space-y-4">
                   
                        <CommonInputsVariant
                            type="email"
                            label="Email address"
                            placeholder="john@example.com"
                        />

                        <CommonInputsVariant
                            type="password"
                            label="Password"
                            placeholder="············"
                        />

                        <div class="flex items-center justify-end gap-y-2">
                            <NuxtLink to="/reset-password" class="link link-animated link-primary font-normal text-sm">Forgot Password?</NuxtLink>
                        </div>

                        <div class="flex justify-start w-full pt-2 pb-4 px-0.5">
                            <div class="flex items-center gap-2">
                                <input type="checkbox" class="checkbox checkbox-xs checkbox-primary" id="agreement" />
                                <label class="label-text text-base-content/80 p-0 text-base text-sm" for="agreement">I agree on the
                                    <span class="text-primary">Terms and Services</span></label>
                            </div>
                        </div>

                        <button @click="submitLoginForm" type="submit" class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none">Log in</button>

                    </form>

                    <p class="text-base-content/80 text-center text-sm">
                        New on our platform?
                        <NuxtLink to="/signup" class="link link-animated link-primary font-normal">Create an account</NuxtLink>
                    </p>

                    <div class="divider">Or</div>

                    <div class="flex w-full gap-3 max-sm:flex-col">
                        <button class="btn btn-outline border-zinc-200 h-12.5 rounded-xl btn-black grow text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" class="p-1.5" width="31.27" height="32" viewBox="0 0 256 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"/><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>
                            Login with Google
                        </button>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
const submitLoginForm = () => {
    console.log('Submitting login data')
}
</script>