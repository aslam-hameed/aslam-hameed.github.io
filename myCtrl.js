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

    $scope.tree = [{name: "Node", expanded:true, nodes: [
    {name: "Shahul Hameed", expanded:true, nodes: [
        {name: "Aslam", expanded:true, nodes: [
            {name: "Haleema", expanded:true, nodes: []},
            {name: "Mariam", expanded:true, nodes: []}
        ]},
        {name: "Musthak", expanded:true, nodes: []},
        {name: "Rubeena", expanded:true, nodes: []},
        {name: "Sharafath", expanded:true, nodes: []},
        {name: "Ansif", expanded:true, nodes: []},
        {name: "Zahir", expanded:true, nodes: []},
        {name: "Ruksana", expanded:true, nodes: []}
    {name: "Moinhi", expanded:true, nodes: }
    ]}];

});