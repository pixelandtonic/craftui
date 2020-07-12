<template>
    <div>
        <pane type="table">
            <table>
                <thead>
                <tr>
                    <th>Title 1</th>
                    <th>Title 2</th>
                    <th>Title 3</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                </tr>
                <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                </tr>
                <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                </tr>
                <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                </tr>
                </tbody>
            </table>
        </pane>

        <pane>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque cupiditate deserunt dicta dolore error est in necessitatibus numquam officia omnis porro quaerat, quas quia recusandae repellendus sapiente tenetur ullam.
        </pane>

        <pane>
            <template v-slot:header>
                <h1>Pane Header</h1>
            </template>

            <template v-slot:default>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque cupiditate deserunt dicta dolore error est in necessitatibus numquam officia omnis porro quaerat, quas quia recusandae repellendus sapiente tenetur ullam.
            </template>
        </pane>

        <pane>
            <template v-slot:default>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque cupiditate deserunt dicta dolore error est in necessitatibus numquam officia omnis porro quaerat, quas quia recusandae repellendus sapiente tenetur ullam.
            </template>

            <template v-slot:footer>
                Pane Footer
            </template>
        </pane>

        <pane>
            <template v-slot:header>
                <h1>Pane Header</h1>
            </template>

            <template v-slot:default>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque cupiditate deserunt dicta dolore error est in necessitatibus numquam officia omnis porro quaerat, quas quia recusandae repellendus sapiente tenetur ullam.
            </template>

            <template v-slot:footer>
                Pane Footer
            </template>
        </pane>
    </div>
</template>
