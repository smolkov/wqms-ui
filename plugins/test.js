export default ({ app }, inject) => {
  const testApi = async function(path){
      return  await fetch('https://api.nuxtjs.dev/' + path).then(res => res.json())
  }
  inject('testApi', testApi)
}
