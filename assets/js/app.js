"use strict";

angular.module('EventsApp', [])
	.controller('EventsController', function($scope, $http) {


		// IUGA calendar ID and such
		var eventsUrl = 'https://www.googleapis.com/calendar/v3';
		var calendarId = 'uw.edu_neh0b0p4hso7ot07e5bnbimq8k%40group.calendar.google.com';
		var key = 'AIzaSyCqN2adCmsc3ov72hoOy6GKseL1p1_JmJs';


		// checks a given date and returns whether the date of an event 
		// is in the future and returns that boolean value
		$scope.checkDate = function(date) {
			var eventDate = new Date(date);

			var today = new Date();
			var day = today.getDate();
			var month = today.getUTCMonth() + 1;
			var year = today.getFullYear();

			var yearDiff = eventDate.getFullYear() - year;
			var monthDiff = (eventDate.getUTCMonth() + 1) - month;
			var dayDiff = eventDate.getDate() - day;
			
					
			if (yearDiff < 0 || monthDiff < 0) {
				return false;
			} else if (yearDiff > 0 || monthDiff > 0) {
				return true;
			} else {
				return dayDiff >= 0;
			}

		};

		// gets the current events 
		$scope.getEvents = function() {
			$http.get(eventsUrl + '/calendars/' + calendarId + '/events?key=' + key)
				.success(function(data) {
					
					// storage for filtered events
					var temp = [];

					angular.forEach(data.items, function(value, key) {

						// two different date formats: date or datetime
						// check both in if statement
						if (value.start.date) {
							// if it is a valid date in the future OR 
							// it is a reoccuring event, add it to the temp
							if ($scope.checkDate(value.start.date) || value.recurrence) {

								// format date into a nice format
								var date = moment(value.start.date);
								var momentDate = date.format("MMMM DD, YYYY");
								// push in a new object with the name, date
								// and whether this event reoccurs
								temp.push({
									summary: value.summary,
									day: momentDate,
									recurr: value.recurrence ? true : false,
									location: value.location ? value.location : "TBD"
								});
							}
						} else if (value.start.dateTime) {

							// if valid start date or reoccuring event, add to temp
							if ($scope.checkDate(value.start.dateTime) || value.recurrence) {

								// format date and time in a nice looking way
								var date = moment(value.start.dateTime);
								var momentTime = date.format("h:mm a")
								var momentDay = date.format("MMMM DD, YYYY");
								var dayOfWeek = date.format("dddd");
								// push new object with all the event info
								temp.push({
									summary: value.summary,
									day: momentDay,
									time: momentTime,
									dayWeek: dayOfWeek,
									recurr: value.recurrence ? true : false,
									location: value.location ? value.location : "TBD"
								});
							} 
						}
					})
					console.log(temp);
					// set events to filtered events
					$scope.events = temp;
				})
				.error(function(err) {
					console.log(err);
				});
		};
		
		// on pageload, get the events
		$scope.getEvents();
	});



