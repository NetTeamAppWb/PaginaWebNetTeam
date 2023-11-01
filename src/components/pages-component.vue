<script>
import ToolbarRestaurants from "@/components/toolbar-component.vue";

export default{
  name:"pages",
  components: {ToolbarRestaurants},
    data() {
        return {
            plans: [
                {
                    title: "Basic",

                    price: "US$7.99",
                    features: [
                        "View restaurants",
                        "2TB Cloud Storage",
                    ],
                    link: "#",
                },
                {
                    title: "Startup",

                    price: "US$14.99",
                    features: [
                        "All functions in basic",
                        "Promotions tailored to you",
                        "15TB Cloud Storage",
                    ],
                    link: "#",
                },
                {
                    title: "Enterprise",

                    price: "US$25.99",
                    features: [
                        "All platform features",
                        "Ad-free experience",
                        "Qualify as entrepreneurs",
                    ],
                    link: "#",
                },
            ],
        };
    },
};

</script>

<template>
  <header>
    <ToolbarRestaurants/>
  </header>
    <div class="plan-section">
        <div class="contenedor">
            <div class="tabla" v-for="plan in plans" :key="plan.title">
                <h2>{{ plan.title }}</h2>
                <h3>{{ plan.price }}</h3>
                <p v-for="feature in plan.features" :key="feature">{{ feature }}</p>
                <pv-button icon="pi pi-check" label="Pay" />
            </div>
        </div>
    </div>



</template>


<style scoped>
.plan-section {

    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contenedor {
    width: 100%;
    max-width: 900px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: #000000;
}

.tabla {
    width: 33%;
    height: 550px;
    margin: auto;
    border: 1px solid #fdfbfb;
    border-radius: 4px;
    box-shadow: 0px 0px 4px 0px #000000;
    padding: 60px;
    text-align: center;
    flex-grow: 1;
    color: #000000;
    font-family: 'Outfit', sans-serif;
    flex-direction: column;
}

.tabla h2 {
    color: #f8f9fc;
    font-size: 30px;
    margin-bottom: 35px;
}

.tabla img {
    color: #f8f9fc;
    width: 144px;
    margin-bottom: 35px;
}

.tabla h3 {
    color: #f8f9fc;
    font-size: 35px;
    margin-bottom: 20px;
}

.tabla p {
    color: #f8f9fc;
    display: block;
    margin-bottom: 20px;
}

.boton {
    display: inline-block;
    padding: 12px;
    border: 1px solid #fdfbfb;
    background: #000000;
    text-decoration: none;
    color: #ffffff;
    border-radius: 100px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    margin: auto;
}

.boton:hover {
    background: #efefef;
    color: #020405;
    transition: 0.2s all;
    transform: scale(1.1);
    cursor: pointer;
}

.tabla:hover {
    background: #f3a703;
    color: #110101;
    transition: 0.2s all;
    transform: scale(1.1);
    cursor: pointer;
}

@media screen and (max-width: 1000px) {
    .tabla {
        width: 45%;
        flex-grow: initial;
        max-width: none;
        margin-bottom: 40px;
    }
}

@media screen and (max-width: 700px) {
    .tabla {
        width: 55%;
        height: 20%;
        padding: 30px;
    }

    .tabla h2 {
        margin-top: 40px;
    }
}

</style>