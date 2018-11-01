import { getCellId } from './grid-helper'

/**
 * This function returns the Ids of the directly nearby cells
 *
 * @param {integer} row
 * @param {integer} column
 */
const getNeighbours = (row, column) => {
  return [
    getCellId(row - 1, column - 1),
    getCellId(row - 1, column),
    getCellId(row - 1, column + 1),
    getCellId(row, column - 1),
    getCellId(row, column + 1),
    getCellId(row + 1, column - 1),
    getCellId(row + 1, column),
    getCellId(row + 1, column + 1)
  ]
}

/**
 * This function returns the count of a position nearby alive cells
 *
 * @param {integer} row
 * @param {integer} column
 * @param {Object}  aliveCellsMap
 */
const getAliveNeighboursCount = (row, column, aliveCellsMap) => {
  /*
    INSERT YOUR CODE HERE
  */
  let nbAliveNeighbours = 0;  
  let aliveNeighboursArray = getNeighbours(row, column);
  for (let cellId of aliveNeighboursArray) {
    if (aliveCellsMap[cellId] === true) {
      nbAliveNeighbours++;
    }
  }
  return nbAliveNeighbours;
}

/**
 * This function returns the next state of the cell according to Conway's rules
 *
 * @param {boolean} isAliveCell
 * @param {Object}  aliveNeighboursCount
 */
const getCellNextState = (isAliveCell, aliveNeighboursCount) => {
  /*
    INSERT YOUR CODE HERE
  */
  if (isAliveCell) {
    if (aliveNeighboursCount < 2) return !isAliveCell;
    else if (aliveNeighboursCount <= 3) return isAliveCell;
    else return !isAliveCell;
  } else {
    if (aliveNeighboursCount === 3) return !isAliveCell;
  }
}

/**
 * This function returns the new map of alive cells, after 1 iteration
 *
 * @param {integer} rowsCount
 * @param {integer} columnsCount
 * @param {Object}  aliveCellsMap
 */
export const getNextMap = (rowsCount, columnsCount, aliveCellsMap) => {
  /*
    INSERT YOUR CODE HERE
  */

    const newAliveCellsMap = {}

    for (var row = 0; row < rowsCount; row++) {
      for (var column = 0; column < columnsCount; column++) {
        let cellId = getCellId(row, column);
        let isAliveCell = aliveCellsMap[cellId] === true;
        let aliveNeighboursCount = getAliveNeighboursCount(row, column, aliveCellsMap);
        let cellState = getCellNextState(isAliveCell, aliveNeighboursCount);
        if (cellState) 
          newAliveCellsMap[cellId] = true
      }
    }
  
    return newAliveCellsMap

}
