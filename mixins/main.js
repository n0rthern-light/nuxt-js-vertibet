export const main = {
  methods: {
    goToLink (link) {
      console.log('redirecting')
      window.location.replace(link)
    },
    connectSocket () {
      /* eslint-disable */
      return io.connect('http://localhost:3000')
      /* eslint-enable */
    },
    getRelativeDate(date, withTime = true) {
      if (!date) return ''
      return this.$moment(date).format('HH:mm:ss')
    },
    assignCategories (array) {
      let resultArr = array.map((item) => {
        const childArr = array.filter(x => x.id_parent === item._id)
        if (childArr.length) {
          item = Object.assign(item, { childs: childArr })
        }
        return item
      })
      resultArr = resultArr.filter((item) => { return !item.id_parent })
      return resultArr
    },
    assignTreeData (array) {
      let resultArr = array.map((item) => {
        const childArr = array.filter(x => x.id_parent === item._id)
        if (childArr.length) {
          item = Object.assign(item, { children: childArr })
        }
        item = Object.assign(item, { title: item.name, value: item._id, key: item._id })
        return item
      })
      resultArr = resultArr.filter((item) => { return !item.id_parent })
      return resultArr
    }
  }
}
