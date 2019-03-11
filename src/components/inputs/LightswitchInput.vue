<template>
    <div>
        <label :for="id" class="lightswitch" :class="{disabled: disabled}">
            <input :id="id" type="checkbox" :checked="checked" :disabled="disabled" @input="$emit('update:checked', $event.target.checked)" @change="$emit('change', $event)" />
            <div class="slider round"></div>
        </label>
    </div>
</template>

<script>
    export default {

        props: ['id', 'checked', 'disabled'],

    }

</script>

<style lang="scss">
    @import "../../sass/mixins";

    .lightswitch {
        @apply .relative .block .select-none;
        width: 46px;
        height: 30px;

        input {
            @apply .absolute .opacity-0;
        }

        .slider {
            @apply .absolute .pin .cursor-pointer;
            background-color: #ccc;
            -webkit-transition: .4s;
            transition: .4s;
        }

        .slider:before {
            @apply .absolute .bg-white;
            content: "";
            height: 26px;
            width: 26px;
            @include left(2px);
            bottom: 2px;
            -webkit-transition: .1s;
            transition: .1s;
        }

        input:checked + .slider {
            background-color: #38c172;
        }

        input:focus + .slider {
            box-shadow: 0 0 1px #38c172;
        }

        input:checked + .slider:before {
            -webkit-transform: translateX(16px);
            -ms-transform: translateX(16px);
            transform: translateX(16px);
        }

        .slider.round {
            border-radius: 34px;
        }

        .slider.round:before {
            border-radius: 50%;
        }

        &.disabled {
            opacity: .4;

            .slider {
                @apply .cursor-default;
            }
        }
    }
</style>