<template>
  <div class="user-analytics">
    <div class="registered-users">
        <p>Registered Users</p>
        <h2>12</h2>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.user-analytics {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    background-color: white;
    width: fit-content;
    height: fit-content;
    padding: 20px;
    border-radius: 5px;
    margin-top: 1%;
    margin-left: 1%;
    margin-right: 1%;
    gap: 30px;
    box-shadow: 0 0 10px 10px rgba(97, 97, 97, 0.151);
}

.user-analytics p {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 300;
    color: rgba(72, 70, 70, 0.758);
    font-size: 1.5rem;
}
</style>