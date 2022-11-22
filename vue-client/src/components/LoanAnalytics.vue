<template>
  <div class="loan-analytics">
    <div class="avg-payback">
        <p>Average time to PayBack loan </p>
        <h2>{{paybackDays}} days</h2>
    </div>
    <div class="avg-delay">
        <p>Average delay past due date </p>
        <h2>{{delayDays}} day(s)</h2>
    </div>
    <div class="total-lent">
        <p>Helped successfully lend </p>
        <h2>+${{totalLent}}</h2>
    </div>
    <div class="avg-lending">
        <p>Average lending </p>
        <h2>+${{avgLoanAmount}}/transaction</h2>
    </div>
  </div>
</template>

<script>
export default {
    name: "loan-analytics",
    data(){
        return {
            paybackDays: 17,
            delayDays: 1,
            totalLent: 38000,
            avgLoanAmount: 78
        }
    }
}
</script>

<style>
    .loan-analytics {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        background-color: white;
        width: 60%;
        height: fit-content;
        padding: 20px;
        border-radius: 5px;
        margin-top: 1%;
        margin-left: 1%;
        margin-right: 1%;
        gap: 30px;
        box-shadow: 0 0 10px 10px rgba(97, 97, 97, 0.151);

    }
    .loan-analytics p{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 300;
        color: rgba(72, 70, 70, 0.758);
        font-size: 1.5rem;
    }
</style>