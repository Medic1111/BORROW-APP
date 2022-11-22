<template>
  <div class="transaction-approvals">
    <h1>Transaction Approvals</h1>
    <apex-chart width="380" type="pie" :options="chartOptions" :series="series"></apex-chart>
  </div>
</template>

<script>
export default {
    name: "transaction-approvals",
    data() {
        return {
            series: [33, 10, 528],
            chartOptions: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['Denied', 'Pending', 'Approved'],
                colors: ['rgb(236, 107, 84)', 'rgb(255, 187, 0)', 'rgb(99, 191, 234)'],
                responsive: [{
                    breakpoint: 480
                }],
            
            },
        }
    }
}

</script>

<style>
    .transaction-approvals {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        width: fit-content;
        height: fit-content;
        padding: 20px;
        border-radius: 5px;
        margin-top: 1%;
        margin-left: 1%;
        box-shadow: 0 0 10px 10px rgba(97, 97, 97, 0.151);

    }
    .transaction-approvals h1{
        font-family: Arial, Helvetica, sans-serif;
        text-transform: uppercase;
        font-weight: 300;
        color: rgba(72, 70, 70, 0.758);
        font-size: 1.5rem;
    }
</style>