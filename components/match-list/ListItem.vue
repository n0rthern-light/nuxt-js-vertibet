<template>
  <div class="match-list-item transition-150">
      <div class="versus"><span class="bold-italic">VS.</span></div>
      <div class="team">
        <div class="team-details">
          <h4 class="bold">{{ match.name.split(' - ')[0] }}</h4>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/240px-Flag_of_Poland.svg.png"/>
        </div>
        <a-tooltip placement="bottom" >
        <template slot="title">
          <span>Obstaw wygraną drużyny {{ match.name.split(' - ')[0] }}.</span>
        </template>
        <div class="odds transition-150">
          <span class="bold">5.43</span>
        </div>
        </a-tooltip>
      </div>
      <div class="team">
        <div class="team-details">
          <h4 class="bold">{{ match.name.split(' - ')[1] }}</h4>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/240px-Flag_of_Poland.svg.png"/>
        </div>
        <a-tooltip placement="bottom" >
        <template slot="title">
          <span>Obstaw wygraną drużyny {{ match.name.split(' - ')[1] }}.</span>
        </template>
        <div class="odds transition-150">
          <span class="bold">1.26</span>
        </div>
        </a-tooltip>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    match: {}
  },
  data () {
    return {
      hoverTeamA: false,
      hoverTeamB: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/styles/global.scss";
  .match-list-item {
    margin: 10px auto 10px auto;
    height: 200px;
    width: 95%;
    max-width: 768px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    position:relative;
    background-color: $color-bg!important;
    border: 1px solid transparent;

    .versus {
      top: 50%;
      left: 50%;
      position: absolute;
      transform:translate(-50%,-50%);
      span {
        font-size: 32px;
        color: $color-text;
      }
    }

    &:hover {
      border: 1px solid $color-details-2;
      cursor: pointer;
    }

      .team {
        width: 50%;
        max-width: 220px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        text-align: center;
        flex-direction: column;

        .team-details {
          h4 {

          }
          img {
            margin: 0 auto 0 auto;
            height: auto;
            max-width: 42px;
          }
        }

        .odds {
          margin: 0;
          padding: 10px;
          font-size: 1.5em;
          &:hover {
            cursor: pointer;
            background-color: $color-details-3;
          }
        }
      }
  }

@media only screen and (max-width: 880px) {
}
</style>
