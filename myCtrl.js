app.controller("myCtrl", function($scope) {
    $scope.firstName	= "John";
    $scope.lastName= "Doe";
    $scope.delete = function(data) {
        data.nodes = [];
    };
    $scope.add = function(data) {
        var post = data.nodes.length + 1;
        var newName = data.name + '-' + post;
        data.nodes.push({name: newName, expanded:true, nodes: []});
    };
    $scope.collapse = function(data) {
         data.expanded=false;
    }
    $scope.expand = function(data) {
         data.expanded=true;
    }
    $scope.tree = [{name: "Node", expanded:true, nodes: []}];
/*
    $scope.tree = [{name: "Aslam"}, {name: "Musthak"}]
*/
});