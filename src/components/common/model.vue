<template>
    <TransitionRoot :show="isOpen" as="template" enter="duration-300 ease-out" enter-from="opacity-0"
        enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">

        <Dialog @close="$emit('close')" class="relative z-50">


            <TransitionChild enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/30" aria-hidden="true"></div>
            </TransitionChild>

            <div class="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel class="w-full max-w-xl rounded bg-white">

                    <template v-if="title.length > 0">
                        <DialogTitle class="px-4 py-2 w-full bg-gray-100 font-bold text-gray-500 text-sm rounded-t">{{
                            title }}</DialogTitle>
                    </template>


                    <div class="p-4 w-full">
                        <slot />
                    </div>

                    <div v-if="$slots.footer" class="modal-footer">
                        <slot name="footer"></slot>
                    </div>


                </DialogPanel>
            </div>
        </Dialog>
    </TransitionRoot>

</template>

<script setup>
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot
} from '@headlessui/vue';

const props = defineProps({
    isOpen: Boolean,
    title: {
        type: String,
        default: ''
    }
})



</script>