///<reference path="form-namespace.ts">
namespace Form {
    class MyForm {
        private type: FormType = 'inline'
        private state: FormState = 'active'

        constructor(public email: string) {
        }

        getInfo() {
            return {
                type: this.type,
                state: this.state
            }
        }
    }

    export const myForm = new MyForm('test@test.com')


}
console.log(Form.myForm);
