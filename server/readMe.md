### Authorization
  Authorization has been moved from the body of the request to the header of the request. So to send a request add the token to the header of the http request
  as is `Bearer ...token`


### Account\wallet creation
  At the creation of an account a wallet is create with the user 
  with their total balance 0, trust balance 0, and withdraw balance 0

#### :reference
  Is gotten after a paystack payent is initialized

### Transactions
  At the creation of a transaction a paystack payment link is been sent as part of the response
  - Create trasaction POST(`/transaction/createTransaction`)
    If the transaction role is a seller then the url link is been sent the recipientEmail for payments 
    - user
    - sellerId
    - recipientName
    - recipientEmail
    - recipientPhone
    - productName
    - transactionType
    - price
    - quantity
    - role
    - description
    - duration

  - Verification of a transaction payment 
    as is GET `/transaction/verify-tx/:reference`

### Orders
  When a paddilink is sent and an order is sent
  - Create an order POST(`/order/create-order`)
    - productId
    - buyerEmail
    - buyerPhone
    - sellerId
    - quantity

  - Get orders
    As is GET `/order/get-orders`
  - Get Sigle order
    As is GET `/order/get-order/:orderId`
  - GET USer orders
    As is GET `/order/get-user-orders/:userId`
  - Verification of order
    As is GET `/order/verify-order/:reference`

### PayStack payments
  Functions for every funs are found in the paystack folder