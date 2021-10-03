/** Задача 3 - Класс Vacation
Требуется написать класс отпуска - Vacation, который содержит:
	3.1. Дата начала (объект класса Date)
	3.2. Дата окончания (объект класса Time)
	3.3. Прототип класса должен содержать метод isDateInVacation, принимающий один аргумент — дату.
	Должен возвращать true, если переданная дата, входит в промежуток отпуска.
	3.4. Дата окончания отпуска должна быть позже даты начала1
@constructor
@this {Vacation}
@param {Date} vacationStartDate - Дата начала отпуска
@param {Date} vacationEndDate - Время конца отпуска
 */

function Vacation(vacationStartDate, vacationEndDate) {

	if (!(Date.prototype.isPrototypeOf(vacationStartDate)) || !(Date.prototype.isPrototypeOf(vacationEndDate))){
		throw Error("VacationStartDate or vacationEndDate is wrong type")
	}
	if (vacationStartDate >= vacationEndDate){
		throw Error("Start of vacation is later than end of vacation");
	}

	this.vacationStartDate = vacationStartDate;
	this.vacationEndDate = vacationEndDate;

	this.isDateInVacation = function(date){
		return ((this.vacationStartDate <= date) &&
				(this.vacationEndDate >= date));
	};
}

module.exports.Vacation = Vacation;