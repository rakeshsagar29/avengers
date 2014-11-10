var app = angular.module('avengersApp', []);
app.controller('characterController',function($scope){
    $scope.hero =[];
    $scope.orderProp = 'name';

     $scope.saveCharecter = function(){

        //Check for hero duplication
        for(var i=0;i<$scope.hero.length;i++){
            if($scope.name == $scope.hero[i].name)
            {
                $scope.name ="";
                alert("There can't be two heroes with the same name.");  
                return;
            }

        }

        $scope.hero.push({
            'name' : $scope.name,
            'weapon': $scope.weapon,
            'description': $scope.description
        });
        $scope.name="";
        $scope.weapon="";
        $scope.description="";
    };


    $scope.delete = function(deleteHero){
        console.log(deleteHero);
        for(var i=0;i<$scope.hero.length;i++){
            if(deleteHero.name == $scope.hero[i].name){
                $scope.hero.splice(i,1);
            }
        }
    }

});

