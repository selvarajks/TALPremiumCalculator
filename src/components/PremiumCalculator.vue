<template>
  <div>
    <h1>Premium Calculator</h1>
    <form>
      <div>
        <label>Name:</label>
        <input
          class="input"
          name="name"
          type="text"
          v-model="Name"
          placeholder="Enter name"
          required
        />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" name="age" v-model="Age" onChange="" required />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dateOfBirth"
          v-model="DateOfBirth"
          onChange=""
          required
        />
      </div>
      <div>
        <label>Occupation:</label>
        <select name="occupation" onChange="" v-model="Occupation" required>
          <option value="">Select Occupation</option>
          <option value="Cleaner">Cleaner</option>
          <option value="Doctor">Doctor</option>
          <option value="Author">Author</option>
          <option value="Farmer">Farmer</option>
          <option value="Mechanic">Mechanic</option>
          <option value="Florist">Florist</option>
        </select>
      </div>
      <div>
        <label>Death-Sum Insured:</label>
        <input
          type="number"
          name="SumInsured"
          v-model="SumInsured"
          onChange=""
          required
        />
      </div>
      <div>
        <br />
        <button type="submit" @click="this.calculatePremium">
          Calculate Premium
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { reactive, toRefs } from "vue";

export default {
  name: "PremiumCalculator",
  props: {
    msg: String,
  },
  setup() {
    const state = reactive({
      Name: "",
      Age: "",
      DateOfBirth: "",
      Occupation: "",
      SumInsured: "",
      Premium: "",
    });

    const calculatePremium = () => {
      console.log("calculatepremium");
      axios
        .post("https://localhost:8080/api/premium", {
          Name: state.Name,
          Age: parseInt(state.Age),
          DateOfBirth: new Date(state.DateOfBirth),
          Occupation: state.Occupation,
          SumInsured: parseInt(state.SumInsured),
        })
        .then((response) => {
          this.setState({
            premium: response.data.premium,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    };

    return { ...toRefs(state), calculatePremium };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Provide sufficient contrast against white background */
a {
  color: #0366d6;
}

code {
  color: #e01a76;
}

.btn-primary {
  color: #fff;
  background-color: #1b6ec2;
  border-color: #1861ac;
}

h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
}

form div {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

label {
  width: 150px;
}

input,
select {
  flex: 0.5;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

input[type="submit"]:hover {
  background-color: #3e8e41;
}

strong {
  font-size: 20px;
  margin-top: 20px;
}
</style>
