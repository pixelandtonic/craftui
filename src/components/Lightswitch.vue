<template>
    <div class="c-lightswitch mt-1">
        <div class="c-lightswitch-input">
            <label :for="id" class="lightswitch" :class="{disabled: disabled}">
                <input type="checkbox"
                       :id="id"
                       :value="value"
                       :checked="checked"
                       :disabled="disabled"
                       @input="onInput"/>
                <div class="slider round"></div>
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        model: {
            prop: 'checked',
            event: 'input'
        },

        props: {
            checked: {
                type: Boolean,
                default: null,
            },
            disabled: {
                type: Boolean,
                default: null,
            },
            id: {
                type: String,
                default: function () {
                    return 'c-lightswitch-id-' + this._uid;
                },
            },
            value: String,
        },

        methods: {
            onInput($event) {
                this.$emit('update:checked', $event.target.checked)
                this.$emit('input', $event.target.checked)
            },
        },
    }
</script>

<style lang="scss">
    @import "../sass/mixins";

    .c-lightswitch {
        .c-lightswitch-input {
            label {
                @apply .relative .block .select-none;
                width: 34px;
                height: 22px;

                input {
                    @apply .absolute .opacity-0;
                }

                .slider {
                    @apply .absolute .inset-0 .cursor-pointer .bg-gray-400;
                    -webkit-transition: .4s;
                    transition: .4s;
                }

                .slider:before {
                    @apply .absolute .bg-white;
                    content: "";
                    height: 20px;
                    width: 20px;
                    @include left(1px);
                    bottom: 1px;
                    -webkit-transition: .1s;
                    transition: .1s;

                    @include ltr() {
                        -webkit-transform: translateX(0px);
                        -ms-transform: translateX(0px);
                        transform: translateX(0px);
                    }

                    @include rtl() {
                        -webkit-transform: translateX(12px);
                        -ms-transform: translateX(12px);
                        transform: translateX(12px);
                    }
                }

                input:checked + .slider {
                    background-color: #38c172;
                }

                input:focus + .slider,
                input:active + .slider {
                    box-shadow: 0 0 0 2px rgba(52,144,220,.5);
                }

                input:checked + .slider:before {
                    @include ltr() {
                        -webkit-transform: translateX(12px);
                        -ms-transform: translateX(12px);
                        transform: translateX(12px);
                    }

                    @include rtl() {
                        -webkit-transform: translateX(0px);
                        -ms-transform: translateX(0px);
                        transform: translateX(0px);
                    }
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
        }
    }
</style>