import { FormGroup } from '@angular/forms';

export const separateChessData = (data: string) => {
  let lines = data.split('\n').filter((line) => line.trim().length > 0);
  if (lines.length < 2) return;

  const [boardSize, obstaclesNumber] = lines[0].split(' ').map(Number);
  const [rowQueen, columnQueen] = lines[1].split(' ').map(Number);
  let obstacles: number[][] = [];
  if (lines.length > 2) {
    obstacles = lines.slice(2).map((line) => line.split(' ').map(Number));
  }
  return {
    boardSize,
    obstaclesNumber,
    rowQueen,
    columnQueen,
    obstacles,
  };
};

export const isChessDataValid = (data: any, formGroup: FormGroup): boolean => {
  if (!data) {
    formGroup.get('input')?.setErrors({ message: 'There must be at least two lines of input.' });
    return false;
  }

  if (
    isNaN(data.boardSize) ||
    data.boardSize <= 0 ||
    data.boardSize > Math.pow(10, 5)
  ) {
    formGroup.get('input')?.setErrors({
      message:
        'Board size must be an integer greater than 0 and less than or equal to 100000.',
    });
    return false;
  }
  if (
    isNaN(data.obstaclesNumber) ||
    data.obstaclesNumber < 0 ||
    data.obstaclesNumber > Math.pow(10, 5)
  ) {
    formGroup.get('input')?.setErrors({
      message:
        'Number of obstacles must be an integer between 0 and 100000.',
    });
    return false;
  }

  if (isNaN(data.rowQueen) || isNaN(data.columnQueen)) {
    formGroup.get('input')?.setErrors({
      message: 'The queen\'s position must be integers.',
    });
    return false;
  }

  if (data.obstaclesNumber !== data.obstacles.length) {
    formGroup.get('input')?.setErrors({
      message: 'The number of obstacles does not match.',
    });
    return false;
  }

  for (let obstacle of data.obstacles) {
    if (obstacle.length !== 2 || isNaN(obstacle[0]) || isNaN(obstacle[1])) {
      formGroup.get('input')?.setErrors({
        message: 'All obstacles must be pairs of integers.',
      });
      return false;
    }
  }

  formGroup.get('input')?.setErrors(null);
  return true;
};

export const isStringValueValid = (data: string, formGroup: FormGroup): boolean => {
  const regex = /^[a-z]+$/;

  if (data.length < 1 || data.length > 100000) {
    formGroup.get('input')?.setErrors({
      message: 'Length must be between 1 and 100000 characters.',
    });
    return false;
  }

  if (!regex.test(data)) {
    formGroup.get('input')?.setErrors({
      message: 'Only lowercase English letters are allowed.',
    });
    return false;
  }

  formGroup.get('input')?.setErrors(null);
  return true;
};
