<template>
     <div class="lg:max-w-[920px] m-1">
            <CommonPageHeading title="Implementation Schedule" description="Project preparation and completion timeline" />

           <div class="py-3 lg:w-1/2 max-lg:w-full">
                <CommonPhases
                    title="Phase 1: Project planning and design "
                    id="1"
                    :state="true"
                    description=""
                />

                <CommonPhases
                    title="Phase 2: Regulatory approvals"
                    id="2"
                    :state="false"
                    description=""/>

                <CommonPhases
                    title="Phase 3: Land acquisition"
                    id="3"
                    :state="false"
                    description=""/>

                <CommonPhases
                    title="Phase 4: Construction/installation"
                    id="1"
                    :state="false"
                    description=""/>

                <CommonPhases
                    title="Phase 5: Equipment procurement"
                    id="5"
                    :state="false"
                    description=""/>

                <CommonPhases
                    title="Phase 6: Testing and commissioning"
                    id="6"
                    :state="false"
                    description=""/>

                <CommonPhases
                    title="Phase 7: Commercial operations start"
                    id="7"
                    :state="false"
                    description=""/>
            </div>
        <div @click="nextPage.goToNextPage('supporting-documents')" class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-6">Save & Continue <span class="icon-[tabler--chevron-right] size-5"></span></div>

    </div>
</template>

<script setup>
const nextPage = usePageNav();
</script>