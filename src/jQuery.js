window.$ = window.jQuery = function(selectorOrArray){
    let elements
    if(typeof selectorOrArray === 'string'){
        elements = document.querySelectorAll(selectorOrArray)
    }else if(selectorOrArray instanceof Array){
        elements = selectorOrArray
    }

    return {
        oldApi: selectorOrArray.oldApi,
        find(selector){
            let array = []
            for(let i=0; i<elements.length; i++){
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(elements2)
            }
            array.oldApi = this
            return jQuery(array)
        },
        each(fn){
            for(let i=0; i<elements.length; i++){
                fn.call(null,elements[i],i)
            }
            return this
        },
        end(){
            return this.oldApi
        },
        parent(){
            const array = []
            this.each((node) => {
                if(array.indexOf(node.parentNode === -1)){
                    array.push(node.parentNode)
                }
            })
            return jQuery(array)
        },
        children(){
            const array = []
            this.each((node) => {
                array.push(...node.children)
            })
            return jQuery(array)
        },
        print(){
            console.log(elements)
        },
        addClass(className){
            for(let i=0; i<elements.length; i++){
                const element = elements[i]
                element.classList.add(className)
            }
            return this
        },
    }
}