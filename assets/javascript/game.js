//randomNumber, displayMessage, winCounter, lossCounter, gemOne, gemTwo, gemThree, gemFour, totalScore

$(document).ready(function() {

    var game = {
        total_score: 0,
        wins: 0,
        losses: 0,
        random_number: "",
        current_score: "",
        start: function start() {
            var random_number_array = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
            var random_gem_array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            this.random_number = random_number_array[Math.floor(Math.random() * random_number_array.length)];
            $("#gemOne").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
            $("#gemTwo").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
            $("#gemThree").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
            $("#gemFour").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
            $("#randomNumber").html(this.random_number)
            $("#totalScore").html(0);
            $("#winCounter").html(0);
            $("#lossCounter").html(0);
        },
    }

    function reset() {
        var random_number_array = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
        var random_gem_array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        $("#gemOne").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
        $("#gemTwo").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
        $("#gemThree").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
        $("#gemFour").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
        $("#totalScore").html(0);
        game.total_score = $("#totalScore").html()
        game.random_number = random_number_array[Math.floor(Math.random() * random_number_array.length)];
        $("#randomNumber").html(game.random_number)
    }

    function add_jewel_values(value) {
        game.total_score = (game.total_score * 1) + (value * 1)
        $("#totalScore").html(game.total_score)
        compare(value)
    }

    function compare() {
        if (game.total_score === game.random_number) {
            game.wins += 1
            $("#winCounter").html(game.wins);
            reset()
        } else if (game.total_score > game.random_number) {
            game.losses += 1
            $("#lossCounter").html(game.losses);
            reset()
        }
    }

    function add(a, b) {
        game.wins
    }

    $("#gemOne").on("click", function get_jewel_values() {
        var value = $("#gemOne").attr("value")
        add_jewel_values(value)
        console.log(value)
    })
    $("#gemTwo").on("click", function get_jewel_values() {
        var value = $("#gemTwo").attr("value")
        add_jewel_values(value)
        console.log(value)
    })
    $("#gemThree").on("click", function get_jewel_values() {
        var value = $("#gemThree").attr("value")
        add_jewel_values(value)
        console.log(value)
    })
    $("#gemFour").on("click", function get_jewel_values() {
        var value = $("#gemFour").attr("value")
        add_jewel_values(value)
        console.log(value)
    })

    game.start()
})