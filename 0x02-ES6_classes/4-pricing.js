#!/usr/bin/node
import Currency from './3-currency.js';

// 4-pricing.js file
export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Getter and setter for amount
  get amount() {
    return this.amount;
  }

  set amount(newAmount) {
    this.amount = newAmount;
  }

  // Getter and setter for currency
  get currency() {
    return this.currency;
  }

  set currency(newCurrency) {
    this.currency = newCurrency;
  }

  // Method to display full price
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
