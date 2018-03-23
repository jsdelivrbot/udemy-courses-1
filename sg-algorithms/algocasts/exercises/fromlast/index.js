// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  // Initialize slow and fast, and move fast 'n' spaces ahead
  let slow = list.head;
  let fast = list.head;
  // let counter = 0;

  // while (counter < n) {
  //   fast = fast.next;
  //   counter++;
  // }
  while (n > 0) {
    fast = fast.next;
    n--;
  }

  // when fast.next === 'null'
  // slow === node 'n' away from end
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
}

module.exports = fromLast;
