<script setup>
const formData = {
  username: '',
  password: '',
  confirmPassword: '',
  email: '',
  gender: '',
  region: '',
  agree: false
};

const submitForm = (event) => {
  event.preventDefault();
  console.log({formData});
};
</script>

<template>
  <div class="center-form outer-border">
    <form @submit="submitForm">
      <div class="form-group">
        <label for="username">用户名:</label>
        <input type="text" id="username" v-model="formData.username" required>
      </div>

      <div class="form-group">
        <label for="password">密码:</label>
        <input type="password" id="password" v-model="formData.password" required>
      </div>

      <div class="form-group">
        <label for="confirmPassword">确认密码:</label>
        <input type="password" id="confirmPassword" v-model="formData.confirmPassword" required>
      </div>

      <div class="form-group">
        <label for="email">邮箱:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>

      <div class="form-group">
        <label>性别:</label>
        <input type="radio" id="male" value="male" v-model="formData.gender">
        <label for="male">男</label>
        <input type="radio" id="female" value="female" v-model="formData.gender">
        <label for="female">女</label>
      </div>

      <div class="form-group">
        <label for="region">地区:</label>
        <select id="region" v-model="formData.region">
          <option value="north">北部</option>
          <option value="south">南部</option>
          <option value="east">东部</option>
          <option value="west">西部</option>
          <option value="central">中部</option>
        </select>
      </div>

      <div class="form-group">
        <label>
          <input type="checkbox" v-model="formData.agree">
          同意《注册协议》
        </label>
      </div>

      <div class="form-group">
        <button type="submit">提交</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.center-form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: auto;
  margin: 0 auto;
}

.outer-border {
  border: 1px solid #ffffff;
  padding: 40px;
}

.form-group {
  display: block;
  margin-bottom: 20px;
}

label {
  vertical-align: top;
  margin-bottom: 5px;
  width: 120px;
}
</style>
