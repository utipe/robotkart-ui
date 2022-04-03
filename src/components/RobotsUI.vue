<template>
    <div class="container">
        <h2>Robots</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Robot Id</th>
                <th>MAC Address</th>
                <th>Serial Number</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in robots" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.macAddress }}</td>
                  <td>{{ item.serialNumber }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'RobotsUI',
        props: ['robots']
     }
</script>