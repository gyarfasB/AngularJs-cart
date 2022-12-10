app.controller('MainController', function($scope){

    $scope.irattarto = [
        {nev: 'irattartó mappa', ar : 599}
    ]
    $scope.toll = [
        {nev: 'toll', ar : 85}
    ]
    $scope.postit = [
        {nev: 'post-it', ar : 350}
    ]

    $scope.irattartoSzinek = ['Fekete','Kék','Zöld']
    $scope.tollSzinek = ['Kék', 'Piros']
    $scope.postitSzinek = ['Sárga', 'Narancssárga', 'Zöld', 'Világoskék']

    $scope.kosar = []

    $scope.irattartoKosarba = function() {
        $scope.kosar.push(
            {nev: 'irattartó mappa', ar : 599, szin : $scope.irattartoSzin}
        );
    }
    $scope.tollKosarba = function() {
        $scope.kosar.push(
            {nev: 'toll', ar : 85, szin : $scope.tollSzin}
        );
    }

    $scope.postitKosarba = function() {
        $scope.kosar.push(
            {nev: 'post-it', ar : 350, szin : $scope.postitSzin}
        );
    }
});
