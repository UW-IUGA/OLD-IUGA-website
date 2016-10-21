<?php
    include_once('../shared.php');
    shared_header('../', 'iUGA Events');
?>

	<main ng-app="EventsApp" ng-controller="EventsController">

		<div class="container">

			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<h1>Events</h1>
				</div>
			</div>

			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<div id="search">
						<input type="text" class="form-control" placeholder="search for events by name, time, date, etc..." ng-model="searchString">

						<section>
							<ul class="cards">
								<li class="card" ng-repeat="event in filteredEvents = (events | filter: searchString)">
									<img src="../assets/img/android.jpg" float="right" width="20%">
									<p class="card-heading">{{event.summary}}</p>

									<p>
										<span ng-if="!event.recurr">{{event.dayWeek}}, {{event.day}}</span>
										<span ng-if="event.recurr">Happens every {{event.dayWeek}}!</span>
									</p>

									<p ng-if="event.time">Starts at {{event.time}} @ {{event.location}}</p>

								</li>
							</ul>
						</section>
					</div>
				</div>
			</div>

		</div>

	</main>

<?php
    shared_footer('../', '
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.1/angular.min.js"></script>
		<script src="../assets/js/moment.js"></script>
		<script src="../assets/js/app.js"></script>
    ');
?>
