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
			
			return ((yearDiff > 0 || monthDiff > 0) || dayDiff >= 0);
		};

		$scope.getEvents = function() {
			$http.get(eventsUrl + '/calendars/' + calendarId + '/events?key=' + key)
				.success(function(data) {
					var temp = [];

					angular.forEach(data.items, function(value, key) {
						if (value.start.date) {
							if ($scope.checkDate(value.start.date) || value.recurrence) {
								temp.push({
									summary: value.summary,
									day: value.start.date,
									recurr: value.recurrence ? true : false
								});
							}
						} else if (value.start.dateTime) {
							if ($scope.checkDate(value.start.dateTime) || value.recurrence) {
								var splitDate = value.start.dateTime.split('T')

								var time = splitDate[1].split('-')[0];
								var day = splitDate[0]; // fix these two

								temp.push({
									summary: value.summary,
									day: day,
									time: time,
									recurr: value.recurrence ? true : false
								});
							} 
						}
					})

					$scope.events = temp;
					console.log($scope.events);
				})
				.error(function(err) {
					console.log(err);
				});
		};

		$scope.getEvents();

		
	});
