<template>
    <div>
        <div class="lg:grid lg:grid-cols-2 bg-white">

            <div class="h-screen p-5 max-lg:hidden">
                <div class="gradient-bg gradient-bg-primary flex h-full flex-col justify-between rounded-2xl p-8">

                    <div class="max-w-[400px]">
                        <h1 class="mb-6 font-medium text-white">Open Bares</h1>
                        <p class="text-4xl text-white font-medium capitalize">
                            Get investments quickly and safety now
                        </p>
                    </div>

                </div>
            </div>

            <div class="flex h-screen flex-col items-center justify-center space-y-6">
                <div class="flex w-full flex-col space-y-6 max-sm:px-10 sm:max-w-md">

                    <div>
                        <h3 class="text-3xl mb-1.5 text-2xl font-semibold">Get start now</h3>
                        <p class="text-base-content/80">Login now to explore all the features of our plateform</p>
                    </div>


                    <form class="mb-4 space-y-4" onsubmit="return false;">
                        <!-- <div>
                            <label class="label-text" for="userEmail">Email address*</label>
                            <input type="email" placeholder="Enter your email address" class="input" id="userEmail"
                                required />
                        </div> -->

                        <CommonInputsVariant
                            type="email"
                            label="Email address"
                            placeholder="john@example.com"
                        />

                        <!-- <div class="input-floating max-w-sm">
                            <input type="text" placeholder="John Doe" class="input input-xl" id="floatingLabelExtraLarge" />
                            <label class="input-floating-label" for="floatingLabelExtraLarge">Full Name</label>
                        </div> -->


                        <CommonInputsVariant
                            type="password"
                            label="Password"
                            placeholder="············"
                        />

                        <!-- <div>
                            <label class="label-text" for="userPassword">Password*</label>
                            <div class="input">
                                <input id="userPassword" type="password" placeholder="············" required />
                                <button type="button" data-toggle-password='{ "target": "#userPassword" }'
                                    class="block cursor-pointer" aria-label="userPassword">
                                    <span class="icon-[tabler--eye] password-active:block hidden size-5 shrink-0"></span>
                                    <span
                                        class="icon-[tabler--eye-off] password-active:hidden block size-5 shrink-0"></span>
                                </button>
                            </div>
                        </div> -->

                        <div class="flex items-center justify-end gap-y-2">
                            <a href="#" class="link link-animated link-primary font-normal">Forgot Password?</a>
                        </div>

                        <div class="flex items-center gap-2 pb-4">
                            <input type="checkbox" class="checkbox checkbox-primary" id="rememberMe" />
                            <label class="label-text text-base-content/80 p-0 text-base" for="rememberMe">I agree on the
                                <span class="text-primary">Terms and Services</span></label>
                        </div>

                        <button class="btn btn-lg btn-primary btn-gradient btn-block">Sign in to FlyonUI</button>

                    </form>

                    <p class="text-base-content/80 text-center">
                        New on our platform?
                        <a href="#" class="link link-animated link-primary font-normal">Create an account</a>
                    </p>

                    <div class="divider">Or Continue with Email</div>

                    <div class="flex w-full gap-3 max-sm:flex-col">
                        <button class="btn btn-outline btn-secondary grow">
                            <img src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/google-icon.png"
                                alt="google icon" class="size-5 object-cover" />
                            Login with Google
                        </button>
                        <button class="btn btn-outline btn-secondary grow">
                            <img src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/facebook-icon.png"
                                alt="facebook icon" class="size-5 object-cover" />
                            Login with Facebook
                        </button>
                    </div>


                </div>
            </div>

        </div>
    </div>
</template>

<script setup></script>