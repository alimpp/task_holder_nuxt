<template>
<BaseCard class="mt-10">
    <div class="w-100 flex">
        <div class="flex w-70">
            <BaseAvatar :character="user.fristChar" :bg="user.avatarColor" />
            <div class="flex flex-column justify-center px-5">
                <span class="f-s-14 f-w-500">{{ user.fullname }}</span>
                <span class="f-s-12 f-w-500 color-gray">{{ user.email }}</span>
            </div>
        </div>
        <div class="w-30 flex align-center">
            <BaseButton
                width="100%"
                name="Request"
                bg="bg-info"
                color="color-primary"
                @click="handleSendRequest(user.id)"
            >
                <template #iconLeft>
                    <IconsFriendAdd color="#7d7be5" class="mx-4" width="18px" />
                </template>
            </BaseButton>
        </div>
    </div>
</BaseCard>
</template>

<script setup>
const prosp = defineProps({
    user: {
        type: Object,
        required: true,
        default: () => {}
    }
})
</script>