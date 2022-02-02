var tickets=angular.module("tickets",[]);


tickets.filter('rupees', function() {
    return function(x) {
        var i;
        i = x*74.75;
        return i;
    };
});

tickets.controller("Ticket_ctrl", function($scope,$http)
{
    $http.get("https://ankurs11.github.io/JSON/data.json")
    .success(function(response)
    {
        $scope.ticket_details=response.ticket_data;
    });
    $scope.rowlimit=8;
});

var teams=angular.module("teams",[]);

teams.controller("Team_ctrl", function($scope1,$http)
{
    $http.get("https://ankurs11.github.io/JSON/team.json")
    .success(function(response)
    {
        $scope1.team_details=response.team_data;
    });
    $scope1.rowlimit=6;
});