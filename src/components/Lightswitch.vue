<template>
    <field :id="id" :label="label" :instructions="instructions" :errors="errors" class="c-lightswitch">
        <div class="c-lightswitch-input">
            <label :for="id" class="lightswitch" :class="{disabled: disabled}">
                <input :id="id" type="checkbox" :checked="checked" :disabled="disabled" @change="onChange" />
                <div class="slider round"></div>
            </label>
        </div>
    </field>
</template>

<script>
    import Field from './Field.vue';

    export default {
        props: {
            checked: {
                type: Boolean,
                default: null,
            },
            disabled: {
                type: Boolean,
                default: null,
            },
            errors: {
                type: Array | Boolean,
                default: null,
            },
            id: {
                type: String,
                default: function () {
                    return 'c-lightswitch-id-' + this._uid;
                },
            },
            instructions: {
                type: String,
                default: null,
            },
            label: {
                type: String,
                default: null,
            },
        },

        components: {
            Field,
        },

        methods: {
            onChange($event) {
                this.$emit('update:checked', $event.target.checked)
                this.$emit('change', $event.target.checked)
            },
        }
    }
</script>

<style lang="scss">
    @import "../sass/mixins";

    .c-lightswitch {
        .c-lightswitch-input {
            label {
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

                input:focus + .slider,
                input:active + .slider {
                    box-shadow: 0 0 0 2px rgba(52,144,220,.5);
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
        }
    }
</style>