const { Router } = require('express')
const jottaliClient = require('../clients/jottali-client')
const Transaction = require('../../models/transaction')

const {
  JOTTALI_APP_ID,
  JOTTALI_APP_SECRET
} = process.env

const transactionCtrl = Router()

transactionCtrl.get('/', async (req, res) => {
  res.json({ message: 'Get successful' })
})

transactionCtrl.get('/initier', async (req, res) => {
  try {
    const resAuth = await jottaliClient.post('/auth', {
      appId: JOTTALI_APP_ID,
      appSecret: JOTTALI_APP_SECRET,
    })
    console.log('resAuth.data', resAuth.data)

    if (resAuth.status != 200) {
      res.status(401).json({ wsMessage: "Echec authentification" })
      return
    }

    const resInit = await jottaliClient.post('/transactions/initier', {
      total: 2,
      referenceInterne: "123450",
      urlSucces: "http://127.0.0.1:3000/HHGDFDFGH.pdf",
      urlErreur: "https://facebook.com",
    }, {
      headers: {
        Authorization: resAuth.data.accessToken,
      },
    })
    console.log('resInit.data', resInit.data)

    if (resAuth.status != 200) {
      res.status(401).json({ wsMessage: "Echec initiation de la transaction" })
      return
    }

    // const transaction = await Transaction.create(resInit.data);

    res.json(resInit.data)
  } catch (err) {
    console.log('err', err)
    res.status(500).json({ wsMessage: "Erreur du serveur" })
  }
})

module.exports = transactionCtrl
