export default defineEventHandler(async (event) => {
    
    const { code } = event.context.params
    const { currencyKey } = useRuntimeConfig()

    const uri = `https://api.currencyapi.com/v3/latest?currrencies=${code}&apiKey=${currencyKey}`
    // const url = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_TJCU9nJtnx8e0fRTfKHG4TEcnuJQFwUrDUbV4RFV'

    const { data } = await $fetch(uri)

    return data
})