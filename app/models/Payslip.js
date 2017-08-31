"use strict";

class Payslip {
	constructor(
		payee, 
		dateFrom, 
		dateTo,
		grossIncome,
		incomeTax,
		superContribution,
		taxBracket
	) {

		//TODO Add exception checking ?
		this._properties = {
			payee: payee,
			dateFrom: dateFrom,
			dateTo: dateTo,
			grossIncome: grossIncome,
			incomeTax: incomeTax,
			superContribution: superContribution,
			taxBracket: taxBracket
		};
		
	}

	get netIncome() {
		return this.grossIncome - this.incomeTax;
	}

	get payee() {
		return Object.assign({}, this._properties.payee);
	}

	get dateFrom() {
		return this._properties.dateFrom.clone();
	}

	get dateTo() {
		return this._properties.dateFrom.clone();
	}

	get grossIncome() {
		return this._properties.grossIncome;
	}

	get incomeTax() {
		return this._properties.incomeTax;
	}

	get superContribution() {
		return this._properties.superContribution;
	}

	get taxBracket() {
		return this._properties.taxBracket;
	}
}

module.exports Payslip;