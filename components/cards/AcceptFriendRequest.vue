<template>
<BaseCard class="mt-10 slid-up-animation-8" bgClass="bg-primary-white">
    <div class="w-100 flex">
        <div class="flex w-70">
            <BaseAvatar :character="user.fristChar" :bg="user.avatarColor" />
            <div class="flex flex-column justify-center px-5">
                <span class="f-s-14 f-w-500">{{ user.fullname }}</span>
                <span class="f-s-12 f-w-500 color-gray">{{ user.email }}</span>
            </div>
        </div>
        <div class="w-30 flex align-center justify-end">
            <BaseButton
                width="50px"
                bg="bg-info"
                color="color-primary"
                class="mx-2"
            >
                <template #iconLeft>
                    <IconsSpinner color="#7d7be5" class="mx-4" v-if="loading" />
                    <IconsCheckCircle color="#7d7be5" v-else />
                </template>
            </BaseButton>
            <BaseButton
                width="50px"
                bg="bg-red"
                color="color-primary-white"
                class="mx-2"
            >
                <template #iconLeft>
                    <IconsSpinner color="#7d7be5" class="mx-4" v-if="loading" />
                    <IconsClose color="#fff" v-else /> 
                </template>
            </BaseButton>
        </div>
    </div>
</BaseCard>
</template>

<script setup>
import { RequestControllerModule } from "~/controllers/request";

const prosp = defineProps({
    user: {
        type: Object,
        required: true,
        default: () => {}
    }
})

const loading = ref(false);
</script>