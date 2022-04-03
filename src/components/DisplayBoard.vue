<template>
    <div class="display-board">
        <h4>Robots Created</h4>
        <div class="number">
        {{numberOfRobots}}
        </div>
        <div class="btn">
            <button @click='getAllRobots()' type="button" class="btn btn-warning">Get all Robots</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DisplayBoard',
        props: ['numberOfRobots'],
        methods: {
            getAllRobots() {
                this.$emit('getAllRobots')
            }
        }
    }
</script>