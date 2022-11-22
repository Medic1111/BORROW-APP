<template>
  <div class="sidebar">
    <nav id="nav-options">
        <button>
            <h3>Dashboard</h3>
        </button>
        <button>
            <h3>Activity</h3>
        </button>
        <button v-on:click="logout()">
            <h3>Log Out</h3>
        </button>
        
    </nav>
  </div>
</template>

<script>
export default {
    name: "sidebar-nav",
    data(){
        return {

        }
    },
    methods: {
        logout(){
            this.$router.push("/");
        }
    }
    
}
</script>

<style>
    .sidebar {
        position: absolute;
        height: 100vh;
        width: fit-content;
        background-color: rgba(15, 16, 32, 0.93);
        color: rgba(255, 255, 255, 0.768);
        margin-top: -10px;
        margin-left: -10px;
    }
    #nav-options {
        margin-top: 50%;
        display: flex;
        flex-direction: column;
    }
    #nav-options button {
        font-weight: 100;
        background-color: rgba(15, 16, 32, 0.93);
        color: rgba(255, 255, 255, 0.768);
        border: 0.5px solid rgba(128, 128, 128, 0.656);
        padding-top: 0px;
        text-align: left;
        padding-left: 10px;
        padding-right: 20px;
        padding-bottom: 0px;
        margin-top: 0px;
        margin-bottom: 0px;
        border-radius: 5px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-transform: uppercase;
        font-weight: 100px;
    }

    #nav-options button:hover{
        background-color:  rgba(57, 60, 100, 0.916);
        transform: translateX(1%);
        box-shadow: 0 10px 20px 4px rgba(104, 104, 104, 0.1);
    }

</style>