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

    $scope.tree = [{name: "Avvabi", img: "images/flower.jpg", expanded:true, nodes: [
        {name: "Late Moideen Beary", img: "images/flower.jpg", expanded:true, nodes: [


        ]},
        {name: "Late Abdulla Beary - Mariyamma Kunjar", img: "images/flower.jpg", expanded:true, nodes: [


        ]},
        {name: "Late Kunhali Beary", img: "images/flower.jpg", expanded:true, nodes: [


        ]},
        {name: "Late Anduman Haji", img: "images/flower.jpg", expanded:true, nodes: [


        ]},
        {name: "Late Abbas Master", img: "images/flower.jpg", expanded:true, nodes: [


        ]},
        {name: "Abubackar Moulavi", img: "images/flower.jpg", expanded:true, nodes: [


        ]},
        {name: "Avvabi", img: "images/flower.jpg", expanded:true, nodes: [
            {name: "Moinhi", img: "images/flower.jpg", expanded:true, nodes: [
                    {name: "Sakeena", img: "images/flower.jpg", expanded:true, nodes: []},
                    {name: "Haneefa", img: "images/flower.jpg", expanded:true, nodes: []},
                    {name: "Maimoona", img: "images/flower.jpg", expanded:true, nodes: []},
                    {name: "Thahira", img: "images/flower.jpg", expanded:true, nodes: []},
                    {name: "Rasheed", img: "images/Rasheed.jpg", expanded:true, nodes: []},
                    {name: "Rayya", img: "images/flower.jpg", expanded:true, nodes: []},
                    {name: "Azeez", img: "images/Azeez.jpg", expanded:true, nodes: []}
            ]},
            {name: "Shahul Hameed", img: "images/flower.jpg", expanded:true, nodes: [
                {name: "Aslam - Rishana", img: "images/Aslam.jpg", expanded:true, nodes: [
                    {name: "Haleema", img: "images/flower.jpg", expanded:true, nodes: []},
                    {name: "Mariam", img: "images/flower.jpg", expanded:true, nodes: []}
                ]},
                {name: "Musthak - Fazmina", img: "images/Musthak.jpg", expanded:true, nodes: [
                    {name: "Fathima", img: "images/flower.jpg", expanded:true, nodes: []},
                    {name: "Fathah", img: "images/flower.jpg", expanded:true, nodes: []}
                ]},
                {name: "Rubeena - Shafi", img: "images/flower.jpg", expanded:true, nodes: [
                    {name: "Hakeem", img: "images/flower.jpg", expanded:true, nodes: []},
                    {name: "Hameed", img: "images/flower.jpg", expanded:true, nodes: []},
                    {name: "Abdulla", img: "images/flower.jpg", expanded:true, nodes: []},
                    {name: "Hamir", img: "images/flower.jpg", expanded:true, nodes: []}
                ]},
                {name: "Sharafath - Shahina", img: "images/Sharafath.jpg", expanded:true, nodes: [
                    {name: "Omar", img: "images/flower.jpg", expanded:true, nodes: []}
                ]},
                {name: "Ansif", img: "images/Ansif.jpg", expanded:true, nodes: []},
                {name: "Zahir", img: "images/Zahir.jpg", expanded:true, nodes: []},
                {name: "Ruksana", img: "images/flower.jpg", expanded:true, nodes: []}
            ]}
        ]},
        {name: "Asiya", img: "images/flower.jpg", expanded:true, nodes: [


        ]},
        {name: "Dhulaiqa", img: "images/flower.jpg", expanded:true, nodes: [


        ]},
        {name: "Mariyamma - Ibrahim", img: "images/flower.jpg", expanded:true, nodes: [


        ]}

        ]}];

});