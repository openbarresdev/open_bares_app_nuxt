<template>
  <div>
    <div class="lg:max-w-[920px] m-1">
      <CommonPageHeading
        title="Financial Projections"
        description="Profitability indicators (5-year projection): "
      />

      <div class="py-3 lg:w-1/2 max-lg:w-full">
        <CommonAccordion title="Year 1" id="year1" :initial-open="true">
          <form action="" class="space-y-3">
            <div class="space-y-6 px-1.5 w-full">
              <div class="inline-flex items-center gap-2 w-full">
                <div class="lg:text-base max-lg:text-sm w-1/2">Revenue</div>
                <CommonInputsVariant
                  class="w-full"
                  type="number"
                  label="Revenue"
                  placeholder="0"
                  v-model="revenu"
                />
              </div>

              <div class="inline-flex items-center gap-2 w-full">
                <div class="lg:text-base max-lg:text-sm w-1/2">
                  Operating Profit
                </div>
                <CommonInputsVariant
                  class="w-full"
                  type="number"
                  label="Operating Profit "
                  placeholder="0"
                  v-model="operating_profit"
                />
              </div>

              <div class="inline-flex items-center gap-2 w-full">
                <div class="lg:text-base max-lg:text-sm w-1/2">Net Profit</div>
                <CommonInputsVariant
                  class="w-full"
                  type="number"
                  label="Net Profit "
                  placeholder="0"
                  v-model="net_profit"
                />
              </div>

              <div class="inline-flex items-center gap-2 w-full">
                <div class="lg:text-base max-lg:text-sm w-1/2">
                  ROI percentage (%)
                </div>
                <CommonInputsVariant
                  class="w-full"
                  type="number"
                  label="ROI percentage (%)"
                  placeholder="0"
                  v-model="net_profit"
                />
              </div>

              <div class="inline-flex items-center gap-2 w-full">
                <div class="lg:text-base max-lg:text-sm w-1/2">
                  ROE percentage (%)
                </div>
                <CommonInputsVariant
                  class="w-full"
                  type="number"
                  label="ROE percentage (%) "
                  placeholder="0"
                  v-model="net_profit"
                />
              </div>
            </div>

            <div
              @click=""
              class="btn btn-xl rounded-xl btn-gradient btn-block text-base border-none lg:h-12 my-3"
            >
              Save <span class="icon-[tabler--chevron-right] size-5"></span>
            </div>
          </form>
        </CommonAccordion>

        <CommonAccordion title="Year 2" id="year2">
           <form action="" class="space-y-3">
            <div class="space-y-6 px-1.5 w-full">
              <div class="inline-flex items-center gap-2 w-full">
                <div class="lg:text-base max-lg:text-sm w-1/2">Revenue</div>
                <CommonInputsVariant
                  class="w-full"
                  type="number"
                  label="Revenue"
                  placeholder="0"
                  v-model="revenu"
                />
              </div>

              <div class="inline-flex items-center gap-2 w-full">
                <div class="lg:text-base max-lg:text-sm w-1/2">
                  Operating Profit
                </div>
                <CommonInputsVariant
                  class="w-full"
                  type="number"
                  label="Operating Profit "
                  placeholder="0"
                  v-model="operating_profit"
                />
              </div>

              <div class="inline-flex items-center gap-2 w-full">
                <div class="lg:text-base max-lg:text-sm w-1/2">Net Profit</div>
                <CommonInputsVariant
                  class="w-full"
                  type="number"
                  label="Net Profit "
                  placeholder="0"
                  v-model="net_profit"
                />
              </div>

              <div class="inline-flex items-center gap-2 w-full">
                <div class="lg:text-base max-lg:text-sm w-1/2">
                  ROI percentage (%)
                </div>
                <CommonInputsVariant
                  class="w-full"
                  type="number"
                  label="ROI percentage (%)"
                  placeholder="0"
                  v-model="net_profit"
                />
              </div>

              <div class="inline-flex items-center gap-2 w-full">
                <div class="lg:text-base max-lg:text-sm w-1/2">
                  ROE percentage (%)
                </div>
                <CommonInputsVariant
                  class="w-full"
                  type="number"
                  label="ROE percentage (%) "
                  placeholder="0"
                  v-model="net_profit"
                />
              </div>
            </div>

            <div
              @click=""
              class="btn btn-xl rounded-xl btn-gradient btn-block text-base border-none lg:h-12 my-3"
            >
              Save <span class="icon-[tabler--chevron-right] size-5"></span>
            </div>
          </form>
        </CommonAccordion>

        <CommonAccordion title="Year 3" id="year3">
         <form action="" class="space-y-3">
            <div class="space-y-6 px-1.5 w-full">
              <div class="inline-flex items-center gap-2 w-full">
                <div class="lg:text-base max-lg:text-sm w-1/2">Revenue</div>
                <CommonInputsVariant
                  class="w-full"
                  type="number"
                  label="Revenue"
                  placeholder="0"
                  v-model="revenu"
                />
              </div>

              <div class="inline-flex items-center gap-2 w-full">
                <div class="lg:text-base max-lg:text-sm w-1/2">
                  Operating Profit
                </div>
                <CommonInputsVariant
                  class="w-full"
                  type="number"
                  label="Operating Profit "
                  placeholder="0"
                  v-model="operating_profit"
                />
              </div>

              <div class="inline-flex items-center gap-2 w-full">
                <div class="lg:text-base max-lg:text-sm w-1/2">Net Profit</div>
                <CommonInputsVariant
                  class="w-full"
                  type="number"
                  label="Net Profit "
                  placeholder="0"
                  v-model="net_profit"
                />
              </div>

              <div class="inline-flex items-center gap-2 w-full">
                <div class="lg:text-base max-lg:text-sm w-1/2">
                  ROI percentage (%)
                </div>
                <CommonInputsVariant
                  class="w-full"
                  type="number"
                  label="ROI percentage (%)"
                  placeholder="0"
                  v-model="net_profit"
                />
              </div>

              <div class="inline-flex items-center gap-2 w-full">
                <div class="lg:text-base max-lg:text-sm w-1/2">
                  ROE percentage (%)
                </div>
                <CommonInputsVariant
                  class="w-full"
                  type="number"
                  label="ROE percentage (%) "
                  placeholder="0"
                  v-model="net_profit"
                />
              </div>
            </div>

            <div
              @click=""
              class="btn btn-xl rounded-xl btn-gradient btn-block text-base border-none lg:h-12 my-3"
            >
              Save <span class="icon-[tabler--chevron-right] size-5"></span>
            </div>
          </form>
        </CommonAccordion>
      </div>
    </div>
    <div @click="navigateTo('critical-success-factors')"  class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-3">Continue <span class="icon-[tabler--chevron-right] size-5"></span></div>

  </div>
</template>

<script setup></script>
