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

    $scope.tree = [{name: "Avvabi", expanded:true, nodes: [
        {name: "Shahul Hameed", expanded:true, nodes: [
            {name: "Aslam - Rishana", img: "images/Aslam.jpg", expanded:true, nodes: [
                {name: "Haleema", expanded:true, nodes: []},
                {name: "Mariam", expanded:true, nodes: []}
            ]},
            {name: "Musthak - Fazmina", expanded:true, nodes: [
                {name: "Fathima", expanded:true, nodes: []},
                {name: "Fathah", expanded:true, nodes: []}
            ]},
            {name: "Rubeena - Shafi", expanded:true, nodes: [
                {name: "Hakeem", expanded:true, nodes: []},
                {name: "Hameed", expanded:true, nodes: []},
                {name: "Abdulla", expanded:true, nodes: []}
            ]},
            {name: "Sharafath - Shahina", expanded:true, nodes: [
                {name: "Omar", expanded:true, nodes: []}
            ]},
            {name: "Ansif", expanded:true, nodes: []},
            {name: "Zahir", expanded:true, nodes: []},
            {name: "Ruksana", expanded:true, nodes: []}
        ]},
        {name: "Moinhi", expanded:true, nodes: []}
        ]}];

});