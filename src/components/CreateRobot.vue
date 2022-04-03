<template>
  <div class="container">
    <div class="row">
        <div class="col-md-7 mrgnbtm">
        <h2>Create Robot</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label >MAC Address</label>
                        <input type="text" class="form-control" v-model="macAddress" name="macAddress" id="macAddress" placeholder="MAC Address" />
                    </div>
                    <div class="form-group col-md-6">
                        <label >Serial Number</label>
                        <input type="text" class="form-control" v-model="serialNumber" name="serialNumber" id="serialNumber" placeholder="Serial Number" />
                    </div>
                </div>
                <button type="button" @click='createRobot()' class="btn btn-danger">Create</button>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'CreateRobot',
  data() {
    return {
      macAddress: '',
      serialNumber: '',
    }
  },
  methods: {
      createRobot() {
          console.log(this.macAddress)
          const payload = {
              macAddress: this.macAddress,
              serialNumber: this.serialNumber,
          }
          this.$emit('createRobot', payload)
          this.clearForm();
      },
      clearForm() {
          this.macAddress = "";
          this.serialNumber = "";
      }
  }
}
</script>