<template>
    <div>
       <CommonPageHeading :title="'Applicants list'"/>

       <div class="w-full overflow-x-auto my-4 py-2 border border-2 rounded-xl border-zinc-200">
            <table class="table">
                <thead>
                <tr>
                    <th>Ref#</th>
                    <th>Company</th>
                    <th>Sector</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Application Date</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr class="row-hover">
                    <td>01XDJ</td>
                    <td>Open Barres</td>
                    <td>Financial</td>
                    <td>Cameroon</td>
                    <td><span class="badge badge-soft badge-success text-xs">Complete</span></td>
                    <td>March 1, 2024</td>
                    <td>
                    <!-- <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[tabler--pencil] size-5"></span></button> -->
                    <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[tabler--trash] size-5"></span></button>
                    <button class="btn btn-circle btn-text btn-sm" aria-label="Action button"><span class="icon-[tabler--dots-vertical] size-5"></span></button>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
    </div>
</template>

<script setup></script>