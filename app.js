var count = 0;
var a1 = 1,
    a2 = 2,
    a3 = 3,
    a4 = 4,
    a5 = 5,
    a6 = 6,
    a7 = 7,
    a8 = 8,
    a9 = 9;
var gamePlayer = true;
var p1 = prompt('Player 1 name ?');
var p2 = prompt('Player 2 name ?');
while (p1 == p2) {
    alert('Both cannot have same name');
    p2 = prompt('Player 2 name ?');
}
document.querySelector('#name-0').textContent = p1;
document.querySelector('#name-1').textContent = p2;
document.querySelector('.bn1').addEventListener('click', function() {
    if (gamePlayer) {
        if (count % 2 == 0) {
            var number = document.querySelector('.bn1').textContent;
            if (number != 'O' && number != 'X') {
                count++;
                document.querySelector('.bn1').innerHTML = 'O';
                document.querySelector('.player-0').classList.remove('active');
                document.querySelector('.player-1').classList.add('active');
                a1 = document.querySelector('.bn1').textContent;
                if (a1 == a2 && a2 == a3) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a1 == a4 && a4 == a7) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a1 == a5 && a5 == a9) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                }
            } else if (number == 'O' || number == 'X') {
                document.querySelector('.bn1').classList.add('btn-shake');
            }


        } else if (count % 2 != 0) {
            var number = document.querySelector('.bn1').textContent;
            if (number != 'O' && number != 'X') {
                count++;
                document.querySelector('.bn1').innerHTML = 'X';
                document.querySelector('.player-1').classList.remove('active');
                document.querySelector('.player-0').classList.add('active');
                a1 = document.querySelector('.bn1').textContent;
                if (a1 == a2 && a2 == a3) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a1 == a4 && a4 == a7) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a1 == a5 && a5 == a9) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                }
            } else if (number == 'O' || number == 'X') {
                document.querySelector('.bn1').classList.add('btn-shake');
            }
        }
    }
});
document.querySelector('.bn2').addEventListener('click', function() {
    if (gamePlayer) {
        if (count % 2 == 0) {
            var number = document.querySelector('.bn2').textContent;
            if (number != 'O' && number != 'X') {
                count++;
                document.querySelector('.bn2').innerHTML = 'O';
                document.querySelector('.player-0').classList.remove('active');
                document.querySelector('.player-1').classList.add('active');
                a2 = document.querySelector('.bn2').textContent;
                if (a1 == a2 && a2 == a3) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a2 == a5 && a5 == a8) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                }
            } else if (number == 'O' || number == 'X') {
                document.querySelector('.bn2').classList.add('btn-shake');
            }
        } else if (count % 2 != 0) {
            var number = document.querySelector('.bn2').textContent;
            if (number != 'O' && number != 'X') {
                count++;
                document.querySelector('.bn2').innerHTML = 'X';
                document.querySelector('.player-1').classList.remove('active');
                document.querySelector('.player-0').classList.add('active');
                a2 = document.querySelector('.bn2').textContent;
                if (a1 == a2 && a2 == a3) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a2 == a5 && a5 == a8) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                }
            } else if (number == 'O' || number == 'X') {
                document.querySelector('.bn2').classList.add('btn-shake');
            }
        }
    }
});
document.querySelector('.bn3').addEventListener('click', function() {
    if (gamePlayer) {
        if (count % 2 == 0) {
            var number = document.querySelector('.bn3').textContent;
            if (number != 'O' && number != 'X') {
                count++;
                document.querySelector('.bn3').innerHTML = 'O';
                document.querySelector('.player-0').classList.remove('active');
                document.querySelector('.player-1').classList.add('active');
                a3 = document.querySelector('.bn3').textContent;
                if (a1 == a2 && a2 == a3) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a3 == a6 && a6 == a9) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a3 == a5 && a5 == a7) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                }
            } else if (number == 'O' || number == 'X') {
                document.querySelector('.bn3').classList.add('btn-shake');
            }
        } else if (count % 2 != 0) {
            var number = document.querySelector('.bn3').textContent;
            if (number != 'O' && number != 'X') {
                count++;
                document.querySelector('.bn3').innerHTML = 'X';
                document.querySelector('.player-1').classList.remove('active');
                document.querySelector('.player-0').classList.add('active');
                a3 = document.querySelector('.bn3').textContent;
                if (a1 == a2 && a2 == a3) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a3 == a6 && a6 == a9) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a3 == a5 && a5 == a7) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                }
            } else if (number == 'O' || number == 'X') {
                document.querySelector('.bn3').classList.add('btn-shake');
            }
        }
    }
});
document.querySelector('.bn4').addEventListener('click', function() {
    if (gamePlayer) {
        if (count % 2 == 0) {
            var number = document.querySelector('.bn4').textContent;
            if (number != 'O' && number != 'X') {
                count++;
                document.querySelector('.bn4').innerHTML = 'O';
                document.querySelector('.player-0').classList.remove('active');
                document.querySelector('.player-1').classList.add('active');
                a4 = document.querySelector('.bn4').textContent;
                if (a4 == a1 && a1 == a7) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a4 == a5 && a5 == a6) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                }
            } else if (number == 'O' || number == 'X') {
                document.querySelector('.bn4').classList.add('btn-shake');
            }
        } else if (count % 2 != 0) {
            var number = document.querySelector('.bn4').textContent;
            if (number != 'O' && number != 'X') {
                count++;
                document.querySelector('.bn4').innerHTML = 'X';
                document.querySelector('.player-1').classList.remove('active');
                document.querySelector('.player-0').classList.add('active');
                a4 = document.querySelector('.bn4').textContent;
                if (a4 == a1 && a1 == a7) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a4 == a5 && a5 == a6) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                }
            } else if (number == 'O' || number == 'X') {
                document.querySelector('.bn4').classList.add('btn-shake');
            }
        }
    }
});
document.querySelector('.bn5').addEventListener('click', function() {
    if (gamePlayer) {
        if (count % 2 == 0) {
            var number = document.querySelector('.bn5').textContent;
            if (number != 'O' && number != 'X') {
                count++;
                document.querySelector('.bn5').innerHTML = 'O';
                document.querySelector('.player-0').classList.remove('active');
                document.querySelector('.player-1').classList.add('active');
                a5 = document.querySelector('.bn5').textContent;
                if (a5 == a4 && a4 == a6) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a5 == a2 && a2 == a8) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a1 == a5 && a5 == a9) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a3 == a5 && a5 == a7) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                }
            } else if (number == 'O' || number == 'X') {
                document.querySelector('.bn5').classList.add('btn-shake');
            }
        } else if (count % 2 != 0) {
            var number = document.querySelector('.bn5').textContent;
            if (number != 'O' && number != 'X') {
                count++;
                document.querySelector('.bn5').innerHTML = 'X';
                document.querySelector('.player-1').classList.remove('active');
                document.querySelector('.player-0').classList.add('active');
                a5 = document.querySelector('.bn5').textContent;
                if (a5 == a4 && a4 == a6) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a5 == a2 && a2 == a8) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a1 == a5 && a5 == a9) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a3 == a5 && a5 == a7) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                }
            } else if (number == 'O' || number == 'X') {
                document.querySelector('.bn5').classList.add('btn-shake');
            }
        }
    }
});
document.querySelector('.bn6').addEventListener('click', function() {
    if (gamePlayer) {
        if (count % 2 == 0) {
            var number = document.querySelector('.bn6').textContent;
            if (number != 'O' && number != 'X') {
                count++;
                document.querySelector('.bn6').innerHTML = 'O';
                document.querySelector('.player-0').classList.remove('active');
                document.querySelector('.player-1').classList.add('active');
                a6 = document.querySelector('.bn6').textContent;
                if (a6 == a3 && a3 == a9) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a5 == a6 && a6 == a4) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                }
            } else if (number == 'O' || number == 'X') {
                document.querySelector('.bn6').classList.add('btn-shake');
            }
        } else if (count % 2 != 0) {
            var number = document.querySelector('.bn6').textContent;
            if (number != 'O' && number != 'X') {
                count++;
                document.querySelector('.bn6').innerHTML = 'X';
                document.querySelector('.player-1').classList.remove('active');
                document.querySelector('.player-0').classList.add('active');
                a6 = document.querySelector('.bn6').textContent;
                if (a6 == a3 && a3 == a9) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a5 == a6 && a6 == a4) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                }
            } else if (number == 'O' || number == 'X') {
                document.querySelector('.bn6').classList.add('btn-shake');
            }
        }
    }
});
document.querySelector('.bn7').addEventListener('click', function() {
    if (gamePlayer) {
        if (count % 2 == 0) {
            var number = document.querySelector('.bn7').textContent;
            if (number != 'O' && number != 'X') {
                count++;
                document.querySelector('.bn7').innerHTML = 'O';
                document.querySelector('.player-0').classList.remove('active');
                document.querySelector('.player-1').classList.add('active');
                a7 = document.querySelector('.bn7').textContent;
                if (a7 == a4 && a4 == a1) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a7 == a5 && a5 == a3) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a7 == a8 && a8 == a9) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                }
            } else if (number == 'O' || number == 'X') {
                document.querySelector('.bn7').classList.add('btn-shake');
            }
        } else if (count % 2 != 0) {
            var number = document.querySelector('.bn7').textContent;
            if (number != 'O' && number != 'X') {
                count++;
                document.querySelector('.bn7').innerHTML = 'X';
                document.querySelector('.player-1').classList.remove('active');
                document.querySelector('.player-0').classList.add('active');
                a7 = document.querySelector('.bn7').textContent;
                if (a7 == a4 && a4 == a1) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a7 == a5 && a5 == a3) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a7 == a8 && a8 == a9) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                }
            } else if (number == 'O' || number == 'X') {
                document.querySelector('.bn7').classList.add('btn-shake');
            }
        }
    }
});
document.querySelector('.bn8').addEventListener('click', function() {
    if (gamePlayer) {
        if (count % 2 == 0) {
            var number = document.querySelector('.bn8').textContent;
            if (number != 'O' && number != 'X') {
                count++;
                document.querySelector('.bn8').innerHTML = 'O';
                document.querySelector('.player-0').classList.remove('active');
                document.querySelector('.player-1').classList.add('active');
                a8 = document.querySelector('.bn8').textContent;
                if (a8 == a5 && a5 == a2) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a7 == a8 && a8 == a9) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                }
            } else if (number == 'O' || number == 'X') {
                document.querySelector('.bn8').classList.add('btn-shake');
            }
        } else if (count % 2 != 0) {
            var number = document.querySelector('.bn8').textContent;
            if (number != 'O' && number != 'X') {
                count++;
                document.querySelector('.bn8').innerHTML = 'X';
                document.querySelector('.player-1').classList.remove('active');
                document.querySelector('.player-0').classList.add('active');
                a8 = document.querySelector('.bn8').textContent;
                if (a8 == a5 && a5 == a2) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a7 == a8 && a8 == a9) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                }
            } else if (number == 'O' || number == 'X') {
                document.querySelector('.bn8').classList.add('btn-shake');
            }
        }
    }
});
document.querySelector('.bn9').addEventListener('click', function() {
    if (gamePlayer) {
        if (count % 2 == 0) {
            var number = document.querySelector('.bn9').textContent;
            if (number != 'O' && number != 'X') {
                count++;
                document.querySelector('.bn9').innerHTML = 'O';
                document.querySelector('.player-0').classList.remove('active');
                document.querySelector('.player-1').classList.add('active');
                a9 = document.querySelector('.bn9').textContent;
                if (a7 == a8 && a8 == a9) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a9 == a5 && a5 == a1) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a9 == a6 && a6 == a3) {
                    document.querySelector('.player-0').classList.add('winner');
                    document.querySelector('#name-0').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                }
            } else if (number == 'O' || number == 'X') {
                document.querySelector('.bn9').classList.add('btn-shake');
            }
        } else if (count % 2 != 0) {
            var number = document.querySelector('.bn9').textContent;
            if (number != 'O' && number != 'X') {
                count++;
                document.querySelector('.bn9').innerHTML = 'X';
                document.querySelector('.player-1').classList.remove('active');
                document.querySelector('.player-0').classList.add('active');
                a9 = document.querySelector('.bn9').textContent;
                if (a7 == a8 && a8 == a9) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a9 == a5 && a5 == a1) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                } else if (a9 == a6 && a6 == a3) {
                    document.querySelector('.player-1').classList.add('winner');
                    document.querySelector('#name-1').textContent = 'WINNER!';
                    document.querySelector('.player-0').classList.remove('active');
                    document.querySelector('.player-1').classList.remove('active');
                    gamePlayer = false;
                }
            } else if (number == 'O' || number == 'X') {
                document.querySelector('.bn9').classList.add('btn-shake');
            }
        }
    }
});
document.querySelector('.btn-new').addEventListener('click', news);

function news() {
    count = 0;
    a1 = 1,
        a2 = 2,
        a3 = 3,
        a4 = 4,
        a5 = 5,
        a6 = 6,
        a7 = 7,
        a8 = 8,
        a9 = 9;
    gamePlayer = true;
    document.querySelector('.bn1').textContent = "";
    document.querySelector('.bn2').textContent = "";
    document.querySelector('.bn3').textContent = "";
    document.querySelector('.bn4').textContent = "";
    document.querySelector('.bn5').textContent = "";
    document.querySelector('.bn6').textContent = "";
    document.querySelector('.bn7').textContent = "";
    document.querySelector('.bn8').textContent = "";
    document.querySelector('.bn9').textContent = "";
    var p1 = prompt('Player 1 name ?');
    var p2 = prompt('Player 2 name ?');
    while (p1 == p2) {
        alert('Both cannot have same name');
        p2 = prompt('Player 2 name ?');
    }
    document.querySelector('#name-0').textContent = p1;
    document.querySelector('#name-1').textContent = p2;



    document.querySelector('.player-0').classList.remove('winner');
    document.querySelector('.player-1').classList.remove('winner');
    document.querySelector('.player-0').classList.add('active');
    document.querySelector('.player-1').classList.remove('active');
}