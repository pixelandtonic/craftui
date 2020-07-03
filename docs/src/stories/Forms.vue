<template>
    <div>
        <pane>
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

            <div class="tw-mt-5 tw-border-t tw-border-separator tw-pt-5">
                <div class="tw-flex tw-justify-end">
                    <btn>Cancel</btn>
                    <btn class="tw-ml-3" kind="primary">Save</btn>
                </div>
            </div>
        </pane>
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