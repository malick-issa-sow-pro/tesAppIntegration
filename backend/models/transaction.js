const { Schema, model } = require('mongoose')

const TransactionSchema = new Schema({
  _id: String,
  extId: String,
  application: String,
  frais: Number,
  montant: Number,
  total: Number,
  referenceInterne: String,
  statut: String,
  updatedAt: Date,
  createdAt: Date,
  urlPaiement: String,
})

const Transaction = model("Transaction", TransactionSchema)

module.exports = Transaction
