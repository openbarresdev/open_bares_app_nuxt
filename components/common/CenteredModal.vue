<template>
    <div>
        <div id="middle-center-modal"
            class="overlay modal overlay-open:opacity-100 overlay-open:duration-300 modal-middle hidden z-50" role="dialog"
            tabindex="-1">
            <div class="modal-dialog w-80">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title text-xl">Confirm log out</h3>
                        <button type="button" class="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close"
                            data-overlay="#middle-center-modal">
                            <span class="icon-[tabler--x] size-4"></span>
                        </button>
                    </div>
                    <div class="modal-body -mt-4 mb-4 text-sm">
                        Do you confirm you want to log out ?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-soft btn-transparent w-1/2 h-12.5 text-sm"
                            data-overlay="#middle-center-modal">Cancel</button>
                        <button @click="logout()" type="button" class="btn btn-secondary w-1/2 h-12.5 text-sm">Log out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { logoutHandler } from "~/handlers/logoutHandler";
const { closeModal } = useHSModal('#middle-center-modal')
const $notyf = useNotyf();

const logout = async () => { 
    await logoutHandler($notyf);
    closeModal() // not working
}
</script>