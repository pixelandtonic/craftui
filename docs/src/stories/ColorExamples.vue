<template>
    <div>
        <h1>Examples</h1>
        <div class="mb-2 p-4 border border-danger-separator bg-danger-background text-danger-text">Danger</div>
        <div class="mb-2 p-4 border border-info-separator bg-info-background text-info-text">Info</div>
        <div class="mb-2 p-4 border border-notice-separator bg-notice-background text-notice-text">Notice</div>
        <div class="mb-2 p-4 border border-success-separator bg-success-background text-success-text">Success</div>
        <div class="mb-2 p-4 border border-warning-separator bg-warning-background text-warning-text">Warning</div>

        <div class="mb-2">
            <input type="text" value="Some value in a text input" class="px-3 py-2 rounded bg-field-background border border-field-border" />
        </div>

        <div class="mb-2">
            <input type="text" value="Some value in a disabled text input" disabled="true" class="px-3 py-2 rounded bg-field-disabled-background border border-field-disabled-border" />
        </div>

        <div class="mb-2">
            Default text
        </div>

        <div class="mb-2 text-light-text">
            Light text
        </div>

        <div class="mb-2">
            <button class="px-4 py-2 rounded bg-interactive-primary text-interactive-primary-text hover:bg-interactive-primary-hover active:bg-interactive-primary-active">Primary Button</button>
        </div>

        <div class="mb-2">
            <button class="px-4 py-2 rounded bg-interactive-secondary text-interactive-secondary-text hover:bg-interactive-secondary-hover active:bg-interactive-secondary-active">Secondary Button</button>
        </div>

        <div class="mb-2">
            <button class="px-4 py-2 rounded bg-interactive-tertiary text-interactive-tertiary-text hover:bg-interactive-tertiary-hover active:bg-interactive-tertiary-active">Tertiary Button</button>
        </div>

        <div class="mb-2">
            <button class="px-4 py-2 rounded bg-interactive-danger text-interactive-danger-text hover:bg-interactive-danger-hover active:bg-interactive-danger-active">Danger Button</button>
        </div>

        <div class="mb-2">
            <button class="px-4 py-2 rounded bg-interactive-success text-interactive-success-text hover:bg-interactive-success-hover active:bg-interactive-success-active">Success Button</button>
        </div>

        <div class="mb-2">
            <a href="#" class="text-interactive-link hover:text-interactive-link-hover hover:underline">Link</a>
        </div>

        <div class="mb-2">
            <ul class="border border-separator">
                <li><a href="#" class="block px-4 py-2 text-interactive-nav-text hover:text-interactive-nav-hover-text">Nav Item</a></li>
                <li><a href="#" class="block px-4 py-2 text-interactive-nav-text hover:text-interactive-nav-hover-text bg-interactive-nav-active-background">Active Nav Item</a></li>
                <li><a href="#" class="block px-4 py-2 text-interactive-nav-disabled-text">Disabled Nav Item</a></li>
            </ul>
        </div>
    </div>
</template>