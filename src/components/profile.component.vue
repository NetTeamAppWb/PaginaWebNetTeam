<template>
    <div class="p-card">
        <div class="p-card-content">
            <h1 class="centered-title">My perfil</h1>
            <div class="profile-content">
                <div class="profile-image">
                    <img class="logo img-fluid" src="./../assets/perfil.jpg" alt="Imagen de perfil" width="440" height="310">
                </div>
                <div class="user-functions">
                    <ul>
                        <li v-for="func in userFunctions" :key="func.name">
                            <i :class="func.icon"></i> {{ func.name }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userFunctions: [
                { name: 'Raiting', icon: 'pi pi-check' },
                { name: 'Legal information', icon: 'pi pi-user' },
                { name: 'Complaints book', icon: 'pi pi-envelope' },
                { name: 'Setting', icon: 'pi pi-cog' },
                { name: 'Sign Out', icon: 'pi pi-sign-out' },
            ]
        };
    },
    name: "profile"
}
</script>

<style scoped>
.p-card {
    width: 700px;
    margin: 0 auto;
    text-align: center;
    border: 5px solid black;

}

.centered-title {
    margin-top: 20px;
}

.profile-content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.profile-image {
    margin-left: 20px;
}

.user-functions ul {
    list-style: none;
    padding: 0;
    text-align: left;
    margin-left: 20px;
}
</style>