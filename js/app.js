"use strict";

angular.module('EventsApp', [])
	.config(function($httpProvider) {

	})
	.controller('EventsController', function($scope, $http) {

		var eventsUrl = 'https://www.googleapis.com/calendar/v3';
		var calendarId = 'uw.edu_frgfmv3c75mtqoaai92qeonhu8@group.calendar.google.com';
		var key = 'AIzaSyCqN2adCmsc3ov72hoOy6GKseL1p1_JmJs';

		$scope.checkDate = function(date) {
			var eventDate = new Date(date);

			var today = new Date();
			var day = today.getDate();
			var month = today.getUTCMonth() + 1;
			var year = today.getFullYear();

			var yearDiff = eventDate.getFullYear() - year;
			var monthDiff = (eventDate.getUTCMonth() + 1) - month;
			var dayDiff = eventDate.getDate() - day;
			
					
			if (yearDiff <= 0 && monthDiff < 0) {
				return false;
			} else if (yearDiff > 0 || monthDiff > 0) {
				return true;
			} else {
				return dayDiff >= 0;
			}

		};

		$scope.getEvents = function() {
			$http.get(eventsUrl + '/calendars/' + calendarId + '/events?key=' + key)
				.success(function(data) {
					var temp = [];

					angular.forEach(data.items, function(value, key) {
						if (value.start.date) {
							if ($scope.checkDate(value.start.date) || value.recurrence) {
								
								var date = moment(value.start.date);
								var momentDate = date.format("MMMM DD, YYYY");
								
								temp.push({
									summary: value.summary,
									day: momentDate,
									recurr: value.recurrence ? true : false
								});
							}
						} else if (value.start.dateTime) {
							if ($scope.checkDate(value.start.dateTime) || value.recurrence) {

								var date = moment(value.start.dateTime);
								var momentTime = date.format("h:mm a")
								var momentDay = date.format("MMMM DD, YYYY");
								var dayOfWeek = date.format("dddd");

								temp.push({
									summary: value.summary,
									day: momentDay,
									time: momentTime,
									dayWeek: dayOfWeek,
									recurr: value.recurrence ? true : false
								});
							} 
						}
					})
					console.log(temp);
					$scope.events = temp;
				})
				.error(function(err) {
					console.log(err);
				});
		};
		
		$scope.getEvents();

	});



