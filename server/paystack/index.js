
const axios = require('../config/axios')

exports.initPay = async (email, amount, url, metadata) => {

  try {
    const payload = {
      email: email,
      amount: amount * 100,
      callback_url: url,
      metadata
    }
    const { data } = await axios.post(
        'https://api.paystack.co/transaction/initialize',
        payload
      )
  
      return data
  } catch (error) {
    throw error
  }
}

exports.verifyTx = async (reference) => {

  try {
    const { data } = await axios.get(
        `https://api.paystack.co/transaction/verify/${reference}`
      )
  
      return data
  } catch (error) {
    throw error
  }
}

// Customers

exports.createCustomer = async (first_name, last_name, email, phone) => {

  try {
    const payload = {
      first_name,
      last_name,
      email,
      phone
    }
  
    const { data } = await axios.post('https://api.paystack.co/customer', payload)

    return data
  } catch (error) {
    throw error
  }

}

exports.getCustomers = async () => {
 try {
  const { data } = await axios.get('https://api.paystack.co/customer')
  return data
 } catch (error) {
   throw error
 }
}

exports.getCustomer = async (email) => {
  try {
    const { data } = await axios.get(`https://api.paystack.co/customer/${email}`)
    return data
  } catch (error) {
    throw error
  }
}

exports.getBanks = async () => {
  try {
    const { data } = await axios.get('https://api.paystack.co/bank/country=nigeria')
    return data
  } catch (error) {
    throw error
  }
}

exports.updateCustomer = async (first_name, last_name, email, phone, code) => {
  try {
    const payload = {
      first_name,
      last_name,
      email,
      phone
    }
    
    const { data } = await axios.put(`https://api.paystack.co/customer/${code}`, payload)
    return data
  } catch (error) {
    throw error
  }
}

exports.validiateCustomer = async (first_name, last_name, email, phone, customer_code, bank_code, bvn, account_number) => {

  try {
    const payload = {
      first_name,
      last_name,
      email,
      phone,
      bank_code,
      country: 'NG',
      type: "bank_account",
      bvn,
      account_number
    }
  
    
    const { data } = await axios.put(`https://api.paystack.co/customer/${customer_code}/identification`, payload)
    return data
  } catch (error) {
    throw error
  }
}