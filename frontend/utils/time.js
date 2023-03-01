/**
 * Gets a number that represents a value in minutes and returns in milliseconds.
 * @param {number} mins - An integer value in minutes.
 * @returns A number
 */
export const minToMs = (mins) => Number((mins * 60 * 1000).toFixed(1))

export const msToHours = (ms) => Number((ms / (1000 * 60 * 60)).toFixed(1))
