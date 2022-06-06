const api_key = process.env.MAILJET_KEY
const secret = process.env.MAILJET_SECRET
const mailjet = require ('node-mailjet').connect(api_key, secret)

const sendPaymentlinkToRecipientEmail = async (email, name, productName, link) => {
  try {
    const { body } = await mailjet
    .post("send", {'version': 'v3.1'})
    .request({
      "Messages":[
        {
          "From": {
            "Email": "kingifean@gmail.com",
            "Name": "Transaction link"
          },
          "To": [
            {
              "Email": `${email}`,
              "Name": `${name}`
            }
          ],
          "Subject": `${productName}`,
          "TextPart": `Payment for ${productName}`,
          "HTMLPart": `Here's the link to pay for the product ${link}`,
          "CustomID": "Transaction payment"
        }
      ]
    })
    console.log(body)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { sendPaymentlinkToRecipientEmail }
