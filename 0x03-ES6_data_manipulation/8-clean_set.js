#!/usr/bin/node
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';
  let result = '';
  for (const item of set) {
    if (item && item.startsWith(startString)) {
      result += `${result ? '-' : ''}${item.slice(startString.length)}`;
    }
  }
  return result;
}
