function createSortedList(){
    return {
        list: [],
        add: function(element){
            this.list.push(element);
            this.list.sort((a, b) => a - b);
        },
        remove: function(index) {
            if (index >= 0 && index < this.list.length) {
                this.list.splice(index, 1);
            }
        },
        get: function(index) {
            if (index >= 0 && index < this.list.length) {
                return this.list[index];
            }
        },
        get size(){
            return this.list.length;
        }
    };
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));