// Variables principales
const backOfCardImage = 'images/card_back.png';
const playerNames = ["Carlos", "Ana", "Luis", "María", "Jorge", "Elena", "Pedro", "Lucía"];
const numPlayers = 4; 
let players = [];
let discardPile = [];
let hands = [];

let cardExchangedThisTurn = false, playerHasPlanted = false;

let deck = [
    // Corazones
    { id: 1, value: 2, suit: 'corazones', image: 'images/card_2_corazones.png' },
    { id: 2, value: 3, suit: 'corazones', image: 'images/card_3_corazones.png' },
    { id: 3, value: 4, suit: 'corazones', image: 'images/card_4_corazones.png' },
    { id: 4, value: 5, suit: 'corazones', image: 'images/card_5_corazones.png' },
    { id: 5, value: 6, suit: 'corazones', image: 'images/card_6_corazones.png' },
    { id: 6, value: 7, suit: 'corazones', image: 'images/card_7_corazones.png' },
    { id: 7, value: 8, suit: 'corazones', image: 'images/card_8_corazones.png' },
    { id: 8, value: 9, suit: 'corazones', image: 'images/card_9_corazones.png' },
    { id: 9, value: 10, suit: 'corazones', image: 'images/card_10_corazones.png' },
    { id: 10, value: 11, suit: 'corazones', image: 'images/card_ace_corazones.png' },
    { id: 11, value: 10, suit: 'corazones', image: 'images/card_jack_corazones.png' },
    { id: 12, value: 10, suit: 'corazones', image: 'images/card_queen_corazones.png' },
    { id: 13, value: 10, suit: 'corazones', image: 'images/card_king_corazones.png' },
    // Diamantes
    { id: 14, value: 2, suit: 'diamantes', image: 'images/card_2_diamantes.png' },
    { id: 15, value: 3, suit: 'diamantes', image: 'images/card_3_diamantes.png' },
    { id: 16, value: 4, suit: 'diamantes', image: 'images/card_4_diamantes.png' },
    { id: 17, value: 5, suit: 'diamantes', image: 'images/card_5_diamantes.png' },
    { id: 18, value: 6, suit: 'diamantes', image: 'images/card_6_diamantes.png' },
    { id: 19, value: 7, suit: 'diamantes', image: 'images/card_7_diamantes.png' },
    { id: 20, value: 8, suit: 'diamantes', image: 'images/card_8_diamantes.png' },
    { id: 21, value: 9, suit: 'diamantes', image: 'images/card_9_diamantes.png' },
    { id: 22, value: 10, suit: 'diamantes', image: 'images/card_10_diamantes.png' },
    { id: 23, value: 11, suit: 'diamantes', image: 'images/card_ace_diamantes.png' },
    { id: 24, value: 10, suit: 'diamantes', image: 'images/card_jack_diamantes.png' },
    { id: 25, value: 10, suit: 'diamantes', image: 'images/card_queen_diamantes.png' },
    { id: 26, value: 10, suit: 'diamantes', image: 'images/card_king_diamantes.png' },
    // Picas
    { id: 27, value: 2, suit: 'picas', image: 'images/card_2_picas.png' },
    { id: 28, value: 3, suit: 'picas', image: 'images/card_3_picas.png' },
    { id: 29, value: 4, suit: 'picas', image: 'images/card_4_picas.png' },
    { id: 30, value: 5, suit: 'picas', image: 'images/card_5_picas.png' },
    { id: 31, value: 6, suit: 'picas', image: 'images/card_6_picas.png' },
    { id: 32, value: 7, suit: 'picas', image: 'images/card_7_picas.png' },
    { id: 33, value: 8, suit: 'picas', image: 'images/card_8_picas.png' },
    { id: 34, value: 9, suit: 'picas', image: 'images/card_9_picas.png' },
    { id: 35, value: 10, suit: 'picas', image: 'images/card_10_picas.png' },
    { id: 36, value: 11, suit: 'picas', image: 'images/card_ace_picas.png' },
    { id: 37, value: 10, suit: 'picas', image: 'images/card_jack_picas.png' },
    { id: 38, value: 10, suit: 'picas', image: 'images/card_queen_picas.png' },
    { id: 39, value: 10, suit: 'picas', image: 'images/card_king_picas.png' },
    // Tréboles
    { id: 40, value: 2, suit: 'treboles', image: 'images/card_2_treboles.png' },
    { id: 41, value: 3, suit: 'treboles', image: 'images/card_3_treboles.png' },
    { id: 42, value: 4, suit: 'treboles', image: 'images/card_4_treboles.png' },
    { id: 43, value: 5, suit: 'treboles', image: 'images/card_5_treboles.png' },
    { id: 44, value: 6, suit: 'treboles', image: 'images/card_6_treboles.png' },
    { id: 45, value: 7, suit: 'treboles', image: 'images/card_7_treboles.png' },
    { id: 46, value: 8, suit: 'treboles', image: 'images/card_8_treboles.png' },
    { id: 47, value: 9, suit: 'treboles', image: 'images/card_9_treboles.png' },
    { id: 48, value: 10, suit: 'treboles', image: 'images/card_10_treboles.png' },
    { id: 49, value: 11, suit: 'treboles', image: 'images/card_ace_treboles.png' },
    { id: 50, value: 10, suit: 'treboles', image: 'images/card_jack_treboles.png' },
    { id: 51, value: 10, suit: 'treboles', image: 'images/card_queen_treboles.png' },
    { id: 52, value: 10, suit: 'treboles', image: 'images/card_king_treboles.png' },
    //Joker
    { id: 53, value: 11, suit: 'joker', image: 'images/card_joker.png' },
    
];
// Mezcla la baraja y la prepara para el juego
function initializeGame() {
    shuffleDeck(deck);
    hands = dealInitialHands(deck, numPlayers);
    discardPile.push(deck.pop()); // Coloca la primera carta en la pila de descartes
  }
  
  // Función de mezcla usando Fisher-Yates
  function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
  
  // Función para repartir cartas a cada jugador (3 cartas por jugador)
  function dealInitialHands(deck, numPlayers) {
    return Array.from({ length: numPlayers }, () => [
      deck.pop(),
      deck.pop(),
      deck.pop()
    ]);
  }
  
  // Llamada inicial para preparar el juego
  initializeGame();

  let currentPlayer = 0; // Índice del jugador que tiene el turno
