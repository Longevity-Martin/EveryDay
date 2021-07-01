Object.defineProperty(this, "a", {
    get(){
        return this.value = this.value? (this.value += 1): 1;
    }
})
console.log(this.a == 1 && this.value == 2 && this.value == 3);