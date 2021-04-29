// function Log(constructor: Function) {
//     console.log(constructor)
// }
//
// function Log2(target: any, propName: string | Symbol) {
//     console.log(target);
//     console.log(propName);
// }
//
// function Log3(target: any, propName: string | symbol, descriptor: PropertyDescriptor) {
//     console.log(target);
//     console.log(propName);
//     console.log(descriptor);
// }
//
// @Log
// class Component {
//     @Log2
//     name: string
//
//     @Log3
//     get componentName() {
//         return this.name
//     }
//
//     constructor(name: string) {
//         this.name = name
//     }
//     @Log3
//     logName(): void {
//         console.log(`Component name ${this.name}`)
//     }
// }

interface ComponentDecorator {
    selector: string
    template: string
}

function Component(config: ComponentDecorator) {
    return function
    <T extends { new(...args: any): object}>
    (Constructor: T) {
        return class extends Constructor {
            constructor(...args: any[]) {
                super(...args)

                const el = document.querySelector(config.selector)!
                el.innerHTML = config.template
            }
        }
    }
}

function Bind (_: any,  _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
    const original = descriptor.value
    return {
        configurable: true,
        enumerable: false,
        get() {
            return original.bind(this)
        }
    }
}

@Component({
    selector: '#card',
    template: `
        <div class="card">
           <div class="card-content">
                <span class="card-title">Card Component</span> 
           </div> 
        </div>
    `
})
class CardComponent {

    constructor(public name: string) {
        this.name = name
    }

    @Bind
    logName(): void {
        console.log(`Component name ${this.name}`)
    }
}

const card = new CardComponent('Card Component')

const button = document.querySelector('#btn')!

button.addEventListener('click', card.logName.bind(card))


// ====================

type Validator = 'required' | 'email'

interface ValidatorConfig {
    [prop: string]: {
        [validateProp: string]: Validator
    }
}

const validator: ValidatorConfig = {

}

function Required(target: any, propName: string) {
    validator[target.constructor.name] = {
        ...validator[target.constructor.name],
        [propName]: 'required'
    }
}
//
// class Form {
//     @Required
//     public email: string | void
//
//      constructor(email?: string) {
//         this.email = email
//      }
// }
//
// function validate(obj: any): boolean {
//     const objConfig = validator[obj.constructor.name]
//     if (!objConfig) {
//         return true
//     }
//     let isValid = true
//     Object.keys(objConfig).forEach(key => {
//         if (objConfig[key] === 'required') {
//             isValid = isValid && !!obj[key]
//         }
//     })
//     return isValid
// }
//
// const form = new Form('test@test.com')
//
// console.log(form);
//
// if (validate(form)) {
//     console.log('Valid: ', form)
// } else {
//     console.log('Validation Error')
// }