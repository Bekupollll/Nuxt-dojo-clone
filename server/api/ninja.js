export default defineEventHandler(async(event) => {
    const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=eJdPhICJUDBt6B4e4IX6DZ4A9Xos4Z2JrZ8xh2v2')
   return data
})