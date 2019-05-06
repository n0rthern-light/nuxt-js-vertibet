<template>
  <div class="admin-root-container">
    <h1>Zarządzaj</h1>
    <div class="admin-root-cards" style="margin-top: 35px;">
      <a-card title="Kategorie" :bordered="false" @click="$router.push('/admin/categories')">
        <p>Główne kategorie oraz podkategorie.</p>
      </a-card>
      <a-card title="Drużyny" :bordered="false" @click="$router.push('/admin/teams')">
        <p>Wszystkie drużyny oraz narodowości.</p>
      </a-card>
      <a-card title="Mecze" :bordered="false" @click="$router.push('/admin/games')">
        <p>Mecze drużyn w danych kategoriach.</p>
      </a-card>
      <a-card title="Użytkownicy" :bordered="false">
        <p>Zarejestrowani użytkownicy</p>
      </a-card>
      <a-card title="Płatności" :bordered="false">
        <p>Płatności użytkowników</p>
      </a-card>
      <a-card title="Promocje" :bordered="false">
        <p>Zarządzaj promocjami</p>
      </a-card>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .admin-root-container {
    width: 100%;
    padding: 100px;
    h1 {
      width: 100%;
      text-align: center;
    }
    .admin-root-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      & > * {
        flex: 0 0 calc(33% - 10px);
        flex-grow: 1;
        margin: 5px;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
</style>
