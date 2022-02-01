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
        $scope.ticket_details=response.records;
    });
    $scope.rowlimit=8;
});