let gameEnded = false;

// Función para gestionar el turno del jugador
function playerTurn(playerIndex) {
  if (gameEnded) return;

  const playerHand = hands[playerIndex];
  
  // El jugador puede elegir entre tomar una carta del mazo o de la pila de descartes
  const drawnCard = confirm("¿Quieres tomar una carta del mazo? OK para mazo, Cancelar para pila de descartes") 
      ? deck.pop() 
      : discardPile.pop();

  // Muestra la carta tomada (opcional)
  console.log(`Jugador ${playerIndex + 1} tomó una carta:`, drawnCard);

  // El jugador elige qué carta descartar de su mano
  const discardIndex = prompt("¿Cuál carta deseas descartar? (0, 1 o 2)");
  const discardedCard = playerHand[discardIndex];
  playerHand[discardIndex] = drawnCard;
  discardPile.push(discardedCard); // Añade la carta descartada a la pila

  console.log(`Jugador ${playerIndex + 1} descartó:`, discardedCard);

  // Si el jugador decide plantarse
  if (confirm("¿Quieres plantarte?")) {
    checkForEndGame(playerIndex);
  }

  // Pasar turno al siguiente jugador
  currentPlayer = (currentPlayer + 1) % numPlayers;
  if (currentPlayer === 0 && gameEnded) endGame();
}

// Función para avanzar los turnos
function nextTurn() {
  playerTurn(currentPlayer);
}

// Chequea condiciones de finalización si un jugador se planta
function checkForEndGame(playerIndex) {
    const playerScore = calculateScore(hands[playerIndex]);
    console.log(`Jugador ${playerIndex + 1} se ha plantado con ${playerScore} puntos.`);
  
    if (playerScore === 31 || checkThreeAces(hands[playerIndex])) {
      gameEnded = true;
      console.log(`¡Jugador ${playerIndex + 1} gana con ${playerScore} puntos!`);
      endGame();
    }
  }
  
  // Chequea si el jugador tiene 3 ases
  function checkThreeAces(hand) {
    return hand.every(card => card.value === 11);
  }
  
  // Función para calcular los puntos del jugador
  function calculateScore(hand) {
    const suit = hand[0].suit;
    return hand.filter(card => card.suit === suit).reduce((sum, card) => sum + card.value, 0);
  }
  
  // Función de finalización que muestra los resultados
  function endGame() {
    gameEnded = true;
    console.log("Fin del juego. Puntos de cada jugador:");
    hands.forEach((hand, index) => {
      const score = calculateScore(hand);
      console.log(`Jugador ${index + 1}: ${score} puntos`);
    });
  }

  // Configuración inicial de eventos en botones
document.getElementById('btnPlantarse').addEventListener('click', () => {
    if (!gameEnded) {
      checkForEndGame(currentPlayer);
      currentPlayer = (currentPlayer + 1) % numPlayers;
      if (currentPlayer === 0) endGame();
    }
  });
  
  document.getElementById('btnTomarCarta').addEventListener('click', () => {
    if (!gameEnded) nextTurn();
  });
  