<template>
    <div>
        <div
            class="bg-base-200 relative flex min-h-screen flex-col before:fixed before:h-105 before:w-full before:bg-neutral-950">
            <!-- ---------- MAIN SIDEBAR ---------- -->

            <aside id="layout-toggle"
                class="overlay overlay-open:translate-x-0 drawer drawer-start lg:rounded-box inset-y-0 start-0 hidden h-full [--auto-close:lg] sm:w-75 lg:my-auto lg:block lg:max-h-[calc(100dvh-48px)] lg:translate-x-6 rtl:lg:-translate-x-6"
                aria-label="Sidebar" tabindex="-1">
                <div class="drawer-body h-full p-0">
                    <div class="flex h-full max-h-full flex-col">
                        <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3 lg:hidden"
                            aria-label="Close" data-overlay="#layout-toggle">
                            <span class="icon-[tabler--x] size-4.5"></span>
                        </button>
                        <CommonAppLogo :variant="'black'" :size="'32'" class="px-4 py-3.5"/>
                        <!-- <div class="flex items-center gap-3 px-4 py-3.5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-red-500" width="32" height="32"
                                viewBox="0 0 24 24">
                                <path fill="currentColor" fill-rule="evenodd"
                                    d="m12 2l-.516-.544zm.517-.544l.001.002l.005.004l.018.018l.07.067l.26.254a53 53 0 0 1 3.71 4.068c1.014 1.24 2.043 2.64 2.823 4.024c.768 1.364 1.346 2.805 1.346 4.107a8.75 8.75 0 1 1-17.5 0c0-1.302.578-2.743 1.346-4.107c.78-1.384 1.81-2.783 2.823-4.024a53 53 0 0 1 3.97-4.322l.07-.067l.018-.018l.007-.006l.516-.49zM12 2l.517-.544zm.75 8a.75.75 0 0 0-1.5 0v2.194l-1.872-1.092a.75.75 0 1 0-.756 1.296l1.89 1.102l-1.89 1.102a.75.75 0 1 0 .756 1.296l1.872-1.092V17a.75.75 0 0 0 1.5 0v-2.194l1.872 1.092a.75.75 0 0 0 .756-1.296l-1.89-1.102l1.89-1.102a.75.75 0 1 0-.756-1.296l-1.872 1.092z"
                                    clip-rule="evenodd" />
                            </svg>
                            <div>
                                <h2 class="text-base-content text-2xl font-bold">Open Barres</h2>
                            </div>
                        </div> -->
                        <div class="h-full overflow-y-auto">
                            <ul class="accordion menu menu-sm gap-1 overflow-y-auto p-3">
                                <!-- Dashboard -->
                                <li>
                                    <a href="#" class="px-2">
                                        <span class="icon-[tabler--smart-home] size-4.5"></span>
                                        <span class="grow">Dashboard</span>
                                    </a>
                                </li>
                                <!-- Wallet Management -->
                                <li class="accordion-item active" id="wallet">
                                    <button
                                        class="accordion-toggle accordion-item-active:bg-neutral/10 inline-flex items-center p-2 text-start text-sm font-normal"
                                        aria-controls="wallet-collapse" aria-expanded="true">
                                        <span class="icon-[tabler--wallet] size-4.5"></span>
                                        <span class="grow">Wallet Management</span>
                                        <span
                                            class="icon-[tabler--chevron-right] accordion-item-active:rotate-90 size-4.5 shrink-0 transition-transform duration-300 rtl:rotate-180"></span>
                                    </button>
                                    <div id="wallet-collapse"
                                        class="accordion-content mt-1 w-full overflow-hidden transition-[height] duration-300"
                                        aria-labelledby="wallet" role="region">
                                        <ul class="space-y-1">
                                            <!-- Overview -->
                                            <li>
                                                <a href="#" class="menu-active px-2">Account Overview</a>
                                            </li>
                                            <!-- Available Funds -->
                                            <li>
                                                <a href="#" class="px-2">Available Funds</a>
                                            </li>
                                            <!-- Transaction History -->
                                            <li>
                                                <a href="#" class="px-2">Transaction History</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <!-- Money Transfers -->
                                <li class="accordion-item" id="money-transfers">
                                    <button
                                        class="accordion-toggle accordion-item-active:bg-neutral/10 inline-flex items-center p-2 text-start text-sm font-normal"
                                        aria-controls="money-transfers-collapse" aria-expanded="true">
                                        <span class="icon-[tabler--arrows-left-right] size-4.5"></span>
                                        <span class="grow">Money Transfers</span>
                                        <span
                                            class="icon-[tabler--chevron-right] accordion-item-active:rotate-90 size-4.5 shrink-0 transition-transform duration-300 rtl:rotate-180"></span>
                                    </button>
                                    <div id="money-transfers-collapse"
                                        class="accordion-content mt-1 hidden w-full overflow-hidden transition-[height] duration-300"
                                        aria-labelledby="money-transfers" role="region">
                                        <ul class="space-y-1">
                                            <!-- Transfer Overview -->
                                            <li>
                                                <a href="#" class="px-2">Transfer Overview</a>
                                            </li>
                                            <!-- Transfer Method -->
                                            <li>
                                                <a href="#" class="px-2">Transfer Methods</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <!-- Deposit Funds -->
                                <li class="accordion-item" id="deposit-funds">
                                    <button
                                        class="accordion-toggle accordion-item-active:bg-neutral/10 inline-flex items-center p-2 text-start text-sm font-normal"
                                        aria-controls="deposit-funds-collapse" aria-expanded="true">
                                        <span class="icon-[tabler--circle-plus] size-4.5"></span>
                                        <span class="grow">Deposit Funds</span>
                                        <span
                                            class="icon-[tabler--chevron-right] accordion-item-active:rotate-90 size-4.5 shrink-0 transition-transform duration-300 rtl:rotate-180"></span>
                                    </button>
                                    <div id="deposit-funds-collapse"
                                        class="accordion-content mt-1 hidden w-full overflow-hidden transition-[height] duration-300"
                                        aria-labelledby="deposit-funds" role="region">
                                        <ul class="space-y-1">
                                            <!-- Amount to Deposit -->
                                            <li>
                                                <a href="#" class="px-2">Deposit Amount</a>
                                            </li>
                                            <!-- Payment Method -->
                                            <li>
                                                <a href="#" class="px-2">Payment Method</a>
                                            </li>
                                            <!-- Confirmation -->
                                            <li>
                                                <a href="#" class="px-2">Confirmation</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <!-- Request Funds -->
                                <li class="accordion-item" id="request-funds">
                                    <button
                                        class="accordion-toggle accordion-item-active:bg-neutral/10 inline-flex items-center p-2 text-start text-sm font-normal"
                                        aria-controls="request-funds-collapse" aria-expanded="true">
                                        <span class="icon-[tabler--arrow-down-left] size-4.5"></span>
                                        <span class="grow">Request Funds</span>
                                        <span
                                            class="icon-[tabler--chevron-right] accordion-item-active:rotate-90 size-4.5 shrink-0 transition-transform duration-300 rtl:rotate-180"></span>
                                    </button>
                                    <div id="request-funds-collapse"
                                        class="accordion-content mt-1 hidden w-full overflow-hidden transition-[height] duration-300"
                                        aria-labelledby="request-funds" role="region">
                                        <ul class="space-y-1">
                                            <!-- Request Details -->
                                            <li>
                                                <a href="#" class="px-2">Request Details</a>
                                            </li>
                                            <!-- Amount to Request -->
                                            <li>
                                                <a href="#" class="px-2">Amount to Request</a>
                                            </li>
                                            <!-- Share Request -->
                                            <li>
                                                <a href="#" class="px-2">Share Request</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <!-- Payment Requests -->
                                <li class="accordion-item" id="payment-requests">
                                    <button
                                        class="accordion-toggle accordion-item-active:bg-neutral/10 inline-flex items-center p-2 text-start text-sm font-normal"
                                        aria-controls="payment-requests-collapse" aria-expanded="true">
                                        <span class="icon-[tabler--currency-dollar] size-4.5"></span>
                                        <span class="grow">Payment Requests</span>
                                        <span
                                            class="icon-[tabler--chevron-right] accordion-item-active:rotate-90 size-4.5 shrink-0 transition-transform duration-300 rtl:rotate-180"></span>
                                    </button>
                                    <div id="payment-requests-collapse"
                                        class="accordion-content mt-1 hidden w-full overflow-hidden transition-[height] duration-300"
                                        aria-labelledby="payment-requests" role="region">
                                        <ul class="space-y-1">
                                            <!-- Requested Overview -->
                                            <li>
                                                <a href="#" class="px-2">Requested Overview</a>
                                            </li>
                                            <!-- Payment Details -->
                                            <li>
                                                <a href="#" class="px-2">Payment Details</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <!-- Order Management -->
                                <li class="accordion-item" id="order-management">
                                    <button
                                        class="accordion-toggle accordion-item-active:bg-neutral/10 inline-flex items-center p-2 text-start text-sm font-normal"
                                        aria-controls="order-management-collapse" aria-expanded="true">
                                        <span class="icon-[tabler--credit-card] size-4.5"></span>
                                        <span class="grow">Order Management</span>
                                        <span
                                            class="icon-[tabler--chevron-right] accordion-item-active:rotate-90 size-4.5 shrink-0 transition-transform duration-300 rtl:rotate-180"></span>
                                    </button>
                                    <div id="order-management-collapse"
                                        class="accordion-content mt-1 hidden w-full overflow-hidden transition-[height] duration-300"
                                        aria-labelledby="order-management" role="region">
                                        <ul class="space-y-1">
                                            <!-- Order Overview -->
                                            <li>
                                                <a href="#" class="px-2">Order Overview</a>
                                            </li>
                                            <!-- Add New Order -->
                                            <li>
                                                <a href="#" class="px-2">Add New Order</a>
                                            </li>
                                            <!-- View Orders -->
                                            <li>
                                                <a href="#" class="px-2">View Orders</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <!-- User Management -->
                                <li class="accordion-item" id="user-management">
                                    <button
                                        class="accordion-toggle accordion-item-active:bg-neutral/10 inline-flex items-center p-2 text-start text-sm font-normal"
                                        aria-controls="user-management-collapse" aria-expanded="true">
                                        <span class="icon-[tabler--users] size-4.5"></span>
                                        <span class="grow">User Management</span>
                                        <span
                                            class="icon-[tabler--chevron-right] accordion-item-active:rotate-90 size-4.5 shrink-0 transition-transform duration-300 rtl:rotate-180"></span>
                                    </button>
                                    <div id="user-management-collapse"
                                        class="accordion-content mt-1 hidden w-full overflow-hidden transition-[height] duration-300"
                                        aria-labelledby="user-management" role="region">
                                        <ul class="space-y-1">
                                            <!-- Users Overview -->
                                            <li>
                                                <a href="#" class="px-2">Users Overview</a>
                                            </li>
                                            <!-- Active Users -->
                                            <li>
                                                <a href="#" class="px-2">Active Users</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <!-- Recipients Section -->
                                <li class="text-base-content/50 mt-2.5 p-2 text-xs uppercase">
                                    Recipients
                                </li>
                                <!-- Liam Anderson -->
                                <li>
                                    <a href="#" class="group px-2">
                                        <span class="icon-[tabler--circle-filled] text-base-content/50 size-2.5"></span>
                                        Website Redesign for Z Corp
                                    </a>
                                </li>
                                <!-- Mobile App Launch – TaskPro -->
                                <li>
                                    <a href="#" class="group px-2">
                                        <span
                                            class="icon-[tabler--circle-filled] text-base-content/50 group-[.menu-active]:text-primary size-2.5"></span>
                                        Mobile App Launch – TaskPro
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
            <!-- ---------- END MAIN SIDEBAR ---------- -->

            <div class="z-1 flex flex-col justify-between space-y-6 p-6 lg:ms-81">
                <!-- ---------- HEADER ---------- -->
                <CommonNavbar />
                <!-- ---------- END HEADER ---------- -->

                <!-- ---------- MAIN CONTENT ---------- -->
                <!-- <main class="flex-1">
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div class="card h-200 w-full">
                            <div class="card-body border-base-content/20 rounded-box skeleton-striped m-6 border"></div>
                        </div>
                        <div class="card h-200 w-full">
                            <div class="card-body border-base-content/20 rounded-box skeleton-striped m-6 border"></div>
                        </div>
                        <div class="card h-200 w-full md:col-span-2">
                            <div class="card-body border-base-content/20 rounded-box skeleton-striped m-6 border"></div>
                        </div>
                    </div>
                </main> -->
                <!-- ---------- END MAIN CONTENT ---------- -->

                <!-- ---------- FOOTER CONTENT ---------- -->
                <!-- <footer class="bg-base-100 rounded-box shadow-base-300/20 h-16 shadow-md"></footer> -->
                <!-- ---------- END FOOTER CONTENT ---------- -->
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
[data-theme="dark"] :where(li:not(.menu-title, .menu-disabled) > :not(ul, .menu-title, .collapse, .accordion-content, .btn).menu-active) {
    background-color: var(--color-primary);
    color: var(--color-primary-content);
}

[data-theme="black"] :where(li:not(.menu-title, .menu-disabled) > :not(ul, .menu-title, .collapse, .accordion-content, .btn).menu-active) {
    background-color: var(--color-primary);
    color: var(--color-primary-content);
}

[data-theme="luxury"] :where(li:not(.menu-title, .menu-disabled) > :not(ul, .menu-title, .collapse, .accordion-content, .btn).menu-active) {
    background-color: var(--color-primary);
    color: var(--color-primary-content);
}
</style>