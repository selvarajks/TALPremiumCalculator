<template>
  <div>
    <h1>Premium Calculator</h1>
    <form>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value="" onChange="" required />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" name="age" value="" onChange="" required />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input type="date" name="dateOfBirth" value="" onChange="" required />
      </div>
      <div>
        <label>Occupation:</label>
        <select name="occupation" value="" onChange="" required>
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
          name="deathSumInsured"
          value=""
          onChange=""
          required
        />
      </div>
      <div>
        <br />
        <button type="submit" @click="calculatePremium">
          Calculate Premium
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

// const state = {
//   name: "",
//   age: "",
//   dateOfBirth: "",
//   occupation: "",
//   deathSumInsured: "",
//   premium: "",
// };

export default {
  name: "PremiumCalculator",
  props: {
    msg: String,
  },

  calculatePremium() {
    axios
      .post("/premiumcalculator", {
        name: this.state.name,
        age: parseInt(this.state.age),
        dateOfBirth: new Date(this.state.dateOfBirth),
        occupation: this.state.occupation,
        deathCoverAmount: parseInt(this.state.deathSumInsured),
      })
      .then((response) => {
        this.setState({
          premium: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
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
