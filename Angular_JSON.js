var tickets=angular.module("tickets",[]);
tickets.controller("Ticket_ctrl", function($scope,$http)
{
    $http.get("https://ankurs11.github.io/JSON/data.json")
    .success(function(response)
    {
        $scope.ticket_details=response.records;
    });
});