const { LinkedList } = require('./LinkedList')

const ll = new LinkedList()

ll.insert("A")
ll.insert("B")
ll.insert("C")
ll.insert("D")





for (let node of ll) {
	console.log(node.data)
}

// console.log(ll.getSize())
// console.log(ll.head)
// console.log(ll.head.prevdata)
// console.log(ll.indexOf(2))
// console.log(ll);
