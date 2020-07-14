<template>
    <div>
        <h1 :class="`text-3xl font-medium`">Forms</h1>

        <div class="bg-secondary-background mt-6 p-16">
            <pane>
                <h2 :class="`${PREFIX}text-lg ${PREFIX}leading-6 ${PREFIX}font-medium ${PREFIX}text-gray-900`">Vertical Form</h2>

                <div :class="`${PREFIX}mt-6`">
                    <field :vertical="true" instructions="Some instructions." label-for="firstName" label="First Name" :errors="errors" :first="true">
                        <textbox id="firstName" :invalid="!!errors"></textbox>
                    </field>

                    <field :vertical="true" instructions="Some instructions." label-for="lastName" label="Last Name">
                        <textbox id="lastName"></textbox>
                    </field>

                    <field :vertical="true" instructions="Some instructions." label-for="email" label="Email">
                        <textbox id="email"></textbox>
                    </field>

                    <div :class="`${PREFIX}mt-8 ${PREFIX}border-t ${PREFIX}border-separator ${PREFIX}pt-5`">
                        <div :class="`${PREFIX}flex ${PREFIX}justify-end`">
                            <btn>Cancel</btn>
                            <btn :class="`${PREFIX}ms-3`" kind="primary">Save</btn>
                        </div>
                    </div>
                </div>
            </pane>
            <pane class="mt-16">
                <h2 :class="`${PREFIX}text-lg ${PREFIX}leading-6 ${PREFIX}font-medium ${PREFIX}text-gray-900`">Horizontal Form</h2>

                <div :class="`${PREFIX}mt-6`">

                    <field label-for="firstName" label="First Name" :errors="errors" :first="true">
                        <textbox id="firstName" :invalid="!!errors"></textbox>
                    </field>

                    <field label-for="lastName" label="Last Name">
                        <textbox id="lastName"></textbox>
                    </field>

                    <field label-for="email" label="Email">
                        <textbox id="email"></textbox>
                    </field>

                    <field label-for="country" label="Country">
                        <dropdown id="country" :options="[{label: 'France', value: 'fr'}]"></dropdown>
                    </field>

                    <field label-for="isAdmin" label="Is Admin">
                        <lightswitch id="isAdmin"></lightswitch>
                    </field>

                    <field label="Email Notifications">
                        <checkbox label="Comments"></checkbox>
                        <checkbox label="Candidates"></checkbox>
                        <checkbox label="Offers"></checkbox>
                    </field>

                    <field label="Push Notifications">
                        <radio v-model="pushNotifications" value="everything" label="Everything"></radio>
                        <radio v-model="pushNotifications" value="sameAsEmail" label="Same as email"></radio>
                        <radio v-model="pushNotifications" value="noPushNotifications" label="No push notifications"></radio>
                    </field>

                    <div :class="`${PREFIX}mt-8 ${PREFIX}border-t ${PREFIX}border-separator ${PREFIX}pt-5`">
                        <div :class="`${PREFIX}flex ${PREFIX}justify-end`">
                            <btn>Cancel</btn>
                            <btn :class="`${PREFIX}ms-3`" kind="primary">Save</btn>
                        </div>
                    </div>
                </div>
            </pane>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                errors: ['Error 1', 'Error 2'],
                pushNotifications: 'everything'
            }
        }
    }
</script>