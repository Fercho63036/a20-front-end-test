import { FormGroup } from '@angular/forms';

export function isChessDataValid(data: any, setError: Function, clearErrors: Function): boolean {
  if (!data) {
    setError('input', 'Debe haber al menos dos líneas de entrada.');
    return false;
  }

  if (isNaN(data.boardSize) || data.boardSize <= 0 || data.boardSize > 10 ** 5) {
    setError('input', 'El tamaño del tablero debe ser un número entero mayor a 0 y menor o igual a 100000.');
    return false;
  }

  if (isNaN(data.obstaclesNumber) || data.obstaclesNumber < 0 || data.obstaclesNumber > 10 ** 5) {
    setError('input', 'El número de obstáculos debe ser un número entero mayor o igual a 0 y menor o igual a 100000.');
    return false;
  }

  if (isNaN(data.rowQueen) || isNaN(data.columnQueen)) {
    setError('input', 'La posición de la reina debe ser números enteros.');
    return false;
  }

  if (data.obstaclesNumber !== data.obstacles.length) {
    setError('input', 'El número de obstáculos debe coincidir.');
    return false;
  }

  for (let obstacle of data.obstacles) {
    if (obstacle.length !== 2 || isNaN(obstacle[0]) || isNaN(obstacle[1])) {
      setError('input', 'Todos los obstáculos deben ser pares de números enteros.');
      return false;
    }
  }

  clearErrors('input');
  return true;
}

export function isStringValueValid(data: string, setError: Function, clearErrors: Function): boolean {
  const regex = /^[a-z]+$/;

  if (data.length < 1 || data.length > 100000) {
    setError('input', 'La longitud debe ser mayor o igual a 1 y menor o igual a 100000.');
    return false;
  }

  if (!regex.test(data)) {
    setError('input', 'Solo se permiten letras minúsculas del alfabeto inglés.');
    return false;
  }

  clearErrors('input');
  return true;
}
