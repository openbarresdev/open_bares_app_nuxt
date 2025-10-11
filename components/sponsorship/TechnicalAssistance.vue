<template>
    <div>
        
        <CommonPageHeading title="Technical Assistance" description="Description of technical arrangements and external assistance required" />

        <div class="lg:flex max-lg:flex-col items-center gap-4 w-full">

            <form action="" class="mt-8">

                <div class="space-y-3 mx-1 lg:w-1/2 max-lg:w-full">
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Management Assistance</div>
                            <CommonInputsVariant class="w-full"
                                    type="text"
                                    label="Management Assistance"
                                    placeholder="John Wick"
                                    v-model="CEOName"
                                />
                    </div>
                    
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Production Assistance</div>
                        <CommonInputsVariant class="w-full"
                            type="text"
                            label="Production Assistance"
                            placeholder="John Wick"
                            v-model="yearOne"
                        />
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Marketing Assistance</div>
                        <CommonInputsVariant class="w-full"
                            type="text"
                            label="Marketing Assistance"
                            placeholder="John Wick"
                            v-model="yearOne"
                        />
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Financial Assistance</div>
                        <CommonInputsVariant class="w-full"
                            type="text"
                            label="Financial Assistance"
                            placeholder="John Wick"
                            v-model="yearOne"
                        />
                    </div>
                    <div class="flex inline-flex items-center gap-2 w-full">
                        <div class="lg:text-base max-lg:text-sm w-1/2">Others</div>
                        <CommonInputsVariant class="w-full"
                            type="text"
                            label="Others"
                            placeholder="John Wick"
                            v-model="yearOne"
                        />
                    </div>
                </div>
            </form>

        </div>
    </div>
</template>

<script setup></script>